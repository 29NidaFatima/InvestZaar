import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#1b1b1b] z-50 flex items-center justify-between px-6 lg:px-12 py-6 shadow-sm">
      <div className="flex items-center space-x-2">
        <img src="/assets/logo.svg" alt="Zerodha Logo" className="h-6" />
      </div>
      <nav className="hidden md:flex items-center space-x-10 text-gray-300 text-base font-small">
        <a href="#" className="hover:text-white transition">Signup</a>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Products</a>
        <a href="#" className="hover:text-white transition">Pricing</a>
        <a href="#" className="hover:text-white transition">Support</a>
      </nav>
    </header>
  );
};

