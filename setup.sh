#!/bin/bash

echo "🚀 Setting up EdHub Platform..."
echo

echo "📦 Installing root dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error installing root dependencies"
    exit 1
fi

echo "📦 Installing server dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error installing server dependencies"
    exit 1
fi

echo "📦 Installing client dependencies..."
cd ../client
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error installing client dependencies"
    exit 1
fi

cd ..

echo
echo "✅ Setup completed successfully!"
echo
echo "📋 Next steps:"
echo "1. Make sure MongoDB is running on your system"
echo "2. Update the server/.env file with your MongoDB connection string"
echo "3. Run 'npm run dev' to start the development servers"
echo
echo "🌐 The application will be available at:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo
echo "📚 Happy coding! 🚀"
