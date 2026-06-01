import React from 'react'
import AuthPage from './LoginComp'
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'

export const metadata = {
    title: 'Login | Bajrang Astro Website',
    description: 'Login to your Bajrang Astro account to access personalized astrological insights and gemstone recommendations.',
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
