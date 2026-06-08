# PowerShell runner for Day 25 Java Collections demos
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Write-Host "Compiling all Java files in Day 25 code folder..."
javac *.java 2>&1 | Out-File -FilePath compile_log.txt -Encoding UTF8
if ($LASTEXITCODE -ne 0) { Write-Host "Compilation failed. See compile_log.txt"; exit $LASTEXITCODE }

$demos = @("CollectionsBasics","CollectionsVisualizer")
foreach ($d in $demos) {
    Write-Host "Running $d..."
    if ($d -eq "CollectionsVisualizer") { java $d --quiet --ci > ${d}_output.txt 2>&1 } else { java $d --ci > ${d}_output.txt 2>&1 }
    Write-Host "$d finished; output: ${d}_output.txt"
}

Write-Host "Day 25 demo run completed. Outputs and compile logs are in this folder."
