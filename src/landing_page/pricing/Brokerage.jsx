import React from 'react';

export const Brokerage = () => {
  return (
    <div className="bg-white px-6 md:px-24 py-16 text-left text-[#333]">
      {/* Section: Charges for account opening */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Charges for account opening
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left">Types of account</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Open account</td>
              <td className="border border-gray-300 px-4 py-2">FREE</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Offline account</td>
              <td className="border border-gray-300 px-4 py-2">FREE</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">NRI account (offline only)</td>
              <td className="border border-gray-300 px-4 py-2">₹ 500</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="border border-gray-300 px-4 py-2">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Charges for optional value added services */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-6">
        Charges for optional value added services
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left">Service</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Billing Frequency</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tickertape</td>
              <td className="border border-gray-300 px-4 py-2">Monthly / Annual</td>
              <td className="border border-gray-300 px-4 py-2">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Smallcase</td>
              <td className="border border-gray-300 px-4 py-2">Per transaction</td>
              <td className="border border-gray-300 px-4 py-2">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Kite connect</td>
              <td className="border border-gray-300 px-4 py-2">Monthly</td>
              <td className="border border-gray-300 px-4 py-2">₹ Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

