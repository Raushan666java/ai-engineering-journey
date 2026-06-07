# auto-sync.ps1 — Automatic Git Sync for AI Engineering Journey
# Checks for changes every 60s and auto-commits + pushes

param(
    [int]$IntervalSeconds = 60,
    [string]$RepoPath = "C:\xampp\htdocs\ai-engineering-journey"
)

$LogFile = Join-Path $PSScriptRoot "auto-sync.log"
$LastChange = Get-Date

function Write-Log {
    param([string]$Message)
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$Timestamp — $Message" | Out-File -FilePath $LogFile -Append -Encoding UTF8
    Write-Host "$Timestamp — $Message"
}

Write-Log "Auto-sync started. Interval: ${IntervalSeconds}s, Path: $RepoPath"

while ($true) {
    try {
        Push-Location $RepoPath

        # Fetch latest
        git fetch origin 2>&1 | Out-Null

        # Check status
        $Status = git status --porcelain
        if ($Status) {
            Write-Log "Changes detected. Staging and committing..."

            # Stage all
            git add -A 2>&1 | Out-Null

            # Check if there's actually something to commit
            $Staged = git diff --cached --stat
            if ($Staged) {
                $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
                $Message = "auto-sync: $Timestamp — $($Staged.Count) files changed"
                git commit -m $Message 2>&1 | Out-Null
                Write-Log "Committed: $Message"

                # Push
                git push origin main 2>&1 | Out-Null
                if ($LASTEXITCODE -eq 0) {
                    Write-Log "Pushed successfully to origin/main"
                } else {
                    Write-Log "Push failed (exit code: $LASTEXITCODE). Will retry."
                }
            }
        } else {
            # No changes, just pull updates
            git pull origin main --rebase 2>&1 | Out-Null
        }
    }
    catch {
        Write-Log "Error: $_"
    }
    finally {
        Pop-Location
    }

    Start-Sleep -Seconds $IntervalSeconds
}
