"use client";

import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Phone,
  Mail,
  CheckCircle2,
  Cookie,
  ExternalLink,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#fff7f5]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d97869] to-[#bf6253] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 text-white">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Shield size={40} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Privacy Policy
          </h1>

          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-8">
            Bajrang Astro respects your privacy and is committed to protecting
            your personal information and birth details shared for astrology
            consultation services.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm">
            Effective Date: May 2025
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[30px] border border-[#f1d7d1] p-6 md:p-12 shadow-sm">

          {/* Introduction */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <Lock className="text-[#d97869]" size={30} />

              <h2 className="text-3xl font-bold text-[#222]">
                Bajrang Astro Privacy Commitment
              </h2>
            </div>

            <p className="text-gray-600 leading-8 text-lg">
              At Bajrang Astro, we value your trust and respect your privacy.
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our astrology consultation,
              Janam Kundli analysis, Vastu guidance, palm reading, and gemstone
              recommendation services by Pandit Vishal Johari.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-10">

            {/* Section 1 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <Database className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    1. Information We Collect
                  </h3>

                  <p className="text-gray-600 leading-8">
                    When you contact us via our website, WhatsApp, or phone, we
                    collect basic personal information including your name,
                    phone number, email address, and birth details such as date,
                    time, and place of birth required for Janam Kundli analysis
                    and Vedic astrology consultation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#d97869] mt-1"
                  size={26}
                />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    2. How We Use Your Information
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Your information is used solely to provide our astrology
                    services including Kundli analysis, palm reading, Vastu
                    consulting, and gemstone recommendations by Pandit Vishal
                    Johari. We do not sell, share, or misuse your personal data
                    under any circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <Shield className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    3. Birth Data Confidentiality
                  </h3>

                  <p className="text-gray-600 leading-8">
                    All birth details and personal information shared with
                    Bajrang Astro are kept strictly confidential. Your data is
                    never shared with any third party without your explicit
                    consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <Cookie className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    4. Cookies
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Our website may use basic cookies to improve your browsing
                    experience. No personal information is stored through
                    cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <ExternalLink
                  className="text-[#d97869] mt-1"
                  size={26}
                />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    5. Third Party Links
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Our website may contain links to external platforms like WhatsApp or social
                    media. We are not responsible for the privacy practices of those platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <Eye className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    6. Data Security
                  </h3>

                  <p className="text-gray-600 leading-8">
                    We take reasonable steps to protect your personal information. However, no
                    internet transmission is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-4">
                <Shield className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    7.  Changes to Privacy Policy Bajrang Astro
                  </h3>

                  <p className="text-gray-600 leading-8">
                    reserves the right to update this Privacy Policy at any
                    t
                    ime. Changes will be reflected on this page.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#d97869] mt-1" size={26} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    8. Contact Us
                  </h3>

                  <p className="text-gray-600 leading-8">
                    For any privacy-related queries, contact Pandit Vishal Johari at: +91 85950 46368,
                    info@bajrangastro.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="mt-14 bg-[#fff4f1] border border-[#f2d6d0] rounded-[28px] p-8 md:p-10">
            <h3 className="text-3xl font-bold text-[#222] mb-8">
              Get in Touch
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Phone */}
              <a
                href="tel:+918595046368"
                className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-[#f1d7d1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#d97869] text-white flex items-center justify-center  transition-transform duration-300">
                  <Phone size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Phone Number
                  </p>

                  <h4 className="font-semibold text-lg text-[#222]">
                    +91 85950 46368
                  </h4>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@bajrangastro.com"
                className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-[#f1d7d1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#d97869] text-white flex items-center justify-center transition-transform duration-300">
                  <Mail size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Email Address
                  </p>

                  <h4 className="font-semibold text-lg text-[#222]">
                    info@bajrangastro.com
                  </h4>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-[#f1d7d1] text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Bajrang Astro. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;