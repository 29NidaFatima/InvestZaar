import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-6 lg:px-12 py-6 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.svg" // Ensure this path is correct
          alt="Zerodha Logo"
          className="h-6"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-10 text-gray-600 text-base font-small">
        <a href="#" className="hover:text-black transition">Signup</a>
        <a href="#" className="hover:text-black transition">About</a>
        <a href="#" className="hover:text-black transition">Products</a>
        <a href="#" className="hover:text-black transition">Pricing</a>
        <a href="#" className="hover:text-black transition">Support</a>
      </nav>


    </header>
  );
};

