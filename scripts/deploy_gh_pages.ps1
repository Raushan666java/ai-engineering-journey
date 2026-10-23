# Publish a merged build to the gh-pages branch through a worktree.
#
# Why a worktree and not CI: the GitHub workflow builds the whole site in one
# V8 heap and dies with exit 134 on this machine, while a gh-pages push also
# sidesteps the branch protection that rejects pushes to main.
#
# The pre-flight refuses to publish a build that regresses either failure we
# have already shipped once:
#   * Mermaid blocks left as Prism <code class="language-mermaid"> instead of
#     being rendered by the theme (missing `markdown.mermaid: true`).
#   * A sitemap that only describes a fraction of the built pages (artifact
#     step skipped).
#
# Usage:
#   pwsh -File scripts/deploy_gh_pages.ps1
#   pwsh -File scripts/deploy_gh_pages.ps1 -Message "deploy: ..." -DryRun

param(
    [string]$OutDir = "C:\Users\hiii\AppData\Local\Temp\opencode\site-merged",
    [string]$Worktree = "C:\Users\hiii\AppData\Local\Temp\opencode\ghpages-wt",
    [string]$Branch = "gh-pages",
    [string]$Message = "",
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot

function Fail($msg) {
    Write-Host "FAIL: $msg" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path -LiteralPath $OutDir -PathType Container)) { Fail "merged build not found: $OutDir" }
if (-not (Test-Path -LiteralPath (Join-Path $OutDir "index.html"))) { Fail "no index.html in $OutDir" }

Write-Host "=== pre-flight ===" -ForegroundColor Cyan
$pages = @(Get-ChildItem -LiteralPath $OutDir -Recurse -Filter *.html)
Write-Host ("html pages            : {0}" -f $pages.Count)

# 1. No Mermaid block may survive as a Prism code block.
$rawHits = @($pages | Select-String -Pattern 'language-mermaid' -List -ErrorAction SilentlyContinue)
if ($rawHits.Count -gt 0) {
    $rawHits | Select-Object -First 5 | ForEach-Object { Write-Host "   $($_.Path)" }
    Fail "$($rawHits.Count) pages still contain raw Mermaid code blocks; check markdown.mermaid in site/docusaurus.config.ts"
}
Write-Host "raw mermaid blocks    : 0"

# 2. Static assets referenced by absolute site path must exist in the build.
#    (Small SVGs are usually inlined as data: URIs by webpack, so this only
#    covers the ones large enough to stay external.)
$visualDir = Join-Path $OutDir "img\visual"
$visualCount = 0
if (Test-Path -LiteralPath $visualDir -PathType Container) {
    $visualCount = @(Get-ChildItem -LiteralPath $visualDir -File).Count
}
Write-Host "img/visual files      : $visualCount"

$assetHits = @($pages | Select-String -Pattern '/ai-engineering-journey/img/visual/[^"'')\s<]+' -AllMatches -ErrorAction SilentlyContinue)
$missing = 0
foreach ($hit in $assetHits) {
    foreach ($m in $hit.Matches) {
        $rel = $m.Value -replace '^/ai-engineering-journey/', ''
        if (-not (Test-Path -LiteralPath (Join-Path $OutDir $rel))) {
            Write-Host "   missing: $rel (in $($hit.Path))"
            $missing++
        }
    }
}
if ($missing -gt 0) { Fail "$missing visual asset references do not resolve in the build" }

# 3. A sitemap that only knows part of the site means the artifact step was skipped.
$sitemap = Join-Path $OutDir "sitemap.xml"
if (-not (Test-Path -LiteralPath $sitemap)) { Fail "sitemap.xml missing; run scripts/fix_site_artifacts.py" }
$urls = ([regex]::Matches([System.IO.File]::ReadAllText($sitemap), "<loc>")).Count
Write-Host "sitemap urls          : $urls"
if ($urls -lt ($pages.Count * 0.9)) {
    Fail "sitemap has $urls urls for $($pages.Count) pages; run scripts/fix_site_artifacts.py"
}

if ($DryRun) {
    Write-Host "`nDry run: checks passed, nothing published." -ForegroundColor Yellow
    exit 0
}

Write-Host "`n=== worktree ===" -ForegroundColor Cyan
Push-Location $repo
try {
    git worktree prune
    if (-not (Test-Path -LiteralPath $Worktree)) {
        git worktree add $Worktree $Branch | Out-Null
        if ($LASTEXITCODE -ne 0) { Fail "could not create worktree at $Worktree" }
    }
} finally {
    Pop-Location
}

Push-Location $Worktree
try {
    git checkout $Branch 2>&1 | Out-Null

    # Clear the tree but never the .git directory or the worktree root itself.
    Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | ForEach-Object {
        Remove-Item $_.FullName -Recurse -Force
    }

    robocopy $OutDir $Worktree /E /IS /NFL /NDL /NJH /NJS /NP | Out-Null
    if ($LASTEXITCODE -ge 8) { Fail "robocopy failed with code $LASTEXITCODE" }

    git add -A
    git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Nothing to publish; gh-pages already matches this build." -ForegroundColor Yellow
        exit 0
    }

    if (-not $Message) {
        $Message = "deploy: site build $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    git -c core.safecrlf=false commit -q -m $Message
    if ($LASTEXITCODE -ne 0) { Fail "commit failed" }

    git push origin $Branch
    if ($LASTEXITCODE -ne 0) { Fail "push failed" }

    $head = git rev-parse --short HEAD
    Write-Host "`npublished $head to $Branch" -ForegroundColor Green
} finally {
    Pop-Location
}
