import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import CapricornPage from './CapricornPage'

export const metadata = {
    title: 'Capricorn (Makar Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Capricorn (Makar Rashi) personality, predictions & remedies in Vedic astrology. Expert Capricorn horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/capricorn',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <CapricornPage/>
    <Footer/>
    </>
  )
}
