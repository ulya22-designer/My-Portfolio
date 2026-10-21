import Container from "../components/Container";
import {
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  BadgeCheck,
} from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      number: "03+",
      title: "Experience",
      description: "Internship & Leadership",
      icon: BriefcaseBusiness,
    },
    {
      number: "04+",
      title: "Expertise",
      description: "Frontend, Backend, UI/UX",
      icon: Code2,
    },
    {
      number: "10+",
      title: "Projects",
      description: "Academic & Personal",
      icon: FolderGit2,
    },
    {
      number: "05+",
      title: "Certificates",
      description: "Training & Professional",
      icon: BadgeCheck,
    },
  ];

  return (
    <section
      id="statistics"
      className="relative bg-white pt-16 pb-28 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                
                /* --- UPGRADE BENTUK UNIK (Asymmetrical Radius & Morphing) --- */
                rounded-tl-2xl rounded-br-2xl rounded-tr-[50px] rounded-bl-[50px]
                hover:rounded-tl-[50px] hover:rounded-br-[50px] hover:rounded-tr-2xl hover:rounded-bl-2xl
                /* ----------------------------------------------------------- */

                border
                border-[#D7E2EF]
                bg-gradient-to-br
                from-white
                via-[#F8FAFD]
                to-[#EEF4FB]
                p-8
                transition-all
                duration-700
                ease-out
                hover:-translate-y-4
                hover:border-[#2F496E]/40
                hover:shadow-[0_20px_45px_rgba(47,73,110,.2)]
              "
            >
              {/* Efek Kaca (Shine) Berjalan saat di-Hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:animate-[shine_1s_ease-in-out]"></div>

              {/* Glow Latar Dalam Kartu */}
              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-40
                  w-40
                  rounded-full
                  bg-[#2F496E]/10
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:scale-[1.5]
                  group-hover:bg-[#2F496E]/20
                "
              />

              {/* Icon Container */}
              <div className="relative flex justify-center z-10">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[20px]
                    bg-white
                    shadow-lg
                    transform
                    -rotate-6
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:-translate-y-2
                    group-hover:shadow-xl
                  "
                >
                  <item.icon
                    size={30}
                    strokeWidth={2}
                    className="text-[#2F496E] transition-all duration-500 group-hover:text-[#4A6A94]"
                  />
                </div>
              </div>

              {/* Number */}
              <h2
                className="
                  relative
                  mt-8
                  text-5xl
                  font-black
                  tracking-tight
                  text-[#2F496E]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:text-[#3F5F8C]
                  z-10
                "
              >
                {item.number}
              </h2>

              {/* Title */}
              <h3 className="relative mt-3 text-xl font-bold text-[#243B5A] z-10 transition-colors duration-300 group-hover:text-[#2F496E]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-7 text-gray-600 z-10">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  relative
                  mt-8
                  h-1.5
                  w-12
                  rounded-full
                  bg-[#2F496E]/20
                  transition-all
                  duration-700
                  ease-out
                  group-hover:w-full
                  group-hover:bg-[#2F496E]
                  z-10
                "
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Keyframe untuk efek Shine */}
      <style>
        {`
          @keyframes shine {
            100% {
              left: 125%;
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-full z-20">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-[90px] w-full"
        >
          <path
            fill="#E8E5E5"
            d="M0,64 C240,140 480,0 720,64 C960,128 1200,20 1440,90 L1440,160 L0,160 Z"
          />
        </svg>
      </div>
    </section>
  );
}
