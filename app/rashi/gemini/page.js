import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import GeminiPage from './GeminiPage'

export const metadata = {
    title: 'Gemini | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Gemini.',
    canonical: '/rashi/gemini',
};
export default function page() {
  return (
    <>
    <Navbar/>
    <GeminiPage/>
    <Footer/>
    </>
  )
}
