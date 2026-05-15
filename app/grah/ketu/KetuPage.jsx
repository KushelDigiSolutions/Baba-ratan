// app/grah/ketu/page.jsx

import {
    ArrowRight,
    Phone,
    Sparkles,
    Orbit,
    Flame,
    Shield,
    Stars,
    MoonStar,
    BadgeCheck,
} from "lucide-react";

export default function KetuGrahPage() {
    return (
        <div className="bg-[#04010a] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative flex items-center px-6 lg:px-20 py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a0b42_0%,#100018_45%,#030005_100%)]"></div>

                {/* Stars Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* LEFT */}
                    <div>
                        <span className="px-5 py-2 rounded-full border border-violet-500 text-sm tracking-[4px] uppercase bg-violet-500/10">
                            Navgrah • Ketu Dev
                        </span>

                        <h1 className="text-5xl md:text-8xl font-black leading-tight mt-8">
                            <span className="text-white">Ketu</span> {" "}
                          

                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
                                Grah
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl">
                            Ketu Grah spirituality, detachment, intuition aur moksha ka
                            planet mana jata hai. Strong Ketu wisdom, spiritual growth aur
                            inner peace deta hai while weak Ketu confusion aur instability
                            create karta hai.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">
                            <button className="bg-gradient-to-r cursor-pointer from-violet-600 to-fuchsia-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                                Explore Remedies
                                <ArrowRight size={20} />
                            </button>

                            <a href="tel:+917042600087">
                                <button className="border cursor-pointer border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                                    Talk To Astrologer
                                </button>
                            </a>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">
                        {/* Glow */}
                        <div className="absolute w-[450px] h-[450px] bg-violet-600 blur-[140px] opacity-35 rounded-full"></div>

                        {/* Planet */}
                 <div className="relative flex items-center justify-center">

    {/* MYSTIC GLOW */}
    <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />

    {/* OUTER ENERGY RING */}
    <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-fuchsia-400/20 animate-spin [animation-duration:14s]" />

    <div className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full border border-cyan-400/10 animate-[spin_18s_linear_infinite_reverse]" />

    {/* MAIN ICON */}
    <Sparkles className="w-32 sm:w-44 h-32 sm:h-44 text-fuchsia-100 opacity-90 drop-shadow-[0_0_35px_rgba(217,70,239,0.8)]" />

    {/* CENTER ENERGY CORE */}
    <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-200 to-cyan-300 shadow-[0_0_30px_rgba(236,72,153,0.9)]" />

    {/* FLOATING PARTICLES */}
    <div className="absolute top-10 left-16 w-2 h-2 bg-fuchsia-300 rounded-full animate-ping" />
    <div className="absolute bottom-16 right-14 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" />
    <div className="absolute top-1/2 right-8 w-2 h-2 bg-white rounded-full animate-ping" />
</div>

                        {/* Floating Cards */}
                        <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Represents</p>
                            <h4 className="font-bold text-xl">Spirituality</h4>
                        </div>

                        <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Controls</p>
                            <h4 className="font-bold text-xl">Moksha</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* EFFECTS SECTION */}
            <section className="py-24 px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Effects of Strong Ketu
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                        Strong Ketu spiritual awareness, intuition aur deep inner wisdom
                        provide karta hai.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Sparkles,
                            title: "Spiritual Growth",
                            desc: "Spiritual awakening aur higher consciousness improve karta hai.",
                        },
                        {
                            icon: Shield,
                            title: "Inner Protection",
                            desc: "Negative thoughts aur energies se protection deta hai.",
                        },
                        {
                            icon: Stars,
                            title: "Intuition",
                            desc: "Decision making aur sixth sense strong karta hai.",
                        },
                        {
                            icon: Flame,
                            title: "Detachment",
                            desc: "Material distractions se freedom provide karta hai.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
                        >
                            <item.icon className="w-12 h-12 text-violet-400 mb-6" />

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

            {/* REMEDIES SECTION */}
            <section className="py-24 px-6 lg:px-20 bg-white/[0.03]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Remedies For
                            <span className="text-violet-400"> Ketu Dosha</span>
                        </h2>

                        <p className="text-gray-400 mt-6 leading-8">
                            Proper spiritual remedies aur mantra chanting se Ketu dosha ke
                            negative effects ko reduce kiya ja sakta hai.
                        </p>

                        <div className="space-y-5 mt-10">
                            {[
                                "केतु मंत्र का नियमित जाप करें",
                                "Stray dogs ko food donate karein",
                                "Ganesh ji ki पूजा karein",
                                "Multi-color clothes aur blankets donate karein",
                            ].map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
                                >
                                    <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>

                                    <p className="text-gray-200">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-30 rounded-full"></div>

                        <div className="relative bg-gradient-to-br from-[#14041d] to-[#090010] border border-violet-500/20 rounded-[40px] p-10">
                            <BadgeCheck className="w-20 h-20 text-violet-400 mb-8" />

                            <h3 className="text-3xl font-bold mb-5">
                                Ketu Mahadasha
                            </h3>

                            <p className="text-gray-400 leading-8">
                                Ketu Mahadasha spiritual transformation, self-discovery aur
                                karmic learning ka powerful phase mana jata hai.
                            </p>

                            <button  className="mt-8 cursor-pointer bg-violet-600 px-7 py-4 rounded-2xl font-semibold hover:bg-violet-700 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFLUENCE SECTION */}
            <section className="py-24 px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ketu Influences
                    </h2>

                    <p className="text-gray-400 mt-5">
                        Ketu mainly affects these life areas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        "Spiritual Wisdom",
                        "Inner Peace",
                        "Meditation Power",
                        "Karmic Lessons",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-violet-500/20 bg-white/5 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500 mx-auto flex items-center justify-center text-2xl font-bold text-violet-400">
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
                <div className="bg-gradient-to-r from-violet-600 to-fuchsia-700 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Need Ketu Grah Guidance?
                        </h2>

                        <p className="mt-6 text-lg text-white/80 max-w-2xl">
                            Talk with expert astrologers and get personalized remedies,
                            gemstone suggestions and Ketu dosha solutions.
                        </p>
                    </div>

                    <a href="tel:+917042600087">
                        <button className="bg-white cursor-pointer text-black px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition">
                            <Phone />
                            Consult Now
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
}