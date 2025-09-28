const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  lessonProgress: [{
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: Date,
    timeSpent: {
      type: Number,
      default: 0 // in minutes
    },
    score: Number, // for quizzes
    attempts: {
      type: Number,
      default: 0
    }
  }],
  overallProgress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  completedLessons: {
    type: Number,
    default: 0
  },
  totalLessons: {
    type: Number,
    required: true
  },
  lastAccessed: {
    type: Date,
    default: Date.now
  },
  certificateEarned: {
    type: Boolean,
    default: false
  },
  certificateIssuedAt: Date
}, {
  timestamps: true
});

// Ensure one progress record per user per course
progressSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);