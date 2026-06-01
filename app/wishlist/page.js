import React from 'react'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import WishlistPage from './WishlistComp'

export const metadata = {
    title: 'Wishlist | Bajrang Astro Website',
    description: 'Manage your wishlist of astrological services and gemstones.',
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
