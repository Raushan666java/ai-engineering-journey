param(
    [string]$DocsRoot = "C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
)

$totalFixed = 0
$files = Get-ChildItem -Path $DocsRoot -Recurse -Filter "*.md"

foreach ($file in $files) {
    $lines = Get-Content -Path $file.FullName -Encoding UTF8
    $parentDir = $file.Directory.Name
    $modified = $false
    $newLines = @()

    foreach ($line in $lines) {
        $newLine = $line

        # Fix [text](XX-filename.md) patterns
        if ($newLine -match '\]\(\d+-[a-z][^)]*\.md\)') {
            $newLine = [regex]::Replace($newLine, '\]\((\d+-[a-z][^)]*\.md)\)', {
                param($m)
                $chapterFile = $m.Groups[1].Value -replace '\.md$', ''
                "]($parentDir/$chapterFile)"
            })
            $modified = $true
        }

        # Fix standalone (XX-filename.md) patterns (navigation sections)
        if ($newLine -match '\((\d+-[a-z][^)]*\.md)\)' -and $newLine -notmatch '\]\(') {
            $newLine = [regex]::Replace($newLine, '\((\d+-[a-z][^)]*\.md)\)', {
                param($m)
                $chapterFile = $m.Groups[1].Value -replace '\.md$', ''
                "($parentDir/$chapterFile)"
            })
            $modified = $true
        }

        $newLines += $newLine
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value ($newLines -join "`n") -Encoding UTF8 -NoNewline
        $totalFixed++
    }
}

Write-Host "Fixed relative links in $totalFixed files"
