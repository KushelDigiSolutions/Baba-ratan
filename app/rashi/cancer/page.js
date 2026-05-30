import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import CancerPage from './CancerPage'

export const metadata = {
    title: 'Cancer | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Cancer.',
    canonical: '/rashi/cancer',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <CancerPage/>
    <Footer/>
    </>
  )
}
