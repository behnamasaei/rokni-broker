@echo off
echo Running server...

echo server 1 running...
cd ./scripts
start cmd /k "angular_servar.bat"

echo server 2 running...
start cmd /k "dotnet_server.bat"


Set URL="http://localhost:4200/"
set NewTab=-new-tab
For %%a in (%URL%) Do (Start /d "%programfiles%\Mozilla Firefox" Firefox.exe %Newtab% "%%a")
