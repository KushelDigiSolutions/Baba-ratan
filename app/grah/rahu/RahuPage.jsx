// app/grah/rahu/page.jsx

import {
    ArrowRight,
    Phone,
    Flame,
    ShieldAlert,
    Sparkles,
    Eye,
    Orbit,
    Stars,
    BadgeAlert,
} from "lucide-react";

export default function RahuGrahPage() {
    return (
        <div className="bg-[#05010a] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative  flex items-center px-6 lg:px-20 py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d1033_0%,#090013_45%,#020004_100%)]"></div>

                {/* Stars */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* LEFT */}
                    <div>
                        <span className="px-5 py-2 rounded-full border border-cyan-500 text-sm tracking-[4px] uppercase bg-cyan-500/10">
                            Navgrah • Rahu Dev
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8">
                            <span className="text-white">Rahu</span>
                            <br />

                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                                Grah
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl">
                            Rahu Grah illusion, ambition, mystery aur material desires ka
                            planet mana jata hai. Strong Rahu innovation, power aur sudden
                            success deta hai while weak Rahu confusion aur instability create
                            karta hai.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">
                            <button className="bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                                Explore Remedies
                                <ArrowRight size={20} />
                            </button>
                            <a href="tel:+917042600873">
                                <button className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                                    Talk To Astrologer
                                </button>
                            </a>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">
                        {/* Glow */}
                        <div className="absolute w-[450px] h-[450px] bg-cyan-500 blur-[140px] opacity-30 rounded-full"></div>

                        {/* Planet */}
                        <div className="relative flex items-center justify-center">

                            {/* DARK GLOW */}
                            <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

                            {/* SHADOW RINGS */}
                            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-cyan-400/20 animate-spin [animation-duration:16s]" />

                            <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-violet-500/10 animate-[spin_22s_linear_infinite_reverse]" />

                            {/* MAIN PLANET */}
                            <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-br from-cyan-500 via-[#1e293b] to-black shadow-[0_0_140px_rgba(6,182,212,0.45)] flex items-center justify-center relative overflow-hidden border border-cyan-500/10">

                                {/* TEXTURE */}
                                <div className="absolute top-12 left-12 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

                                <div className="absolute bottom-16 right-14 w-36 h-36 rounded-full bg-black/50 blur-3xl" />

                                {/* DARK ENERGY */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.55),transparent_45%)]" />

                                {/* ICON */}
                                <div className="relative flex items-center justify-center">

                                    {/* ENERGY CORE */}
                                    <div className="absolute w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />

                                    {/* ROTATING ORBIT */}
                                    <Orbit className="w-32 sm:w-44 h-32 sm:h-44 text-cyan-100 opacity-90 animate-spin [animation-duration:12s] drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

                                    {/* CENTER */}
                                    <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-cyan-200 to-violet-400 shadow-[0_0_30px_rgba(34,211,238,0.9)]" />
                                </div>

                                {/* FLOATING PARTICLES */}
                                <div className="absolute top-16 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />

                                <div className="absolute bottom-20 left-16 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />

                                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-ping" />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Represents</p>
                            <h4 className="font-bold text-xl">Illusion</h4>
                        </div>

                        <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Controls</p>
                            <h4 className="font-bold text-xl">Ambition</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* EFFECTS SECTION */}
            <section className="py-24 px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Effects of Strong Rahu
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                        Strong Rahu innovation, fame aur extraordinary thinking provide
                        karta hai.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Sparkles,
                            title: "Sudden Success",
                            desc: "Unexpected opportunities aur quick growth provide karta hai.",
                        },
                        {
                            icon: Eye,
                            title: "Sharp Vision",
                            desc: "Future planning aur unique thinking improve karta hai.",
                        },
                        {
                            icon: Flame,
                            title: "Power & Fame",
                            desc: "Authority, recognition aur popularity increase karta hai.",
                        },
                        {
                            icon: Stars,
                            title: "Innovation",
                            desc: "Creative aur unconventional ideas generate karta hai.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
                        >
                            <item.icon className="w-12 h-12 text-cyan-400 mb-6" />

                            <h3 className="text-2xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* DOSHA & REMEDIES */}
            <section className="py-24 px-6 lg:px-20 bg-white/[0.03]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Remedies For
                            <span className="text-cyan-400"> Rahu Dosha</span>
                        </h2>

                        <p className="text-gray-400 mt-6 leading-8">
                            Proper spiritual remedies aur mantra chanting se Rahu ke negative
                            effects ko reduce kiya ja sakta hai.
                        </p>

                        <div className="space-y-5 mt-10">
                            {[
                                "राहु मंत्र का नियमित जाप करें",
                                "Saturday ko black sesame donate karein",
                                "Durga Chalisa ka paath karein",
                                "Coconut aur blue cloth donate karein",
                            ].map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>

                                    <p className="text-gray-200">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

                        <div className="relative bg-gradient-to-br from-[#07121f] to-[#020611] border border-cyan-500/20 rounded-[40px] p-10">
                            <BadgeAlert className="w-20 h-20 text-cyan-400 mb-8" />

                            <h3 className="text-3xl font-bold mb-5">
                                Rahu Mahadasha
                            </h3>

                            <p className="text-gray-400 leading-8">
                                Rahu Mahadasha life me sudden changes, foreign opportunities,
                                career growth aur spiritual transformation lekar aa sakti hai.
                            </p>

                            <button className="mt-8 cursor-pointer bg-cyan-500 px-7 py-4 rounded-2xl font-semibold hover:bg-cyan-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-24 px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Rahu Influences
                    </h2>

                    <p className="text-gray-400 mt-5">
                        Rahu mainly affects these life areas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        "Career Growth",
                        "Foreign Opportunities",
                        "Fame & Popularity",
                        "Unexpected Changes",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-cyan-500/20 bg-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500 mx-auto flex items-center justify-center text-2xl font-bold text-cyan-400">
                                {index + 1}
                            </div>

                            <h3 className="text-2xl font-semibold mt-6">
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-20">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Need Rahu Grah Guidance?
                        </h2>

                        <p className="mt-6 text-lg text-white/80 max-w-2xl">
                            Talk with expert astrologers and get personalized remedies,
                            gemstone suggestions and Rahu dosha solutions.
                        </p>
                    </div>
                    <a href="tel:+917042600873">
                        <button className="bg-white  cursor-pointer text-black px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition">
                            <Phone />
                            Consult Now
                        </button>
                    </a>

                </div>
            </section>
        </div>
    );
}