Add-Type -AssemblyName System.Drawing
$w = 1200; $h = 630
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = 'AntiAlias'

$navy = [System.Drawing.Color]::FromArgb(255, 26, 35, 50)
$red = [System.Drawing.Color]::FromArgb(255, 192, 57, 43)
$gray = [System.Drawing.Color]::FromArgb(255, 209, 213, 219)

$g.FillRectangle((New-Object System.Drawing.SolidBrush($navy)), 0, 0, $w, $h)
$g.FillRectangle((New-Object System.Drawing.SolidBrush($red)), 0, 0, 14, $h)
$g.FillRectangle((New-Object System.Drawing.SolidBrush($red)), 0, $h - 10, $w, 10)

$fontBig = New-Object System.Drawing.Font('Segoe UI', 64, [System.Drawing.FontStyle]::Bold)
$fontMid = New-Object System.Drawing.Font('Segoe UI', 34, [System.Drawing.FontStyle]::Regular)
$fontSmall = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular)

$g.DrawString('365', $fontBig, (New-Object System.Drawing.SolidBrush($red)), 70, 130)
$sz = $g.MeasureString('365', $fontBig)
$g.DrawString('Residential Services', $fontBig, [System.Drawing.Brushes]::White, [float](70 + $sz.Width), 130)
$g.DrawString('Handyman & Home Improvement', $fontMid, [System.Drawing.Brushes]::White, 74, 310)
$g.DrawString('Dallas-Fort Worth  |  (469) 616-0326', $fontSmall, (New-Object System.Drawing.SolidBrush($gray)), 74, 390)
$g.DrawString('Quality craftsmanship you can trust, 365 days a year.', $fontSmall, (New-Object System.Drawing.SolidBrush($gray)), 74, 445)

$g.Dispose()
$out = Join-Path $PSScriptRoot '..\public\og-image.jpg'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()
Write-Output "Saved: $((Resolve-Path $out).Path) ($((Get-Item $out).Length) bytes)"
