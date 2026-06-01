import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import VirgoPage from './VirgoPage'

export const metadata = {
    title: 'Virgo | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Virgo.',
    alternates: {
        canonical: '/rashi/virgo',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <VirgoPage/>
    <Footer/>
    </>
  )
}
