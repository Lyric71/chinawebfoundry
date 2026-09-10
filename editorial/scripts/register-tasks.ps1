<#
.SYNOPSIS
  Registers (or re-registers) the two Windows scheduled tasks that run the
  ChinaWebFoundry editorial pipeline on this machine.

  ChinaWebFoundry Editorial Draft    Tue, Thu, Fri at 01:30 local (Shanghai, night)
  ChinaWebFoundry Editorial Publish  every day at 05:30 local

  Run from any PowerShell prompt:
    powershell -ExecutionPolicy Bypass -File editorial\scripts\register-tasks.ps1

  To pause unattended publishing:
    Disable-ScheduledTask -TaskName 'ChinaWebFoundry Editorial Publish'

  Three other editorial pipelines run on this machine (BBChien 00:00 and
  05:00, TheRedScroll 00:30 and 04:00, TheChinaPath 01:00 and 04:30), which
  is why this one defaults to 01:30 and 05:30. To move it:
    register-tasks.ps1 -DraftTime 02:00 -PublishTime 05:45
#>
param(
  [string]$DraftTime = '01:30',
  [string]$PublishTime = '05:30'
)

$ErrorActionPreference = 'Stop'
$Runner = Join-Path $PSScriptRoot 'run-daily.ps1'
$Pwsh = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"

function Register([string]$Name, [string]$Mode, $Trigger, [bool]$Enabled) {
  $Action = New-ScheduledTaskAction -Execute $Pwsh `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`" -Mode $Mode"
  $Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 6) `
    -StartWhenAvailable `
    -WakeToRun `
    -MultipleInstances IgnoreNew
  Register-ScheduledTask -TaskName $Name -Action $Action -Trigger $Trigger `
    -Settings $Settings -Description "ChinaWebFoundry editorial pipeline ($Mode)" -Force | Out-Null
  if (-not $Enabled) { Disable-ScheduledTask -TaskName $Name | Out-Null }
  Write-Host "$Name registered ($(if ($Enabled) {'enabled'} else {'disabled'}))"
}

$DraftTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Tuesday, Thursday, Friday -At $DraftTime
Register 'ChinaWebFoundry Editorial Draft' 'draft' $DraftTrigger $true

$PublishTrigger = New-ScheduledTaskTrigger -Daily -At $PublishTime
Register 'ChinaWebFoundry Editorial Publish' 'publish' $PublishTrigger $true

Get-ScheduledTask -TaskName 'ChinaWebFoundry Editorial *' | Format-Table TaskName, State -AutoSize
