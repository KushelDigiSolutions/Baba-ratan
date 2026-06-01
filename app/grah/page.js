import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import GrahPage from './GrahComp'
export const metadata = {
  title: "Navagraha & Planets in Vedic Astrology | Bajrang Astro",
  description:
    "Learn about all 9 planets (Navagraha) in Vedic astrology Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu & Ketu. Expert insights by Bajrang Astro!",
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
