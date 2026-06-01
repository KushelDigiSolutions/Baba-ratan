import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import VirgoPage from './VirgoPage'

export const metadata = {
    title: 'Virgo (Kanya Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Virgo (Kanya Rashi) personality, predictions & remedies in Vedic astrology. Expert Virgo horoscope by Vishal Verma at Bajrang Astro ',
    alternates: {
        canonical: '/rashi/virgo',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <VirgoPage/>
    <Footer/>
    </>
  )
}
