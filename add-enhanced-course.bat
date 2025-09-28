@echo off
echo 🎓 Adding Enhanced Course with Quizzes and Coding Exercises...
echo.

echo 📦 Installing server dependencies (if needed)...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing server dependencies
    pause
    exit /b 1
)

echo 🌱 Seeding enhanced course with interactive content...
call npm run seed
if %errorlevel% neq 0 (
    echo ❌ Error seeding course
    pause
    exit /b 1
)

cd ..

echo.
echo ✅ Enhanced course added successfully!
echo.
echo 🎯 Features Added:
echo   📚 YouTube Playlist Integration
echo   🧠 Interactive Quizzes (3 quizzes)
echo   💻 Code Compiler (3 coding exercises)
echo   📊 Progress Tracking
echo   🏆 Achievement System
echo.
echo 🚀 Start the development servers with: npm run dev
echo.
echo 📱 Access your enhanced learning platform at:
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:5000
echo.
pause
