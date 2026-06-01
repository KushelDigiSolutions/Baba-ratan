import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import WishlistPage from './WishlistComp'

export const metadata = {
    title: 'Your Wishlist | Bajrang Astro India',
    description: 'View your saved gemstones & astrology services at Bajrang Astro. Add to cart & complete your order with Vishal Verma expert recommendations.',
    alternates: {
        canonical: '/wishlist',
    },
};
export default function page() {
  return (
    <>
    <Navbar/>
    <WishlistPage/>
    <Footer/>
    </>
  )
}
