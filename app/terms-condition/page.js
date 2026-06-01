import React from 'react'
import TermsAndConditionsPage from './TermCon'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'

export const metadata = {
    title: 'Terms & Conditions | Bajrang Astro ',
    description: 'Read Bajrang Astro terms & conditions for astrology, Vastu consulting & gemstone services. Refund policy & service guidelines by Vishal Verma.',
    alternates: {
        canonical: '/terms-condition',
    },
};
export default function page() {
  return (
   <>
   <Navbar/>
    <TermsAndConditionsPage/>
   <Footer/>
   </>
  )
}
