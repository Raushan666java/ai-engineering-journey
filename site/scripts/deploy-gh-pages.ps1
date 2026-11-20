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
#  * Never clear the worktree with `Remove-Item -Force <root>\*` - it deletes the
#    hidden `.git` file that marks the worktree and silently detaches the branch.
#    Clear with -Exclude .git.
#  * `git push` exits 1 on this machine even when it succeeds; the pushed range
#    is printed as `old..new gh-pages -> gh-pages`. The script checks the remote
#    ref afterwards instead of trusting the exit code.

param(
  [string]$Message = "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm') site refresh",
  # Push the whole tree in one request. Faster when it works; GitHub answers
  # with HTTP 408 on a slow link when the pack is large, so the default is to
  # split into chunks of about -ChunkBytes of working files each.
  [switch]$SingleCommit,
  [int64]$ChunkBytes = 120MB
)

$ErrorActionPreference = 'Stop'

$site = Split-Path -Parent $PSScriptRoot
$repo = Split-Path -Parent $site
$build = Join-Path $site 'build'
$wt = 'C:\Users\hiii\AppData\Local\Temp\opencode\ghpages-wt'

if (-not (Test-Path (Join-Path $build 'index.html'))) {
  throw "No build found at $build - run the docusaurus build first."
}

Write-Output "[1/6] pruning stale worktrees"
Push-Location $repo
git worktree prune

Write-Output "[2/6] preparing worktree at $wt"
if (Test-Path (Join-Path $wt '.git')) {
  Write-Output '      reusing existing worktree'
} elseif (Test-Path $wt) {
  Remove-Item $wt -Recurse -Force
  git worktree add $wt gh-pages
} else {
  git worktree add $wt gh-pages
}

# Start from whatever the remote serves. A previous failed push can leave a
# local commit that carries a file GitHub refused; pushing from it would offer
# the same blob again and be rejected before any of the new content is seen.
Write-Output "[3/6] resetting worktree to origin/gh-pages"
Push-Location $wt
git fetch origin gh-pages --quiet
$remoteHead = (git rev-parse FETCH_HEAD).Trim()
git reset --hard $remoteHead | Out-Null
Write-Output "      base: $remoteHead"

Write-Output "[4/6] clearing old files (keeping .git)"
Get-ChildItem -Force -Path $wt | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force

Write-Output "[5/6] copying build output"
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

$identity = @('-c', 'user.name=hiiiiiiiiiiiiiii', '-c', 'user.email=hiiiiiiiiiiiiiii@users.noreply.github.com')

if ($SingleCommit) {
  Write-Output "[6/6] committing and pushing ($changes paths)"
  git @identity commit -m $Message | Select-Object -Last 2
  git push origin gh-pages 2>&1 | Select-Object -Last 3
} else {
  # GitHub answers a single push of this tree with HTTP 408: the pack is too
  # large for one request on this link. Pushing in size-bounded chunks keeps
  # every request small enough to finish, and the last chunk leaves the branch
  # at exactly the same tree.
  # `git reset` (mixed) unstages; --soft would leave everything staged and make
  # the per-chunk adds meaningless.
  git reset | Out-Null
  # Union of what is on disk and what the previous commit tracked, so a
  # top-level directory that disappeared from the build still gets its deletions
  # staged instead of lingering on the branch forever.
  $onDisk = Get-ChildItem -Force -Path $wt | Where-Object { $_.Name -ne '.git' } | ForEach-Object Name
  $inTree = git ls-tree --name-only HEAD
  $names = @($onDisk) + @($inTree) | Where-Object { $_ -and $_ -ne '.git' } | Sort-Object -Unique

  $packs = @()
  $current = @()
  $currentBytes = 0
  foreach ($name in $names) {
    $full = Join-Path $wt $name
    $size = 0
    if (Test-Path $full) {
      $item = Get-Item -Force $full
      if ($item.PSIsContainer) {
        $size = (Get-ChildItem $item.FullName -Recurse -File -Force -ErrorAction SilentlyContinue | Measure-Object -Sum Length).Sum
      } else {
        $size = $item.Length
      }
    }
    if ($currentBytes -gt 0 -and ($currentBytes + $size) -gt $ChunkBytes) {
      $packs += , $current
      $current = @()
      $currentBytes = 0
    }
    $current += $name
    $currentBytes += $size
  }
  if ($current.Count -gt 0) { $packs += , $current }

  Write-Output "[6/6] committing and pushing in $($packs.Count) chunks"
  $n = 0
  foreach ($pack in $packs) {
    $n++
    $total = $packs.Count
    Write-Output "      chunk $n/$total : $($pack -join ', ')"
    git add -A -- $pack
    git @identity commit -m "$Message [chunk $n/$total]" | Select-Object -Last 1
    $pushOut = git push origin gh-pages 2>&1
    if ($LASTEXITCODE -ne 0) {
      Write-Output ($pushOut | Select-Object -Last 4)
      throw "push failed on chunk $n/$total"
    }
  }
}

Pop-Location
Push-Location $repo
$remote = (git ls-remote --heads origin gh-pages).Split("`t")[0]
$local = (git rev-parse gh-pages).Trim()
Write-Output ""
if ($remote -eq $local) {
  Write-Output "PUSH OK - origin/gh-pages = $local"
  Write-Output "Pages serves in ~2 min: https://raushan666java.github.io/ai-engineering-journey/"
} else {
  Write-Output "PUSH MISMATCH - local $local vs remote $remote"
}
Pop-Location
