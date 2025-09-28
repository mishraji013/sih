const mongoose = require('mongoose');
const Course = require('./models/Course'); // Adjust the path to your Course model

const courses = [
  {
    title: 'React Basics YouTube Playlist',
    description: 'Learn React from scratch with this comprehensive YouTube playlist.',
    shortDescription: 'Master React basics with hands-on lessons.',
    instructor: '633c1f9e8f1b2a001c8e4b9a', // Replace with a valid instructor ID from your database
    category: 'web-development',
    level: 'beginner',
    language: 'English',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/0.jpg', // Replace VIDEO_ID with the first video ID in the playlist
    lessons: [
      {
        title: 'Introduction to React',
        content: 'This video introduces the basics of React.',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt',
        order: 1,
        quiz: {
          title: 'React Basics Quiz',
          questions: [
            {
              question: 'What is React?',
              options: ['A library', 'A framework', 'A database', 'None of the above'],
              correctAnswer: 0,
              explanation: 'React is a JavaScript library for building user interfaces.',
            },
            {
              question: 'Who developed React?',
              options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
              correctAnswer: 1,
              explanation: 'React was developed by Facebook.',
            },
          ],
        },
        codeTemplate: `// Write a React component
function App() {
  return <h1>Hello, React!</h1>;
}

export default App;`,
        expectedOutput: '<h1>Hello, React!</h1>',
        isPublished: true,
      },
    ],
    tags: ['react', 'javascript', 'frontend'],
    isPublished: true,
    featured: true,
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Learn data structures and algorithms with this YouTube playlist.',
    shortDescription: 'Master DSA with hands-on lessons.',
    instructor: '633c1f9e8f1b2a001c8e4b9a', // Replace with a valid instructor ID
    category: 'data-science',
    level: 'intermediate',
    language: 'English',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/0.jpg', // Replace VIDEO_ID with the first video ID in the playlist
    lessons: [
      {
        title: 'Introduction to DSA',
        content: 'This video introduces data structures and algorithms.',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop',
        order: 1,
        quiz: {
          title: 'DSA Basics Quiz',
          questions: [
            {
              question: 'What is a data structure?',
              options: ['A way to organize data', 'A programming language', 'A database', 'None of the above'],
              correctAnswer: 0,
              explanation: 'A data structure is a way to organize and store data efficiently.',
            },
          ],
        },
        codeTemplate: `// Write a function to reverse an array
function reverseArray(arr) {
  return arr.reverse();
}

// Test the function
console.log(reverseArray([1, 2, 3]));`,
        expectedOutput: '[3, 2, 1]',
        isPublished: true,
      },
    ],
    tags: ['dsa', 'algorithms', 'data structures'],
    isPublished: true,
    featured: true,
  },
  {
    title: 'Full-Stack Development',
    description: 'Learn full-stack development with this YouTube playlist.',
    shortDescription: 'Master full-stack development with hands-on lessons.',
    instructor: '633c1f9e8f1b2a001c8e4b9a', // Replace with a valid instructor ID
    category: 'web-development',
    level: 'advanced',
    language: 'English',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/0.jpg', // Replace VIDEO_ID with the first video ID in the playlist
    lessons: [
      {
        title: 'Introduction to Full-Stack Development',
        content: 'This video introduces full-stack development.',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0',
        order: 1,
        quiz: {
          title: 'Full-Stack Basics Quiz',
          questions: [
            {
              question: 'What is full-stack development?',
              options: ['Frontend development', 'Backend development', 'Both frontend and backend', 'None of the above'],
              correctAnswer: 2,
              explanation: 'Full-stack development involves both frontend and backend development.',
            },
          ],
        },
        codeTemplate: `// Write a simple Express server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Full-Stack!');
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
        expectedOutput: 'Hello, Full-Stack!',
        isPublished: true,
      },
    ],
    tags: ['full-stack', 'web development', 'javascript'],
    isPublished: true,
    featured: true,
  },
];

async function seedCourses() {
  try {
    await mongoose.connect('mongodb://localhost:27017/edhub', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    for (const course of courses) {
      const newCourse = new Course(course);
      await newCourse.save();
      console.log(`✅ Added course: ${course.title}`);
    }

    mongoose.disconnect();
    console.log('✅ All courses added successfully!');
  } catch (error) {
    console.error('❌ Error seeding courses:', error);
  }
}

seedCourses();