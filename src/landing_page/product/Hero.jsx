import React from 'react';

export const Hero = () => {
  return (
    <>
    <section className="bg-white px-6 md:px-24 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#4a4a4a] mb-6">
          InvestZaar Products
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Sleek, modern, and intuitive trading platforms
        </p>

        <p className="text-base md:text-lg text-gray-500 mb-8">
          Check out our{' '}
          <span className="inline-block">
            <a
              href="#"
              className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition-colors duration-200"
            >
              investment offerings →
            </a>
          </span>
        </p>
      </div>
    </section>
    <hr className="border border-gray-200 mx-6 md:mx-24" />

</>
  );
};
