import React from 'react'
import Header from "../Header/Header";
import Services from "../Services/Services"
import Work from "../Work/Work"
import ContactUs from "../Contactus/ContactUs"
import Skills from '../Skills/Skills';
const Home = () => {
  return (
    <>
       <Header/>
      <Services/>
      <Work/>
      <Skills/>
      <ContactUs/>  
    </>
  )
}

export default Home