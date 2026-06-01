import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import ChandraGrahPage from './ChandraPage'

export const metadata = {
    title: 'Chandra Graha | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    alternates: {
        canonical: '/grah/chandra',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <ChandraGrahPage/>
    <Footer/>
    </>
  )
}
