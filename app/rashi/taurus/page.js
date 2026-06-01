import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import TaurusPage from './TaurusComp'

export const metadata = {
    title: 'Taurus | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Taurus.',
    alternates: {
        canonical: '/rashi/taurus',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <TaurusPage/>
    <Footer/>
    </>
  )
}
