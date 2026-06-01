import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ShukraGrahPage from './ShukraPage'

export const metadata = {
    title: 'Shukra (Venus) in Vedic Astrology | Effects & Remedies',
    description: 'Understand Shukra (Venus) effects in your Kundli love, luxury & relationships. Get Shukra remedies by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/shukra',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ShukraGrahPage/>
    <Footer/>
    </>
  )
}
