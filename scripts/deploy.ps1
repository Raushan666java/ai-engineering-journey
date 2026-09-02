# deploy.ps1 — Build + Deploy AI Engineering Journey (Docusaurus)

param(
    [string]$SitePath = "C:\xampp\htdocs\ai-engineering-journey\site",
    [switch]$NoMinify
)

Write-Host "=== AI Engineering Journey Deploy ===" -ForegroundColor Cyan
Write-Host ""

Push-Location $SitePath

try {
    # 1. Clear cache
    Write-Host "[1/5] Clearing cache..." -ForegroundColor Yellow
    npm run clear
    Write-Host "Cache cleared" -ForegroundColor Green

    # 2. Install deps
    Write-Host "[2/5] Installing dependencies..." -ForegroundColor Yellow
    npm ci
    Write-Host "Dependencies installed" -ForegroundColor Green

    # 3. Build site
    Write-Host "[3/5] Building Docusaurus site..." -ForegroundColor Yellow
    $buildArgs = @("run", "build")
    if ($NoMinify) {
        $env:NODE_OPTIONS = "--max-old-space-size=8192"
        $buildArgs += "--no-minify"
    } else {
        $env:NODE_OPTIONS = "--max-old-space-size=7168"
    }
    npm @buildArgs
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed! Aborting." -ForegroundColor Red
        exit 1
    }
    Write-Host "Build successful" -ForegroundColor Green

    # 4. Stage changes
    Write-Host "[4/5] Staging changes..." -ForegroundColor Yellow
    Pop-Location
    Push-Location "C:\xampp\htdocs\ai-engineering-journey"
    git add -A
    Write-Host "Staged" -ForegroundColor Green

    # 5. Commit and push
    Write-Host "[5/5] Committing and pushing..." -ForegroundColor Yellow
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $Staged = git diff --cached --stat
    if ($Staged) {
        git commit -m "deploy: Docusaurus build $Timestamp"
        git push origin main
        Write-Host "Push complete" -ForegroundColor Green
    } else {
        Write-Host "Nothing to commit" -ForegroundColor Gray
    }

    Write-Host ""
    Write-Host "=== Deploy complete! ===" -ForegroundColor Cyan
    Write-Host "Site: https://raushan666java.github.io/ai-engineering-journey"
    Write-Host "Note: GitHub Actions will build and deploy on push to main" -ForegroundColor Gray
}
catch {
    Write-Host "Deploy failed: $_" -ForegroundColor Red
}
finally {
    Pop-Location
}
