$missing = @()
Get-ChildItem docs/courses -Recurse -Filter "*.md" | ForEach-Object {
    $f = $_.FullName
    $content = Get-Content $f -Raw
    $pattern = 'assets/images/lessons/([^/]+/[^/]+)/[^"\'>\])]+'
    $matches = [regex]::Matches($content, $pattern)
    foreach ($m in $matches) {
        $path = $m.Groups[1].Value
        $full = "docs\assets\images\lessons\$path"
        if (-not (Test-Path $full)) {
            $missing += "$($_.Name) -> $path"
        }
    }
}
if ($missing) { "Missing: $($missing.Count)"; $missing | Select-Object -First 50 } else { "All image paths exist" }