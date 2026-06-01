import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import BudhGrahPage from './BudhPage'

export const metadata = {
    title: 'Budh Graha | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    alternates: {
        canonical: '/grah/budh',
    },
    
};

export default function page() {
  return (
    <>
    <Navbar/>
    <BudhGrahPage/>
    <Footer/>
    </>
  )
}
