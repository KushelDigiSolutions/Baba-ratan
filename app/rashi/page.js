import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import RashiDetailsPage from '../components/RashiDetailsPage'

export const metadata = {
  title: "12 Rashis (Zodiac Signs) in Vedic Astrology | Bajrang Astro",
  description: "Understand the 12 Rashis (Zodiac Signs) and their impact on your life. Get detailed insights into your moon sign, ruling planets, and personality with Bajrang Astro.",
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
