import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ShaniGrahPage from './ShaniPage'

export const metadata = {
    title: 'Shani Graha | Bajrang Astro Website',
    description: 'Get your personalized Shani gemstone recommendations based on your birth chart and planetary positions. Our expert astrologers analyze your unique astrological profile to suggest the most effective gemstones for Shani, helping you harness its energy for positive transformation and balance in your life.',
    canonical: '/grah/shani',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ShaniGrahPage/>
    <Footer/>
    </>
  )
}
