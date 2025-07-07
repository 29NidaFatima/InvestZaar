import React from 'react';

export const CreateTicket = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          To create a ticket, select a relevant topic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Account Opening */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>➕</span> Account Opening
            </h3>
            <ul className="text-[#0073e6] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Resident individual</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Minor</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Non Resident Indian (NRI)</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Company, Partnership, HUF and LLP</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Glossary</a></li>
            </ul>
          </div>

          {/* Column 2: Your InvestZaar Account */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>👤</span> Your InvestZaar Account
            </h3>
            <ul className="text-[#0073e6] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Your Profile</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Account modification</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Client Master Report (CMR)</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Nomination</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Transfer of securities</a></li>
            </ul>
          </div>

          {/* Column 3: Kite */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>📊</span> Kite
            </h3>
            <ul className="text-[#0073e6] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">IPO</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Trading FAQs</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">MTF & Margins</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Charts and orders</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Alerts and Nudges</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">General</a></li>
            </ul>
          </div>

          {/* Column 4: Funds */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>💳</span> Funds
            </h3>
            <ul className="text-[#0073e6] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Add money</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Withdraw money</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Add bank accounts</a></li>
            </ul>
          </div>

          {/* Column 5: Console */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>🌀</span> Console
            </h3>
            <ul className="text-[#387ed1] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Portfolio</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Corporate actions</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Funds statement</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Reports</a></li>
            </ul>
          </div>

          {/* Column 6: Coin */}
          <div>
            <h3 className="font-medium text-lg flex items-center gap-2 mb-4">
              <span>💰</span> Coin
            </h3>
            <ul className="text-[#387ed1] space-y-2 text-base">
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Mutual funds</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">NPS</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">FD</a></li>
              <li><a href="#" className="hover:text-[rgb(66,66,66)]">Features on Coin</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
