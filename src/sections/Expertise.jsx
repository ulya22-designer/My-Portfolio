import React from "react";
import {
  Award,
  ArrowRight,
  CalendarDays,
  Building2,
} from "lucide-react";

const expertises = [
  {
    id: 1,
    position: "Head of HPDD",
    organization: "UKM Taekwondo PNJ",
    date: "Nov 2025 - Present",
    description:
      "Leading publication, documentation, and digital branding for UKM Taekwondo PNJ.",
  },
  {
    id: 2,
    position: "Creative Bureau Staff",
    organization: "HIMATIK PNJ",
    date: "Mar 2025 - Jan 2026",
    description:
      "Designed promotional materials and developed creative visual content for organization branding.",
  },
  {
    id: 3,
    position: "Event Staff",
    organization: "Computer Science Festival",
    date: "Oct 2024",
    description:
      "Participated in planning and executing the Computer Science Festival event.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-[#E8E5E5] py-24">
      {/* Top Wave */}
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
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F496E]/20 bg-[#2F496E]/10 px-5 py-2 text-[#2F496E] font-semibold">
            <Award size={18} />
            EXPERTISE
          </span>
          <h2 className="mt-6 text-5xl font-black bg-gradient-to-r from-[#2F496E] to-[#5C7BA5] bg-clip-text text-transparent">
            Leadership & Organization
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {expertises.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 backdrop-blur-xl p-8 shadow-[0_10px_30px_rgba(47,73,110,.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(47,73,110,.15)]"
            >
              {/* Glows */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#2F496E]/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#5C7BA5]/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"></div>

              {/* Top Line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2F496E] to-[#5C7BA5] transition-all duration-700 group-hover:w-full"></div>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F496E]/10 to-[#5C7BA5]/20 text-[#2F496E] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#2F496E] group-hover:text-white">
                <Building2 size={30} className="transition-transform duration-500 group-hover:animate-pulse" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-[#2F496E] transition-colors duration-300 group-hover:text-[#1F3652]">
                {item.position}
              </h3>

              <p className="mt-2 font-semibold text-[#5C7BA5]">
                {item.organization}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2F496E]/10 px-4 py-2 text-sm font-medium text-[#2F496E]">
                <CalendarDays size={15} />
                {item.date}
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                {item.description}
              </p>

              {/* Enhanced Button */}
              <button className="group/button mt-8 relative overflow-hidden inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#2F496E] to-[#4A6A94] px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2F496E]/30 active:scale-95">
                {/* Shine effect inside button */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700"></span>
                
                <span className="relative z-10">View Details</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </button>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <a
            href="/expertise"
            className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#2F496E] bg-white/70 backdrop-blur-md px-8 py-4 font-semibold text-[#2F496E] transition-all duration-300 hover:bg-[#2F496E] hover:text-white hover:shadow-lg hover:shadow-[#2F496E]/20 active:scale-95"
          >
            View All Experience
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