import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import SagittariusPage from './SagittariusPage'

export const metadata = {
    title: 'Sagittarius (Dhanu Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Sagittarius (Dhanu Rashi) personality, predictions & remedies in Vedic astrology. Expert Sagittarius horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/sagittarius',
    },
};
export default function page() {
  return (
   <>
   <Navbar/>
   <SagittariusPage/>
   <Footer/>
   </>
  )
}
