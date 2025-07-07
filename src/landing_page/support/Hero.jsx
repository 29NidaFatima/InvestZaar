import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const Hero = () => {
  return (
    <section className="bg-[#387ed1] text-white px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Row 1: Heading and Track Tickets */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Support Portal</h1>
          <a
            href="#"
            className="text-white hover:text-[rgb(200,200,200)] transition-colors text-lg md:text-xl mt-4 md:mt-0"
          >
            Track tickets
          </a>
        </div>

        {/* Row 2: Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left section */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl mb-6 font-medium">
              Search for an answer or browse help topics to create a ticket
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded shadow flex items-center overflow-hidden mb-6">
              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                className="flex-1 px-4 py-3 text-black outline-none text-base md:text-lg"
              />
              <div className="p-3 pr-4 text-gray-500">
                <FiSearch size={22} />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-base md:text-lg">
              {['Track account opening', 'Track segment activation', 'Intraday margins', 'Kite user manual'].map(
                (link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-[rgb(200,200,200)] transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="flex-1 md:ml-12 mt-10 md:mt-0">
            <h2 className="text-white font-bold text-xl md:text-2xl mb-6">Featured</h2>
            <ul className="text-white text-base md:text-lg space-y-4 list-decimal list-inside">
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(200,200,200)] transition-colors"
                >
                  Quarterly Settlement of Funds - July 2025
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(200,200,200)] transition-colors"
                >
                  Exclusion of F&O contracts on 8 securities from August 29, 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
