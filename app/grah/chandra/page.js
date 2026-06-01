import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ChandraGrahPage from './ChandraPage'

export const metadata = {
    title: 'Chandra (Moon) in Vedic Astrology | Effects & Remedies',
    description: 'Understand Chandra (Moon) effects in your Kundli, emotions, mind & relationships. Get expert Chandra remedies by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/chandra',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ChandraGrahPage/>
    <Footer/>
    </>
  )
}
