import React from "react";
import fotoAbout from "../assets/fotoAbout.png";
import {
  UserRound,
  Download,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#E8E5E5] pt-16 pb-24">
    
      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full z-10">
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

      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.05); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-5deg); }
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="relative z-20">
          {/* Badge */}
          <span className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2F496E]/10 border border-[#2F496E]/20 text-[#2F496E] font-semibold transition-all duration-300 hover:bg-[#2F496E]/20 hover:shadow-sm cursor-default">
            <UserRound size={18} className="transition-transform duration-300 group-hover:scale-110" />
            ABOUT ME
            <Sparkles size={16} className="text-[#3F5F8C] opacity-70 animate-pulse" />
          </span>

          {/* Judul */}
          <h2 className="mt-6 text-5xl lg:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2F496E] to-[#5C7BA5] drop-shadow-sm">
            Who Am I?
          </h2>

          <p className="mt-6 text-lg text-gray-700/80 leading-relaxed max-w-xl font-medium">
            D4 Informatics Engineering student at Politeknik Negeri Jakarta,
            currently in the 4th semester, with a focus on software development,
            especially Frontend and Backend. Experienced in developing web
            applications, designing and managing databases, and analyzing system
            requirements.
            <br />
            <br />
            Skilled in teamwork, problem-solving, and adapting to new
            technologies. Additionally, interested in design and multimedia to
            create more interactive and user-friendly digital products.
            Dedicated to improving technical skills and contributing to
            innovative technological solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {/* Download CV */}
            <a
              href="/cv-ulya-sara.pdf"
              download="CV ULYA SARA.pdf"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#2F496E] to-[#4A6A94] px-8 py-4 font-semibold text-white shadow-[0_8px_20px_rgba(47,73,110,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(47,73,110,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-full"></span>
              <Download
                size={20}
                className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              />
              <span className="relative">Download CV</span>
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl border-2 border-[#2F496E]/30 bg-white/50 backdrop-blur-sm px-8 py-4 font-semibold text-[#2F496E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2F496E] hover:bg-[#2F496E] hover:text-white hover:shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION (IMAGE & ORNAMENTS) */}
        <div className="relative flex justify-center items-center min-h-[650px]">

    
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#2F496E]/20 to-[#3F5F8C]/10 blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-[#5C7BA5]/20 blur-[80px] -z-10"></div>
          <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-[#2F496E]/15 blur-[70px] -z-10"></div>

          <div className="absolute top-12 right-4 w-[160px] h-[160px] rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] z-0 animate-float-slow transition-transform duration-500"></div>

          <div className="absolute bottom-16 -left-8 w-[130px] h-[130px] rounded-full bg-gradient-to-tr from-[#2F496E]/20 to-white/10 backdrop-blur-lg border border-white/30 shadow-xl z-0 animate-float-medium"></div>

          <div className="absolute bottom-24 right-12 w-[80px] h-[80px] rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg z-0 animate-float-fast"></div>

          <div className="absolute top-32 left-12 w-10 h-10 rounded-full bg-gradient-to-br from-[#2F496E]/40 to-[#2F496E]/10 backdrop-blur-sm z-0 animate-float-medium" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-2 w-6 h-6 rounded-full bg-[#3F5F8C]/40 z-0 animate-float-slow" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-10 group">
            <div className="absolute inset-0 bg-[#2F496E]/10 rounded-3xl blur-2xl transform group-hover:scale-105 group-hover:bg-[#2F496E]/20 transition-all duration-500 -z-10"></div>
            
            <img
              src={fotoAbout}
              alt="Ulya Sara"
              className="relative w-full max-w-[480px] object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-3 drop-shadow-[0_20px_40px_rgba(47,73,110,0.2)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
