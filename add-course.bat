@echo off
echo 🎓 Adding YouTube Course to EdHub...
echo.

echo 📦 Installing server dependencies (if needed)...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error installing server dependencies
    pause
    exit /b 1
)

echo 🌱 Seeding course with YouTube playlist...
call npm run seed
if %errorlevel% neq 0 (
    echo ❌ Error seeding course
    pause
    exit /b 1
)

cd ..

echo.
echo ✅ Course added successfully!
echo.
echo 📚 Your YouTube playlist course is now available in EdHub!
echo 🎥 Playlist: https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1
echo.
echo 🚀 Start the development servers with: npm run dev
echo.
pause
