import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import AquariusPage from './AquariusPage'

export const metadata = {
    title: 'Aquarius (Kumbh Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Aquarius (Kumbh Rashi) personality, predictions & remedies in Vedic astrology. Expert Aquarius horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/aquarius',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <AquariusPage/>
    <Footer/>

    </>
  )
}
