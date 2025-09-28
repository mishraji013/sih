const express = require('express');
const Progress = require('../models/Progress');
const Course = require('../models/Course');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/progress
// @desc    Get user's progress for all courses
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.userId })
      .populate('course', 'title thumbnail instructor')
      .populate('course.instructor', 'name avatar')
      .sort({ lastAccessed: -1 });

    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/progress/:courseId
// @desc    Get progress for specific course
// @access  Private
router.get('/:courseId', auth, async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.userId,
      course: req.params.courseId
    }).populate('course', 'title lessons');

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    res.json(progress);
  } catch (error) {
    console.error('Get course progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/progress/:courseId/lesson/:lessonId
// @desc    Update lesson progress
// @access  Private
router.put('/:courseId/lesson/:lessonId', auth, async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const { completed, timeSpent, score } = req.body;

    let progress = await Progress.findOne({
      user: req.userId,
      course: courseId
    });

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    // Find or create lesson progress
    let lessonProgress = progress.lessonProgress.find(
      lp => lp.lesson.toString() === lessonId
    );

    if (!lessonProgress) {
      lessonProgress = {
        lesson: lessonId,
        completed: false,
        timeSpent: 0,
        attempts: 0
      };
      progress.lessonProgress.push(lessonProgress);
    }

    // Update lesson progress
    if (completed !== undefined) {
      lessonProgress.completed = completed;
      if (completed) {
        lessonProgress.completedAt = new Date();
      }
    }
    if (timeSpent !== undefined) {
      lessonProgress.timeSpent += timeSpent;
    }
    if (score !== undefined) {
      lessonProgress.score = score;
    }
    lessonProgress.attempts += 1;

    // Update overall progress
    const completedLessons = progress.lessonProgress.filter(lp => lp.completed).length;
    progress.completedLessons = completedLessons;
    progress.overallProgress = Math.round((completedLessons / progress.totalLessons) * 100);

    // Check if course is completed
    if (progress.overallProgress === 100 && !progress.certificateEarned) {
      progress.certificateEarned = true;
      progress.certificateIssuedAt = new Date();

      // Add certificate to user
      const user = await User.findById(req.userId);
      user.certificates.push({
        course: courseId,
        issuedAt: new Date()
      });
      await user.save();
    }

    progress.lastAccessed = new Date();
    await progress.save();

    res.json({
      message: 'Progress updated successfully',
      progress
    });
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/progress/certificates
// @desc    Get user's certificates
// @access  Private
router.get('/certificates', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate('certificates.course', 'title thumbnail instructor')
      .populate('certificates.course.instructor', 'name avatar');

    res.json(user.certificates);
  } catch (error) {
    console.error('Get certificates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;