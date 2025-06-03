import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#1b1b1b] z-50 flex items-center justify-between px-6 lg:px-12 py-4 shadow-sm">
      <div className="flex items-center">
        <img
          src="/assets/logo.svg"
          alt="InvestzaarLogo"
          className="h-16 w-auto"
          style={{ minWidth: '120px' }}
        />
      </div>
      <nav className="hidden md:flex items-center space-x-10 text-gray-300 text-base font-medium">
        <Link to="/signup" className="hover:text-white transition-colors duration-200">Signup</Link>
        <Link to="/about" className="hover:text-white transition-colors duration-200">About</Link>
        <Link to="/product" className="hover:text-white transition-colors duration-200">Products</Link>
        <Link to="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
        <Link to="/support" className="hover:text-white transition-colors duration-200">Support</Link>
      </nav>
    </header>
  );
};
