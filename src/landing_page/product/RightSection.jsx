import React from 'react';

export const RightSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, tryDemoText = 'Try demo →', learnMoreText = 'Learn more →' }) => {
  return (
    <section className="bg-white px-6 md:px-24 py-20">
      {/* Reduced gap slightly and re-evaluated widths for better visual balance */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-12 md:gap-24"> {/* Adjusted md:gap from 32 to 24 */}

        {/* Image Section - Increased width further */}
        <div className="md:w-7/12"> {/* Changed from md:w-3/5 to md:w-7/12 (approx 58% to 58.3%) */}
          <img src={imageURL} alt={productName} className="w-full h-auto object-contain" />
        </div>

        {/* Content Section - Adjusted width to complement the image */}
        <div className="md:w-5/12 text-left"> {/* Changed from md:w-2/5 to md:w-5/12 (approx 40% to 41.7%) */}
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
                  {tryDemoText}
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
                  {learnMoreText}
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