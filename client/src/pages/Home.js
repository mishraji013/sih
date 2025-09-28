import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiZap, FiUsers } from 'react-icons/fi';
import './Home.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import YouTubeVideo from '../components/YouTubeVideo'; // Import YouTubeVideo component

const Home = () => {
  const { isAuthenticated } = useAuth(); // Get authentication status

  const homeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="home-page">
      <motion.section
        className="hero-section"
        variants={homeVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Unlock Your Potential with <br />Cutting-Edge Online Courses
            </h1>
            <p className="hero-description">
              Learn in-demand skills from industry experts. Master new technologies, advance your career, and achieve your goals at your own pace.
            </p>
            <div className="hero-actions">
              <a href="/courses" className="btn btn-primary btn-lg">Explore Courses</a>
              <a href="/register" className="btn btn-outline btn-lg">Join for Free</a>
            </div>
          </div>
          <div className="hero-image">
            {/* You can replace this with an actual image if desired */}
            <div className="hero-placeholder"></div>
          </div>
        </div>
      </motion.section>

      {/* Welcome Video Section - Only shown if authenticated */}
      {isAuthenticated && (
        <motion.section
          className="welcome-video-section"
          variants={homeVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <h2 className="section-title">Welcome to Our Learning Platform!</h2>
            <p className="section-subtitle">Here's a quick introduction to get you started.</p>
            <div className="video-wrapper">
              <YouTubeVideo
                videoUrl="https://youtu.be/uV13Myyoee0"
                title="Welcome to Our Platform"
                description="This video provides an overview of our platform and how to get started with your learning journey."
              />
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        className="features-section"
        variants={homeVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <motion.div className="feature-item" variants={featureVariants}>
              <FiMonitor className="feature-icon" />
              <h3>Flexible Learning</h3>
              <p>Access courses anytime, anywhere, on any device. Learn at your own pace and fit education into your busy schedule.</p>
            </motion.div>
            <motion.div className="feature-item" variants={featureVariants}>
              <FiZap className="feature-icon" />
              <h3>Expert Instructors</h3>
              <p>Learn from seasoned professionals and thought leaders who bring real-world experience and insights to every lesson.</p>
            </motion.div>
            <motion.div className="feature-item" variants={featureVariants}>
              <FiUsers className="feature-icon" />
              <h3>Community Support</h3>
              <p>Connect with a vibrant community of learners. Collaborate, ask questions, and grow together in a supportive environment.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="call-to-action-section"
        variants={homeVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students and transform your skills today.</p>
          <a href="/courses" className="btn btn-primary btn-lg">Browse Courses</a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
