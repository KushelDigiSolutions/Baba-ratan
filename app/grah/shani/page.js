import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ShaniGrahPage from './ShaniPage'

export const metadata = {
    title: 'Shani (Saturn) in Vedic Astrology | Sade Sati & Remedies',
    description: 'Know Shani (Saturn) & Sade Sati effects in your Kundli, career, delays & hardships. Get expert Shani remedies by Pandit Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/grah/shani',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ShaniGrahPage/>
    <Footer/>
    </>
  )
}
