import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import PrivacyPolicyPage from './PolicyCom'
export const metadata = {
    title: 'Privacy Policy | Bajrang Astro India',
    description: 'Read Bajrang Astro privacy policy on how we collect, use & protect your personal data for astrology & Vastu consulting services across India.',
    alternates: {
        canonical: '/privacy-policy',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <PrivacyPolicyPage/>
    <Footer/>
    </>
  )
}
