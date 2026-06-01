import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import GeminiPage from './GeminiPage'

export const metadata = {
    title: 'Gemini (Mithun Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Gemini (Mithun Rashi) personality, predictions & remedies in Vedic astrology. Expert Gemini horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/gemini',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <GeminiPage/>
    <Footer/>
    </>
  )
}
