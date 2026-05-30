import React from 'react'
import TermsAndConditionsPage from './TermCon'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'

export const metadata = {
    title: 'Terms and Conditions | Bajrang Astro Website',
    description: 'Read our terms and conditions before using the Bajrang Astro website.',
    canonical: '/terms-condition',
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
