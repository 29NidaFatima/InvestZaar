import React from 'react';

// ProductCard Component: Renders an individual product in the grid
const ProductCard = ({ iconUrl, name, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg transition-transform duration-300 hover:scale-105">

      <img src={iconUrl} alt={`${name} icon`} className="h-16 w-16 mb-4 object-contain" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/E0E0E0/333333?text=Icon" }} />

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2 text-center">{name}</h3>

      {/* Product Description */}
      <p className="text-gray-600 text-base leading-relaxed text-center">{description}</p>
    </div>
  );
};

// Universe Component: Now includes the grid of ProductCards
export const Universe = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-20 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-[#4a4a4a] mb-6">
          The InvestZaar Universe
        </h1>
        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 mb-16"> {/* Increased bottom margin for separation */}
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Grid Container for Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Zerodha Fund House */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=FH" // Placeholder
            name=" InvestZaar Fund House"
            description="Our asset management venture that is creating simple and transparent index funds to help you for your goals."
          />
          {/* Sensibull */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=SB" // Placeholder
            name="Sensibull"
            description="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, P/L, and more."
          />
          {/* Tijori */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=TJ" // Placeholder
            name="Tijori"
            description="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
          />
          {/* Streak */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=ST" // Placeholder
            name="Streak"
            description="Systematic trading platform that allows you to create and backtest strategies without coding."
          />
          {/* Smallcase */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=SC" // Placeholder
            name="Smallcase"
            description="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
          />
          {/* Ditto */}
          <ProductCard
            iconUrl="https://placehold.co/64x64/E0E0E0/333333?text=DT" // Placeholder
            name="Ditto"
            description="Personalized advice on life and health insurance. No spam and no mis-selling."
          />
        </div>
      </div>
    </section>
  );
};
