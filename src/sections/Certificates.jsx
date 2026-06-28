import React from "react";
import {
  Award,
  ArrowRight,
  CalendarDays,
  Eye,
} from "lucide-react";

// Ganti dengan gambar sertifikat asli nanti
const certificates = [
  {
    id: 1,
    title: "Junior Web Developer",
    issuer: "BNSP",
    year: "2025",
    image: "https://placehold.co/600x420/F5F5F5/2F496E?text=Certificate+1",
  },
  {
    id: 2,
    title: "TOEIC",
    issuer: "ETS",
    year: "2025",
    image: "https://placehold.co/600x420/F5F5F5/2F496E?text=Certificate+2",
  },
  {
    id: 3,
    title: "SolidWorks",
    issuer: "Dassault Systèmes",
    year: "2024",
    image: "https://placehold.co/600x420/F5F5F5/2F496E?text=Certificate+3",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#E8E5E5] py-24"
    >
      {/* TOP WAVE */}

      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full">

        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block w-full h-[90px]"
        >
          <path
            fill="#E8E5E5"
            d="M0,64 C240,140 480,0 720,64 C960,128 1200,20 1440,90 L1440,160 L0,160 Z"
          />
        </svg>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F496E]/20 bg-[#2F496E]/10 px-5 py-2 text-[#2F496E] font-semibold">

            <Award size={18} />

            CERTIFICATES

          </span>

          <h2 className="mt-6 text-5xl font-black bg-gradient-to-r from-[#2F496E] to-[#5C7BA5] bg-clip-text text-transparent">

            Professional Certificates

          </h2>

          <p className="mt-5 max-w-2xl mx-auto leading-8 text-gray-600">

            Certifications, training programs, and achievements
            that reflect my continuous learning journey.

          </p>

        </div>

        {/* GALLERY */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((item) => (

            <div
              key={item.id}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/70
              bg-white/80
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(47,73,110,.08)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_25px_50px_rgba(47,73,110,.15)]
              "
            >

              {/* Glow */}

              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#2F496E]/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125"></div>

              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#5C7BA5]/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

              {/* Top Accent */}

              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2F496E] to-[#5C7BA5] transition-all duration-700 group-hover:w-full"></div>

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  h-64
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[#2F496E]/75
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  "
                >

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    font-semibold
                    text-[#2F496E]
                    shadow-lg
                    transition
                    hover:scale-105
                    "
                  >

                    <Eye size={18} />

                    Preview

                  </button>

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#2F496E]">

                  {item.title}

                </h3>

                <p className="mt-2 font-semibold text-[#5C7BA5]">

                  {item.issuer}

                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2F496E]/10 px-4 py-2 text-sm font-medium text-[#2F496E]">

                  <CalendarDays size={15} />

                  {item.year}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* VIEW ALL */}

        <div className="mt-16 flex justify-center">

          <a
            href="/certificates"
            className="
            group
            relative
            inline-flex
            items-center
            gap-3
            rounded-full
            border-2
            border-[#2F496E]
            bg-white/70
            backdrop-blur-md
            px-8
            py-4
            font-semibold
            text-[#2F496E]
            transition-all
            duration-300
            hover:bg-[#2F496E]
            hover:text-white
            hover:shadow-lg
            hover:shadow-[#2F496E]/20
            active:scale-95
            "
          >

            View All Certificates

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />

          </a>

        </div>

      </div>

    </section>
  );
}