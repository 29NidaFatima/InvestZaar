import React from 'react';

export const Hero = () => {
  return (
    <>
      {/* Hero Heading */}
      <section className="bg-white px-6 md:px-24 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#4a4a4a] mb-6">
            Charges
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            List of all charges and taxes
          </p>
        </div>
      </section>

      {/* Divider Line */}
       <hr className="border border-gray-200 mx-6 md:mx-24" />

      {/* Pricing Cards Section */}
      <section className="bg-white px-6 md:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Card 1 */}
          <div>
            <img src="\assets\pricing0.svg" alt="Free equity delivery" className="mx-auto h-36 md:h-40 lg:h-44 mb-6"
 />
            <h3 className="text-xl font-semibold text-[#333] mb-2">Free equity delivery</h3>
            <p className="text-gray-600">
              All equity delivery investments (NSE, BSE),<br />
              are absolutely free ₹ 0 brokerage.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img src="\assets\other-trades.svg" alt="Intraday and F&O trades" className="mx-auto h-36 md:h-40 lg:h-44 mb-6"
 />
            <h3 className="text-xl font-semibold text-[#333] mb-2">Intraday and F&O trades</h3>
            <p className="text-gray-600">
              Flat ₹ 20 or 0.03% (whichever is lower) per<br />
              executed order on intraday trades across<br />
              equity, currency, and commodity trades. Flat<br />
              ₹20 on all option trades.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img src="\assets\pricing0.svg" alt="Free direct MF"className="mx-auto h-36 md:h-40 lg:h-44 mb-6"
 />
            <h3 className="text-xl font-semibold text-[#333] mb-2">Free direct MF</h3>
            <p className="text-gray-600 ">
              All direct mutual fund investments are<br />
              absolutely free — ₹ 0 commissions & DP<br />
              charges.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};
