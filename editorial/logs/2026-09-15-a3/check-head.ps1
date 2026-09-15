$ErrorActionPreference = 'Stop'
$a3Repo = 'C:\Users\cyril\Project\Chinawebfoundry'
$a3Baseline = Join-Path ([IO.Path]::GetTempPath()) 'cwf-a3-head-20260915'
$a3Evidence = Join-Path $a3Repo 'editorial\logs\2026-09-15-a3'
if (Test-Path -LiteralPath $a3Baseline) { throw "Baseline path already exists: $a3Baseline" }
$a3Head = (git -C $a3Repo rev-parse HEAD).Trim()
git -C $a3Repo worktree add --detach $a3Baseline $a3Head
if ($LASTEXITCODE -ne 0) { throw 'Could not create HEAD worktree' }
$a3Junction = Join-Path $a3Baseline 'node_modules'
try {
    New-Item -ItemType Junction -Path $a3Junction -Target (Join-Path $a3Repo 'node_modules') | Out-Null
    Push-Location $a3Baseline
    try {
        $ErrorActionPreference = 'Continue'
        npx astro check *> (Join-Path $a3Evidence 'check-head.txt')
        $a3CheckExit = $LASTEXITCODE
        $ErrorActionPreference = 'Stop'
        Set-Content (Join-Path $a3Evidence 'check-head.exit.txt') $a3CheckExit
        Set-Content (Join-Path $a3Evidence 'check-head.commit.txt') $a3Head
    } finally { Pop-Location }
} finally {
    if (Test-Path -LiteralPath $a3Junction) {
        $a3Info = [IO.DirectoryInfo]::new($a3Junction)
        if (($a3Info.Attributes -band [IO.FileAttributes]::ReparsePoint) -eq 0) { throw 'Refusing to delete a non-junction node_modules' }
        $a3Info.Delete()
    }
    if (Test-Path -LiteralPath $a3Junction) { throw 'Junction still exists; refusing worktree removal' }
    $a3Resolved = [IO.Path]::GetFullPath($a3Baseline)
    $a3Expected = [IO.Path]::GetFullPath((Join-Path ([IO.Path]::GetTempPath()) 'cwf-a3-head-20260915'))
    if ($a3Resolved -ne $a3Expected) { throw 'Unexpected worktree removal path' }
    git -C $a3Repo worktree remove --force $a3Resolved
    if ($LASTEXITCODE -ne 0) { throw 'Could not remove baseline worktree' }
    if (-not (Test-Path -LiteralPath (Join-Path $a3Repo 'node_modules\astro\package.json'))) { throw 'Repository dependencies missing after cleanup' }
    Set-Content (Join-Path $a3Evidence 'check-head.cleanup.txt') 'DirectoryInfo.Delete() removed node_modules junction before git worktree remove; repository dependencies intact.'
}
Get-Content (Join-Path $a3Evidence 'check-head.txt') -Tail 8
Write-Output "HEAD=$a3Head check exit=$a3CheckExit; baseline worktree removed safely."
