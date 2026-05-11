param(
    [int]$LargeResourceKB = 1024
)

$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$htmlFiles = @(
    Get-Item (Join-Path $root "index.html")
    Get-ChildItem (Join-Path $root "html") -Filter "*.html" -File
)

$errors = New-Object System.Collections.Generic.List[string]
$warnings = New-Object System.Collections.Generic.List[string]

function Add-Error([string]$message) {
    $script:errors.Add($message) | Out-Null
}

function Add-Warning([string]$message) {
    $script:warnings.Add($message) | Out-Null
}

foreach ($file in $htmlFiles) {
    $text = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8

    $refs = [regex]::Matches($text, '(?:href|src)="([^"]+)"')
    foreach ($ref in $refs) {
        $url = $ref.Groups[1].Value
        if ($url -eq "" -or $url -match '^(https?:|mailto:|#|data:|javascript:)') {
            continue
        }

        $clean = (($url -split '#')[0] -split '\?')[0]
        if ($clean -eq "") {
            continue
        }

        $decoded = [System.Net.WebUtility]::UrlDecode($clean)
        $target = Join-Path $file.DirectoryName $decoded
        if (-not (Test-Path -LiteralPath $target)) {
            Add-Error "$($file.Name): missing local reference '$url'"
        }
    }

    $images = [regex]::Matches($text, '<img\b[^>]*>')
    foreach ($image in $images) {
        $tag = $image.Value
        if ($tag -notmatch '\balt="[^"]+"') {
            Add-Error "$($file.Name): image without useful alt text: $tag"
        }
        if ($tag -notmatch '\bloading="lazy"') {
            Add-Error "$($file.Name): image without loading=""lazy"": $tag"
        }
        if ($tag -notmatch '\bdecoding="async"') {
            Add-Error "$($file.Name): image without decoding=""async"": $tag"
        }
    }

    $fullGalleryImages = [regex]::Matches(
        $text,
        'class="imageLink"[\s\S]*?<img\b[^>]*src="\.\./content/resources/(?!thumbs/)'
    )
    foreach ($match in $fullGalleryImages) {
        Add-Error "$($file.Name): gallery thumbnail points to a full-size resource"
    }

    foreach ($requiredMeta in @(
        'property="og:title"',
        'property="og:description"',
        'property="og:image"',
        'name="twitter:card"',
        'name="twitter:image"'
    )) {
        if ($text -notmatch [regex]::Escape($requiredMeta)) {
            Add-Error "$($file.Name): missing metadata $requiredMeta"
        }
    }

    $metaImages = [regex]::Matches(
        $text,
        '<meta\s+(?:property="og:image"|name="twitter:image")\s+content="([^"]+)"'
    )
    foreach ($metaImage in $metaImages) {
        $url = $metaImage.Groups[1].Value
        if ($url -match '^(https?:|data:)') {
            continue
        }

        $decoded = [System.Net.WebUtility]::UrlDecode($url)
        $target = Join-Path $file.DirectoryName $decoded
        if (-not (Test-Path -LiteralPath $target)) {
            Add-Error "$($file.Name): missing social image '$url'"
        }
    }
}

$resourceFiles = Get-ChildItem (Join-Path $root "content/resources") -File
foreach ($resource in $resourceFiles) {
    if ($resource.Length -gt ($LargeResourceKB * 1024)) {
        Add-Warning "$($resource.Name): $([math]::Round($resource.Length / 1KB, 1)) KB"
    }
}

if ($warnings.Count -gt 0) {
    Write-Host "Large resources over $LargeResourceKB KB:"
    foreach ($warning in $warnings) {
        Write-Host "  WARN $warning"
    }
}

if ($errors.Count -gt 0) {
    Write-Host "Validation failed:"
    foreach ($errorMessage in $errors) {
        Write-Host "  ERROR $errorMessage"
    }
    exit 1
}

Write-Host "Validation passed for $($htmlFiles.Count) HTML files."
