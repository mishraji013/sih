import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiRotateCcw, FiAward } from 'react-icons/fi';
import './Quiz.css';

const Quiz = ({ quiz, onComplete, lessonId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100);
    setScore(finalScore);
    setIsCompleted(true);
    if (onComplete) {
      onComplete(finalScore, lessonId);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setIsCompleted(false);
  };

  const currentQ = quiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;
  const isAnswerSelected = selectedAnswers[currentQuestion] !== undefined;

  if (showResults) {
    return (
      <motion.div 
        className="quiz-results"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="results-header">
          <div className={`score-circle ${score >= 70 ? 'pass' : 'fail'}`}>
            <span className="score-number">{score}</span>
            <span className="score-label">%</span>
          </div>
          <h3 className="results-title">
            {score >= 70 ? 'Congratulations!' : 'Keep Learning!'}
          </h3>
          <p className="results-subtitle">
            {score >= 70 
              ? 'You passed the quiz! Great job!' 
              : 'Don\'t worry, practice makes perfect!'
            }
          </p>
        </div>

        <div className="results-breakdown">
          {quiz.questions.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            return (
              <div key={index} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="result-icon">
                  {isCorrect ? <FiCheckCircle /> : <FiXCircle />}
                </div>
                <div className="result-content">
                  <h4>{question.question}</h4>
                  <p className="result-explanation">
                    {question.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="results-actions">
          <button className="btn btn-outline" onClick={resetQuiz}>
            <FiRotateCcw />
            Retake Quiz
          </button>
          {score >= 70 && (
            <button className="btn btn-primary" onClick={() => onComplete && onComplete(score, lessonId)}>
              <FiAward />
              Continue Learning
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
        </div>
        <h3 className="quiz-title">Quiz: {quiz.title}</h3>
      </div>

      <div className="quiz-content">
        <div className="question-container">
          <h4 className="question-text">{currentQ.question}</h4>
          <div className="options-container">
            {currentQ.options.map((option, index) => (
              <label 
                key={index} 
                className={`option-item ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={index}
                  checked={selectedAnswers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(currentQuestion, index)}
                />
                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="quiz-navigation">
          <button 
            className="btn btn-outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!isAnswerSelected}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
