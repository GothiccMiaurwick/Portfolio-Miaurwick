"use client";

import { Inter, Fredoka } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PortfolioCards() {
  const projects = [
    {
      id: 1,
      title: "Dalix",
      description:
        "Urban clothing e-commerce with a fresh style in white and black tones",
      url: "https://dalix-page.vercel.app",
      tags: ["React", "Tailwind", "Next.js"],
      color: "#f5a623",
    },
    {
      id: 2,
      title: "Cozy Cafe",
      description:
        "E-commerce about a cozy-style café with pastel tones.",
      url: "https://gothiccmiaurwick.github.io/cafeteria/",
      tags: ["HTML", "CSS", "Tailwind CSS"],
      color: "#ff6b4a",
    },
    {
      id: 3,
      title: "Calorie tracker",
      description:
        "page to calculate how many calories you spend or consume in your daily life",
      url: "https://gothiccmiaurwick.github.io/Calorie-tracker/",
      tags: ["HTML", "Tailwind CSS", "TypeScript"],
      color: "#3b8a58",
    },
  ];

  const getScreenshotUrl = (url) => {
    // Usando Microlink.io (Más confiable y gratuito)
    return `https://api.microlink.io/?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url`;
  };

  return (
    <section id="work" className={`${inter.className} bg-[#fef7ed] py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#573e3e] mb-4 tracking-tight"
            style={{ fontFamily: "TAN-NIMBUS, sans-serif" }}>
            My Work
          </h2>
          <p className="text-lg text-[#6c5353]">
            Explore my latest web projects.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block">
              <div className="relative bg-white rounded-[30px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2">
                {/* Preview automático de la página */}
                <div className="relative overflow-hidden h-52 bg-gray-100">
                  <img
                    src={getScreenshotUrl(project.url)}
                    alt={`Preview de ${project.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si falla la primera opción
                      e.target.onerror = null;
                      e.target.src = `https://image.thum.io/get/width/1200/crop/800/${project.url}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                      <span>→</span>
                      <span>Visit Site</span>
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 relative">
                  <h3
                    className={`${fredoka.className} text-2xl font-bold text-[#573e3e] mb-3 group-hover:text-[#f5a623] transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  <p className="text-[#6c5353] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
