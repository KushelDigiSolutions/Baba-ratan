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

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const displayName =
    user?.name?.split(" ")[0] || user?.email?.split("@")[0] || "Account";

  return (
    <header className="navbar-wrapper">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <a href="tel:+918595046368" className="top-left">
          <span className="phone">
            <IoCallSharp size={20} color="#ffff" />
            +91 8595046368
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
        <div className="logo" onClick={() => router.push("/")}>
          <img
            src="https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png"
            alt="Logo"
          />
        </div>

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
                      href="/grah/shani"
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
                      href="/astrology-services"
                    >
                      Astrology Services
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li className={pathname === "/vastu-consulting" ? "active" : ""}>
                <Link href="/vastu-consulting">Vastu Consulting</Link>
              </li>

              <li
                className={pathname === "/astrology-services" ? "active" : ""}
              >
                <Link href="/astrology-services">Astrology Services</Link>
              </li> */}

              <li className={pathname === "/shop" ? "active" : ""}>
                <Link href="/shop">Shop</Link>
              </li>

              

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
            href="tel:+918595046368"
            className="astro-left px-3 rounded-[7px] bg-[#FFF5E9]"
          >
            <div className="astro-icon">
              {/* <FiPhone /> */}
              <IoCallSharp size={32} color="#E57661" />
            </div>
            <div className="astro-text">
              <p>Talk to our Astrologer</p>
              <span className="text-[#E57661]">+91 8595046368</span>
            </div>
            <div className="astro-image">
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766820530/compressed_52b5069c46640705212e2b570fb52627_3_zlf0wr.png"
                alt="Astrologer"
              />
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
        <div className="mobile-menu">
          <ul>
            <ul className="  .mobile-menu ul">
              <li>
                <Link href="/vastu-consulting">Vastu Consulting</Link>
              </li>
              <li>
                <Link href="/astrology-services">Astrology Services</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </ul>

          <div className="mobile-links">
            <span>
              <BiSolidUser /> Account
            </span>
            <span>
              <FaHeart /> Wishlist
            </span>
            <Link href="/cart" className="flex items-center gap-1">
              <div className="relative">
                <HiShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E57661] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>My Bag</span>
            </Link>
          </div>

          <a href="tel:+918595046368" className="mobile-astro">
            <IoCallSharp size={20} color="#E57661" />
            Talk to Astrologer
          </a>
        </div>
      )}

      {/* ================= SEARCH POPUP ================= */}
      {/* {showPopup && (
                <SearchPopup onClose={() => setShowPopup(false)} />
            )} */}
    </header>
  );
}
