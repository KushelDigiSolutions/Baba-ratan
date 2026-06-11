import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import Testimonials from "../components/Testimonials";

export const metadata = {
  title: "Client Testimonials | Bajrang Astro",
  description: "See what our happy clients say about Vishal Verma's astrology and vastu consulting services.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 xl:px-24 text-center bg-[#FFF5E9]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E57661] mb-4">
          Client Testimonials
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Real people, real results. Hear from those who trusted Bajrang Astro for guidance, clarity, and peace.
        </p>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 px-6 xl:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Review</h2>
            <div className="w-16 h-1 bg-[#E57661] mx-auto rounded-full"></div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#FFF5E9] w-full max-w-sm mx-auto bg-black flex justify-center">
            <video
              controls
              controlsList="nodownload"
              className="w-full h-auto max-h-[550px] object-cover"
              poster="https://res.cloudinary.com/dxlykgx6w/video/upload/v1781164589/sonia_-_Best_astrologer_vishal_verma_ljwxsg.jpg"
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dxlykgx6w/video/upload/v1781164589/sonia_-_Best_astrologer_vishal_verma_ljwxsg.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Existing Testimonials Component */}
      <Testimonials />

      <Footer />
    </div>
  );
}
