import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import GrahPage from './GrahComp'
export const metadata = {
  title: "Graha Dosha & Remedies | Navgrah Shanti Puja | Bajrang Astro",
  description:
    "Graha Dosha & Remedies | Navgrah Shanti Puja | Bajrang Astro",
  alternates: {
    canonical: "/grah",
  },
};
export default function page() {
  
  return (
    <>
    <Navbar/>
    <GrahPage/>
    <Footer/>
    </>
  )
}
