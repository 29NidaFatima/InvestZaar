import React from 'react';

export const Awards = () => {
  return (
    <div className="p-5 md:p-10 mb-10 bg-white mt-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">
            Built on Trust
          </h1>

          <div>
            <h2 className="text-2xl font-medium text-gray-700 mb-1">
              Customer-first always
            </h2>
            <p className="text-gray-600">
              At Investzaar,our customer-first philosophy has earned the confidence of over 1.6 crore investors who collectively hold ₹6+ lakh crores in equity investments ,contributing to 15% of daily retail trading volumes in India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-700 mb-1">
              No Noise. Just Value.
            </h2>
            <p className="text-gray-600">
              Forget gimmicks, spam, or flashy distractions. Investzaar delivers a clean, focused experience no push notifications, no “gamified” tricks. Just seamless tools that work the way <em>you</em> want.{' '}
              <span
                className="cursor-pointer"
                style={{
                  color: '#387ed1',
                  textDecoration: 'none',
                }}
                onMouseOver={e => (e.target.style.color = 'rgb(66, 66, 66)')}
                onMouseOut={e => (e.target.style.color = '#387ed1')}
              >
                Our philosophies.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-700 mb-1">
              Smarter Investing, Together
            </h2>
            <p className="text-gray-600">
              With thoughtful features like Nudge and Kill Switch, we go beyond transactions,empowering you to make mindful, informed financial decisions that support your long-term goals.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/assets/ecosystem.png"
            alt="Investzaar Ecosystem"
            className="w-full h-auto max-w-xxl mb-6"
          />

          <div className="flex gap-6">
            {['Explore our products', 'Try Investzaar demo'].map((text, index) => (
              <a
                key={index}
                href="#"
                className="font-medium text-lg flex items-center transition-colors duration-200"
                style={{
                  color: '#387ed1',
                  textDecoration: 'none',
                }}
                onMouseOver={e => (e.target.style.color = 'rgb(66, 66, 66)')}
                onMouseOut={e => (e.target.style.color = '#387ed1')}
              >
                {text} <span className="ml-2">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer image */}
      <div className="mt-16 text-center">
        <img
          src="/assets/pressLogos.png"
          alt="Press Logos"
          className="mx-auto w-full max-w-4xl"
        />
      </div>
    </div>
  );
};
