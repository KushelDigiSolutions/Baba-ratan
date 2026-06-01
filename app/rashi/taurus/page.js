import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import TaurusPage from './TaurusComp'

export const metadata = {
    title: 'Taurus (Vrishabh Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Taurus (Vrishabh Rashi) personality, predictions & remedies in Vedic astrology. Expert Taurus horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/taurus',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <TaurusPage/>
    <Footer/>
    </>
  )
}
