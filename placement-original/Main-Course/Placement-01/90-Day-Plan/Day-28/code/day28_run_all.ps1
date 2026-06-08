Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Write-Host "Compiling Week 4 review files..."
javac *.java 2>&1 | Out-File -FilePath compile_log.txt -Encoding UTF8
if ($LASTEXITCODE -ne 0) { Write-Host "Compilation failed. See compile_log.txt"; exit $LASTEXITCODE }

Write-Host "Running Week 4 review..."
java Week4Review > Week4Review_output.txt 2>&1
Write-Host "Week4 review finished; output: Week4Review_output.txt"

Write-Host "Day 28 review completed. Outputs and compile logs in this folder."
