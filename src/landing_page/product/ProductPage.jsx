import React from 'react'
import {Navbar} from '../Navbar'
import { Hero } from './Hero'
import { LeftSection } from './LeftSection'
import { Universe } from './Universe'
import { RightSection } from './RightSection'
import {Footer} from '../Footer'
export const ProductPage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        <Footer/>
    </>
  )
}
