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
Where smart investing begins
      </h1>
      <p className="text-lg md:text-xl font-normal mb-8 leading-relaxed max-w-2xl">
    Whether it’s stocks, funds, or bonds start investing in your future, your way.
      </p>
    <button
  className="custom-hover-btn text-white text-lg md:text-xl px-8 py-3 rounded transition"
>
  Sign up for free
</button>
    </div>
  );
};