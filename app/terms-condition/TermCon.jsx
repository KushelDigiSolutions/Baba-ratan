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
            services, consultations, and gemstone products.
          </p>

          <p className="mt-4 text-white/70">Effective Date: May 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[30px] border border-[#f1d7d1] p-6 md:p-12">
          {/* Acceptance */}
          <div className="border-b border-[#f3dfda] pb-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#d97869]" size={28} />

              <h2 className="text-3xl font-bold text-[#222]">
                1. Acceptance of Terms
              </h2>
            </div>

            <p className="text-gray-600 leading-8">
              By using the services of Bajrang Astro, including Janam Kundli
              analysis, palm reading, Vastu consulting, and gemstone purchase,
              you agree to these Terms & Conditions fully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Services */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                2. Services
              </h3>

              <p className="text-gray-600 leading-8">
                All astrology, Vastu, and gemstone services provided by Vishal
                Verma at Bajrang Astro are based on ancient Vedic astrology and
                Vastu Shastra principles. Results may vary based on individual
                circumstances and planetary positions.
              </p>
            </div>

            {/* No Guarantee */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-[#d97869] mt-1" size={24} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    3. No Guarantee of Results
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Astrology and Vastu are guidance-based sciences. Bajrang
                    Astro does not guarantee specific outcomes. All predictions
                    and remedies are provided in good faith based on your birth
                    chart and property analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                4. No Return & No Refund Policy
              </h3>

              <div className="space-y-5 text-gray-600 leading-8">
                <p>
                  All payments made for Kundli analysis, palm reading, and Vastu
                  consulting are strictly non-refundable and non-returnable
                  under any circumstances.
                </p>

                <p>
                  Once a service is booked and payment is made, it cannot be
                  cancelled or refunded.
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-[#222] mb-3">
                    Gemstone Purchase Policy
                  </h4>

                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <span className="font-semibold">Standard Gemstones:</span>{" "}
                      Once sold and delivered, cannot be returned or exchanged
                      under any circumstances.
                    </li>

                    <li>
                      <span className="font-semibold">
                        Premium & High-Value Gemstones:
                      </span>{" "}
                      A 3-day return window is available from the date of
                      delivery. The gemstone must be returned in its original
                      condition, unused, and in its original packaging.
                    </li>
                  </ul>
                </div>

                <p>
                  No refund will be issued — only store credit or an exchange of
                  equal value may be considered at the sole discretion of Vishal
                  Verma.
                </p>

                <p>
                  Clients are strongly advised to confirm gemstone suitability
                  through a proper Kundli consultation before making any
                  purchase.
                </p>

                <p>
                  Bajrang Astro reserves the right to determine whether a
                  gemstone qualifies as premium or standard.
                </p>
              </div>
            </div>

            {/* Consultation Accuracy */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                5. Consultation Accuracy
              </h3>

              <p className="text-gray-600 leading-8">
                Vishal Verma provides consultations based on the birth details
                and information provided by the client. Bajrang Astro is not
                responsible for inaccurate readings resulting from incorrect
                information provided by the client.
              </p>
            </div>

            {/* Appointments */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                6. Appointment & Scheduling
              </h3>

              <p className="text-gray-600 leading-8">
                Appointments once booked are subject to availability. In case of
                rescheduling by the client, a minimum 24-hour notice is
                required. No refund will be issued for missed or cancelled
                appointments.
              </p>
            </div>

            {/* Gemstones */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                7. Gemstone Purchase
              </h3>

              <p className="text-gray-600 leading-8">
                All gemstones sold by Bajrang Astro are certified and energised.
                Once purchased and delivered, standard gemstones cannot be
                returned or exchanged. For premium gemstones, the 3-day return
                policy as mentioned in Point 4 applies.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                8. Intellectual Property
              </h3>

              <p className="text-gray-600 leading-8">
                All content on the Bajrang Astro website, including text,
                images, and reports, is the intellectual property of Bajrang
                Astro and cannot be copied or reproduced without written
                permission.
              </p>
            </div>

            {/* Governing Law */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                9. Governing Law
              </h3>

              <p className="text-gray-600 leading-8">
                These Terms & Conditions are governed by the laws of India. Any
                disputes will be subject to the jurisdiction of the courts in
                Meerut, Uttar Pradesh.
              </p>
            </div>

            {/* Changes */}
            <div className="pb-2">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                10. Changes to Terms Bajrang Astro
              </h3>

              <p className="text-gray-600 leading-8">
                reserves the right to update these Terms & Conditions at any
                time without prior notice.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-14 bg-[#fff4f1] border border-[#f2d6d0] rounded-[25px] p-8">
            <h3 className="text-2xl font-bold text-[#222] mb-6">
              11. Contact Us
            </h3>

            <p className="text-gray-600 mb-8 leading-7">
              For any queries regarding these Terms & Conditions, please contact
              us:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <a
                href="tel:+917042600873"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#fff0ec] transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <h4 className="font-semibold text-[#222]">+91 7042600873</h4>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:bajrangastroofficial@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#fff0ec] transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Support</p>
                  <h4 className="font-semibold text-[#222]">
                    bajrangastroofficial@gmail.com
                  </h4>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-10">
            © 2025 Bajrang Astro. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
