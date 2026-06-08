"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedin, FaThreads, FaYoutube, FaArrowUp } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";



export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-[#F7F8F9] text-[#2d2d2d]">
            <div className="max-w-[1390px] mx-auto px-6 md:px-10 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1  xl:grid-cols-[29%_69%] gap-15">

                    {/* LEFT SECTION */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <Image
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png"
                                alt="Bajrang Astro — Best Astrologer in India by Vishal Verma"
                                width={130}
                                height={130}
                            />
                        </div>

                        <p className="text-lg leading-relaxed max-w-[450px] xl:max-w-[350px] text-[#303030] mb-6">
                            India's trusted destination for authentic Vedic astrology consultation, accurate Janam Kundli analysis, Vastu guidance, and certified gemstones by Vishal Verma.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/bajrangastro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                                <FaFacebook className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={32} />
                            </a>
                            <a href="https://www.linkedin.com/company/bajrang-astro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                                <FaLinkedin className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={32} />
                            </a>
                            <a href="https://www.youtube.com/@bajrangiratankendra" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                                <FaYoutube className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={32} />
                            </a>
                            <a href="https://www.instagram.com/bajrangastro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                                <FaInstagram className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={32} />
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[30%_30%_40%] md:gap-0 gap-10 ">
                        {/* USEFUL LINKS */}
                        <div>
                            <h3 className="font-[500] text-lg mb-4">Useful Links</h3>
                            <ul className="space-y-3 text-[#3F3F50] text-[16px]">
                                <li><Link href="/about-us" className="hover:text-black">About us</Link></li>
                                <li><Link href="/grah" className="hover:text-black">Grah</Link></li>
                                <li><Link href="/rashi" className="hover:text-black">Rashi</Link></li>
                                <li><Link href="/vastu-consulting" className="hover:text-black">Vastu Consulting</Link></li>
                                <li><Link href="/astrology-consulting" className="hover:text-black">Astrology Services</Link></li>
                                <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
                            </ul>
                        </div>

                        {/* CATEGORIES */}
                        <div>
                            <h3 className="font-[500] text-lg mb-4">Categories</h3>
                            <ul className="space-y-3 text-[#3F3F50] text-[16px]">
                                <li><Link href="#" className="hover:text-black">Ruby (Manik)</Link></li>
                                <li><Link href="#" className="hover:text-black">Blue Sapphire (Neelam)</Link></li>
                                <li><Link href="#" className="hover:text-black">Emerald (Panna)</Link></li>
                                <li><Link href="#" className="hover:text-black">Yellow Sapphire (Pukhraj)</Link></li>
                            </ul>
                        </div>

                        {/* CONTACT INFO */}
                        <div>
                            <h3 className="font-[500] text-lg mb-4">Contact Info</h3>
                            <p className="text-[16px] text-[#3F3F50] mb-4">
                                Our Support team is here to assist you
                            </p>

                            <div className="space-y-4 text-[16px] text-[#3F3F50]">

                                {/* EMAIL */}
                                <a
                                    href="mailto:bajrangastroofficial@gmail.com"
                                    className="flex items-center gap-3 hover:text-black"
                                >
                                    <FiMail size={18} className="text-[#7A1F3D]" />
                                    bajrangastroofficial@gmail.com
                                </a>

                                {/* PHONE */}
                                <a
                                    href="tel:+917042600873"
                                    className="flex items-center gap-3 hover:text-black"
                                >
                                    <FiPhone size={18} className="text-[#7A1F3D]" />
                                    +91 7042600873
                                </a>

                                {/* LOCATION */}
                                <a
                                    href="https://www.google.com/maps/place/Shri+Jaipur+Bajrangi+Ratan+Kendra/@28.9940471,77.7008509,17z/data=!3m1!4b1!4m6!3m5!1s0x390c6586bc620c7f:0x3f376abf8bd72f5d!8m2!3d28.9940471!4d77.7008509!16s%2Fg%2F11z7cswvy4?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-black"
                                >
                                    <FiMapPin size={18} className="mt-1 text-[#7A1F3D]" />
                                    <span>
                                        172-A Bhargava Market, Sadar<br />
                                        Bazaar, Meerut Cantt, Meerut, <br />
                                         Uttar Pradesh 250001
                                    </span>
                                </a>
                                <a
                                    href="https://maps.google.com/maps/place/Shri+Jaipur+Bajrangi+Ratan+Kendra/data=!4m2!3m1!1s0x0:0x989afa4414442598?sa=X&ved=1t:2428&hl=en&ictx=111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-black"
                                >
                                    <FiMapPin size={18} className="mt-1 text-[#7A1F3D]" />
                                    <span>
                                        247/1, Rohta Rd, opposite Star <br />
                                         Public School,  Tej Vihar,
                                        Fazalpur,<br /> Meerut, Uttar Pradesh 250002
                                    </span>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-12  pt-6 flex flex-col md:flex-row justify-between items-center  text-gray-500 gap-4">
                    <p className="text-[16px] text-left w-full md:w-auto">
                        @2026 Bajrang Astro.
                        <br className="lg:hidden" />
                        <span className="hidden lg:inline"> </span>
                        All right Reserved,
                        <br className="lg:hidden" />
                        <span className="hidden lg:inline"> </span>
                        Designed and Developed by
                        <br className="lg:hidden" />
                        <span className="hidden lg:inline"> </span>
                        <a className="font-semibold hover:text-black transition-colors" href="https://www.kusheldigi.com/" target="_blank">
                            Kushel Digi Solutions
                        </a>
                    </p>

                    <div className="flex items-center gap-6 text-[16px] md:mr-10">
                        <a href="/terms-condition" className="hover:text-black tracking-wider">Terms And Condition</a>
                        <a href="/privacy-policy" className="hover:text-black tracking-wider">Privacy Policy</a>
                    </div>
                </div>

            </div>
            
            {/* FLOATING BACK TO TOP BUTTON */}
            {isVisible && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 cursor-pointer z-[999] flex items-center justify-center w-12 h-12 bg-[#E57661] text-white rounded-full hover:bg-[#D1644F] transition-all shadow-xl hover:-translate-y-1"
                    aria-label="Back to top"
                    title="Back to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </footer>
    );
}