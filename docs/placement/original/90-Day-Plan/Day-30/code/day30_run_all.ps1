# PowerShell runner for Day 30 Phase 1 Mock Runner
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Write-Host "Compiling Day 30 Java files..."
javac *.java 2>&1 | Out-File -FilePath compile_log.txt -Encoding UTF8
if ($LASTEXITCODE -ne 0) { Write-Host "Compilation failed. See compile_log.txt"; exit $LASTEXITCODE }

Write-Host "Running Day 30 Phase 1 Mock Runner..."
java Day30Phase1MockRunner > Day30Phase1MockRunner_output.txt 2>&1
Write-Host "Runner finished; output: Day30Phase1MockRunner_output.txt"
