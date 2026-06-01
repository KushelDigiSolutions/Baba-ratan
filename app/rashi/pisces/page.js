import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import PiscesPage from './PiscesPage'

export const metadata = {
    title: 'Pisces (Meen Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Pisces (Meen Rashi) personality, predictions & remedies in Vedic astrology. Expert Pisces horoscope by Vishal Verma at Bajrang Astro India',
    alternates: {
        canonical: '/rashi/pisces',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <PiscesPage/>
    <Footer/>
    </>
  )
}
