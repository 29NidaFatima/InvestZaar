import React from 'react'

export const OpenAccount = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl  mb-6 font-medium">
          Open a InvestZaar account
        </h2>
        <p className="text-lg md:text-xl font-normal mb-10 leading-relaxed mx-auto max-w-2xl">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="custom-hover-btn text-white text-lg md:text-xl px-8 py-3 rounded transition"
        >
          Sign up for free
        </button>
      </div>
    </div>
  )
}