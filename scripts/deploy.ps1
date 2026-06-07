# deploy.ps1 — Build + Deploy AI Engineering Journey

param(
    [string]$RepoPath = "C:\xampp\htdocs\ai-engineering-journey",
    [string]$PythonCmd = "python"
)

Write-Host "=== AI Engineering Journey Deploy ===" -ForegroundColor Cyan
Write-Host ""

Push-Location $RepoPath

try {
    # 1. Build site
    Write-Host "[1/4] Building MkDocs site..." -ForegroundColor Yellow
    & $PythonCmd -m mkdocs build --strict
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed! Aborting." -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Build successful" -ForegroundColor Green

    # 2. Stage changes
    Write-Host "[2/4] Staging changes..." -ForegroundColor Yellow
    git add -A
    Write-Host "✓ Staged" -ForegroundColor Green

    # 3. Commit
    Write-Host "[3/4] Committing..." -ForegroundColor Yellow
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $Staged = git diff --cached --stat
    if ($Staged) {
        git commit -m "deploy: $Timestamp"
        Write-Host "✓ Committed" -ForegroundColor Green
    } else {
        Write-Host "Nothing to commit" -ForegroundColor Gray
    }

    # 4. Push
    Write-Host "[4/4] Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    Write-Host "✓ Push complete" -ForegroundColor Green

    Write-Host ""
    Write-Host "=== Deploy complete! ===" -ForegroundColor Cyan
    Write-Host "Site: https://raushan666java.github.io/ai-engineering-journey"
}
catch {
    Write-Host "Deploy failed: $_" -ForegroundColor Red
}
finally {
    Pop-Location
}
