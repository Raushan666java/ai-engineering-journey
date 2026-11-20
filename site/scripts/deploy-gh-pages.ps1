# Publish site/build to the gh-pages branch.
#
# GitHub Pages for this repo serves gh-pages (not the Actions output), so the
# deploy is: build locally -> copy build/ into a gh-pages worktree -> commit ->
# push. Pages re-serves in ~2 minutes.
#
# Usage:
#   powershell -File scripts/deploy-gh-pages.ps1
#   powershell -File scripts/deploy-gh-pages.ps1 -Message "deploy: nov 20 fixes"
#
# Safety notes learned the hard way:
#  * Never clear the worktree with `Remove-Item -Force <root>\*` — it deletes the
#    hidden `.git` file that marks the worktree and silently detaches the branch.
#    Clear with -Exclude .git.
#  * `git push` exits 1 on this machine even when it succeeds; the pushed range
#    is printed as `old..new gh-pages -> gh-pages`. The script checks the remote
#    ref afterwards instead of trusting the exit code.

param(
  [string]$Message = "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm') site refresh"
)

$ErrorActionPreference = 'Stop'

$site = Split-Path -Parent $PSScriptRoot
$repo = Split-Path -Parent $site
$build = Join-Path $site 'build'
$wt = 'C:\Users\hiii\AppData\Local\Temp\opencode\ghpages-wt'

if (-not (Test-Path (Join-Path $build 'index.html'))) {
  throw "No build found at $build — run the docusaurus build first."
}

Write-Output "[1/5] pruning stale worktrees"
Push-Location $repo
git worktree prune

Write-Output "[2/5] preparing worktree at $wt"
if (Test-Path (Join-Path $wt '.git')) {
  Write-Output '      reusing existing worktree'
} elseif (Test-Path $wt) {
  Remove-Item $wt -Recurse -Force
  git worktree add $wt gh-pages
} else {
  git worktree add $wt gh-pages
}

Write-Output "[3/5] clearing old files (keeping .git)"
Push-Location $wt
Get-ChildItem -Force -Path $wt | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

Write-Output "[4/5] copying build output"
Copy-Item -Path (Join-Path $build '*') -Destination $wt -Recurse -Force
# dotfiles: Copy-Item's wildcard skips some dotfiles on Windows
Get-ChildItem -Force -Path $build | Where-Object { $_.Name -like '.*' } | ForEach-Object {
  Copy-Item $_.FullName -Destination $wt -Recurse -Force
}

if (-not (Test-Path (Join-Path $wt '.nojekyll'))) {
  New-Item -ItemType File -Path (Join-Path $wt '.nojekyll') | Out-Null
}

git add -A
$changes = (git status --porcelain | Measure-Object).Count
if ($changes -eq 0) {
  Write-Output '      nothing changed; skipping commit'
  Pop-Location; Pop-Location
  return
}

Write-Output "[5/5] committing and pushing ($changes paths)"
git -c user.name="hiiiiiiiiiiiiiii" `
    -c user.email="hiiiiiiiiiiiiiii@users.noreply.github.com" `
    commit -m $Message | Select-Object -Last 2
git push origin gh-pages 2>&1 | Select-Object -Last 3

Pop-Location
Push-Location $repo
$remote = (git ls-remote --heads origin gh-pages).Split("`t")[0]
$local = (git rev-parse gh-pages).Trim()
Write-Output ""
if ($remote -eq $local) {
  Write-Output "PUSH OK — origin/gh-pages = $local"
  Write-Output "Pages serves in ~2 min: https://raushan666java.github.io/ai-engineering-journey/"
} else {
  Write-Output "PUSH MISMATCH — local $local vs remote $remote"
}
Pop-Location
