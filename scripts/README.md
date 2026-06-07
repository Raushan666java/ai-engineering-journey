# Auto-Sync System

Two scripts for keeping the AI Engineering Journey site in sync with GitHub.

## auto-sync.ps1

Background service that watches for file changes and auto-commits/pushes.

```powershell
# Run in background (keeps running)
powershell -File scripts/auto-sync.ps1

# Custom interval
powershell -File scripts/auto-sync.ps1 -IntervalSeconds 120
```

## deploy.ps1

One-shot build + commit + push.

```powershell
# Full deploy
powershell -File scripts/deploy.ps1
```

## Auto-start (Windows)

To start auto-sync on boot:

1. Open Task Scheduler
2. Create Basic Task → Trigger: "When computer starts"
3. Action: Start a program
   - Program: `powershell.exe`
   - Arguments: `-WindowStyle Hidden -File "C:\xampp\htdocs\ai-engineering-journey\scripts\auto-sync.ps1"`
