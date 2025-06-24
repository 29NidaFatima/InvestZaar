import React from 'react';

export const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
  return (
    <section className="bg-white px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={imageURL} alt={productName} className="w-full h-auto object-contain" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-left"> {/* Removed ml-13 */}
          <h2 className="text-3xl font-semibold text-[#4a4a4a] mb-4">{productName}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{productDescription}</p>

          {/* Demo & Learn More Links */}
          {(tryDemo || learnMore) && ( // Conditionally render if either prop is provided
            <div className="flex gap-8 mb-6 text-[17px]">
              {tryDemo && ( // Conditionally render Try demo link
                <a
                  href={tryDemo}
                  className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition-colors duration-200"
                  style={{ color: '#387ed1' }}
                  onMouseOver={(e) => (e.target.style.color = 'rgb(66, 66, 66)')}
                  onMouseOut={(e) => (e.target.style.color = '#387ed1')}
                >
                  Try demo →
                </a>
              )}
              {learnMore && ( // Conditionally render Learn more link
                <a
                  href={learnMore}
                  className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition-colors duration-200"
                  style={{ color: '#387ed1' }}
                  onMouseOver={(e) => (e.target.style.color = 'rgb(66, 66, 66)')}
                  onMouseOut={(e) => (e.target.style.color = '#387ed1')}
                >
                  Learn more →
                </a>
              )}
            </div>
          )}

          {/* App Store Badges */}
          {(googlePlay || appStore) && ( // Conditionally render if either prop is provided
            <div className="flex gap-4">
              {googlePlay && ( // Conditionally render Google Play badge
                <a href={googlePlay}>
                  <img src="assets/googlePlayBadge.svg" alt="Google Play" className="h-11" />
                </a>
              )}
              {appStore && ( // Conditionally render App Store badge
                <a href={appStore}>
                  <img src="assets/appstoreBadge.svg" alt="App Store" className="h-11" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};