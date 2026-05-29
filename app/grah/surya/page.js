import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import SuryaGrahPage from './SuryaPage'

export const metadata = {
    title: 'Surya Graha | Bajrang Astro Website',
    description: 'Get your personalized Surya gemstone recommendations based on your birth chart and planetary positions. Our expert astrologers analyze your unique astrological profile to suggest the most effective gemstones for Surya, helping you harness its energy for positive transformation and balance in your life.',
    canonical: '/grah/surya',
};
export default function page() {
  return (
   <>
   <Navbar/>
   <SuryaGrahPage/>
   <Footer/>
   </>
  )
}
