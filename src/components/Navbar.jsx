import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import { 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  Briefcase, 
  Code2, 
  Award,
  Send 
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-100px 0px -40% 0px", 
        threshold: 0.1 
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Data dropdown
  const profileMenus = [
    { id: "about", title: "About Me", href: "#about", icon: User },
    { id: "experience", title: "Experience", href: "#experience", icon: Briefcase },
    { id: "expertise", title: "Expertise", href: "#expertise", icon: Code2 },
    { id: "certificates", title: "Certificates", href: "#certificates", icon: Award },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
      <Container>
        <div className="h-20 flex items-center justify-between">
          
          {/* LOGO AREA */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2F496E] to-[#5C7BA5] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="text-white font-black text-lg">U</span>
            </div>
            <h1 className="font-bold text-xl tracking-tight text-[#2F496E]">
              Ulya<span className="text-[#5C7BA5]">Sara</span>
            </h1>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">

            {/* Home */}
            <a 
              href="#hero" 
              className={`relative group py-2 transition-colors duration-300 ${
                activeSection === "hero" ? "text-[#2F496E]" : "hover:text-[#2F496E]"
              }`}
            >
              Home
              <span 
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#2F496E] transition-all duration-300 ${
                  activeSection === "hero" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>

            {/* PROFILE DROPDOWN */}
            <div className="relative group/dropdown py-6">
              
              <button className="relative flex items-center gap-1.5 hover:text-[#2F496E] transition-colors duration-300 focus:outline-none">
                Profile
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover/dropdown:rotate-180 text-[#5C7BA5]"
                />
              </button>

              <div
                className="
                  absolute
                  left-1/2
                  top-[85%]
                  -translate-x-1/2
                  w-56
                  p-2
                  rounded-2xl
                  bg-white/95
                  backdrop-blur-2xl
                  shadow-[0_10px_40px_-10px_rgba(47,73,110,0.2)]
                  border
                  border-[#2F496E]/10
                  opacity-0
                  invisible
                  translate-y-3
                  transition-all
                  duration-300
                  ease-out
                  group-hover/dropdown:opacity-100
                  group-hover/dropdown:visible
                  group-hover/dropdown:translate-y-0
                "
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-[#2F496E]/10 rounded-sm"></div>

                <div className="relative z-10 flex flex-col">
                  {profileMenus.map((menu, idx) => (
                    <a
                      key={idx}
                      href={menu.href}
                      className="group/item flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-gray-600 transition-all duration-200 hover:bg-[#2F496E]/5 hover:text-[#2F496E] hover:translate-x-1"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100/80 text-gray-500 transition-colors duration-200 group-hover/item:bg-[#2F496E] group-hover/item:text-white">
                        <menu.icon size={16} />
                      </div>
                      <span className="text-sm font-semibold">{menu.title}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Projects*/}
            <a 
              href="#projects" 
              className={`relative group py-2 transition-colors duration-300 ${
                activeSection === "projects" ? "text-[#2F496E]" : "hover:text-[#2F496E]"
              }`}
            >
              Projects
              <span 
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#2F496E] transition-all duration-300 ${
                  activeSection === "projects" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>

            {/* Tombol Contact Desktop */}
            <a
              href="#contact"
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs tracking-wide uppercase font-bold shadow-md shadow-[#2F496E]/20 overflow-hidden transition-all duration-300 hover:bg-[#243B5A] hover:shadow-lg hover:shadow-[#2F496E]/30 hover:-translate-y-0.5 active:translate-y-0 ${
                activeSection === "contact" ? "bg-[#243B5A]" : "bg-[#2F496E]"
              }`}
            >
              <span>Contact</span>
              <Send size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </a>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-[#2F496E] hover:bg-[#2F496E]/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </Container>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-600">
        
          <a 
            href="#hero" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`transition-colors ${activeSection === "hero" ? "text-[#2F496E] font-bold" : "hover:text-[#2F496E]"}`}
          >
            Home
          </a>
          
          {/* Menu Profile Mobile */}
          <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#2F496E]/20 text-sm">
            <span className="font-semibold text-[#2F496E] -ml-4">
              Profile
            </span>
            {profileMenus.map((menu) => (
              <a 
                key={menu.id}
                href={menu.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="transition-colors hover:text-[#2F496E]"
              >
                {menu.title}
              </a>
            ))}
          </div>

          <a 
            href="#projects" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className={`transition-colors ${activeSection === "projects" ? "text-[#2F496E] font-bold" : "hover:text-[#2F496E]"}`}
          >
            Projects
          </a>
          
          {/* Tombol Contact Mobile */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative mt-2 inline-flex justify-center items-center gap-2 w-full px-5 py-3 rounded-full bg-[#2F496E] text-white text-xs tracking-wide uppercase font-bold shadow-md shadow-[#2F496E]/20 overflow-hidden transition-all duration-300 hover:bg-[#243B5A] hover:shadow-lg hover:shadow-[#2F496E]/30 active:scale-95"
          >
            <span>Contact</span>
            <Send size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </a>

        </div>
      </div>
    </header>
  );
}
