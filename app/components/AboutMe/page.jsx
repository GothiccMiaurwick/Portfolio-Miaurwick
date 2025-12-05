import { Inter, Fredoka } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Fredoka tiene ese estilo groovy, bold y redondeado similar a Cooper Black
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutMe() {
  return (
    <section className={`${inter.className} bg-[#fef7ed] py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#fef7ed] rounded-[40px] p-16 lg:p-20 overflow-hidden">
          
          {/* Círculos decorativos de fondo */}
          <div className="absolute -right-20 -top-20 w-[350px] h-[350px] bg-[#3b8a58b6] rounded-full opacity-90"></div>
          <div className="absolute right-28 -bottom-14 w-[280px] h-[280px] bg-[#f5a623] rounded-full"></div>
          <div className="absolute -left-10 bottom-24 w-[180px] h-[180px] bg-[#ff6b4a] rounded-full opacity-60"></div>
          
          {/* Contenido principal */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-center"> 
            
            {/* Lado izquierdo - Texto */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-snug mb-8 lg:mb-10 text-[#573e3e] tracking-tight" style={{ fontFamily: 'TAN-NIMBUS, sans-serif' }}>
                Hello,<br />
                I'm Miaurwick!
              </h1>
              
              <p className="text-base md:text-lg leading-loose text-[#3a1616] max-w-[650px]">
                Frontend Developer specializing in modern web technologies. Experienced with{" "}
                <span className="inline-block px-3 py-1 rounded-md font-semibold bg-[#ffd4e8d5] text-[#ff0077] rotate-1 transition-transform hover:scale-105">
                  Next.js
                </span>
                ,{" "}
                <span className="inline-block px-3 py-1 rounded-md font-semibold bg-[#ffe4b8d0] text-[#ff9d00] rotate-1 transition-transform hover:scale-105">
                  React
                </span>
                ,{" "}
                <span className="inline-block px-3 py-1 rounded-md font-semibold bg-[#d4f4ead7] text-[#00ffae] rotate-[-1.5deg] transition-transform hover:scale-105">
                  JavaScript
                </span>
                ,{" "}
                <span className="inline-block px-3 py-1 rounded-md font-semibold bg-[#e8f5d8c8] text-[#8cff00] rotate-[1.5deg] transition-transform hover:scale-105">
                  Tailwind CSS
                </span>
                , HTML, and CSS. I combine technical skills with a strong desire to learn and adapt quickly. Ready to contribute to dynamic teams and deliver quality web solutions.
              </p>

              {/* Sección de contacto */}
              <div className="mt-10">
                <p className="text-base md:text-lg leading-loose text-[#6c5353]">
                  See me on{" "}
                  <a 
                    href="https://github.com/miaurwick" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 rounded-md font-semibold bg-[#e8dcff] text-[#7c3aed] hover:scale-105 transition-transform"
                  >
                    GitHub
                  </a>
                  {" "}or{" "}
                  <a 
                    href="https://twitter.com/miaurwick" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 rounded-md font-semibold bg-[#dbeafe] text-[#3b82f6] hover:scale-105 transition-transform"
                  >
                    Twitter/X
                  </a>
                  {" "}or{" "}
                  <a 
                    href="https://linkedin.com/in/miaurwick" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 rounded-md font-semibold bg-[#ffd4e8d5] text-[#ff0077] hover:scale-105 transition-transform"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
            
            {/* Lado derecho - Tags informativos */}
            <div className="flex flex-col gap-6">
              <div className={`${fredoka.className} bg-[#f5a623] text-[#1a1a1a] px-8 lg:px-9 py-5 lg:py-6 rounded-xl font-semibold text-lg text-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300`}>
                🎂 Feb 3, 2004
              </div>
              
              <div className={`${fredoka.className} bg-[#2d5f3f] text-[#fef7ed] px-8 lg:px-9 py-5 lg:py-6 rounded-xl font-semibold text-lg text-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300`}>
                🇨🇴 Colombia
              </div>
              
              <div className={`${fredoka.className} bg-[#1a1a1a] text-[#f5a623] px-8 lg:px-9 py-5 lg:py-6 rounded-xl font-semibold text-lg text-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300`}>
                📍 Cesar, Colombia
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}