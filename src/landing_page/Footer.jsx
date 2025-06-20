import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#1b1b1b] text-gray-200 px-6 md:px-20 py-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
          {/* Logo and Social Icons */}
          <div className="mb-8 md:mb-0 md:w-1/5">
            <div>
           <img
  src="/assets/logo.png"
  alt="Investzaar Logo"
  className="h-39 w-auto" 
/>
            </div>
            <p className="mt-4 text-sm">
              &copy; 2010 - 2025, Investzaar Broking Ltd.<br />All rights reserved.
            </p>

            {/* Social Icons Row 1 */}
            <div className="flex space-x-5 mt-4 text-xl">
              {[FiX, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="hover:text-[#387ed1] cursor-pointer transition-colors duration-300"
                />
              ))}
            </div>

            {/* Social Icons Row 2 */}
            <div className="flex space-x-5 mt-4 text-xl">
              {[FaYoutube, FaWhatsapp, FaTelegramPlane].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="hover:text-[#387ed1] cursor-pointer transition-colors duration-300"
                />
              ))}
            </div>
          </div>

          {/* Column Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-base">
            {[
              {
                heading: 'Account',
                links: ['Open demat account', 'Minor demat account', 'NRI demat account', 'Commodity', 'Dematerialisation', 'Fund transfer', 'MTF', 'Referral program'],
              },
              {
                heading: 'Support',
                links: ['Contact us', 'Support portal', 'How to file a complaint?', 'Status of your complaints', 'Bulletin', 'Circular', 'Z-Connect blog', 'Downloads'],
              },
              {
                heading: 'Company',
                links: ['About', 'Philosophy', 'Press & media', 'Careers', 'Investzaar Cares (CSR)', 'Investzaar.tech', 'Open source'],
              },
              {
                heading: 'Quick links',
                links: ['Upcoming IPOs', 'Brokerage charges', 'Market holidays', 'Economic calendar', 'Calculators', 'Markets', 'Sectors'],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-3 text-lg">{col.heading}</h3>
                <ul className="space-y-2">
                  {col.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-[#387ed1] transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-xs text-gray-400 leading-relaxed border-t border-gray-700 pt-5">
          <p>
            Investzaar Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Investzaar Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Investzaar Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Investzaar Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@investzaar.com, for DP related to dp@investzaar.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="mt-4">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="mt-4">
            <a href="#" className="text-[#387ed1]">Smart Online Dispute Resolution</a> |
            <a href="#" className="text-[#387ed1] ml-2">Grievances Redressal Mechanism</a>
          </p>
          <p className="mt-4">
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p className="mt-4">
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="mt-4">
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Investzaar and offering such services, please create a ticket here.
          </p>
          
          <p className="mt-4 font-medium text-sm text-center text-gray-500">
            NSE&nbsp;&nbsp; BSE&nbsp;&nbsp; MCX&nbsp;&nbsp; Terms & conditions&nbsp;&nbsp; Policies & procedures&nbsp;&nbsp; Privacy policy&nbsp;&nbsp; Disclosure&nbsp;&nbsp; For investor's attention&nbsp;&nbsp; Investor charter
          </p>
        </div>
      </footer>
    </>
  );
};