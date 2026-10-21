import React from "react";
import {
  BriefcaseBusiness,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

// --- PLACEHOLDER IMAGES ---
const imgKementan = "https://placehold.co/100x100/2F496E/white?text=Kementan"; 
const imgTVRI = "https://placehold.co/100x100/2F496E/white?text=TVRI";
const imgAsia = "https://placehold.co/100x100/2F496E/white?text=Asia";

const experiences = [
  {
    id: 1,
    company: "Kementerian Pertanian RI",
    position: "Public Relations Internship",
    date: "September 2022",
    description: "Designed visual content, interactive social media, and branding assets for public information.",
    image: imgKementan, 
  },
  {
    id: 2,
    company: "TVRI DKI Jakarta",
    position: "Technical Division Internship",
    date: "Oct 2022 – Dec 2022",
    description: "Worked as Field & Stage Crew supporting live broadcasting and technical operations.",
    image: imgTVRI,
  },
  {
    id: 3,
    company: "Universitas Siber Asia",
    position: "Multimedia Internship",
    date: "Jan 2023 – Feb 2023",
    description: "Created promotional designs, social media content, and educational videos.",
    image: imgAsia,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#F8FAFD] py-24">

    {/* TOP WAVE */}
    <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full z-10">
        <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block w-full h-[90px]"
        >
        <path
            fill="#F8FAFD"
            d="M0,64 C240,140 480,0 720,64 C960,128 1200,20 1440,90 L1440,160 L0,160 Z"
        />
        </svg>
    </div>

    <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2F496E]/10 px-5 py-2 text-[#2F496E] font-semibold border border-[#2F496E]/10">
            <BriefcaseBusiness size={18} />
            EXPERIENCE
          </span>
          <h2 className="mt-6 text-5xl font-black text-[#2F496E]">
            Professional Experience
          </h2>
        </div>

        {/* Cards Container */}
        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="
                group relative overflow-hidden rounded-3xl border border-[#2F496E]/10 
                bg-white transition-all duration-500 
                hover:-translate-y-2 hover:border-[#2F496E]/20 
                hover:shadow-[0_20px_50px_-15px_rgba(47,73,110,0.15)]
              "
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F496E] to-[#7998C1] opacity-60" />

              <div className="p-6 md:p-8">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2F496E]/5 rounded-full blur-[60px] -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white">
                      <img 
                        src={item.image} 
                        alt={item.company} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#2F496E]">
                      {item.position}
                    </h3>
                    <p className="mt-1 font-semibold text-[#5C7BA5]">
                      {item.company}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-400 font-medium">
                      <CalendarDays size={16} />
                      {item.date}
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <button className="
                    relative overflow-hidden group/button
                    inline-flex items-center gap-2 rounded-xl 
                    bg-[#2F496E]/5 px-6 py-3 font-semibold text-[#2F496E] 
                    transition-all duration-300 
                    hover:bg-[#2F496E] hover:text-white 
                    hover:shadow-lg hover:shadow-[#2F496E]/20
                    active:scale-95
                  ">
                    {/* Efek Shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-0 transition-transform duration-700 bg-white/10" />
                    
                    <span className="relative z-10">View Details</span>
                    <ArrowRight
                      size={16}
                      className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
