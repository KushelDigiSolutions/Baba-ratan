import React from 'react'
import ConsultationForm from '../contact/ConsultationForm'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ConsultationForm/>
        <Footer/>
    </div>
  )
}

export default page
