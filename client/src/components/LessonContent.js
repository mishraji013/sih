import React, { useState } from 'react';
import { motion } from 'framer-motion';
import YouTubeVideo from './YouTubeVideo';
import Quiz from './Quiz';
import CodeCompiler from './CodeCompiler';
import { FiPlay, FiCheckCircle, FiCode, FiHelpCircle } from 'react-icons/fi';
import './LessonContent.css';

const LessonContent = ({ lesson, onComplete, onProgress }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleQuizComplete = (score, lessonId) => {
    if (score >= 70) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete(lessonId, { type: 'quiz', score });
      }
    }
  };

  const handleCodeComplete = (success) => {
    if (success) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete(lesson.id, { type: 'coding', success });
      }
    }
  };

  const handleVideoComplete = () => {
    setIsCompleted(true);
    if (onComplete) {
      onComplete(lesson.id, { type: 'video' });
    }
  };

  const renderContent = () => {
    switch (lesson.type) {
      case 'video':
        return (
          <div className="video-lesson">
            <YouTubeVideo 
              videoUrl={lesson.videoUrl}
              title={lesson.title}
            />
            <div className="lesson-actions">
              <button 
                className="btn btn-primary"
                onClick={handleVideoComplete}
                disabled={isCompleted}
              >
                <FiCheckCircle />
                {isCompleted ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="quiz-lesson">
            <div className="lesson-header">
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.content}</p>
            </div>
            <Quiz 
              quiz={lesson.quiz}
              onComplete={handleQuizComplete}
              lessonId={lesson.id}
            />
          </div>
        );

      case 'coding':
        return (
          <div className="coding-lesson">
            <div className="lesson-header">
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.content}</p>
            </div>
            <CodeCompiler 
              template={lesson.codeTemplate}
              expectedOutput={lesson.expectedOutput}
              language={lesson.language}
              onComplete={handleCodeComplete}
            />
          </div>
        );

      case 'text':
        return (
          <div className="text-lesson">
            <div className="lesson-header">
              <h3 className="lesson-title">{lesson.title}</h3>
              <div className="lesson-content">
                <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
              </div>
            </div>
            <div className="lesson-actions">
              <button 
                className="btn btn-primary"
                onClick={() => handleVideoComplete()}
                disabled={isCompleted}
              >
                <FiCheckCircle />
                {isCompleted ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="unknown-lesson">
            <div className="lesson-header">
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.content}</p>
            </div>
            <div className="lesson-actions">
              <button 
                className="btn btn-primary"
                onClick={() => handleVideoComplete()}
                disabled={isCompleted}
              >
                <FiCheckCircle />
                {isCompleted ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      className={`lesson-content ${lesson.type} ${isCompleted ? 'completed' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lesson-meta">
        <div className="lesson-type-badge">
          {lesson.type === 'video' && <FiPlay />}
          {lesson.type === 'quiz' && <FiHelpCircle />}
          {lesson.type === 'coding' && <FiCode />}
          <span>{lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}</span>
        </div>
        <div className="lesson-duration">
          {lesson.duration} min
        </div>
        {isCompleted && (
          <div className="completion-badge">
            <FiCheckCircle />
            <span>Completed</span>
          </div>
        )}
      </div>

      {renderContent()}
    </motion.div>
  );
};

export default LessonContent;
