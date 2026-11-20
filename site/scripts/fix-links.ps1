$docsRoot = "C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"

# Map old directory names to new slugs
$oldToNew = @{
    "00-core-computer-science"     = "00-foundations"
    "01-python-programming"        = "01-python"
    "02-sql-and-databases"         = "02-sql-databases"
    "03-data-structures-algorithms"= "03-dsa"
    "04-git-linux-cli"             = "04-git-linux"
    "05-fastapi-backend"           = "05-fastapi"
    "06-docker-kubernetes-cloud"   = "06-docker-k8s-cloud"
    "07-system-design"             = "07-system-design"
    "08-machine-learning"          = "08-ml"
    "09-deep-learning-pytorch"     = "09-deep-learning"
    "10-nlp-transformers"          = "10-nlp"
    "11-llms-prompt-engineering"   = "11-llms-prompt"
    "12-rag-vector-databases"      = "12-rag"
    "13-ai-agents-langgraph"       = "13-ai-agents"
    "14-fine-tuning-peft"          = "14-fine-tuning"
    "15-ai-evaluation-observability" = "15-evaluation"
    "16-mlops-production"          = "16-mlops"
    "17-ai-security-guardrails"    = "17-security"
    "18-multimodal-ai-voice"       = "18-multimodal"
    "19-capstone-projects"         = "19-capstone"
    "20-portfolio-branding"        = "20-portfolio"
    "21-interview-preparation"     = "21-interview"
    "22-advanced-ai-agents"        = "22-advanced-agents"
    "23-trending-aiml-platforms"   = "23-trending"
}

$totalFixed = 0
$files = Get-ChildItem -Path $docsRoot -Recurse -Filter "*.md"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content

    # Fix relative links like ../XX-old-name/index.md -> /XX-new-name
    foreach ($old in $oldToNew.Keys) {
        $new = $oldToNew[$old]
        # Pattern: (../OLD-NAME/index.md) or (../OLD-NAME/file.md)
        $content = $content -replace "\.\./$old/index\.md", "/$new"
        $content = $content -replace "\.\./$old/([^)]+\.md)", "/$new/`$1"
    }

    # Also fix links with numeric prefix removed
    foreach ($old in $oldToNew.Keys) {
        $new = $oldToNew[$old]
        $oldShort = $old -replace '^\d+-', ''
        $newShort = $new -replace '^\d+-', ''
        $content = $content -replace "\.\./$oldShort/index\.md", "/$new"
    }

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalFixed++
    }
}

Write-Host "Fixed links in $totalFixed files"
