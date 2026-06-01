import React from 'react'
import Navbar from '../COMMON/Navbar'
import ProfilePage from './Profile'
import Footer from '../COMMON/Footer'

export const metadata = {
    title: 'Profile | Bajrang Astro Website',
    description: 'View and manage your profile information on the Bajrang Astro website.',
    alternates: {
        canonical: '/profile',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>

    <ProfilePage/>
    <Footer/>
    
    </>
  )
}
