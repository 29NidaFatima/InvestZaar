import React from 'react';

export const Team = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-16 text-gray-800">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#4a4a4a]">People</h2>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        
        {/* Left Side - Image & Name */}
        <div className="w-full md:w-1/2 pl-28 text-left flex flex-col items-start">
          <img
            src="/assets/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-medium pl-10">Nithin Kamath</h3>
          <p className="text-sm text-gray-500 pl-10">Founder, CEO</p>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-1/2 text-left text-gray-700 space-y-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="space-x-2">
            Connect on{' '}
            <a
              href="#"
              className="transition font-medium text-large"
              style={{ color: 'rgb(56, 126, 209)' }}
              onMouseOver={(e) => (e.target.style.color = 'rgb(66,66,66)')}
              onMouseOut={(e) => (e.target.style.color = 'rgb(56, 126, 209)')}
            >
              Homepage
            </a>{' / '}
            <a
              href="#"
              className="transition font-medium text-large"
              style={{ color: 'rgb(56, 126, 209)' }}
              onMouseOver={(e) => (e.target.style.color = 'rgb(66,66,66)')}
              onMouseOut={(e) => (e.target.style.color = 'rgb(56, 126, 209)')}
            >
              TradingQnA
            </a>{' / '}
            <a
              href="#"
              className="transition font-medium text-large"
              style={{ color: 'rgb(56, 126, 209)' }}
              onMouseOver={(e) => (e.target.style.color = 'rgb(66,66,66)')}
              onMouseOut={(e) => (e.target.style.color = 'rgb(56, 126, 209)')}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
