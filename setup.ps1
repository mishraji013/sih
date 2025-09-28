Write-Host "🚀 Setting up EdHub Platform..." -ForegroundColor Green
Write-Host ""

Write-Host "📦 Installing root dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error installing root dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing server dependencies..." -ForegroundColor Yellow
Set-Location server
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error installing server dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "📦 Installing client dependencies..." -ForegroundColor Yellow
Set-Location ..\client
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error installing client dependencies" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Set-Location ..

Write-Host ""
Write-Host "✅ Setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Make sure MongoDB is running on your system"
Write-Host "2. Update the server\.env file with your MongoDB connection string"
Write-Host "3. Run 'npm run dev' to start the development servers"
Write-Host ""
Write-Host "🌐 The application will be available at:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000"
Write-Host "   Backend:  http://localhost:5000"
Write-Host ""
Write-Host "📚 Happy coding! 🚀" -ForegroundColor Green
Read-Host "Press Enter to continue"
