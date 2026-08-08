$ErrorActionPreference = "Stop"
$siteRoot = "C:\xampp\htdocs\ai-engineering-journey\site\docs\courses\ai-engineering-placement"
$docsRoot = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement"

$fmBad = @(); $posBad = @(); $bodyBad = @(); $fffd = @(); $bom = @(); $dupPos = @{}
$pdf = Get-ChildItem $siteRoot -Recurse -Filter *.md -File | Where-Object { $_.Name -ne 'PLAN.md' }
"site md files (excl PLAN): $($pdf.Count)"

foreach ($f in $pdf) {
  $rel = $f.FullName.Replace($siteRoot, '')
  $t = [IO.File]::ReadAllText($f.FullName)
  if (-not $t.StartsWith('---')) { $fmBad += $rel; continue }
  # closing ---: first '\n---' after start, must be < first body marker
  $close = $t.IndexOf("`n---", 4)
  if ($close -lt 0) { $fmBad += $rel; continue }
  $fmStr = $t.Substring(0, $close + 5)
  $body = $t.Substring($close + 5)
  # frontmatter must have exactly the 6 fields and valid position line
  $pm = [regex]::Match($fmStr, '(?m)^sidebar_position: (\d+)$')
  if (-not $pm.Success) { $posBad += $rel; continue }
  $p = [int]$pm.Groups[1].Value
  if ($dupPos.ContainsKey($p)) { $posBad += "$rel (dup pos $p with $($dupPos[$p]))" }
  else { $dupPos[$p] = $rel }
  # body must equal docs file body exactly (docs has no frontmatter)
  $docsRel = $rel
  $docsPath = Join-Path $docsRoot $docsRel.TrimStart('\')
  if (-not (Test-Path $docsPath)) { $bodyBad += "$rel (no docs file)"; continue }
  $db = [IO.File]::ReadAllText($docsPath)
  if ($db.EndsWith("`n") -eq $false) { $db += "`n" }
  if ($body -ne $db) { $bodyBad += $rel }
  # cleanliness
  if ($body.Contains([string][char]0xFFFD)) { $fffd += $rel }
  if (([regex]::Matches($t, [char]0xFEFF)).Count -gt 0) { $bom += $rel }
}

"frontmatter malformed: $($fmBad.Count)"; $fmBad | Select-Object -First 10
"position problems: $($posBad.Count)"; $posBad | Select-Object -First 15
"body mismatch vs docs: $($bodyBad.Count)"; $bodyBad | Select-Object -First 10
"body contains FFFD: $($fffd.Count)"; $fffd | Select-Object -First 10
"contains FEFF: $($bom.Count)"; $bom | Select-Object -First 5