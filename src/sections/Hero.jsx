import fotoHero from "../assets/fotoHero.png";
import Container from "../components/Container";

export default function Hero() {
  return (
    <section
      id="hero"className="relative -mt-16 min-h-screen overflow-hidden bg-[#2F496E] scroll-mt-20">

      {/* Background Text */}
      <div className="absolute inset-0 z-0 flex flex-col leading-none opacity-20 pointer-events-none">

        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
          </div>
        </div>

        <div className="-mt-16 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse -translate-x-1/4">
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
          </div>
        </div>

        <div className="-mt-16 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee -translate-x-1/2">
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
            <span className="mx-10 text-[clamp(140px,20vw,340px)] font-extrabold text-white/20">
              CREATIVE PORTFOLIO
            </span>
          </div>
        </div>

      </div>

      {/* Content */}
      <div className="relative z-10 pt-16">

        {/* Left Badge */}
        <div className="absolute top-28 left-0 w-full">
          <Container>
            <div className="w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white shadow-md backdrop-blur-md animate-float">
              ✦ ULYA SARA
            </div>
          </Container>
        </div>

        {/* Right Badge */}
        <div className="absolute top-1/2 right-0 w-full -translate-y-1/2">
          <Container>
            <div className="flex justify-end">
              <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white shadow-md backdrop-blur-md animate-float">
                WEB DEVELOPER
              </div>
            </div>
          </Container>
        </div>

        {/* Hero Image */}
        <div className="flex h-[calc(100vh-64px)] items-end justify-center overflow-hidden">
          <img
            src={fotoHero}
            alt="Ulya Sara"
            className="h-[90vh] translate-y-4 object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Title */}
        <div className="absolute bottom-[14vh] w-full text-center">
          <h1 className="text-[clamp(42px,8vw,120px)] font-extrabold leading-[0.9] text-white">
            CREATIVE
            <br />
            PORTFOLIO
          </h1>
        </div>

      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[70px] w-full"
        >
          <path
            fill="#ffffff"
            d="M0,70 C220,120 420,20 720,70 C980,110 1220,35 1440,70 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

    </section>
  );
}