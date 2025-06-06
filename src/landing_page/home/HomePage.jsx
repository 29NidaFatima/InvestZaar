import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { Awards } from './Awards'
import { Pricing } from './Pricing'
import { Education } from './Education'
import { OpenAccount } from '../OpenAccount'
import { Footer } from '../Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
};

export default HomePage;

