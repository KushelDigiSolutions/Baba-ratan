"use client"
import React from 'react'
import Navbar from '../COMMON/Navbar'
import ConsultationForm from './ConsultationForm'
import Footer from '../COMMON/Footer'
import ContactForm from './ContactForm'

const ContactComponent = () => {
  return (
    <>
      <Navbar/>
      {/* <ConsultationForm/> */}
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default ContactComponent
