import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiPlay, 
  FiClock, 
  FiUsers, 
  FiStar, 
  FiBookOpen,
  FiCheckCircle,
  FiArrowRight,
  FiDownload,
  FiShare2
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import YouTubeVideo from '../components/YouTubeVideo';
import LessonContent from '../components/LessonContent';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data
  const mockCourse = {
    id: 1,
    title: 'Complete Web Development Course',
    instructor: {
      name: 'Tech Instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      bio: 'Experienced developer and educator with 10+ years in the industry'
    },
    rating: 4.8,
    students: 1250,
    duration: '50 hours',
    level: 'Beginner',
    price: 0,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    category: 'web-development',
    description: 'Master web development from scratch with this comprehensive course. Learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world applications.',
    shortDescription: 'Learn full-stack web development with modern technologies',
    language: 'English',
    lastUpdated: '2024-01-15',
    lessons: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        duration: '45 min',
        type: 'video',
        completed: false
      },
      {
        id: 2,
        title: 'HTML Fundamentals',
        duration: '2 hours',
        type: 'video',
        completed: false
      },
      {
        id: 3,
        title: 'CSS Styling and Layout',
        duration: '3 hours',
        type: 'video',
        completed: false
      },
      {
        id: 4,
        title: 'JavaScript Basics',
        duration: '4 hours',
        type: 'video',
        completed: false
      },
      {
        id: 5,
        title: 'Build Your First Website',
        duration: '2 hours',
        type: 'coding',
        completed: false
      }
    ],
    learningOutcomes: [
      'Build responsive websites using HTML, CSS, and JavaScript',
      'Understand modern web development practices',
      'Create interactive user interfaces',
      'Deploy websites to the internet',
      'Work with APIs and databases'
    ],
    prerequisites: [
      'Basic computer skills',
      'No programming experience required',
      'Willingness to learn and practice'
    ]
  };

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setCourse(mockCourse);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleEnroll = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/courses/${id}` } } });
      return;
    }
    // Handle enrollment logic here
    console.log('Enrolling in course...');
  };

  const handleStartLearning = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/courses/${id}` } } });
      return;
    }
    // Navigate to first lesson
    console.log('Starting course...');
  };

  if (loading) {
    return (
      <div className="course-detail-loading">
        <div className="loading-spinner" />
        <p>Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/courses')} className="btn btn-primary">
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <div className="container">
        <motion.div 
          className="course-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-breadcrumb">
                <span>Courses</span>
                <span>→</span>
                <span>{course.category.replace('-', ' ')}</span>
              </div>
              
              <h1 className="course-title">{course.title}</h1>
              
              <p className="course-description">{course.description}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <FiUsers />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="meta-item">
                  <FiStar />
                  <span>{course.rating} rating</span>
                </div>
                <div className="meta-item">
                  <FiClock />
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <span className={`level-badge ${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="course-instructor">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="instructor-avatar"
                />
                <div className="instructor-info">
                  <h4>Instructor</h4>
                  <p>{course.instructor.name}</p>
                  <span>{course.instructor.bio}</span>
                </div>
              </div>
            </div>
            
            <div className="course-sidebar">
              <div className="course-card">
                <div className="course-thumbnail">
                  <img src={course.thumbnail} alt={course.title} />
                  <div className="play-overlay">
                    <FiPlay />
                  </div>
                </div>
                
                <div className="course-pricing">
                  <div className="price">
                    {course.price === 0 ? 'Free' : `$${course.price}`}
                  </div>
                  <div className="original-price">
                    {course.price > 0 && '$199'}
                  </div>
                </div>
                
                <div className="course-actions">
                  <button 
                    className="btn btn-primary btn-large"
                    onClick={handleEnroll}
                  >
                    <FiBookOpen />
                    Enroll Now
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={handleStartLearning}
                  >
                    <FiPlay />
                    Start Learning
                  </button>
                </div>
                
                <div className="course-features">
                  <div className="feature">
                    <FiCheckCircle />
                    <span>Lifetime access</span>
                  </div>
                  <div className="feature">
                    <FiCheckCircle />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="feature">
                    <FiCheckCircle />
                    <span>Mobile and desktop</span>
                  </div>
                </div>
                
                <div className="course-share">
                  <button className="share-button">
                    <FiShare2 />
                    Share
                  </button>
                  <button className="share-button">
                    <FiDownload />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="course-content">
          <div className="course-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`tab-button ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <motion.div 
                className="overview-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="learning-outcomes">
                  <h3>What you'll learn</h3>
                  <ul>
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index}>
                        <FiCheckCircle />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="prerequisites">
                  <h3>Requirements</h3>
                  <ul>
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index}>
                        <FiArrowRight />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'curriculum' && (
              <motion.div 
                className="curriculum-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="course-video-section">
                  <YouTubeVideo 
                    videoUrl="https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1"
                    title="Complete Web Development Course Playlist"
                    description="Watch the complete course playlist on YouTube with all lessons and hands-on projects."
                  />
                </div>
                
                <div className="lessons-list">
                  <h3 className="lessons-title">Course Lessons</h3>
                  {course.lessons.map((lesson, index) => (
                    <LessonContent 
                      key={lesson.id || index}
                      lesson={lesson}
                      onComplete={(lessonId, result) => {
                        console.log('Lesson completed:', lessonId, result);
                        // Handle lesson completion
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'instructor' && (
              <motion.div 
                className="instructor-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="instructor-profile">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name}
                    className="instructor-photo"
                  />
                  <div className="instructor-details">
                    <h3>{course.instructor.name}</h3>
                    <p>{course.instructor.bio}</p>
                    <div className="instructor-stats">
                      <div className="stat">
                        <span className="stat-number">4.8</span>
                        <span className="stat-label">Instructor Rating</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">1,250</span>
                        <span className="stat-label">Students</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">5</span>
                        <span className="stat-label">Courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;