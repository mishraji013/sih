# 🎓 EdHub - Learning Platform for Students

A comprehensive coding learning platform built with React, Node.js, and MongoDB. Perfect for students who want to learn how to code with interactive courses and hands-on practice.

## ✨ Features

- **Interactive Learning**: Hands-on coding exercises with real-time feedback
- **Course Management**: Comprehensive course catalog with categories and levels
- **User Authentication**: Secure login and registration system
- **Progress Tracking**: Track your learning journey and earn certificates
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Search & Filter**: Find courses by category, level, and keywords
- **Dashboard**: Personalized learning dashboard with statistics
- **Certificates**: Earn certificates upon course completion

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd edhub-platform
   ```

2. **Run the setup script**
   
   **Windows:**
   ```bash
   setup.bat
   ```
   
   **Mac/Linux:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example environment file
   cp server/env.example server/.env
   
   # Edit the .env file with your MongoDB connection string
   # MONGODB_URI=mongodb://localhost:27017/edhub
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
edhub-platform/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── ...
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── config/            # Configuration files
│   └── package.json
├── package.json            # Root package.json
└── README.md
```

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run server` - Start only the backend
- `npm run client` - Start only the frontend
- `npm run build` - Build the frontend for production

### Server
- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with nodemon

### Client
- `npm start` - Start the React development server
- `npm run build` - Build the app for production
- `npm test` - Run tests

## 🗄️ Database Schema

### User Model
- Personal information (name, email, bio)
- Authentication (password, role)
- Learning progress (enrolled courses, certificates)
- Skills and preferences

### Course Model
- Course details (title, description, instructor)
- Content (lessons, videos, exercises)
- Metadata (category, level, duration)
- Enrollment and rating information

### Progress Model
- User progress tracking
- Lesson completion status
- Time spent and scores
- Certificate eligibility

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb://localhost:27017/edhub
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

### MongoDB Setup

1. **Local MongoDB:**
   ```bash
   # Install MongoDB
   # Start MongoDB service
   mongod
   ```

2. **MongoDB Atlas (Cloud):**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a cluster
   - Get your connection string
   - Update the `MONGODB_URI` in your `.env` file

## 🎨 Customization

### Adding New Courses
1. Use the course creation API endpoint
2. Add course content through the admin interface
3. Configure lessons and exercises

### Styling
- Modify CSS files in `client/src/`
- Update color schemes in `index.css`
- Customize components in `components/` directory

### Features
- Add new API endpoints in `server/routes/`
- Create new React components in `client/src/components/`
- Update database models in `server/models/`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the `client/build` folder
3. Set environment variables for API URL

### Backend (Heroku/Railway)
1. Set up MongoDB Atlas
2. Configure environment variables
3. Deploy the `server` folder
4. Update CORS settings for production domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. Check the console for error messages
2. Ensure MongoDB is running
3. Verify environment variables are set correctly
4. Check that all dependencies are installed

## 🎯 Roadmap

- [ ] Interactive coding environment
- [ ] Video streaming integration
- [ ] Mobile app development
- [ ] Advanced analytics
- [ ] Social learning features
- [ ] AI-powered recommendations

---

**Happy Learning! 🚀📚**