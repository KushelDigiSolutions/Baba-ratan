import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ScorpioPage from './Scorpio'

export const metadata = {
    title: 'Scorpio | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Scorpio.',
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
