
"use client"
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import FaQ from '../components/FaQ'
import Testimonials from '../components/Testimonials'
import VastuEigth from './VastuEigth'
import VastuFourth from './VastuFourth'
import VastuHero from './VastuHero'
import VastuNinth from './VastuNinth'
import VastuSecond from './VastuSecond'
import VastuSeveth from './VastuSeventh'
import VastuSixth from './VastuSixth'
import VastuThird from './VastuThird'

const VastuConsulting = () => {
  const faqData = [
    {
      question: "Who is the best Vastu consultant in India?",
      answer:
        "Vishal Verma of Bajrang Astro is one of the most trusted Vastu consultants in India, known for accurate space analysis and practical corrections for homes, offices, and factories.",
    },
    {
      question: "How can Vastu consulting help my home or business?",
      answer:
        "Expert Vastu consultation by Vishal Verma identifies hidden energy blocks in your space and corrects them, bringing financial growth, peace, and positive energy back into your life.",
    },
    {
      question: "Do you provide Vastu services across India?",
      answer:
        "Yes, Bajrang Astro provides Vastu consulting across India. Site visits are available in Delhi NCR, Noida, Gurgaon, Ghaziabad, and Meerut. Online Vastu analysis is available pan-India.",
    },
    {
      question: "Can I get a free Vastu consultation with Vishal Verma?",
      answer:
        "Yes, you can connect with Vishal Verma for a free initial chat on WhatsApp or call to understand your Vastu dosh and find the right solution for your space.",
    },
  ];
  return (
    <>
      <Navbar />
      <VastuHero />
      <VastuSecond />
      <VastuThird />
      <VastuFourth />
      <VastuSixth />
      <VastuSeveth />
      <VastuEigth />
      <VastuNinth />
      <Testimonials />
      <FaQ data={faqData} />
      <Footer />
    </>
  )
}

export default VastuConsulting
