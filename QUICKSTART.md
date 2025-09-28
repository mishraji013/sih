# 🚀 EdHub Quick Start Guide

Get your EdHub learning platform up and running in just a few minutes!

## ⚡ Quick Setup (5 minutes)

### 1. Prerequisites
Make sure you have these installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/atlas) (cloud)

### 2. Clone and Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd edhub-platform

# Run the setup script
node setup.js
```

### 3. Start Development Servers
```bash
npm run dev
```

That's it! 🎉 Your EdHub platform is now running:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 🎯 What You Get

### For Students
- ✅ Beautiful, modern learning interface
- ✅ Course browsing with search and filters
- ✅ Progress tracking and certificates
- ✅ Personal dashboard and profile
- ✅ Mobile-responsive design

### For Instructors
- ✅ Course creation and management
- ✅ Student progress monitoring
- ✅ Certificate generation
- ✅ Analytics and insights

### For Administrators
- ✅ User management
- ✅ Course approval system
- ✅ Platform analytics
- ✅ Content moderation

## 🏗️ Project Structure

```
edhub-platform/
├── client/          # React frontend (Port 3000)
├── server/          # Node.js backend (Port 5000)
├── package.json     # Root package.json
└── README.md        # Detailed documentation
```

## 🔧 Configuration

### Environment Variables
Edit `server/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/edhub
JWT_SECRET=your_secure_secret_key
PORT=5000
NODE_ENV=development
```

### MongoDB Setup
**Option 1: Local MongoDB**
```bash
# Install MongoDB locally
# Start MongoDB service
mongod
```

**Option 2: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🎨 Customization

### Branding
- Update colors in `client/src/index.css`
- Change logo in `client/src/components/Navbar.js`
- Modify site title in `client/public/index.html`

### Features
- Add new course categories in `server/models/Course.js`
- Customize user roles in `server/models/User.js`
- Modify course structure in database models

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'build' folder
```

### Backend (Heroku/Railway)
```bash
# Set environment variables
# Deploy server folder
```

### Database
- Use MongoDB Atlas for production
- Update connection string in environment variables

## 🧪 Testing the Platform

### 1. Register a New Account
- Go to http://localhost:3000/register
- Create a student account
- Explore the dashboard

### 2. Browse Courses
- Visit http://localhost:3000/courses
- Use search and filters
- View course details

### 3. Test Features
- User authentication
- Course enrollment
- Progress tracking
- Profile management

## 🆘 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3000 or 5000
npx kill-port 3000
npx kill-port 5000
```

**MongoDB connection issues**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check firewall settings

**Dependencies issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Clear React build cache
cd client
rm -rf build node_modules
npm install
```

## 📱 Mobile Testing

Test on mobile devices:
1. Use browser developer tools
2. Test on actual mobile devices
3. Check responsive design

## 🔒 Security Notes

- Change default JWT secret
- Use environment variables for secrets
- Enable HTTPS in production
- Regular security updates

## 📈 Performance Tips

- Use MongoDB indexes for better queries
- Optimize images and assets
- Enable gzip compression
- Use CDN for static assets

## 🎯 Next Steps

1. **Customize the platform** for your needs
2. **Add your content** and courses
3. **Configure authentication** settings
4. **Set up analytics** and monitoring
5. **Deploy to production**

## 📞 Support

- 📧 Email: support@edhub.com
- 📚 Documentation: See README.md
- 🐛 Issues: Create GitHub issue
- 💬 Community: Join our Discord

---

**Happy Learning! 🎓**

*Built with ❤️ for the coding education community*
