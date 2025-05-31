import React from 'react';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-20">
      <img
        src="/assets/homeHero.png"
        alt="HeroImage"
        className="w-full max-w-md mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Invest in everything
      </h1>
      <p className="text-lg md:text-xl font-normal mb-8 leading-relaxed max-w-2xl">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,<br className="hidden md:block" />
        bonds, and more.
      </p>
    <button
  className="custom-hover-btn text-white text-lg md:text-xl px-8 py-3 rounded transition"
>
  Sign up for free
</button>
    </div>
  );
};