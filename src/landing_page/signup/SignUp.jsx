import React from 'react';

const SignUp = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading & Subtext Centered */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#4a4a4a] mb-6">
            Start your investment journey with a free demat & trading account
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Start investing brokerage free and join a community of 1.5+ crore investors and traders
          </p>
        </div>

        {/* Content Section - Image & Form */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">

          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/assets/landing-DQ76ex-B.svg"
              alt="InvestZaar Platforms"
              className="w-full max-w-3xl"
            />
          </div>

          {/* Right Signup Form */}
          <div className="flex-1 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Signup now
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Or track your existing application
            </p>

            {/* Phone Input */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden mb-4 w-full">
  <span className="flex items-center gap-1 px-3 text-sm">
    <img
      src="https://flagcdn.com/w40/in.png"
      alt="India"
      className="w-5 h-4 object-cover rounded-sm"
    />
    +91
  </span>
  <input
    type="tel"
    placeholder="Enter your mobile number"
    className="flex-1 py-3 px-3 outline-none text-sm"
  />
</div>
            {/* OTP Button */}
            <button
              className="bg-[#387ed1] w-full text-white text-lg md:text-xl py-3 rounded transition hover:bg-[rgb(66,66,66)]"
            >
              Get OTP
            </button>

            {/* Terms & Policy */}
            <p className="text-s text-gray-600 mt-4">
              By proceeding, you agree to the InvestZaar{' '}
              <a href="#" className="text-[#387ed1] hover:text-gray-700">terms</a> &{' '}
              <a href="#" className="text-[#387ed1] hover:text-gray-700">privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
