@echo off
echo ========================================
echo   Trading Signals - Full Stack Startup
echo ========================================
echo.

REM Check Node.js
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found!
    echo Please install Node.js from https://nodejs.org/
    echo.
    echo If you just installed Node.js, please:
    echo   1. Close this window
    echo   2. Restart your computer OR restart your terminal
    echo   3. Run this script again
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js found
node --version
echo.

REM ========================================
REM Setup Backend
REM ========================================
echo [INFO] Setting up backend...
cd server

REM Create .env if not exists
if not exist ".env" (
    echo [INFO] Creating .env file...
    if exist ".env.example" (
        copy .env.example .env >nul
    ) else if exist "env.example.txt" (
        copy env.example.txt .env >nul
    ) else (
        (
            echo PORT=3001
            echo NODE_ENV=development
            echo JWT_SECRET=78f5f2553cbff88bb9c2a862f50972fad0e0bbdbd9d252120cdf72b60a89362a
            echo DATABASE_URL="file:./data.db"
            echo ADMIN_USERNAME=admin
            echo ADMIN_PASSWORD=admin123
            echo ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
        ) > .env
    )
    echo [OK] .env file created
)

REM Install backend dependencies
if not exist "node_modules" (
    echo [INFO] Installing backend dependencies...
    call npm install >nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install backend dependencies!
        cd ..
        pause
        exit /b 1
    )
)

REM Generate Prisma client
if not exist "node_modules\.prisma" (
    echo [INFO] Generating Prisma client...
    call npx prisma generate >nul 2>&1
)

REM Initialize database
if not exist "data.db" (
    echo [INFO] Initializing database...
    call npx prisma db push >nul 2>&1
)

REM Start backend in background
echo [INFO] Starting backend server...
REM Save current directory (we're already in server folder)
set SERVER_DIR=%CD%
start "Trading Signals API" cmd /k "cd /d "%SERVER_DIR%" && title Trading Signals API && npm run dev"
echo [INFO] Waiting for backend to start (5 seconds)...
timeout /t 5 >nul

REM Check if backend is running
echo [INFO] Checking backend health...
curl -s http://localhost:3001/health >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Backend is running!
) else (
    echo [WARNING] Backend might not be ready yet. It will start in background window.
)
echo.

cd ..

REM ========================================
REM Setup Frontend
REM ========================================
echo [INFO] Setting up frontend...

REM Create .env.local if not exists
if not exist ".env.local" (
    echo [INFO] Creating .env.local file...
    (
        echo NEXT_PUBLIC_API_URL=http://localhost:3001
    ) > .env.local
    echo [OK] .env.local file created
)

REM Install frontend dependencies
if not exist "node_modules" (
    echo [INFO] Installing frontend dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install frontend dependencies!
        pause
        exit /b 1
    )
)

REM ========================================
REM Start Frontend
REM ========================================
echo.
echo ========================================
echo   [OK] Starting Frontend...
echo ========================================
echo.
echo Backend API:  http://localhost:3001
echo Frontend:     http://localhost:3000
echo Admin Panel:  http://localhost:3000/admin
echo.
echo Backend is running in separate window "Trading Signals API"
echo If you see "failed to fetch" errors:
echo   1. Check if backend window is open and running
echo   2. Open http://localhost:3001/health in browser
echo   3. Make sure .env.local has: NEXT_PUBLIC_API_URL=http://localhost:3001
echo.
echo Press Ctrl+C to stop frontend
echo (Close backend window separately to stop API)
echo.
echo ========================================
echo.

call npm run dev

