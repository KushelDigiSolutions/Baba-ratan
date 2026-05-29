import React from 'react'
import AriesRashiPage from './AriesComp'
import Navbar from '@/app/COMMON/Navbar'
import Footer from '@/app/COMMON/Footer'

export const metadata = {
    title: 'Aries | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Aries.',
    canonical: '/rashi/aries',
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
