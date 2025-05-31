import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#1b1b1b] z-50 flex items-center justify-between px-6 lg:px-12 py-4 shadow-sm">
      <div className="flex items-center">
        <img
          src="/assets/logo.svg"
          alt="InvestzaarLogo"
          className="h-16 w-auto" // Increased to h-14 (56px)
          style={{ minWidth: '120px' }} // Ensures minimum width
        />
      </div>
      <nav className="hidden md:flex items-center space-x-10 text-gray-300 text-base font-medium">
        <a href="#" className="hover:text-white transition-colors duration-200">Signup</a>
        <a href="#" className="hover:text-white transition-colors duration-200">About</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Products</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
      </nav>
    </header>
  );
};