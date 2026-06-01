import React from 'react'
import AuthPage from './LoginComp'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

export const metadata = {
    title: 'Login Portal | Bajrang Astro ',
    description: 'Login to your Bajrang Astro account to manage your Kundli reports, gemstone orders & Vastu consultation bookings. Access your account securely today',
    alternates: {
        canonical: '/login',
    },
};
export default function page() {
  return (

    <>
    <Navbar/>
    <AuthPage/>
    <Footer/>
    </>
  )
}
