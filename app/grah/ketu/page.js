import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import KetuGrahPage from './KetuPage'

export const metadata = {
    title: 'Ketu in Vedic Astrology | Effects & Remedies',
    description: 'Know Ketu effects in your Kundli, spirituality, detachment & past life karma. Get expert Ketu remedies by Vishal Verma at Bajrang Astro',
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
