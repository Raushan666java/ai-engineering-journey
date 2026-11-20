$courseRoot = "site/docs/courses/learning-course"
$courseDir = "learning-course"

# Create _category_.json for root course directory
$rootCat = @"
{
  "label": "Learning Course",
  "position": 55
}
"@
Set-Content -Path (Join-Path $courseRoot "_category_.json") -Value $rootCat -NoNewline

# First pass: create _category_.json for all subdirectories
$dirs = Get-ChildItem $courseRoot -Recurse -Directory
$catPos = 1
foreach ($dir in $dirs) {
    $dirName = $dir.Name
    $label = $dirName -replace '^\d+_', '' -replace '-', ' ' -replace '_', ' '
    $label = (Get-Culture).TextInfo.ToTitleCase($label.ToLower())
    
    $catJson = @"
{
  "label": "$label",
  "position": $catPos
}
"@
    Set-Content -Path (Join-Path $dir.FullName "_category_.json") -Value $catJson -NoNewline
    $catPos++
}

# Second pass: add front matter to all markdown files
$mdFiles = Get-ChildItem $courseRoot -Recurse -Filter "*.md"
$seenDirs = @{}

$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($md in $mdFiles) {
    $content = [System.IO.File]::ReadAllText($md.FullName)
    
    # Skip if already has front matter
    if ($content -match '^---') {
        continue
    }
    
    # Determine relative path for slug
    $rootFull = (Get-Item $courseRoot).FullName.TrimEnd('\')
    $dirFull = $md.Directory.FullName.TrimEnd('\')
    if ($dirFull.Length -gt $rootFull.Length) {
        $relPath = $dirFull.Substring($rootFull.Length + 1)
    } else {
        $relPath = ""
    }
    $relSlug = $relPath -replace '\\', '/'
    if ($relSlug) { $relSlug = "/$relSlug" }
    
    $slugBase = $md.BaseName -replace ' ', '-'
    $slug = "/$courseDir$relSlug/$slugBase"
    
    # Extract title from first h1 or filename
    $title = ""
    if ($content -match '(?m)^#\s+(.+)') {
        $title = $Matches[1].Trim()
    } else {
        $title = $md.BaseName -replace '-', ' ' -replace '_', ' '
        $title = (Get-Culture).TextInfo.ToTitleCase($title.ToLower())
    }
    
    # Escape quotes in title
    $title = $title -replace '"', '\"'
    
    # Sidebar position within directory
    $dir = $md.Directory.FullName
    if (-not $seenDirs.ContainsKey($dir)) {
        $seenDirs[$dir] = 0
    }
    $seenDirs[$dir]++
    $pos = $seenDirs[$dir]
    
    $frontMatter = @"
---
slug: $slug
title: "$title"
sidebar_label: "$title"
sidebar_position: $pos
---

"@
    
    [System.IO.File]::WriteAllText($md.FullName, $frontMatter + $content, $utf8NoBom)
}

Write-Host "Done! Added front matter to all markdown files and _category_.json to all subdirectories."
