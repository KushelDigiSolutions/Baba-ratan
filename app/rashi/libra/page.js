import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import LibraPage from './LibraPage'
export const metadata = {
    title: 'Libra (Tula Rashi) in Vedic Astrology | Bajrang Astro',
    description: 'Know Libra (Tula Rashi) personality, predictions & remedies in Vedic astrology. Expert Libra horoscope by Vishal Verma at Bajrang Astro',
    alternates: {
        canonical: '/rashi/libra',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <LibraPage/>
    <Footer/>
    </>
  )
}
