<#
.SYNOPSIS
  Registers (or re-registers) the two Windows scheduled tasks that run the
  ChinaWebFoundry editorial pipeline on this machine.

  ChinaWebFoundry Editorial Draft    Tue, Thu, Fri at 07:00 local (Shanghai)
  ChinaWebFoundry Editorial Publish  every day at 10:00 local

  Run from any PowerShell prompt:
    powershell -ExecutionPolicy Bypass -File editorial\scripts\register-tasks.ps1

  To pause unattended publishing:
    Disable-ScheduledTask -TaskName 'ChinaWebFoundry Editorial Publish'

  Three other editorial pipelines run on this machine (BBChien 09:00 and
  13:00, TheRedScroll 11:00 and 13:00, TheChinaPath 15:00 and 17:30), which
  is why this one defaults to 07:00 and 10:00. To move it:
    register-tasks.ps1 -DraftTime 06:00 -PublishTime 08:30
#>
param(
  [string]$DraftTime = '07:00',
  [string]$PublishTime = '10:00'
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
