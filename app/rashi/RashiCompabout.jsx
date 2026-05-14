import React from 'react'

export default function RashiCompabout() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1400&auto=format&fit=crop"
                  alt="Rashi"
                  className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
                />
              </div>
    
              <div>
                <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
                  About Zodiac Signs
                </span>
    
                <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-4 leading-tight">
                  Understanding Rashi In Vedic Astrology
                </h2>
    
                <p className="text-gray-600 mt-6 leading-8 text-lg">
                  In Vedic astrology, Rashi refers to the zodiac sign determined by
                  the Moon’s position at the time of birth. Each Rashi has its own
                  nature, ruling planet, strengths, weaknesses, and spiritual
                  influence.
                </p>
    
                <p className="text-gray-600 mt-5 leading-8 text-lg">
                  Rashis play an important role in understanding personality,
                  relationships, career, finances, and future predictions. Astrology
                  helps individuals align their life with cosmic energies.
                </p>
    
                <div className="grid sm:grid-cols-2 gap-5 mt-10">
                  <div className="bg-white rounded-3xl p-6 shadow-md">
                    <FiSun className="text-4xl text-[#d96d55]" />
                    <h3 className="text-xl font-bold text-[#4e2723] mt-4">
                      Planetary Influence
                    </h3>
                    <p className="text-gray-600 mt-3 leading-7">
                      Every zodiac sign is ruled by a specific planet.
                    </p>
                  </div>
    
                  <div className="bg-white rounded-3xl p-6 shadow-md">
                    <FiMoon className="text-4xl text-[#d96d55]" />
                    <h3 className="text-xl font-bold text-[#4e2723] mt-4">
                      Emotional Nature
                    </h3>
                    <p className="text-gray-600 mt-3 leading-7">
                      Rashis influence emotions, thinking, and behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}
