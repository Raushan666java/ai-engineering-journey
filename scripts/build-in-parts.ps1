# Build the Docusaurus site one course at a time, then merge the parts.
#
# A single full build drives V8's old space past 8 GB during static
# generation and exits 134 on a 12 GB machine. Each course is small enough
# to fit, so the site is assembled from parts.
#
# Every part writes to its own --out-dir. That is not cosmetic: sharing one
# build/ across parts caused "ENOENT: build/__server/server.bundle.js" after
# webpack reported a successful compile, because the persistent cache took a
# no-op path and never re-emitted the bundle. A fresh directory per part has
# no shared state to go stale, and it removes the ENOTEMPTY failures that
# came from deleting a shared build/ between courses.
#
# Caveat: each part emits its own search index, so the merged site ships one
# index per course rather than one global index. Pages and navigation still
# resolve because all HTML ends up in the same tree.
#
# Usage:
#   pwsh -File scripts/build-in-parts.ps1
#   pwsh -File scripts/build-in-parts.ps1 -Only gate-cs-preparation -Heap 6144
#   pwsh -File scripts/build-in-parts.ps1 -MergeOnly

param(
    [int]$Heap = 4096,
    [string]$Only = "",
    [string]$OutDir = "C:\Users\hiii\AppData\Local\Temp\opencode\site-merged",
    [switch]$MergeOnly
)

$ErrorActionPreference = "Continue"
$siteDir = Join-Path $PSScriptRoot "..\site"
$docsRoot = Join-Path $siteDir "docs\courses"
$partsRoot = Join-Path $siteDir "build-parts"
$logDir = "C:\Users\hiii\AppData\Local\Temp\opencode\part-logs"

foreach ($d in @($logDir, $partsRoot)) {
    if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d -Force | Out-Null }
}

function Merge-Parts {
    Write-Output ""
    Write-Output "merging parts into $OutDir"
    if (Test-Path $OutDir) { Remove-Item $OutDir -Recurse -Force -ErrorAction SilentlyContinue }
    New-Item -ItemType Directory -Path $OutDir -Force | Out-Null

    $parts = Get-ChildItem $partsRoot -Directory -ErrorAction SilentlyContinue
    foreach ($p in $parts) {
        # robocopy /E copies the CONTENTS of the part into the destination.
        # Copying a folder path as -Destination would instead nest it, so every
        # shared top-level entry (img, assets, courses, search) would grow a
        # copy of itself -- img/img, assets/assets -- and the real diagram
        # images would vanish from their expected path. /IS copies identical
        # files too, so each part contributes rather than skipping.
        robocopy $p.FullName $OutDir /E /IS /NFL /NDL /NJH /NJS /NP | Out-Null
    }
    $merged = Get-ChildItem $OutDir -Recurse -File -ErrorAction SilentlyContinue
    $html = ($merged | Where-Object { $_.Extension -eq ".html" } | Measure-Object).Count
    Write-Output "merged: $($merged.Count) files, $html html pages"

    # A nested copy of a shared folder is the signature of a bad merge.
    $nested = Get-ChildItem $OutDir -Directory | Where-Object {
        Test-Path (Join-Path $_.FullName $_.Name)
    }
    if ($nested) {
        Write-Output "WARNING nested duplicate folders: $($nested.Name -join ', ')"
    }
}

if ($MergeOnly) { Merge-Parts; exit 0 }

if ($Only) {
    $courses = @($Only)
} else {
    $courses = Get-ChildItem $docsRoot -Directory | Sort-Object Name | ForEach-Object { $_.Name }
}

Write-Output "courses to build : $($courses.Count)"
Write-Output "base heap        : $Heap MB"
Write-Output "parts dir        : $partsRoot"
Write-Output ""

# The placement course is ~30% of all pages and is the most likely to exhaust
# a single pass, so give it more room than the rest.
function Get-HeapFor($course) {
    if ($course -eq "ai-engineering-placement") { return [int]($Heap * 1.6) }
    return $Heap
}

$results = @()
$index = 0

foreach ($course in $courses) {
    $index++
    $heap = Get-HeapFor $course
    $started = Get-Date
    # NOTE: do not name this $outDir. PowerShell variable names are
    # case-insensitive, so `$outDir` silently overwrites the $OutDir parameter
    # and Merge-Parts then copies every part into whichever course built last,
    # producing "Cannot overwrite the item X with itself" on every entry.
    $partDir = Join-Path $partsRoot $course
    $log = Join-Path $logDir "$course.log"

    if (Test-Path $partDir) { Remove-Item $partDir -Recurse -Force -ErrorAction SilentlyContinue }

    Get-Process node -ErrorAction SilentlyContinue |
        Where-Object { $_.WorkingSet64 -gt 200MB } |
        ForEach-Object { Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue }

    $env:BUILD_ONLY = $course
    $env:NODE_OPTIONS = "--max-old-space-size=$heap"

    Push-Location $siteDir
    & node ".\node_modules\@docusaurus\core\bin\docusaurus.mjs" build --no-minify --out-dir $partDir *> $log
    $code = $LASTEXITCODE
    Pop-Location

    $html = 0
    if (Test-Path $partDir) {
        $html = (Get-ChildItem $partDir -Recurse -Filter *.html -File -ErrorAction SilentlyContinue |
                 Measure-Object).Count
    }

    $mins = [math]::Round(((Get-Date) - $started).TotalMinutes, 1)
    if ($code -eq 0 -and $html -gt 0) {
        Write-Output ("[{0}/{1}] {2,-36} OK    {3,4} html  {4} min" -f $index, $courses.Count, $course, $html, $mins)
        $results += [pscustomobject]@{Course=$course; Status="OK"; Html=$html; Exit=$code; Minutes=$mins}
    } else {
        Write-Output ("[{0}/{1}] {2,-36} FAIL  exit={3} html={4}  {5} min" -f $index, $courses.Count, $course, $code, $html, $mins)
        $results += [pscustomobject]@{Course=$course; Status="FAIL"; Html=$html; Exit=$code; Minutes=$mins}
    }
}

$env:BUILD_ONLY = ""
Merge-Parts

Write-Output ""
Write-Output "=============== SUMMARY ==============="
$results | ForEach-Object {
    "{0,-4} {1,-36} html={2,-5} exit={3} {4} min" -f $_.Status, $_.Course, $_.Html, $_.Exit, $_.Minutes
}
$ok = ($results | Where-Object { $_.Status -eq "OK" }).Count
$bad = ($results | Where-Object { $_.Status -eq "FAIL" }).Count
Write-Output ""
Write-Output "OK: $ok    FAILED: $bad"
Write-Output "======================================="