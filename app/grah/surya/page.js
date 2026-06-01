import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import SuryaGrahPage from './SuryaPage'

export const metadata = {
    title: 'Surya (Sun) in Vedic Astrology | Effects & Remedies',
    description: 'Know the effects of Surya (Sun) in your Janam Kundli, career, health & personality predictions. Get Surya remedies by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/surya',
    },
};
export default function page() {
  return (
   <>
   <Navbar/>
   <SuryaGrahPage/>
   <Footer/>
   </>
  )
}
