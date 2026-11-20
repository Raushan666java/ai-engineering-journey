# Verify the live GitHub Pages site after a deploy.
#
# Every check below corresponds to a defect the audit found on 20 Nov 2026:
#   * /digital-marketing/ returned 404 and had 0 sitemap entries (stale deploy)
#   * /robots.txt returned 404
#   * KaTeX was blocked by a fabricated SRI hash
#   * no page said who owns the site
#
# Usage: powershell -File scripts/verify-live.ps1
#
# Pages caches for ~2 minutes after a push, so a failure on the first run is
# not proof of a bad deploy — re-run once before investigating.

$ErrorActionPreference = 'Continue'
$base = 'https://raushan666java.github.io/ai-engineering-journey'
$fail = 0

function Check {
  param([string]$Name, [string]$Url, [string]$Expect)

  try {
    $r = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 45
    $ok = $true
    $detail = "HTTP $($r.StatusCode), $([math]::Round($r.RawContentLength/1KB,1)) KB"
    if ($Expect -and $r.Content -notmatch $Expect) {
      $ok = $false
      $detail += "  MISSING: /$Expect/"
    }
  } catch {
    $ok = $false
    $detail = "FAILED: $($_.Exception.Message)"
  }

  $mark = if ($ok) { 'PASS' } else { 'FAIL' }
  if (-not $ok) { $script:fail++ }
  Write-Output ("{0}  {1,-34} {2}" -f $mark, $Name, $detail)
  return $r
}

Write-Output "== pages =="
$home = Check 'home' "$base/" 'Raushan Kumar'
Check 'digital-marketing (was 404)' "$base/digital-marketing/" 'Digital Marketing'
Check 'about' "$base/about/" 'Raushan'
Check 'placement hub' "$base/ai-engineering-placement/" 'placement'
Check 'katex page' "$base/ai-engineering-placement/08-machine-learning/11-naive-bayes/" 'class="katex"'

Write-Output ""
Write-Output "== assets =="
Check 'robots.txt (was 404)' "$base/robots.txt" 'Sitemap'
Check 'social card' "$base/img/social-card.png" $null
Check 'sitemap.xml' "$base/sitemap.xml" 'digital-marketing'

Write-Output ""
Write-Output "== sitemap detail =="
try {
  [xml]$sm = (Invoke-WebRequest -Uri "$base/sitemap.xml" -UseBasicParsing -TimeoutSec 45).Content
  $urls = $sm.urlset.url.Count
  $withLastmod = ($sm.urlset.url | Where-Object { $_.lastmod }).Count
  $dm = ($sm.urlset.url | Where-Object { $_.loc -match 'digital-marketing' }).Count
  Write-Output "  urls: $urls   with lastmod: $withLastmod   digital-marketing entries: $dm"
  if ($dm -eq 0) { Write-Output '  FAIL  digital-marketing still missing from sitemap'; $fail++ }
  if ($withLastmod -eq 0) { Write-Output '  WARN  no lastmod values (showLastUpdateTime not applied)' }
} catch {
  Write-Output "  FAILED to parse sitemap: $($_.Exception.Message)"
  $fail++
}

Write-Output ""
if ($fail -eq 0) {
  Write-Output 'ALL CHECKS PASSED'
} else {
  Write-Output "$fail CHECK(S) FAILED"
}
