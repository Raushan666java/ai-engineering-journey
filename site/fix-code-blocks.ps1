$src = "C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
$files = Get-ChildItem -Path $src -Recurse -Filter "*.md"
$totalFiles = 0
$totalTextFences = 0
$totalDoubleHash = 0

foreach ($f in $files) {
    $content = Get-Content -Path $f.FullName
    $modified = $false
    $inPythonBlock = $false
    $newLines = @()

    foreach ($line in $content) {
        # Track code block state
        if ($line -match '^```python$') {
            $inPythonBlock = $true
            $newLines += $line
            continue
        }

        # Fix 1: ```text closing fence → just ```
        if ($line -match '^```text$') {
            $inPythonBlock = $false
            $newLines += '```'
            $totalTextFences++
            $modified = $true
            continue
        }

        # Exit python block on any closing fence (including ````)
        if ($inPythonBlock -and $line -match '^```$') {
            $inPythonBlock = $false
            $newLines += $line
            continue
        }

        # Fix 2: ## comment → # comment (only inside Python code blocks)
        if ($inPythonBlock -and $line -match '^(\s*)##(\s)') {
            $line = $line -replace '^(\s*)##(\s)', '$1#$2'
            $totalDoubleHash++
            $modified = $true
        }

        $newLines += $line
    }

    if ($modified) {
        Set-Content -Path $f.FullName -Value $newLines
        $totalFiles++
    }
}

Write-Output "Files modified: $totalFiles"
Write-Output "```text fences fixed: $totalTextFences"
Write-Output "## comments fixed: $totalDoubleHash"
