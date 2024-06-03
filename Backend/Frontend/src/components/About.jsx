import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About ReadRipple</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to ReadRipple, the ultimate bookstore app where you can explore, purchase, and review a wide variety of books. Whether you're a casual reader or a dedicated bookworm, ReadRipple provides a seamless and enriching experience for all your reading needs.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          At ReadRipple, we believe in the power of reading to inspire, educate, and transform lives. Our mission is to make books easily accessible and to create a community of passionate readers who can share their insights and recommendations.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our features include:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
          <li>Browse books by categories, bestsellers, and new arrivals</li>
          <li>View detailed information about each book, including author, synopsis, ratings, and reviews</li>
          <li>Read and write reviews for books you've read</li>
          <li>Securely purchase books and track your orders</li>
          <li>Manage your personal library and keep track of your purchased books</li>
          <li>Receive personalized book recommendations based on your reading history and preferences</li>
          <li>Quickly find books by title, author, or ISBN using our powerful search feature</li>
        </ul>
        <p className="text-gray-700 text-lg mb-4">
          Thank you for choosing ReadRipple. Happy reading!
        </p>
      </div>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Go Back
            </button>
          </Link>
    </div>
    </>
  );
};

export default About;