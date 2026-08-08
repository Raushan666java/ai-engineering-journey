$env:NODE_OPTIONS = "--max-old-space-size=8192"
Set-Location "C:\xampp\htdocs\ai-engineering-journey\site"
node ./node_modules/@docusaurus/core/bin/docusaurus.mjs build --no-minify *> "C:\Users\hiii\AppData\Local\Temp\opencode\build-mojibake.log" 2>&1
exit $LASTEXITCODE
