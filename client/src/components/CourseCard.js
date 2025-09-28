import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiStar, 
  FiUsers, 
  FiClock, 
  FiPlay,
  FiAward
} from 'react-icons/fi';
import './CourseCard.css';

const CourseCard = ({ 
  id,
  title, 
  instructor, 
  rating, 
  students, 
  duration, 
  level, 
  price, 
  thumbnail,
  category,
  featured = false
}) => {
  const formatPrice = (price) => {
    return price === 0 ? 'Free' : `$${price}`;
  };

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return '#10b981';
      case 'intermediate':
        return '#f59e0b';
      case 'advanced':
        return '#ef4444';
      default:
        return '#64748b';
    }
  };

  return (
    <motion.div 
      className={`course-card ${featured ? 'featured' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/courses/${id || 'sample-course'}`} className="course-link">
        <div className="course-thumbnail">
          <img 
            src={thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'} 
            alt={title}
            loading="lazy"
          />
          <div className="course-overlay">
            <div className="play-button">
              <FiPlay />
            </div>
          </div>
          {featured && (
            <div className="featured-badge">
              <FiAward />
              Featured
            </div>
          )}
        </div>
        
        <div className="course-content">
          <div className="course-header">
            <h3 className="course-title">{title}</h3>
            <div className="course-instructor">
              by {instructor}
            </div>
          </div>
          
          <div className="course-meta">
            <div className="course-rating">
              <FiStar className="star-icon" />
              <span>{rating}</span>
            </div>
            <div className="course-students">
              <FiUsers />
              <span>{students?.toLocaleString()}</span>
            </div>
            <div className="course-duration">
              <FiClock />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="course-footer">
            <div className="course-level">
              <span 
                className="level-badge"
                style={{ backgroundColor: getLevelColor(level) }}
              >
                {level}
              </span>
            </div>
            <div className="course-price">
              <span className={`price ${price === 0 ? 'free' : ''}`}>
                {formatPrice(price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;