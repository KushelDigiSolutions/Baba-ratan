import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import RahuGrahPage from './RahuPage'

export const metadata = {
    title: 'Rahu Graha | Bajrang Astro Website you can also use Rahu gemstone to mitigate the negative effects',
    description: 'Get your personalized Rahu gemstone recommendations based on your birth chart and planetary positions. Our expert astrologers analyze your unique astrological profile to suggest the most effective gemstones for Rahu, helping you harness its energy for positive transformation and balance in your life.',
    canonical: '/grah/rahu',
};
export default function page() {
  return (
        <>
        <Navbar/>
        <RahuGrahPage/>
        <Footer/>
        </>
  )
}
