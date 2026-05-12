"use client";

import React from "react";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Phone,
  Mail,
} from "lucide-react";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-[#fff7f5]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d97869] to-[#bf6253] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 text-white">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <ShieldCheck size={40} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Terms & Conditions
          </h1>

          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-8">
            Please read these terms carefully before using Bajrang Astro
            services, consultations, and spiritual products.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[30px] border border-[#f1d7d1] p-6 md:p-12">
          {/* Intro */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#d97869]" size={28} />

              <h2 className="text-3xl font-bold text-[#222]">
                Introduction
              </h2>
            </div>

            <p className="text-gray-600 leading-8">
              By accessing and using Bajrang Astro’s website, astrology
              services, vastu consultations, and spiritual products, you agree
              to comply with and be bound by the following terms and conditions.
              These terms ensure a safe and transparent experience for all
              users.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Services */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                1. Astrology & Consultation Services
              </h3>

              <p className="text-gray-600 leading-8">
                Our astrology guidance, vastu consultation, horoscope analysis,
                and spiritual recommendations are based on traditional knowledge
                and personal interpretation. Results may vary from person to
                person, and we do not guarantee specific outcomes.
              </p>
            </div>

            {/* Payments */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                2. Payments & Refund Policy
              </h3>

              <p className="text-gray-600 leading-8">
                All payments made for consultations, reports, gemstones, and
                spiritual products are final unless otherwise stated. Refunds
                may only be considered in exceptional circumstances after review
                by our support team.
              </p>
            </div>

            {/* Products */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                3. Product Information
              </h3>

              <p className="text-gray-600 leading-8">
                We strive to provide accurate descriptions and images of
                gemstones, rudraksha, and vastu products. However, slight
                variations in color, texture, or appearance may occur due to
                natural materials and screen settings.
              </p>
            </div>

            {/* User Responsibility */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                4. User Responsibilities
              </h3>

              <p className="text-gray-600 leading-8">
                Users agree not to misuse the website, attempt unauthorized
                access, or engage in fraudulent activities. You are responsible
                for maintaining the confidentiality of your account information.
              </p>
            </div>

            {/* Limitation */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="text-[#d97869] mt-1"
                  size={24}
                />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    5. Limitation of Liability
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Bajrang Astro shall not be held liable for any direct,
                    indirect, or incidental damages arising from the use of our
                    services, consultations, or products. Users are advised to
                    make decisions responsibly.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                6. Privacy Policy
              </h3>

              <p className="text-gray-600 leading-8">
                Your personal information is handled securely and used only for
                providing services, processing orders, and improving user
                experience. We do not share your information with third parties
                without consent.
              </p>
            </div>

            {/* Changes */}
            <div className="pb-2">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                7. Changes to Terms
              </h3>

              <p className="text-gray-600 leading-8">
                Bajrang Astro reserves the right to modify these terms at any
                time. Updated terms will be posted on this page, and continued
                use of the website signifies your acceptance of the revised
                conditions.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-14 bg-[#fff4f1] border border-[#f2d6d0] rounded-[25px] p-8">
            <h3 className="text-2xl font-bold text-[#222] mb-6">
              Need Help?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <h4 className="font-semibold text-[#222]">
                    +91 85950 46368
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Support</p>
                  <h4 className="font-semibold text-[#222]">
                    support@bajrangastro.com
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-400 mt-10">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;