import os, re, glob

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"

old_to_new = {
    "00-core-computer-science": "00-foundations",
    "01-python-programming": "01-python",
    "02-sql-and-databases": "02-sql-databases",
    "03-data-structures-algorithms": "03-dsa",
    "04-git-linux-cli": "04-git-linux",
    "05-fastapi-backend": "05-fastapi",
    "06-docker-kubernetes-cloud": "06-docker-k8s-cloud",
    "07-system-design": "07-system-design",
    "08-machine-learning": "08-ml",
    "09-deep-learning-pytorch": "09-deep-learning",
    "10-nlp-transformers": "10-nlp",
    "11-llms-prompt-engineering": "11-llms-prompt",
    "12-rag-vector-databases": "12-rag",
    "13-ai-agents-langgraph": "13-ai-agents",
    "14-fine-tuning-peft": "14-fine-tuning",
    "15-ai-evaluation-observability": "15-evaluation",
    "16-mlops-production": "16-mlops",
    "17-ai-security-guardrails": "17-security",
    "18-multimodal-ai-voice": "18-multimodal",
    "19-capstone-projects": "19-capstone",
    "20-portfolio-branding": "20-portfolio",
    "21-interview-preparation": "21-interview",
    "22-advanced-ai-agents": "22-advanced-agents",
    "23-trending-aiml-platforms": "23-trending",
}

# Fix cross-module relative links: ../XX-old-name/file.md -> /XX-new-name/file.md
total = 0
for md_file in glob.glob(os.path.join(docs_root, "**", "*.md"), recursive=True):
    with open(md_file, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    orig = content
    for old, new in old_to_new.items():
        content = content.replace("../" + old + "/", "/" + new + "/")
        content = content.replace("../" + old + " ", "/" + new + " ")
    if content != orig:
        with open(md_file, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        total += 1

print(f"Fixed cross-module links in {total} files")

# Fix index.mdx
index_file = os.path.join(docs_root, "index.mdx")
if os.path.exists(index_file):
    with open(index_file, "r", encoding="utf-8") as f:
        content = f.read()
    content = content.replace("](https://)", "](https://github.com/Raushan666java/ai-engineering-journey)")
    content = content.replace("01-python-programming/index.md", "01-python")
    with open(index_file, "w", encoding="utf-8", newline="") as f:
        f.write(content)
    print("Fixed index.mdx")
