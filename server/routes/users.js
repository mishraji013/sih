const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate('enrolledCourses.course', 'title category level')
      .populate('certificates.course', 'title');

    const stats = {
      totalEnrolled: user.enrolledCourses.length,
      completedCourses: user.enrolledCourses.filter(course => course.completed).length,
      certificatesEarned: user.certificates.length,
      coursesByCategory: {},
      coursesByLevel: {}
    };

    // Calculate courses by category
    user.enrolledCourses.forEach(enrolled => {
      if (enrolled.course) {
        const category = enrolled.course.category;
        stats.coursesByCategory[category] = (stats.coursesByCategory[category] || 0) + 1;
        
        const level = enrolled.course.level;
        stats.coursesByLevel[level] = (stats.coursesByLevel[level] || 0) + 1;
      }
    });

    res.json(stats);
  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/enrolled-courses
// @desc    Get user's enrolled courses
// @access  Private
router.get('/enrolled-courses', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate('enrolledCourses.course', 'title thumbnail instructor category level')
      .populate('enrolledCourses.course.instructor', 'name avatar');

    res.json(user.enrolledCourses);
  } catch (error) {
    console.error('Get enrolled courses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;