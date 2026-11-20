$sourceRoot = "docs/courses"
$destRoot = "site/docs/courses"

# Get all course directories
$courses = Get-ChildItem $sourceRoot -Directory

foreach ($course in $courses) {
    $courseName = $course.Name
    $destCourse = Join-Path $destRoot $courseName
    
    # Create destination directory
    New-Item -ItemType Directory -Path $destCourse -Force | Out-Null
    
    # Get all markdown files in the course
    $mdFiles = Get-ChildItem $course.FullName -Recurse -Filter "*.md"
    
    $pos = 1
    foreach ($md in $mdFiles) {
        $content = Get-Content $md.FullName -Raw
        
        # Get relative path from course directory
        $relPath = $md.Directory.FullName.Substring($course.FullName.Length).TrimStart('\')
        if ($relPath) {
            $destDir = Join-Path $destCourse $relPath
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        } else {
            $destDir = $destCourse
        }
        
        # Skip if already has front matter
        if ($content -match '^---') {
            Copy-Item $md.FullName (Join-Path $destDir $md.Name) -Force
            continue
        }
        
        # Extract title from first heading or filename
        $title = ""
        if ($content -match '(?m)^#\s+(.+)') {
            $title = $Matches[1].Trim()
        } else {
            $title = $md.BaseName -replace '-', ' ' -replace '_', ' '
            $title = (Get-Culture).TextInfo.ToTitleCase($title)
        }
        
        # Build slug with subdirectory path
        $slugBase = $md.BaseName
        if ($relPath) {
            $slugRel = $relPath -replace '\\', '/'
            $slug = "/$courseName/$slugRel/$slugBase"
        } else {
            $slug = "/$courseName/$slugBase"
        }
        
        # Escape quotes in title for YAML
        $title = $title -replace '"', '\"'
        
        $docId = $md.BaseName
        
        $frontMatter = @"
---
id: $docId
slug: $slug
title: "$title"
sidebar_label: "$title"
sidebar_position: $pos
---

"@
        
        # Write file
        $destFile = Join-Path $destDir $md.Name
        Set-Content -Path $destFile -Value ($frontMatter + $content) -NoNewline
        
        $pos++
    }
    
    # Create _category_.json for root course
    $categoryName = $courseName -replace '-', ' ' -replace '_', ' '
    $categoryName = (Get-Culture).TextInfo.ToTitleCase($categoryName)
    
    $categoryJson = @"
{
  "label": "$categoryName",
  "position": $pos
}
"@
    
    Set-Content -Path (Join-Path $destCourse "_category_.json") -Value $categoryJson
    
    # Create _category_.json for subdirectories
    $subDirs = Get-ChildItem $course.FullName -Recurse -Directory
    $catPos = 1
    foreach ($subDir in $subDirs) {
        $relSubPath = $subDir.FullName.Substring($course.FullName.Length).TrimStart('\')
        $destSubDir = Join-Path $destCourse $relSubPath
        New-Item -ItemType Directory -Path $destSubDir -Force | Out-Null
        
        $subDirName = $subDir.Name -replace '^\d+[_\-]', '' -replace '-', ' ' -replace '_', ' '
        $subDirName = (Get-Culture).TextInfo.ToTitleCase($subDirName.ToLower())
        
        $subCatJson = @"
{
  "label": "$subDirName",
  "position": $catPos
}
"@
        Set-Content -Path (Join-Path $destSubDir "_category_.json") -Value $subCatJson
        $catPos++
    }
    
    Write-Host "Migrated: $courseName ($($mdFiles.Count) files)"
}

Write-Host "`nTotal courses migrated: $($courses.Count)"
