import React from 'react'
import ConsultationForm from '../contact/ConsultationForm'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

export const metadata = {
    title: 'Contact Us | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    canonical: '/contact',
};
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
