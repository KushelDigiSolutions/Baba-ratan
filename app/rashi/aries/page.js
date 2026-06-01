import React from 'react'
import AriesRashiPage from './AriesComp'
import Navbar from '@/app/COMMON/Navbar'
import Footer from '@/app/COMMON/Footer'

export const metadata = {
    title: 'Aries (Mesh Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Aries (Mesh Rashi) personality, predictions & remedies in Vedic astrology. Expert Aries horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/aries',
    },
};
export default function page() {
  return (
   <>
   <Navbar/>
    <AriesRashiPage/>
    <Footer/>
   </>
  )
}
