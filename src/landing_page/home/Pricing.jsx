import React from 'react';

export const Pricing = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">
Pricing that speaks for itself
          </h1>
          <p className="text-gray-600 text-lg">
Investzaar set a new standard in the industry by introducing flat pricing and eliminating hidden charges. Because trust starts with clarity.
          </p>
          <a
            href="#"
            className="text-lg font-medium flex items-center"
            style={{
              color: '#387ed1',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.target.style.color = 'rgb(66, 66, 66)')}
            onMouseOut={(e) => (e.target.style.color = '#387ed1')}
          >
            See pricing <span className="ml-2">→</span>
          </a>
        </div>

        {/* Right Section with Images and Text Aligned Horizontally */}
        <div className="md:w-1/2 flex flex-row items-start gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="/assets/pricing0.svg" alt="Free Account Opening" className="w-20 h-20" />
            <p className="text-gray-700 text-sm mt-2">Free account<br />opening</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="/assets/pricing0.svg" alt="Free Equity Delivery" className="w-20 h-20" />
            <p className="text-gray-700 text-sm mt-2">
              Free equity delivery<br />and direct mutual funds
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="/assets/other-trades.svg" alt="Intraday and F&O" className="w-20 h-20" />
            <p className="text-gray-700 text-sm mt-2">Intraday and<br />F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
  );
};
