import Footer from '@/app/COMMON/Footer'
import Navbar from '@/app/COMMON/Navbar'
import React from 'react'
import SagittariusPage from './SagittariusPage'

export const metadata = {
    title: 'Sagittarius | Bajrang Astro Website',
    description: 'Discover the unique traits and characteristics of individuals born under the sign of Sagittarius.',
    alternates: {
        canonical: '/rashi/sagittarius',
    },
};
export default function page() {
  return (
   <>
   <Navbar/>
   <SagittariusPage/>
   <Footer/>
   </>
  )
}
