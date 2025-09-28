import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiBookOpen, 
  FiTrendingUp, 
  FiAward, 
  FiClock,
  FiPlay,
  FiCheckCircle,
  FiTarget,
  FiBarChart
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    enrolledCourses: 0,
    completedCourses: 0,
    certificatesEarned: 0,
    hoursLearned: 0
  });
  const [recentCourses, setRecentCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockStats = {
    enrolledCourses: 5,
    completedCourses: 2,
    certificatesEarned: 2,
    hoursLearned: 45
  };

  const mockRecentCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1250,
      duration: '40 hours',
      level: 'Beginner',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      progress: 65
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 890,
      duration: '35 hours',
      level: 'Intermediate',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      progress: 30
    },
    {
      id: 3,
      title: 'React Native Mobile Development',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 650,
      duration: '30 hours',
      level: 'Advanced',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      progress: 0
    }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setStats(mockStats);
      setRecentCourses(mockRecentCourses);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      icon: <FiBookOpen />,
      title: 'Enrolled Courses',
      value: stats.enrolledCourses,
      color: '#667eea'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Completed',
      value: stats.completedCourses,
      color: '#10b981'
    },
    {
      icon: <FiAward />,
      title: 'Certificates',
      value: stats.certificatesEarned,
      color: '#f59e0b'
    },
    {
      icon: <FiClock />,
      title: 'Hours Learned',
      value: stats.hoursLearned,
      color: '#8b5cf6'
    }
  ];

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner" />
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="welcome-section">
            <h1 className="dashboard-title">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="dashboard-subtitle">
              Continue your learning journey and achieve your goals
            </p>
          </div>
        </motion.div>

        <div className="dashboard-stats">
          {statCards.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="dashboard-main">
            <motion.div 
              className="section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="section-header">
                <h2 className="section-title">Continue Learning</h2>
                <Link to="/courses" className="section-link">
                  View All
                </Link>
              </div>
              
              <div className="courses-grid">
                {recentCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="course-card-with-progress">
                      <CourseCard {...course} />
                      <div className="course-progress">
                        <div className="progress-header">
                          <span className="progress-label">Progress</span>
                          <span className="progress-percentage">{course.progress}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <button className="continue-button">
                          <FiPlay />
                          Continue
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="section-header">
                <h2 className="section-title">Recommended for You</h2>
                <Link to="/courses" className="section-link">
                  Browse All
                </Link>
              </div>
              
              <div className="recommendations">
                <div className="recommendation-card">
                  <div className="recommendation-icon">
                    <FiTarget />
                  </div>
                  <div className="recommendation-content">
                    <h3>Complete Your Web Development Journey</h3>
                    <p>Finish the remaining courses to earn your certificate</p>
                    <Link to="/courses" className="recommendation-link">
                      View Courses
                    </Link>
                  </div>
                </div>
                
                <div className="recommendation-card">
                  <div className="recommendation-icon">
                    <FiBarChart />
                  </div>
                  <div className="recommendation-content">
                    <h3>Track Your Progress</h3>
                    <p>See detailed analytics of your learning journey</p>
                    <Link to="/profile" className="recommendation-link">
                      View Analytics
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="dashboard-sidebar">
            <motion.div 
              className="sidebar-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="sidebar-title">Quick Actions</h3>
              <div className="quick-actions">
                <Link to="/courses" className="quick-action">
                  <FiBookOpen />
                  <span>Browse Courses</span>
                </Link>
                <Link to="/profile" className="quick-action">
                  <FiAward />
                  <span>My Certificates</span>
                </Link>
                <Link to="/courses?featured=true" className="quick-action">
                  <FiTrendingUp />
                  <span>Featured Courses</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="sidebar-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="sidebar-title">Learning Streak</h3>
              <div className="streak-card">
                <div className="streak-number">7</div>
                <div className="streak-label">Days in a row</div>
                <div className="streak-progress">
                  <div className="streak-bar">
                    <div className="streak-fill" style={{ width: '70%' }} />
                  </div>
                  <span>Keep it up!</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;