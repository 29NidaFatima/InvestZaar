import React from 'react';

export const Education = () => {
  return (
    <div className="bg-white px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src="/assets/education.svg"
            alt="Education"
            className="w-full max-w-sm mx-auto md:mx-0"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
            Learn investing, the simple way
          </h2>

          <p className="text-gray-700 text-lg mb-2">
            Explore Investzaar Learn your go-to guide to understand the stock market from scratch. Whether you're a beginner or want to sharpen your skills, we make learning easy and practical.
          </p>
          <a
            href="#"
            className="text-lg font-medium inline-flex items-center mb-6"
            style={{
              color: 'rgb(56, 126, 209)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.target.style.color = 'rgb(66, 66, 66)')}
            onMouseOut={(e) => (e.target.style.color = 'rgb(56, 126, 209)')}
          >
            Investzaar Learn <span className="ml-1">→</span>
          </a>

          <p className="text-gray-700 text-lg mb-2">
            Have questions? Join the Investzaar Community  a space where real investors and traders connect, ask, and share ideas every day.
          </p>
          <a
            href="#"
            className="text-lg font-medium inline-flex items-center"
            style={{
              color: 'rgb(56, 126, 209)',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.target.style.color = 'rgb(66, 66, 66)')}
            onMouseOut={(e) => (e.target.style.color = 'rgb(56, 126, 209)')}
          >
            Community Forum <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
