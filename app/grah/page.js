import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import GrahPage from './GrahComp'
export const metadata = {
  title: "Navgrah Astrology Services | Bajrang Astro",
  description:
    "Explore powerful Navgrah astrology services by Pandit Vishal Johari at Bajrang Astro. Get remedies, grah dosh solutions, gemstone guidance, and spiritual consultation for all nine planets.",
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
