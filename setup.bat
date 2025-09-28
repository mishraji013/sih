@echo off
echo 🚀 Setting up EdHub Platform...
echo.

echo 📦 Installing root dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing root dependencies
    pause
    exit /b 1
)

echo 📦 Installing server dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing server dependencies
    pause
    exit /b 1
)

echo 📦 Installing client dependencies...
cd ..\client
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing client dependencies
    pause
    exit /b 1
)

cd ..

echo.
echo ✅ Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Make sure MongoDB is running on your system
echo 2. Update the server\.env file with your MongoDB connection string
echo 3. Run "npm run dev" to start the development servers
echo.
echo 🌐 The application will be available at:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo 📚 Happy coding! 🚀
pause
