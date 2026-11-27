@echo off
rem Thin launcher so the tool can be called as "phonebridge" from this folder.
rem Node 22.6+ runs the TypeScript directly; no build step needed.
node "%~dp0src\cli.ts" %*
