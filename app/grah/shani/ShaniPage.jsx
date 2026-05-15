"use client";

import React from "react";
import {
    ArrowRight,
    Sparkles,
    Scale,
    Briefcase,
    ShieldCheck,
    Gem,
    HeartHandshake,
    Star,
    MoonStar,
    Orbit,
    BadgeCheck,
    CheckCircle2,
} from "lucide-react";

export default function ShaniGrahPage() {
    return (
        <div className="bg-[#05030a] text-white overflow-hidden">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">
                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#0f0b29_40%,#05030a_100%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 min-h-screen items-center gap-20 py-20">
                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full shadow-lg backdrop-blur-xl">
                                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />

                                <span className="text-sm font-semibold tracking-[3px] uppercase text-indigo-300">
                                    Navgrah • Shani Dev
                                </span>
                            </div>

                            <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[110px] font-black leading-none">
                                <span className="text-white">Shani</span>

                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                                    Grah
                                </span>
                            </h1>

                            <p className="mt-8 text-lg sm:text-xl leading-9 text-indigo-100/70 max-w-2xl">
                                Shani Grah discipline, karma, hard work aur justice ka planet
                                mana jata hai. Strong Shani determination, patience aur long-term success
                                lekar aata hai.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap gap-5 mt-10">
                                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 duration-300 shadow-[0_15px_40px_rgba(79,70,229,0.35)]">
                                    Explore Remedies
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                                </button>
              <a href="tel:+917042600087">
                  <button className="bg-white/5 border cursor-pointer border-indigo-500/30 text-indigo-200 hover:bg-white hover:text-[#05030a] px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg">
                                    Talk To Astrologer
                                </button>
              </a>
                              
                            </div>

                            {/* MINI STATS */}
                            <div className="grid sm:grid-cols-3 gap-5 mt-14">
                                {[
                                    {
                                        title: "Day",
                                        value: "Saturday",
                                    },
                                    {
                                        title: "Element",
                                        value: "Air",
                                    },
                                    {
                                        title: "Gemstone",
                                        value: "Neelam",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl"
                                    >
                                        <p className="text-indigo-200/60 text-sm">
                                            {item.title}
                                        </p>

                                        <h3 className="text-2xl font-black mt-2 text-indigo-300">
                                            {item.value}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative flex justify-center">
                            {/* BIG GLOW */}
                            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 blur-[100px] opacity-30" />

                            {/* PLANET */}
                            <div className="relative z-10">
                                {/* OUTER RING */}
                                <div className="absolute inset-[-50px] rounded-full border border-indigo-500/30 animate-spin [animation-duration:20s]"></div>

                                <div className="absolute inset-[-90px] rounded-full border border-purple-500/20 [animation-duration:15s] animate-[spin_15s_linear_infinite_reverse]"></div>

                                {/* PLANET */}
                                <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-br from-indigo-400 via-purple-600 to-[#1e1b4b] shadow-[0_0_120px_rgba(79,70,229,0.4)] flex items-center justify-center relative overflow-hidden">
                                    {/* PLANET TEXTURE */}
                                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/20 blur-2xl"></div>

                                    <div className="absolute bottom-16 right-14 w-32 h-32 rounded-full bg-black/40 blur-2xl"></div>

                                     <Orbit className="w-32 sm:w-44 h-32 sm:h-44 text-indigo-100 opacity-90 drop-shadow-[0_0_35px_rgba(129,140,248,0.7)] animate-spin [animation-duration:12s]" />

                                </div>

                                {/* FLOATING CARD */}
                                <div className="absolute -top-8 -right-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-5 hidden lg:flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                                        <Scale className="w-7 h-7" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-indigo-200/60">
                                            Represents
                                        </p>

                                        <h3 className="font-bold text-xl text-white">
                                            Justice
                                        </h3>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -left-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-5 hidden lg:flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                                        <Briefcase className="w-7 h-7" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-purple-200/60">
                                            Controls
                                        </p>

                                        <h3 className="font-bold text-xl text-white">
                                            Karma
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            <span className="text-indigo-400 uppercase tracking-[4px] font-bold">
                                About Shani Grah
                            </span>

                            <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6 text-white">
                                Justice Aur Karma Ka Planet
                            </h2>

                            <p className="mt-8 text-lg leading-9 text-indigo-100/70">
                                Shani Grah astrology me discipline, hard work, aur justice ko represent karta hai.
                                Strong Shani insaan ko respect, patience aur huge success deta hai jabki weak Shani delays aur struggles lata hai.
                            </p>

                            {/* FEATURES */}
                            <div className="space-y-5 mt-10">
                                {[
                                    "Life me discipline aur responsibility increase karta hai",
                                    "Hard work ke through long-term success milta hai",
                                    "Negative energies aur obstacles se protection deta hai",
                                    "Inner wisdom aur practicality ko improve karta hai",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg flex items-start gap-4 hover:-translate-y-1 duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>

                                        <p className="text-lg text-indigo-100/80 leading-8">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CARD DESIGN */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f0b29] rounded-[45px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-indigo-500/20 relative overflow-hidden">
                                {/* DECOR */}
                                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>

                                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                                    {[
                                        {
                                            icon: <Briefcase className="w-8 h-8" />,
                                            title: "Career",
                                        },
                                        {
                                            icon: <ShieldCheck className="w-8 h-8" />,
                                            title: "Protection",
                                        },
                                        {
                                            icon: <Orbit className="w-8 h-8" />,
                                            title: "Discipline",
                                        },
                                        {
                                            icon: <Gem className="w-8 h-8" />,
                                            title: "Stability",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/5 rounded-3xl p-8 shadow-lg border border-white/10 hover:-translate-y-2 duration-300"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                                                {item.icon}
                                            </div>

                                            <h3 className="text-2xl font-black mt-6 text-white">
                                                {item.title}
                                            </h3>

                                            <p className="text-indigo-100/60 mt-3 leading-7">
                                                Strong Shani brings patience and growth.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= EFFECTS ================= */}
            <section className="py-28 bg-[#0a0718] relative overflow-hidden">
                {/* BG */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="text-indigo-400 uppercase tracking-[4px] font-bold">
                            Positive Effects
                        </span>

                        <h2 className="text-5xl lg:text-6xl font-black text-white mt-6">
                            Strong Shani Ke Benefits
                        </h2>

                        <p className="text-indigo-100/70 text-lg leading-9 mt-6">
                            Strong Shani life me huge success, stability aur maturity lata hai.
                        </p>
                    </div>

                    {/* EFFECT GRID */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
                        {[
                            {
                                icon: <Scale className="w-8 h-8" />,
                                title: "Justice",
                            },
                            {
                                icon: <Star className="w-8 h-8" />,
                                title: "Success",
                            },
                            {
                                icon: <BadgeCheck className="w-8 h-8" />,
                                title: "Patience",
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: "Maturity",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-3 duration-300"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-2xl">
                                    {item.icon}
                                </div>

                                <h3 className="text-white text-3xl font-black mt-8">
                                    {item.title}
                                </h3>

                                <p className="text-indigo-100/60 text-lg leading-8 mt-5">
                                    Strong Shani enhances discipline and achievement.
                                </p>

                                <button className="flex items-center gap-2 text-indigo-400 font-semibold mt-8 group-hover:gap-4 duration-300">
                                    Learn More <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MANTRA SECTION ================= */}
            <section className="py-28 bg-[#05030a]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 p-12 sm:p-16 text-center shadow-[0_25px_80px_rgba(79,70,229,0.2)] border border-indigo-500/20">
                        {/* DECOR */}
                        <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full bg-indigo-500/20 blur-2xl"></div>

                        <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-purple-500/20 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                                <Gem className="w-14 h-14 text-indigo-200" />
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black text-white mt-10">
                                Shani Beej Mantra
                            </h2>

                            <p className="text-indigo-200 text-2xl sm:text-4xl font-bold leading-relaxed mt-8">
                                ॐ प्रां प्रीं प्रौं सः शनये नमः
                            </p>

                            <p className="text-indigo-100/80 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                                Roz Shani mantra ka jaap aur Shanivar ko mustard oil ya kale til
                                donate karna bahut shubh mana jata hai.
                            </p>

                            <button className="mt-10 bg-white text-[#0f0b29] hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                                Start Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white/5 backdrop-blur-md rounded-[45px] border border-indigo-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-12 lg:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-2xl">
                                <HeartHandshake className="w-14 h-14" />
                            </div>

                            <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight text-white">
                                Personalized
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                                    Shani Consultation
                                </span>
                            </h2>

                            <p className="text-indigo-100/70 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                                Apni kundli me Shani ki position aur Sade Sati/Dhaiya ke effects ko
                                samajhne ke liye expert astrologer se consultation le.
                            </p>

                            <div className="flex flex-wrap justify-center gap-5 mt-12">
                                  <a href="tel:+917042600873">   <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl">
                                    Book Consultation
                                </button></a>
                              

                                <button className="border border-indigo-500/50 text-indigo-300 hover:bg-white hover:text-[#05030a] px-8 py-4 rounded-2xl font-semibold duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}