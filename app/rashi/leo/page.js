import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import LeoPage from './LeoPage'

export const metadata = {
    title: 'Leo (Simha Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Leo (Simha Rashi) personality, predictions & remedies in Vedic astrology. Expert Leo horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/leo',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <LeoPage/>
    <Footer/>
    </>
  )
}
