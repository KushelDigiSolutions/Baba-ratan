"use client";

import "./navbar.css";
import { FiPhone, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoCallSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SearchPopup from "../components/SearchPopup";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileGrahOpen, setMobileGrahOpen] = useState(false);
  const [mobileRashiOpen, setMobileRashiOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pathname = usePathname();
  const displayName =
    user?.name?.split(" ")[0] || user?.email?.split("@")[0] || "Account";

  return (
    <header className="navbar-wrapper">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <a href="tel:+917042600873" className="top-left">
          <span className="phone">
            <IoCallSharp size={20} color="#ffff" />
            +91 7042600873
          </span>
        </a>

        <div className="top-right">
          {/* DESKTOP SEARCH (CLICK → POPUP) */}
          {/* <div
                        className="search-box desktop-only"
                        onClick={() => setShowPopup(true)}
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            readOnly
                        />
                       <Image
                       src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776947585/search_zecwfo.png"
                       width={20}
                       height={20}
                       className='object-contain'
                        />
                    </div> */}

          <div className="top-links desktop-only">
            {mounted && user ? (
              <Link href={"/profile"} className="relative group">
                <span className="flex items-center gap-1 text-white cursor-pointer">
                  <BiSolidUser size={20} />
                  <span>Hi, {displayName}</span>
                </span>
              </Link>
            ) : (
              <Link href="/login" className="flex items-center gap-1">
                <BiSolidUser size={20} />
                <span>Login</span>
              </Link>
            )}

            <Link href="/wishlist" className="flex items-center gap-1">
              <div className="relative">
                <FaHeart size={20} />
                {mounted && wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E57661] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </div>
              <span>Wishlist</span>
            </Link>

            <Link href="/cart" className="flex items-center gap-1">
              <div className="relative">
                <HiShoppingCart size={20} />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E57661] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>My Bag</span>
            </Link>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav className="main-nav">
        <Link href="/" className="logo">
          <img
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780575326/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_logo_vv5wgh.png"
            alt="Bajrang Astro — Best Astrologer in India by Vishal Verma"
          />
        </Link>

        {/* DESKTOP ASTRO */}
        <div className="astro-call desktop-only">
          <div className="nav-left">
            <ul className="menu desktop-only">
              <li className={pathname === "/about-us" ? "active" : ""}>
                <Link href="/about-us">About us</Link>
              </li>
              <li
                className={`dropdown ${pathname === "/grah" ? "active" : ""}`}
                style={{ position: "relative" }}
              >
                <Link href={"/grah"} style={{ cursor: "pointer" }}>
                  Grah
                </Link>
                <ul
                  className="dropdown-menu w-[650px] !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "40px",
                    left: -50,
                    background: "#fff",
                    minWidth: "180px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    padding: 0,
                    margin: 0,
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/surya"
                    >
                      Surya Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/chandra"
                    >
                      Chandra Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/mangal"
                    >
                      Mangal Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/budh"
                    >
                      Budh Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/guru"
                    >
                      Guru Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/shukra"
                    >
                      Shukra Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/shani"
                    >
                      Shani Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/rahu"
                    >
                      Rahu Graha
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/grah/ketu"
                    >
                      Ketu Graha
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown ${pathname === "/rashi" ? "active" : ""}`}
                style={{ position: "relative" }}
              >
                <Link href={"/rashi"} style={{ cursor: "pointer" }}>
                  Rashi
                </Link>
                <ul
                  className="dropdown-menu w-[650px] !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "40px",
                    left: -50,
                    background: "#fff",
                    minWidth: "180px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    padding: 0,
                    margin: 0,
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/aries"
                    >
                      Aries (Mesh)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/taurus"
                    >
                      Taurus (Vrishabha)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/gemini"
                    >
                      Gemini (Mithun)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/cancer"
                    >
                      Cancer (Karka)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/leo"
                    >
                      Leo (Singh)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/virgo"
                    >
                      Virgo (Kanya)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/libra"
                    >
                      Libra (Tula)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/scorpio"
                    >
                      Scorpio (Vrishchik)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/sagittarius"
                    >
                      Sagittarius (Dhanu)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/capricorn"
                    >
                      Capricorn (Makar)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/aquarius"
                    >
                      Aquarius (Kumbh)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/rashi/pisces"
                    >
                      Pisces (Meen)
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`dropdown ${pathname === "/services" ? "active" : ""}`}
                style={{ position: "relative" }}
              >
                <button style={{ cursor: "pointer" }}>
                  Services
                </button>
                <ul
                  className="dropdown-menu w-[300px] !grid grid-cols-1 "
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "40px",
                    left: -50,
                    background: "#fff",
                    minWidth: "180px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    padding: 0,
                    margin: 0,
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/vastu-consulting"
                    >
                      Vastu Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[black] hover:text-[#e57661]"
                      href="/astrology-consulting"
                    >
                      Astrology Consulting
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={pathname.startsWith("/blogs") ? "active" : ""}>
                <Link href="/blogs">Blogs</Link>
              </li>

              <li className={pathname === "/shop" ? "active" : ""}>
                <Link href="/shop">Shop</Link>
              </li>

              {/* <li className={pathname === "/testimonials" ? "active" : ""}>
                <Link href="/testimonials">Testimonials</Link>
              </li> */}



              {/* <li className={pathname === '/contact' ? 'active' : ''}>
                                <Link href="/contact">Contact</Link>
                            </li> */}

              <li className="dropdown">
                <Link
                  href="/contact"
                  className={pathname.includes("/contact") ? "active" : ""}
                >
                  Contact
                </Link>

                {/* <ul className="dropdown-menu">
                  <li>
                    <Link href="/contact">Template 1</Link>
                  </li>
                  <li>
                    <Link href="/contact2">Template 2</Link>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
          <a
            href="https://calendly.com/bajrangastroofficial/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="astro-left text-white px-3 p-[10px] rounded-[7px] bg-[#e57661] desktop-only"
          >

            
            <div className="astro-text">
              <p className="!text-white">Talk to our Astrologer</p>
              {/* <span className="text-[#E57661]">+91 7042600873</span> */}
            </div>
            <div className="astro-image">
              {/* <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766820530/compressed_52b5069c46640705212e2b570fb52627_3_zlf0wr.png"
                alt="Astrologer"
              /> */}
            </div>
          </a>

        </div>

        {/* MOBILE SEARCH ICON → POPUP */}
        {/* <div
                    className="mobile-search-icon"
                    onClick={() => setShowPopup(true)}
                >
                    <FiSearch size={22} />
                </div> */}
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 w-full h-[100vh] bg-black/40 z-[99999] overflow-y-auto flex justify-center items-start font-sans">
          <div className="w-full min-h-[100vh] bg-white flex flex-col shadow-2xl">
            {/* Top Bar */}
            <div className="bg-[#E57661] text-white flex justify-between items-center px-6 py-[14px]">
              <a href="tel:+917042600873" className="flex items-center gap-3 font-medium text-[16px] text-white no-underline">
                <IoCallSharp size={20} color="#ffffff" />
                <span>+91 7042600873</span>
              </a>
              <button onClick={() => setOpen(false)} className="text-white text-2xl font-bold focus:outline-none bg-transparent border-0 cursor-pointer p-1">
                <FiX size={24} />
              </button>
            </div>

            {/* Logo Section */}
            <Link 
              href="/"
              className="px-6 py-[22px] border-b border-[#f3f4f6] flex justify-between items-center bg-white cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <img
                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png"
                alt="Logo"
                className="h-[75px] w-auto object-contain"
              />
            </Link>
            {/* Menu Items */}
            <ul className="flex flex-col px-6 mt-2 space-y-0 divide-y divide-[#f3f4f6] list-none p-0 bg-white">
              {/* ABOUT US */}
              <li className="py-[8px] text-left">
                <Link href="/about-us" onClick={() => setOpen(false)} className="block w-full font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                  About us
                </Link>
              </li>

              {/* GRAH WITH DROPDOWN */}
              <li className="py-[8px] text-left">
                <div className="flex justify-between items-center w-full">
                  <Link href="/grah" onClick={() => setOpen(false)} className="font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                    Grah
                  </Link>
                  <button
                    className="px-4 py-1 text-xl font-medium text-[#e57661] focus:outline-none bg-transparent border-0 cursor-pointer"
                    onClick={() => setMobileGrahOpen(!mobileGrahOpen)}
                  >
                    {mobileGrahOpen ? "−" : "+"}
                  </button>
                </div>
                {mobileGrahOpen && (
                  <ul className="mt-3 pl-4 space-y-3 border-l-2 border-[#ffe8e3] list-none">
                    <li><Link href="/grah/surya" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Surya Graha</Link></li>
                    <li><Link href="/grah/chandra" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Chandra Graha</Link></li>
                    <li><Link href="/grah/mangal" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Mangal Graha</Link></li>
                    <li><Link href="/grah/budh" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Budh Graha</Link></li>
                    <li><Link href="/grah/guru" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Guru Graha</Link></li>
                    <li><Link href="/grah/shukra" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Shukra Graha</Link></li>
                    <li><Link href="/grah/shani" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Shani Graha</Link></li>
                    <li><Link href="/grah/rahu" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Rahu Graha</Link></li>
                    <li><Link href="/grah/ketu" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Ketu Graha</Link></li>
                  </ul>
                )}
              </li>

              {/* RASHI WITH DROPDOWN */}
              <li className="py-[8px] text-left">
                <div className="flex justify-between items-center w-full">
                  <Link href="/rashi" onClick={() => setOpen(false)} className="font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                    Rashi
                  </Link>
                  <button
                    className="px-4 py-1 text-xl font-medium text-[#e57661] focus:outline-none bg-transparent border-0 cursor-pointer"
                    onClick={() => setMobileRashiOpen(!mobileRashiOpen)}
                  >
                    {mobileRashiOpen ? "−" : "+"}
                  </button>
                </div>
                {mobileRashiOpen && (
                  <ul className="mt-3 pl-4 space-y-3 border-l-2 border-[#ffe8e3] list-none">
                    <li><Link href="/rashi/aries" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Aries (Mesh)</Link></li>
                    <li><Link href="/rashi/taurus" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Taurus (Vrishabha)</Link></li>
                    <li><Link href="/rashi/gemini" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Gemini (Mithun)</Link></li>
                    <li><Link href="/rashi/cancer" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Cancer (Karka)</Link></li>
                    <li><Link href="/rashi/leo" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Leo (Singh)</Link></li>
                    <li><Link href="/rashi/virgo" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Virgo (Kanya)</Link></li>
                    <li><Link href="/rashi/libra" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Libra (Tula)</Link></li>
                    <li><Link href="/rashi/scorpio" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Scorpio (Vrishchik)</Link></li>
                    <li><Link href="/rashi/sagittarius" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Sagittarius (Dhanu)</Link></li>
                    <li><Link href="/rashi/capricorn" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Capricorn (Makar)</Link></li>
                    <li><Link href="/rashi/aquarius" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Aquarius (Kumbh)</Link></li>
                    <li><Link href="/rashi/pisces" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Pisces (Meen)</Link></li>
                  </ul>
                )}
              </li>

              {/* SERVICES WITH DROPDOWN */}
              <li className="py-[8px] text-left">
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium text-[16px] text-[#e57661]">
                    Services
                  </span>
                  <button
                    className="px-4 py-1 text-xl font-medium text-[#e57661] focus:outline-none bg-transparent border-0 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {mobileServicesOpen ? "−" : "+"}
                  </button>
                </div>
                {mobileServicesOpen && (
                  <ul className="mt-3 pl-4 space-y-3 border-l-2 border-[#ffe8e3] list-none">
                    <li><Link href="/vastu-consulting" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Vastu Consulting</Link></li>
                    <li><Link href="/astrology-consulting" onClick={() => setOpen(false)} className="block text-[15px] text-[#e57661]/90 no-underline font-medium">Astrology Services</Link></li>
                  </ul>
                )}
              </li>

              {/* BLOG */}
              <li className="py-[8px] text-left">
                <Link href="/blogs" onClick={() => setOpen(false)} className="block w-full font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                  Blogs
                </Link>
              </li>

              {/* SHOP */}
              <li className="py-[8px] text-left">
                <Link href="/shop" onClick={() => setOpen(false)} className="block w-full font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                  Shop
                </Link>
              </li>

              {/* TESTIMONIALS */}
              {/* <li className="py-[8px] text-left">
                <Link href="/testimonials" onClick={() => setOpen(false)} className="block w-full font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                  Testimonials
                </Link>
              </li> */}

              {/* CONTACT */}
              <li className="py-[8px] text-left">
                <Link href="/contact" onClick={() => setOpen(false)} className="block w-full font-medium text-[16px] text-[#e57661] no-underline hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>

            {/* BOTTOM LINKS (Account, Wishlist, My Bag) */}
            <div className="flex justify-between items-center py-[22px] px-6 border-b border-[#f3f4f6] bg-white">
              {mounted && user ? (
                <Link href="/profile" className="flex items-center gap-2 text-[#E57661] font-semibold text-[15px] no-underline" onClick={() => setOpen(false)}>
                  <BiSolidUser size={18} color="#E57661" />
                  <span>Hi, {displayName}</span>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center gap-2 text-[#E57661] font-semibold text-[15px] no-underline" onClick={() => setOpen(false)}>
                  <BiSolidUser size={18} color="#E57661" />
                  <span>Account</span>
                </Link>
              )}

              <Link href="/wishlist" className="flex items-center gap-2 text-[#E57661] font-semibold text-[15px] no-underline" onClick={() => setOpen(false)}>
                <div className="relative flex items-center">
                  <FaHeart size={18} color="#E57661" />
                  {mounted && wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#E57661] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
                      {wishlistItems.length}
                    </span>
                  )}
                </div>
                <span>Wishlist</span>
              </Link>

              <Link href="/cart" className="flex items-center gap-2 text-[#E57661] font-semibold text-[15px] no-underline" onClick={() => setOpen(false)}>
                <div className="relative flex items-center">
                  <HiShoppingCart size={18} color="#E57661" />
                  {mounted && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#E57661] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>My Bag</span>
              </Link>
            </div>

            {/* TALK TO ASTROLOGER BUTTON */}
            <div className="px-6 py-4 bg-white mt-1">
              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFF5E9] hover:bg-[#ffe3c9] text-[#E57661] font-semibold py-[13px] px-4 rounded-[4px] flex justify-center items-center gap-3 transition-colors text-[16px] no-underline"
                onClick={() => setOpen(false)}
              >
                <IoCallSharp size={20} color="#E57661" />
                <span>Talk to Astrologer</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= SEARCH POPUP ================= */}
      {/* {showPopup && (
                <SearchPopup onClose={() => setShowPopup(false)} />
            )} */}
    </header>
  );
}
