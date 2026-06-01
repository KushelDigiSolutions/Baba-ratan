import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import AquariusPage from './AquariusPage'

export const metadata = {
    title: 'Aquarius | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Aquarius.',
    alternates: {
        canonical: '/rashi/aquarius',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <AquariusPage/>
    <Footer/>

    </>
  )
}
