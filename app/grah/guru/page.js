import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import GuruGrahPage from './GuruPage'

export const metadata = {
    title: 'Guru (Jupiter) in Vedic Astrology | Effects & Remedies',
    description: 'Know Guru (Jupiter) effects in your Kundli, wealth, wisdom & marriage. Get expert Guru remedies & gemstone advice by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/guru',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <GuruGrahPage/>
    <Footer/>
    </>
  )
}
