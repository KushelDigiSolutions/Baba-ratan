import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import PrivacyPolicyPage from './PolicyCom'
export const metadata = {
    title: 'Privacy Policy | Bajrang Astro Website',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
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
