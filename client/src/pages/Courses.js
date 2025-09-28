import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiFilter, 
  FiGrid, 
  FiList,
  FiChevronDown,
  FiStar,
  FiUsers,
  FiClock
} from 'react-icons/fi';
import CourseCard from '../components/CourseCard';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    sortBy: 'newest'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for demonstration
  const mockCourses = [
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
      category: 'web-development'
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
      category: 'data-science'
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
      category: 'mobile-development'
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals',
      instructor: 'Sarah Wilson',
      rating: 4.6,
      students: 750,
      duration: '45 hours',
      level: 'Intermediate',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      category: 'machine-learning'
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      instructor: 'David Brown',
      rating: 4.5,
      students: 420,
      duration: '25 hours',
      level: 'Beginner',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
      category: 'cybersecurity'
    },
    {
      id: 6,
      title: 'DevOps with Docker & Kubernetes',
      instructor: 'Lisa Chen',
      rating: 4.8,
      students: 580,
      duration: '35 hours',
      level: 'Advanced',
      price: 0,
      thumbnail: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400',
      category: 'devops'
    }
  ];

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'devops', label: 'DevOps' }
  ];

  const levels = [
    { value: '', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'students', label: 'Most Popular' }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || course.category === filters.category;
    const matchesLevel = !filters.level || course.level.toLowerCase() === filters.level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (filters.sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.students - a.students;
      case 'oldest':
        return a.id - b.id;
      default:
        return b.id - a.id;
    }
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  if (loading) {
    return (
      <div className="courses-loading">
        <div className="loading-spinner" />
        <p>Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="container">
        <motion.div 
          className="courses-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="courses-title">All Courses</h1>
          <p className="courses-subtitle">
            Discover and learn from our comprehensive collection of coding courses
          </p>
        </motion.div>

        <div className="courses-controls">
          <div className="search-section">
            <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="controls-section">
            <button 
              className={`filter-button ${showFilters ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter />
              Filters
              <FiChevronDown className={`chevron ${showFilters ? 'rotated' : ''}`} />
            </button>

            <div className="view-toggle">
              <button 
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FiGrid />
              </button>
              <button 
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FiList />
              </button>
            </div>
          </div>
        </div>

        {showFilters && (
          <motion.div 
            className="filters-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <select 
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Level</label>
              <select 
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className="filter-select"
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <select 
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="filter-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}

        <div className="courses-results">
          <div className="results-header">
            <p className="results-count">
              {sortedCourses.length} course{sortedCourses.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className={`courses-grid ${viewMode}`}>
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;