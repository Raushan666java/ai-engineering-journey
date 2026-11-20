Add-Type -AssemblyName System.Drawing

$W = 1200; $H = 630
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = 'ClearTypeGridFit'

$ink   = [System.Drawing.ColorTranslator]::FromHtml('#1a1b23')
$soft  = [System.Drawing.ColorTranslator]::FromHtml('#9a9ba6')
$white = [System.Drawing.ColorTranslator]::FromHtml('#ffffff')
$accent= [System.Drawing.ColorTranslator]::FromHtml('#4446e8')
$muted = [System.Drawing.ColorTranslator]::FromHtml('#6a6b78')

$g.Clear($ink)

# accent bar
$brushAccent = New-Object System.Drawing.SolidBrush($accent)
$g.FillRectangle($brushAccent, 72, 72, 6, $H - 144)

# faint grid lines for texture
$penLine = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(18, 255, 255, 255), 1)
for ($y = 0; $y -lt $H; $y += 48) { $g.DrawLine($penLine, 0, $y, $W, $y) }

function Write-Text($text, $x, $y, $size, $color, $bold, $family) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $font = New-Object System.Drawing.Font($family, $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Object System.Drawing.SolidBrush($color)
  $g.DrawString($text, $font, $brush, [single]$x, [single]$y)
  $font.Dispose(); $brush.Dispose()
}

Write-Text "AI ENGINEERING JOURNEY" 116 96 20 $soft $false 'Consolas'
Write-Text "Raushan Kumar" 112 168 84 $white $true 'Segoe UI'
Write-Text "Backend engineer. 3 years production Laravel." 116 292 30 $soft $false 'Segoe UI'
Write-Text "Now building measured LLM systems." 116 334 30 $soft $false 'Segoe UI'

$brushAccentBar = New-Object System.Drawing.SolidBrush($accent)
$g.FillRectangle($brushAccentBar, 116, 404, 120, 4)

Write-Text "59 courses  /  1,400+ chapters" 116 440 30 $white $true 'Segoe UI'
Write-Text "Python - SQL - ML - RAG - agents - system design" 116 480 24 $muted $false 'Segoe UI'

Write-Text "raushan666java.github.io/ai-engineering-journey" 116 560 20 $muted $false 'Consolas'

$out = Join-Path $PSScriptRoot '..\static\img\social-card.png'
$out = [System.IO.Path]::GetFullPath($out)
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose(); $bmp.Dispose()
Write-Output ("wrote " + $out + "  " + (Get-Item $out).Length + " bytes")
