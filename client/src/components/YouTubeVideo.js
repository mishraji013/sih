import React from 'react';
import YouTubeVideo from './YouTubeVideo';

const LessonContent = ({ lesson }) => {
  return (
    <div className="lesson-content">
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      {lesson.type === 'video' && (
        <YouTubeVideo 
          videoUrl={lesson.videoUrl} 
          title={lesson.title} 
          description={lesson.description} // Pass the description if available
        />
      )}
    </div>
  );
};

export default LessonContent;
