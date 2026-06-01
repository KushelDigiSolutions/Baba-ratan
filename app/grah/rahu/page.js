import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import RahuGrahPage from './RahuPage'

export const metadata = {
    title: 'Rahu in Vedic Astrology | Effects & Remedies',
    description: 'Understand Rahu effects in your Kundli, obsession, confusion & career impact. Get expert Rahu remedies by Vishal Verma at Bajrang Astro ',
    alternates: {
        canonical: '/grah/rahu',
    },
};
export default function page() {
  return (
        <>
        <Navbar/>
        <RahuGrahPage/>
        <Footer/>
        </>
  )
}
