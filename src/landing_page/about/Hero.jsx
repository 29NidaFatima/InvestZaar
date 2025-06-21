import React from 'react';

export const Hero = () => {
  return (
    <>
      {/* Top Hero Section */}
      <section className="bg-white px-4 py-20 text-center flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-medium text-center mb-12 text-[#4a4a4a]">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </section>

      <hr className="border border-gray-200" />

      {/* Company History Section */}
      <section className="bg-white px-6 md:px-24 py-24 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-base leading-relaxed">
          
          {/* Left Column */}
          <div className="px-6 md:px-10">
            <p>
              We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and
              investors face in India in terms of cost, support, and technology. We named the company Investzaar, a combination of
              Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p className="mt-4">
              Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p className="mt-4">
              Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="px-6 md:px-10">
            <p>
              In addition, we run a number of popular open online educational and community initiatives to empower retail traders
              and investors.
            </p>
            <p className="mt-4">
              <a
                href="#"
                className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition duration-200"
              >
                Rainmatter
              </a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p className="mt-4">
              And yet, we are always up to something new every day. Catch up on the latest updates on our{' '}
              <a
                href="#"
                className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition duration-200"
              >
                blog
              </a>{' '}
              or see what the media is{' '}
              <a
                href="#"
                className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition duration-200"
              >
                saying about us
              </a>{' '}
              or learn more about our business and product{' '}
              <a
                href="#"
                className="font-medium text-[rgb(56,126,209)] hover:text-[rgb(66,66,66)] transition duration-200"
              >
                philosophies
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
