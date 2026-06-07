# PowerShell runner for Day 37 Tries
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Write-Host "Compiling Day 37 Java files..."
javac *.java 2>&1 | Out-File -FilePath compile_log.txt -Encoding UTF8
if ($LASTEXITCODE -ne 0) { Write-Host "Compilation failed. See compile_log.txt"; exit $LASTEXITCODE }

$demos = @("TriesBasics")
foreach ($d in $demos) {
    Write-Host "Running $d in CI mode..."
    java $d --ci > ${d}_output.txt 2>&1
    Write-Host "$d finished; output: ${d}_output.txt"
}

Write-Host "Day 37 demo run completed. Outputs and compile logs are in this folder."