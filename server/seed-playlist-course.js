const mongoose = require('mongoose');
const Course = require('./models/Course'); // Adjust the path to your Course model

const playlistCourse = {
  title: 'React Basics YouTube Playlist',
  description: 'A comprehensive React course from YouTube, covering the basics of React development.',
  shortDescription: 'Learn React from scratch with this YouTube playlist.',
  instructor: '633c1f9e8f1b2a001c8e4b9a', // Replace with a valid instructor ID from your database
  category: 'web-development',
  level: 'beginner',
  language: 'English',
  lessons: [
    {
      title: 'React Basics Playlist',
      content: 'This is a YouTube playlist that covers the basics of React.',
      type: 'playlist',
      playlistUrl: 'https://youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt',
      order: 1,
      isPublished: true,
    },
  ],
  tags: ['react', 'javascript', 'frontend', 'web development'],
  isPublished: true,
  featured: true,
};

async function addPlaylistCourse() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name'); // Replace with your MongoDB connection string
    const course = new Course(playlistCourse);
    await course.save();
    console.log('Playlist course added successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error adding playlist course:', error);
  }
}

addPlaylistCourse();