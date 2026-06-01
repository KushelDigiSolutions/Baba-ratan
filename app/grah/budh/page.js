import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import BudhGrahPage from './BudhPage'

export const metadata = {
    title: 'Budh (Mercury) in Vedic Astrology | Effects & Remedies',
    description: 'Understand Budh (Mercury) effects in your Kundli, communication, business & intelligence. Get Budh remedies by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/budh',
    },
    
};

export default function page() {
  return (
    <>
    <Navbar/>
    <BudhGrahPage/>
    <Footer/>
    </>
  )
}
