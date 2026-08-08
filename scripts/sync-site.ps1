$ErrorActionPreference = "Stop"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$docsRoot = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement"
$siteRoot = "C:\xampp\htdocs\ai-engineering-journey\site\docs\courses\ai-engineering-placement"

function New-ChapFm {
  param([string]$Body, [string]$Module, [string]$Stem, [int]$Pos)
  $slug = "/ai-engineering-placement/$Module/$Stem"
  $title = "Chapter: $Stem"
  $h1 = [regex]::Match($Body, '(?m)^# (.+?)\s*$').Groups[1].Value
  if ($h1) { $title = $h1.Trim() }
  $titleJson = '"' + ($title -replace '"', '\"') + '"'
  return "---`n" +
         "id: $Stem`n" +
         "slug: $slug`n" +
         "title: $titleJson`n" +
         "sidebar_label: $titleJson`n" +
         "sidebar_position: $Pos`n" +
         "---`n"
}

function New-IndexFm {
  param([string]$Body, [int]$Pos, [string]$Module = "")
  $h1 = [regex]::Match($Body, '(?m)^# (.+?)\s*$').Groups[1].Value
  $title = if ($h1) { $h1.Trim() } else { "Index" }
  $titleJson = '"' + ($title -replace '"', '\"') + '"'
  $slug = if ($Module) { "/ai-engineering-placement/$Module" } else { "/ai-engineering-placement" }
  return "---`n" +
         "id: index`n" +
         "slug: $slug`n" +
         "title: $titleJson`n" +
         "sidebar_label: $titleJson`n" +
         "sidebar_position: $Pos`n" +
         "---`n"
}

function Normalize {
  param([string]$Text)
  $Text = $Text.Replace([string][char]0xFEFF, [string])
  return $Text
}

$log = [System.Collections.ArrayList]::new()
$changed = 0
$pos = 1

# root index.md (position 1)
$rootDocs = [IO.File]::ReadAllText((Join-Path $docsRoot "index.md"))
$rootBody = Normalize $rootDocs
if (-not $rootBody.EndsWith("`n")) { $rootBody += "`n" }
$rootText = (New-IndexFm $rootBody $pos) + $rootBody
$rootSite = Join-Path $siteRoot "index.md"
if (-not (Test-Path $rootSite)) { throw "missing site root index.md" }
$prev = [IO.File]::ReadAllText($rootSite)
if ($rootText -ne $prev) {
  [IO.File]::WriteAllText($rootSite, $rootText, $utf8)
  [void]$log.Add("ROOT-INDEX rebuilt ($($rootText.Length) chars)")
  $changed++
}
$prevRootLen = $rootText.Length
$pos++

# module index.md positions are set after chapters
$mods = Get-ChildItem $docsRoot -Directory | Sort-Object Name

foreach ($m in $mods) {
  $docsMod = $m.FullName
  $siteMod = Join-Path $siteRoot $m.Name
  if (-not (Test-Path $siteMod)) { throw "missing site module dir $($m.Name)" }
  $chapters = Get-ChildItem $docsMod -Filter *.md -File | Sort-Object Name
  foreach ($ch in $chapters) {
    if ($ch.Name -eq 'PLAN.md') { continue }
    $isIdx = $ch.Name -eq 'index.md'
    $body = Normalize ([IO.File]::ReadAllText($ch.FullName))
    if (-not $body.EndsWith("`n")) { $body += "`n" }
    if ($isIdx) { $text = (New-IndexFm $body $pos $m.Name) + $body }
    else { $text = (New-ChapFm $body $m.Name $ch.BaseName $pos) + $body }
    $siteFile = Join-Path $siteMod $ch.Name
    if (-not (Test-Path $siteFile)) { throw "missing site file $($m.Name)\$($ch.Name)" }
    $prev2 = [IO.File]::ReadAllText($siteFile)
    if ($text -ne $prev2) {
      [IO.File]::WriteAllText($siteFile, $text, $utf8)
      [void]$log.Add("REBUILD $($m.Name)\$($ch.Name) -> pos $pos (new len $($text.Length))")
      $changed++
    }
    $pos++
  }
}

"files rebuilt: $changed"
"final MAX position: $($pos - 1)"
"--- sample log ---"
$log | Select-Object -First 15
"log entries: $($log.Count)"

