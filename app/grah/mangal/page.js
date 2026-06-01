import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import MangalGrahPage from './MangalPage'

export const metadata = {
    title: 'Mangal (Mars) in Vedic Astrology | Effects & Remedies',
    description: 'Know Mangal (Mars) effects in your Kundli, energy, courage & Manglik dosh. Get expert Mangal remedies by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/mangal',
    },
}; 
export default function page() {
  return (
   <>
   <Navbar/>
   <MangalGrahPage/>
   <Footer/>
   </>
  )
}
