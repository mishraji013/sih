const mongoose = require('mongoose');
const Course = require('./models/Course');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/edhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedCourses = async () => {
  try {
    // Create a sample instructor
    const instructor = new User({
      name: 'Tech Instructor',
      email: 'instructor@edhub.com',
      password: 'password123',
      role: 'instructor',
      bio: 'Experienced developer and educator with 10+ years in the industry'
    });

    await instructor.save();

    // Create course with YouTube playlist
    const course = new Course({
      title: 'Complete Web Development Course',
      description: 'Master web development from scratch with this comprehensive course. Learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world applications.',
      shortDescription: 'Learn full-stack web development with modern technologies',
      instructor: instructor._id,
      category: 'web-development',
      level: 'beginner',
      language: 'English',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      price: 0,
      isFree: true,
      duration: 50, // hours
      lessons: [
        {
          title: 'Introduction to Web Development',
          content: 'Welcome to the course! In this lesson, we\'ll cover the basics of web development and what you\'ll learn throughout this course.',
          type: 'video',
          duration: 15,
          order: 1,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'HTML Fundamentals Quiz',
          content: 'Test your knowledge of HTML basics with this interactive quiz.',
          type: 'quiz',
          duration: 10,
          order: 2,
          quiz: {
            title: 'HTML Fundamentals Quiz',
            questions: [
              {
                question: 'What does HTML stand for?',
                options: [
                  'HyperText Markup Language',
                  'High Tech Modern Language',
                  'Home Tool Markup Language',
                  'Hyperlink and Text Markup Language'
                ],
                correctAnswer: 0,
                explanation: 'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.'
              },
              {
                question: 'Which HTML tag is used to create a hyperlink?',
                options: ['<link>', '<a>', '<href>', '<url>'],
                correctAnswer: 1,
                explanation: 'The <a> tag is used to create hyperlinks in HTML.'
              },
              {
                question: 'What is the correct HTML for creating a heading?',
                options: ['<h>', '<head>', '<heading>', '<h1>'],
                correctAnswer: 3,
                explanation: 'HTML headings are created using <h1> through <h6> tags.'
              }
            ]
          },
          isPublished: true
        },
        {
          title: 'HTML Practice Exercise',
          content: 'Practice writing HTML code with this hands-on exercise.',
          type: 'coding',
          duration: 20,
          order: 3,
          language: 'html',
          codeTemplate: `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <!-- Write your HTML code here -->
    <h1>Welcome to my website!</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`,
          expectedOutput: 'Welcome to my website!',
          isPublished: true
        },
        {
          title: 'HTML Fundamentals',
          content: 'Learn the building blocks of web development with HTML. We\'ll cover semantic markup, forms, and accessibility.',
          type: 'video',
          duration: 45,
          order: 2,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'CSS Styling and Layout',
          content: 'Make your websites beautiful with CSS. Learn about flexbox, grid, responsive design, and modern CSS techniques.',
          type: 'video',
          duration: 60,
          order: 4,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'CSS Quiz',
          content: 'Test your CSS knowledge with this comprehensive quiz.',
          type: 'quiz',
          duration: 15,
          order: 5,
          quiz: {
            title: 'CSS Fundamentals Quiz',
            questions: [
              {
                question: 'Which CSS property is used to change the text color?',
                options: ['text-color', 'color', 'font-color', 'text-style'],
                correctAnswer: 1,
                explanation: 'The "color" property is used to set the color of text in CSS.'
              },
              {
                question: 'What does CSS stand for?',
                options: [
                  'Cascading Style Sheets',
                  'Computer Style Sheets',
                  'Creative Style Sheets',
                  'Colorful Style Sheets'
                ],
                correctAnswer: 0,
                explanation: 'CSS stands for Cascading Style Sheets.'
              },
              {
                question: 'Which CSS property is used to control the spacing between elements?',
                options: ['spacing', 'margin', 'padding', 'gap'],
                correctAnswer: 1,
                explanation: 'The "margin" property controls the space outside an element, while "padding" controls the space inside.'
              }
            ]
          },
          isPublished: true
        },
        {
          title: 'CSS Practice Exercise',
          content: 'Practice CSS styling with this hands-on coding exercise.',
          type: 'coding',
          duration: 25,
          order: 6,
          language: 'css',
          codeTemplate: `/* Style the following HTML elements */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

.header {
    /* Add your styles here */
    background-color: #667eea;
    color: white;
    padding: 20px;
    text-align: center;
}

.button {
    /* Style the button */
    background-color: #10b981;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}`,
          expectedOutput: 'Styled header and button',
          isPublished: true
        },
        {
          title: 'JavaScript Basics',
          content: 'Add interactivity to your websites with JavaScript. Learn variables, functions, DOM manipulation, and ES6+ features.',
          type: 'video',
          duration: 90,
          order: 7,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'JavaScript Quiz',
          content: 'Test your JavaScript knowledge with this interactive quiz.',
          type: 'quiz',
          duration: 20,
          order: 8,
          quiz: {
            title: 'JavaScript Fundamentals Quiz',
            questions: [
              {
                question: 'Which keyword is used to declare a variable in JavaScript?',
                options: ['var', 'let', 'const', 'All of the above'],
                correctAnswer: 3,
                explanation: 'JavaScript supports var, let, and const for variable declaration, each with different scoping rules.'
              },
              {
                question: 'What will console.log(typeof null) output?',
                options: ['null', 'undefined', 'object', 'string'],
                correctAnswer: 2,
                explanation: 'In JavaScript, typeof null returns "object" due to a historical bug in the language.'
              },
              {
                question: 'Which method is used to add an element to the end of an array?',
                options: ['push()', 'append()', 'add()', 'insert()'],
                correctAnswer: 0,
                explanation: 'The push() method adds one or more elements to the end of an array.'
              }
            ]
          },
          isPublished: true
        },
        {
          title: 'JavaScript Coding Exercise',
          content: 'Practice JavaScript programming with this hands-on exercise.',
          type: 'coding',
          duration: 30,
          order: 9,
          language: 'javascript',
          codeTemplate: `// Write a function that calculates the factorial of a number
function factorial(n) {
    // Your code here
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test your function
console.log(factorial(5)); // Should output 120
console.log(factorial(3)); // Should output 6`,
          expectedOutput: '120',
          isPublished: true
        },
        {
          title: 'React Development',
          content: 'Build modern user interfaces with React. Learn components, state management, hooks, and routing.',
          type: 'video',
          duration: 120,
          order: 5,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'Node.js Backend Development',
          content: 'Create server-side applications with Node.js. Learn Express.js, databases, authentication, and API development.',
          type: 'video',
          duration: 100,
          order: 6,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'Database Integration',
          content: 'Connect your applications to databases. Learn MongoDB, SQL, and data modeling.',
          type: 'video',
          duration: 75,
          order: 7,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'Deployment and DevOps',
          content: 'Deploy your applications to production. Learn about hosting, CI/CD, and best practices.',
          type: 'video',
          duration: 60,
          order: 8,
          videoUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1',
          isPublished: true
        },
        {
          title: 'Final Project',
          content: 'Build a complete full-stack application using everything you\'ve learned. This is your capstone project!',
          type: 'coding',
          duration: 180,
          order: 9,
          codeTemplate: `// Your final project code goes here
// Build something amazing!`,
          isPublished: true
        }
      ],
      prerequisites: [
        'Basic computer skills',
        'No programming experience required',
        'Willingness to learn and practice'
      ],
      learningOutcomes: [
        'Build responsive websites using HTML, CSS, and JavaScript',
        'Create dynamic web applications with React',
        'Develop server-side applications with Node.js',
        'Work with databases and APIs',
        'Deploy applications to production',
        'Understand modern web development practices'
      ],
      tags: ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb', 'web-development'],
      isPublished: true,
      featured: true
    });

    await course.save();

    console.log('✅ Course with YouTube playlist created successfully!');
    console.log('📚 Course ID:', course._id);
    console.log('🎥 YouTube Playlist:', 'https://youtube.com/playlist?list=PLxgZQoSe9cg0U9A6mV-hztKBN_T9UL9Zq&si=_MT4pzYo4aRQJRJ1');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
