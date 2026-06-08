$ErrorActionPreference = 'Stop'

$tests = @(
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-15\code'; class='SortingComparator'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-16\code'; class='SearchLibrary'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-17\code'; class='RecursionBasics'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-17\code'; class='Backtracking'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-17\code'; class='RecursionVisualizer'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-18\code'; class='DPBasics'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-18\code'; class='DynamicProgramming'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-18\code'; class='DPVisualizer'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-19\code'; class='GreedyBasics'},
    @{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-19\code'; class='GreedyVisualizer'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-22\code'; class='GraphBasics'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-22\code'; class='GraphTraversals'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-22\code'; class='GraphShortestPaths'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-22\code'; class='GraphMST'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-22\code'; class='GraphVisualizer'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-23\code'; class='GraphAdvanced'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-24\code'; class='GraphFlow'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-24\code'; class='GraphTarjan'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-24\code'; class='GraphLCA'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-25\code'; class='CollectionsBasics'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-25\code'; class='CollectionsVisualizer'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-26\code'; class='ExceptionHandlingBasics'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-26\code'; class='FileIOBasics'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-27\code'; class='ThreadsBasics'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-27\code'; class='SyncDemo'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-27\code'; class='ExecutorDemo'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-27\code'; class='ConcurrentCollectionsDemo'}
    ,@{dir = 'c:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-28\code'; class='Week4Review'}
)

$report = @()
foreach ($t in $tests) {
    Push-Location $t.dir
    try {
        Write-Host "Compiling in $($t.dir)..."
        javac *.java 2>&1 | Out-String | Out-File -Append compile_log.txt
    } catch {
        Write-Host "Compilation error in $($t.dir): $_"
    }

    try {
        Write-Host "Running $($t.class)..."
        $start = Get-Date
        java $t.class 2>&1 | Tee-Object -FilePath "$($t.class)_output.txt"
        $elapsed = (Get-Date) - $start
        $report += [pscustomobject]@{Class=$t.class; Dir=$t.dir; Status='OK'; TimeMs=$elapsed.TotalMilliseconds}
    } catch {
        Write-Host "Run error for $($t.class): $_"
        $report += [pscustomobject]@{Class=$t.class; Dir=$t.dir; Status='FAIL'; TimeMs=0}
    }
    Pop-Location
}

Write-Host "\nMock Test Summary:\n"
$report | Format-Table -AutoSize
$report | ConvertTo-Json | Out-File mocktest_report.json

Write-Host "Completed. Logs: compile_log.txt, individual outputs, mocktest_report.json"