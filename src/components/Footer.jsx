import Container from "../components/Container";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* 🌊 WAVE */}
      <div className="relative w-full -mt-32 z-10 -mb-1">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[140px] block"
          preserveAspectRatio="none"
        >
          <path
            fill="#1e3554"
            d="M0,100C300,40,900,140,1440,80V120H0Z"
          />
        </svg>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1e3554] text-white relative z-20 mt-auto">

        <Container>
          <div className="py-16 grid md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h2 className="text-xl font-bold mb-4">
                Ulya Sara
              </h2>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                UI/UX Designer & Graphic Designer who creates meaningful and impactful digital experiences.
              </p>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>ulyasara22@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>085694463201</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Depok, Indonesia</span>
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#process" className="hover:text-white">Process</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="https://instagram.com/ulyasra" target="_blank" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285694463201" target="_blank" className="hover:text-white">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold mb-4">Let’s Talk</h3>
              <p className="text-white/70 text-sm mb-4">
                Open for freelance & collaboration.
              </p>

              <a
                href="mailto:ulyasara22@gmail.com"
                className="inline-block px-5 py-3 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                Send Email
              </a>
            </div>

          </div>
        </Container>

        {/* BOTTOM */}
        <div className="border-t border-white/10">
          <Container>
            <div className="py-6 text-center text-sm text-white/60">
              © {new Date().getFullYear()} Ulya Sara. All rights reserved.
            </div>
          </Container>
        </div>

      </footer>
    </>
  );
}