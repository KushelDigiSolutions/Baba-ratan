import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ShukraGrahPage from './ShukraPage'

export const metadata = {
    title: 'Shukra Graha | Bajrang Astro Website',
    description: 'Get your personalized Shukra gemstone recommendations based on your birth chart and planetary positions. Our expert astrologers analyze your unique astrological profile to suggest the most effective gemstones for Shukra, helping you harness its energy for positive transformation and balance in your life.',
    alternates: {
        canonical: '/grah/shukra',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ShukraGrahPage/>
    <Footer/>
    </>
  )
}
