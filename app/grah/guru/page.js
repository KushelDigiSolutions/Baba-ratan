import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import GuruGrahPage from './GuruPage'

export const metadata = {
    title: 'Guru Graha | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    canonical: '/grah/guru',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <GuruGrahPage/>
    <Footer/>
    </>
  )
}
