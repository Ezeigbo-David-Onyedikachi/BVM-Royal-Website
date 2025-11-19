@echo off
echo Starting BVM Royal Concept Website Server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python server...
    python server.py
    goto :end
)

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Node.js server...
    node server.js
    goto :end
)

REM If neither is available, open directly in browser
echo No server found. Opening in browser directly...
echo Note: Some features work better with a local server.
start index.html
goto :end

:end
pause

