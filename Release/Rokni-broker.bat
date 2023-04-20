@echo off
echo Running server...

echo server 1 running...
cd ./net7.0
start cmd /k "RokniAppApi.HttpApi.Host.exe"

Set URL="http://localhost:4200/"
set NewTab=-new-tab
For %%a in (%URL%) Do (Start /d "%programfiles%\Mozilla Firefox" Firefox.exe %Newtab% "%%a")


echo server 2 running...
cd ../
http-server dist -a localhost -p 4200 --cors -P http://localhost:44366



pause