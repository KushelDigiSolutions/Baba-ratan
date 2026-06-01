import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import KetuGrahPage from './KetuPage'

export const metadata = {
    title: 'Ketu Graha | Bajrang Astro Website',
    description: 'Get in touch with our team for any inquiries or assistance.',
    alternates: {
        canonical: '/grah/ketu',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <KetuGrahPage/>
    <Footer/>
    </>
  )
}
