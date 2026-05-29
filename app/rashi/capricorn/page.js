import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import CapricornPage from './CapricornPage'

export const metadata = {
    title: 'Capricorn | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Capricorn.',
    canonical: '/rashi/capricorn',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <CapricornPage/>
    <Footer/>
    </>
  )
}
