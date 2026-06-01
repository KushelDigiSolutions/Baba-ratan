import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import RashiDetailsPage from '../components/RashiDetailsPage'

export const metadata = {
  title: "Rashi & Zodiac Signs in Vedic Astrology | Bajrang Astro",
  description: "Explore all 12 Rashi (zodiac signs) in Vedic astrology, personality traits, predictions & remedies by Vishal Verma at Bajrang Astro ",
  alternates: {
    canonical: "/rashi",
  },
};

export default function page() {

  return (
    <>
      <Navbar />

      <RashiDetailsPage />
      <Footer />
    </>
  )
}
