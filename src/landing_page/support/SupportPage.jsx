import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { CreateTicket } from './CreateTicket'
import { Footer } from '../Footer'
export const SupportPage = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <CreateTicket/>
    <Footer/>
  </>
  )
}
