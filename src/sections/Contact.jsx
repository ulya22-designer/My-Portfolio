import React, { useState, useEffect } from "react";
import {
  Mail,
  Smartphone,
  Code2,
  Camera,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Container from "../components/Container";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const contacts = [
    {
      title: "Email",
      value: "ulya.sara.id@gmail.com",
      link: "mailto:ulya.sara.id@gmail.com",
      icon: Mail,
      color: "from-blue-600 to-cyan-600",
      lightColor: "bg-blue-50",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200/50",
    },
    {
      title: "WhatsApp",
      value: "+62 856-9446-3201",
      link: "https://wa.me/6285694463201",
      icon: Smartphone,
      color: "from-emerald-600 to-teal-600",
      lightColor: "bg-emerald-50",
      accentColor: "text-emerald-600",
      borderColor: "border-emerald-200/50",
    },
    {
      title: "GitHub",
      value: "github.com/ulya22-designer",
      link: "https://github.com/ulya22-designer",
      icon: Code2,
      color: "from-slate-700 to-slate-900",
      lightColor: "bg-slate-50",
      accentColor: "text-slate-700",
      borderColor: "border-slate-200/50",
    },
    {
      title: "Instagram",
      value: "@ulyasra",
      link: "https://instagram.com/ulyasra",
      icon: Camera,
      color: "from-pink-600 to-rose-600",
      lightColor: "bg-pink-50",
      accentColor: "text-pink-600",
      borderColor: "border-pink-200/50",
    },
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Premium Wave Divider */}
      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[80px] lg:h-[100px]"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(15, 23, 42, 0.05)" />
              <stop offset="100%" stopColor="rgba(15, 23, 42, 0)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,50 Q360,10 720,50 T1440,50 L1440,120 L0,120 Z"
            className="drop-shadow-lg"
          />
        </svg>
      </div>

      <Container>
        {/* Header Section with Animation */}
        <div className="relative z-20 text-center mb-20">
          {/* Badge dengan entrance animation */}
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 font-bold tracking-widest uppercase text-xs text-blue-700 border border-blue-200/50 backdrop-blur-sm transition-all duration-700 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Get in Touch
          </div>

          {/* Main Heading dengan staggered animation */}
          <h2
            className={`mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Let's Build Something<br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Extraordinary</span>
              <span className="absolute inset-x-0 -bottom-2 h-3 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-sm rounded-full transform -skew-y-1"></span>
            </span>
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            I'm excited to explore new opportunities, collaborate on innovative projects, or simply connect. Let's create something amazing together.
          </p>
        </div>

        {/* Contact Cards Grid dengan staggered animation */}
        <div className="relative z-20 mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl border bg-white/80 backdrop-blur-md p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  isHovered
                    ? "-translate-y-3 border-opacity-100"
                    : "border-slate-200/80 hover:border-slate-300"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                  borderColor: isHovered ? "rgba(59, 130, 246, 0.3)" : undefined,
                }}
              >
                {/* Gradient Glow Background */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none ${
                    isHovered ? "opacity-100" : ""
                  }`}
                  style={{
                    background: isHovered
                      ? `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, ${item.color}, transparent)`
                      : "transparent",
                    filter: "blur(40px)",
                    opacity: isHovered ? 0.15 : 0,
                  }}
                />

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                    transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px)`,
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container dengan animasi sophisticated */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 transform ${
                      item.lightColor
                    } ${
                      isHovered
                        ? `bg-gradient-to-br ${item.color} text-white scale-110 shadow-lg`
                        : `${item.lightColor} ${item.accentColor}`
                    }`}
                    style={{
                      transform: isHovered ? "scale(1.1) rotate(6deg)" : "scale(1) rotate(0deg)",
                    }}
                  >
                    <Icon
                      size={28}
                      className={`transition-transform duration-500 ${
                        isHovered ? "scale-125" : "scale-100"
                      }`}
                      style={{
                        transform: isHovered ? "rotate(-15deg) scale(1.2)" : "rotate(0deg) scale(1)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-6 text-lg lg:text-xl font-bold transition-all duration-300 ${
                      isHovered ? item.accentColor : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Contact Value */}
                  <p
                    className={`mt-3 break-words text-sm md:text-base transition-all duration-300 font-medium ${
                      isHovered
                        ? `${item.accentColor}`
                        : "text-slate-500"
                    }`}
                  >
                    {item.value}
                  </p>

                  {/* Bottom Border Accent */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 transform origin-left ${
                      isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-50"
                    }`}
                  />

                  {/* Arrow Indicator */}
                  <div
                    className="mt-4 inline-flex opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <ArrowRight size={16} className={item.accentColor} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div
          className={`relative z-20 mt-24 rounded-3xl lg:rounded-4xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10 lg:p-16 text-center text-white shadow-2xl overflow-hidden border border-blue-500/20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent"
              style={{
                backgroundPosition: "200% center",
                animation: "shimmer 8s infinite linear",
              }}
            />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }} />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Ready to
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                Collaborate?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto leading-relaxed text-blue-100/90 text-base md:text-lg">
              Whether you have a project in mind, want to explore new ideas, or just want to say hello—I'd love to hear from you. Let's create something remarkable.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-center gap-4 lg:gap-6">
              {/* Email Button */}
              <a
                href="mailto:ulya.sara.id@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl lg:rounded-2xl bg-white px-8 lg:px-10 py-4 lg:py-5 font-bold text-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                <Mail size={20} className="transition-transform duration-300 group-hover:-rotate-12" />
                <span>Send Email</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6285694463201"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl lg:rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 lg:px-10 py-4 lg:py-5 font-bold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                <MessageCircle
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <span>WhatsApp Me</span>
                <ArrowRight
                  size={18}
                  className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Subtext */}
            <p className="mt-8 text-sm text-blue-200/70">
              💡 I typically respond within 24 hours
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </Container>

      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}