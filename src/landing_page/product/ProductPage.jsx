import React from 'react';
import { Hero } from './Hero';
import { LeftSection } from './LeftSection';
import { Universe } from './Universe';
import { RightSection } from './RightSection';

export const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="assets/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL="assets/console.png" // Use correct image path for Console
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
        learnMoreText="Learn more →" // Explicitly set for Console as per the image
      />
      <LeftSection
        imageURL="assets/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="#"
        learnMoreText="Coin →" // Changed text for Coin, using 'Coin →' as per Zerodha's style
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL="assets/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
        learnMoreText="Kite Connect →" // Changed text for Kite Connect API
      />
      <LeftSection
        imageURL="assets/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />
      {/* Centered paragraph */}
    <p className="text-center text-gray-600 mt-6 mb-10 text-xl">
  Want to know more about our technology stack? Check out the{' '}
  <a href="#" className="text-[#387ed1]">InvestZaar.tech</a> blog.
</p>
      <Universe />
    </>
  );
};