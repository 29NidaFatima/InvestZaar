import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-6 font-medium">
          404 Not Found
        </h2>
        <p className="text-lg md:text-xl font-normal mb-10 leading-relaxed mx-auto max-w-2xl">
          We couldn’t find the page you are looking for.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
