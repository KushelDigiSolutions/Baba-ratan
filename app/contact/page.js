import React from 'react'
import ConsultationForm from '../contact/ConsultationForm'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

export const metadata = {
    title: 'Contact Bajrang Astro | Book Consultation Now',
    description: 'Connect with Vishal Verma at Bajrang Astro for Janam Kundli, palm reading & Vastu consulting. Available in Meerut, Noida & Ghaziabad. Call now',
    alternates: {
        canonical: '/contact',
    },
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
