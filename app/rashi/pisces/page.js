import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import PiscesPage from './PiscesPage'

export const metadata = {
    title: 'Pisces | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Pisces.',
    canonical: '/rashi/pisces',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <PiscesPage/>
    <Footer/>
    </>
  )
}
