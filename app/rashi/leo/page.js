import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import LeoPage from './LeoPage'

export const metadata = {
    title: 'Leo | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Leo.',
    alternates: {
        canonical: '/rashi/leo',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <LeoPage/>
    <Footer/>
    </>
  )
}
