import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ScorpioPage from './Scorpio'

export const metadata = {
    title: 'Scorpio (Vrishchik Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Scorpio (Vrishchik Rashi) personality, predictions & remedies in Vedic astrology. Expert Scorpio horoscope by Vishal Verma at Bajrang ',
    alternates: {
        canonical: '/rashi/scorpio',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ScorpioPage/>
    <Footer/>
    </>
  )
}
