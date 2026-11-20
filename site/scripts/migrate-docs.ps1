param(
    [string]$SourceRoot = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement",
    [string]$DestRoot   = "C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
)

$moduleMap = [ordered]@{
    "00-core-computer-science"      = "00-foundations"
    "01-python-programming"         = "01-python"
    "02-sql-and-databases"          = "02-sql-databases"
    "03-data-structures-algorithms" = "03-dsa"
    "04-git-linux-cli"              = "04-git-linux"
    "05-fastapi-backend"            = "05-fastapi"
    "06-docker-kubernetes-cloud"    = "06-docker-k8s-cloud"
    "07-system-design"              = "07-system-design"
    "08-machine-learning"           = "08-ml"
    "09-deep-learning-pytorch"      = "09-deep-learning"
    "10-nlp-transformers"           = "10-nlp"
    "11-llms-prompt-engineering"    = "11-llms-prompt"
    "12-rag-vector-databases"       = "12-rag"
    "13-ai-agents-langgraph"        = "13-ai-agents"
    "14-fine-tuning-peft"           = "14-fine-tuning"
    "15-ai-evaluation-observability"= "15-evaluation"
    "16-mlops-production"           = "16-mlops"
    "17-ai-security-guardrails"     = "17-security"
    "18-multimodal-ai-voice"        = "18-multimodal"
    "19-capstone-projects"          = "19-capstone"
    "20-portfolio-branding"         = "20-portfolio"
    "21-interview-preparation"      = "21-interview"
    "22-advanced-ai-agents"         = "22-advanced-agents"
    "23-trending-aiml-platforms"    = "23-trending"
}

$moduleTitles = @{
    "00-foundations"       = "Core Computer Science"
    "01-python"            = "Python Programming"
    "02-sql-databases"     = "SQL and Databases"
    "03-dsa"               = "Data Structures and Algorithms"
    "04-git-linux"         = "Git, Linux and CLI"
    "05-fastapi"           = "FastAPI Backend"
    "06-docker-k8s-cloud"  = "Docker, Kubernetes and Cloud"
    "07-system-design"     = "System Design"
    "08-ml"                = "Machine Learning"
    "09-deep-learning"     = "Deep Learning and PyTorch"
    "10-nlp"               = "NLP and Transformers"
    "11-llms-prompt"       = "LLMs and Prompt Engineering"
    "12-rag"               = "RAG and Vector Databases"
    "13-ai-agents"         = "AI Agents and LangGraph"
    "14-fine-tuning"       = "Fine-Tuning and PEFT"
    "15-evaluation"        = "AI Evaluation and Observability"
    "16-mlops"             = "MLOps and Production"
    "17-security"          = "AI Security and Guardrails"
    "18-multimodal"        = "Multimodal AI and Voice"
    "19-capstone"          = "Capstone Projects"
    "20-portfolio"         = "Portfolio and Branding"
    "21-interview"         = "Interview Preparation"
    "22-advanced-agents"   = "Advanced AI Agents"
    "23-trending"          = "Trending AI/ML Platforms"
}

$totalFiles = 0
$totalDirs  = 0

foreach ($srcDirName in $moduleMap.Keys) {
    $srcDir = Join-Path $SourceRoot $srcDirName
    if (-not (Test-Path $srcDir)) { continue }

    $destSlug = $moduleMap[$srcDirName]
    $destDir  = Join-Path $DestRoot $destSlug
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Force -Path $destDir | Out-Null
        $totalDirs++
    }

    $mdFiles = Get-ChildItem -Path $srcDir -Filter "*.md" -File
    $idx = 0
    foreach ($file in $mdFiles) {
        $idx++
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        $content = $content -replace '^\xEF\xBB\xBF', ''
        $content = $content -replace '^<!--.*?-->\s*\r?\n', ''

        $fileSlug = $file.BaseName -replace '^\d+-', ''
        $sidebarLabel = $file.BaseName -replace '^\d+-', '' -replace '-', ' '
        $sidebarLabel = (Get-Culture).TextInfo.ToTitleCase($sidebarLabel)

        $frontMatter = "---`nslug: /$destSlug/$fileSlug`ntitle: `"$sidebarLabel`"`nsidebar_label: `"$sidebarLabel`"`nsidebar_position: $idx`n---`n`n"

        $newContent = $frontMatter + $content
        $destFile   = Join-Path $destDir $file.Name
        Set-Content -Path $destFile -Value $newContent -Encoding UTF8 -NoNewline
        $totalFiles++
    }

    $pos = 1
    $i = 0
    foreach ($k in $moduleMap.Keys) { $i++; if ($k -eq $srcDirName) { $pos = $i; break } }

    $title = $moduleTitles[$destSlug]
    $categoryJson = "{`n  `"$`"schema`": `"category`",`n  `"label`": `"$title`",`n  `"position`": $pos`n}"
    Set-Content -Path (Join-Path $destDir "_category_.json") -Value $categoryJson -Encoding UTF8

    Write-Host "  Copied $($mdFiles.Count) files: $srcDirName -> $destSlug"
}

$rootIndex = Join-Path $SourceRoot "index.md"
if (Test-Path $rootIndex) {
    $rootContent = Get-Content -Path $rootIndex -Raw -Encoding UTF8
    $rootContent = $rootContent -replace '^\xEF\xBB\xBF', ''
    $rootContent = $rootContent -replace '^<!--.*?-->\s*\r?\n', ''
    $indexFM = "---`nslug: /placement`ntitle: `"Backend + AI Engineer - Complete Placement Course`"`nsidebar_label: `"Placement Course`"`nsidebar_position: 0`n---`n`n"
    Set-Content -Path (Join-Path $DestRoot "index.mdx") -Value ($indexFM + $rootContent) -Encoding UTF8 -NoNewline
    Write-Host "  Created placement/index.mdx"
}

Write-Host "`nMigration complete: $totalFiles files across $($moduleMap.Count) modules"
