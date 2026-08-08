$ErrorActionPreference = "Stop"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$src = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-agent-engineer\agentic-ai-book"
$dst = "C:\xampp\htdocs\ai-engineering-journey\site\docs\courses\ai-agent-engineer\agentic-ai-book"

function New-BookFm {
  param([string]$Body, [string]$Stem, [int]$Pos, [bool]$IsIndex)
  $slug = if ($IsIndex) { "/ai-agent-engineer/agentic-ai-book" } else { "/ai-agent-engineer/agentic-ai-book/$Stem" }
  $h1 = [regex]::Match($Body, '(?m)^# (.+?)\s*$').Groups[1].Value
  $title = if ($h1) { $h1.Trim() } elseif ($IsIndex) { "Agentic AI - The Complete Book" } else { $Stem }
  $titleJson = '"' + ($title -replace '"', '\"') + '"'
  $id = if ($IsIndex) { "index" } else { $Stem }
  return "---`n" +
         "id: $id`n" +
         "slug: $slug`n" +
         "title: $titleJson`n" +
         "sidebar_label: $titleJson`n" +
         "sidebar_position: $Pos`n" +
         "---`n"
}

if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Path $dst | Out-Null }

$files = Get-ChildItem $src -Filter *.md -File | Sort-Object Name
$pos = 1
foreach ($f in $files) {
  $isIdx = $f.Name -eq "00-index.md"
  $body = [IO.File]::ReadAllText($f.FullName)
  $body = $body.Replace([string][char]0xFEFF, [string])
  if (-not $body.EndsWith("`n")) { $body += "`n" }
  $text = (New-BookFm $body $f.BaseName $pos $isIdx) + $body
  $out = Join-Path $dst $f.Name
  [IO.File]::WriteAllText($out, $text, $utf8)
  "WROTE $($f.Name) -> pos $pos"
  $pos++
}

$cat = @"
{
  "label": "Agentic AI - The Complete Book",
  "position": 15
}
"@
$catOut = Join-Path $dst "_category_.json"
if (-not (Test-Path $catOut)) { [IO.File]::WriteAllText($catOut, $cat, $utf8); "WROTE _category_.json" }
else { "category json exists" }

