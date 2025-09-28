import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiPlay, 
  FiUsers, 
  FiAward, 
  FiCode, 
  FiTrendingUp,
  FiStar,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Interactive Learning',
      description: 'Learn by doing with hands-on coding exercises and real-time feedback.'
    },
    {
      icon: <FiUsers />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: <FiAward />,
      title: 'Certificates',
      description: 'Earn industry-recognized certificates upon course completion.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Career Growth',
      description: 'Build skills that matter and advance your career in tech.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students' },
    { number: '500+', label: 'Courses' },
    { number: '50+', label: 'Instructors' },
    { number: '95%', label: 'Success Rate' }
  ];

  const categories = [
    { name: 'Web Development', icon: '🌐', count: 120 },
    { name: 'Mobile Development', icon: '📱', count: 85 },
    { name: 'Data Science', icon: '📊', count: 95 },
    { name: 'Machine Learning', icon: '🤖', count: 75 },
    { name: 'Cybersecurity', icon: '🔒', count: 60 },
    { name: 'DevOps', icon: '⚙️', count: 45 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Learn to Code with
              <span className="gradient-text"> Interactive Courses</span>
            </h1>
            <p className="hero-subtitle">
              Master in-demand programming skills with hands-on projects, 
              expert guidance, and industry-recognized certificates.
            </p>
            <div className="hero-cta">
              <Link to="/courses" className="btn btn-primary btn-large">
                <FiPlay />
                Start Learning
              </Link>
              <Link to="/register" className="btn btn-outline btn-large">
                Join Free
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <div className="window-title">EdHub Learning Platform</div>
              </div>
              <div className="window-content">
                <div className="code-line">
                  <span className="keyword">const</span> 
                  <span className="variable"> student</span> = 
                  <span className="string"> "ready to learn"</span>;
                </div>
                <div className="code-line">
                  <span className="keyword">function</span> 
                  <span className="function"> buildSkills</span>() {'{'}
                </div>
                <div className="code-line indent">
                  <span className="keyword">return</span> 
                  <span className="string"> "success"</span>;
                </div>
                <div className="code-line">{'}'}</div>
                <div className="code-line">
                  <span className="comment">// Start your coding journey today!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose EdHub?</h2>
            <p className="section-subtitle">
              We provide the best learning experience with cutting-edge technology 
              and expert instruction.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Explore Categories</h2>
            <p className="section-subtitle">
              Find the perfect course for your learning goals
            </p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                className="category-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} Courses</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-subtitle">
              Start with these popular courses recommended by our community
            </p>
          </motion.div>

          <div className="courses-grid">
            <CourseCard 
              title="Complete Web Development Bootcamp"
              instructor="John Doe"
              rating={4.8}
              students={1250}
              duration="40 hours"
              level="Beginner"
              price={0}
              thumbnail="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
            />
            <CourseCard 
              title="Python for Data Science"
              instructor="Jane Smith"
              rating={4.9}
              students={890}
              duration="35 hours"
              level="Intermediate"
              price={0}
              thumbnail="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
            />
            <CourseCard 
              title="React Native Mobile Development"
              instructor="Mike Johnson"
              rating={4.7}
              students={650}
              duration="30 hours"
              level="Advanced"
              price={0}
              thumbnail="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
            />
          </div>

          <motion.div 
            className="section-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/courses" className="btn btn-primary btn-large">
              View All Courses
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Start Your Coding Journey?</h2>
            <p className="cta-subtitle">
              Join thousands of students who are already building their future with EdHub
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Get Started Free
              </Link>
              <Link to="/courses" className="btn btn-outline btn-large">
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;