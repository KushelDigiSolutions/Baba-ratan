import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import CancerPage from './CancerPage'

export const metadata = {
    title: 'Cancer (Kark Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Cancer (Kark Rashi) personality, predictions & remedies in Vedic astrology. Expert Cancer horoscope by Vishal Verma at Bajrang Astro ',
    alternates: {
        canonical: '/rashi/cancer',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <CancerPage/>
    <Footer/>
    </>
  )
}
