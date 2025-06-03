import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
  import { ProductPage } from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import  PricingPage from './landing_page/pricing/PricingPage'
import { Navbar } from './landing_page/Navbar';
import { Footer } from './landing_page/Footer';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} /> 
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);