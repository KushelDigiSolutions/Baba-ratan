import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import LibraPage from './LibraPage'
export const metadata = {
    title: 'Libra | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Libra.',
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
