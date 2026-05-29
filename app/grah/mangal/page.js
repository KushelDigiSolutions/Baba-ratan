import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import MangalGrahPage from './MangalPage'

export const metadata = {
    title: 'Mangal Graha | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    canonical: '/grah/mangal',
};
export default function page() {
  return (
   <>
   <Navbar/>
   <MangalGrahPage/>
   <Footer/>
   </>
  )
}
