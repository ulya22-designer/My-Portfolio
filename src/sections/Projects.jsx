import React from "react";
import {
  FolderGit2,
  ArrowRight,
  Globe,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FixCity",
    category: "Web Development",
    role: "Frontend Developer",
    badge: "Featured",
    image: "/images/projects/fixcity.png",
    tech: ["React", "Laravel", "MySQL"],
    description:
      "Citizen reporting platform that enables people to report public issues and improves government service transparency.",
  },
  {
    id: 2,
    title: "SINERGI",
    category: "Web Development",
    role: "Frontend Developer",
    badge: "Core Project",
    image: "/images/projects/sinergi.png",
    tech: ["Laravel", "PHP", "Bootstrap"],
    description:
      "Collaborative learning platform with multi-user roles, dashboard, and project management.",
  },
  {
    id: 3,
    title: "MindUp Academy",
    category: "Web Development",
    role: "Full Stack Developer",
    badge: "Popular",
    image: "/images/projects/mindup.png",
    tech: ["React", "Firebase", "Tailwind"],
    description:
      "Educational platform for improving student motivation through interactive learning.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#F8FAFD] py-24"
    >
      {/* Top Wave */}
      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full">
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

          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F496E]/10 bg-[#2F496E]/10 px-5 py-2 font-semibold text-[#2F496E]">
            <FolderGit2 size={18} />
            PROJECTS
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2F496E]">
            Selected Projects
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.id}
              className="group overflow-hidden rounded-[30px] border border-[#2F496E]/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(47,73,110,.18)]"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Badge */}

                <span className="absolute top-5 right-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#2F496E] shadow">

                  {project.badge}

                </span>

              </div>

              {/* Content */}

              <div className="p-7">

                <span className="inline-flex items-center gap-2 rounded-full bg-[#2F496E]/10 px-4 py-2 text-sm font-semibold text-[#2F496E]">

                  <Globe size={15} />

                  {project.category}

                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#2F496E]">
                  {project.title}
                </h3>

                <p className="mt-2 font-medium text-[#5C7BA5]">
                  {project.role}
                </p>

                <p className="mt-5 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-[#EEF3F9] px-3 py-1 text-sm text-[#2F496E]"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Button */}

                <button className="group/button mt-8 flex items-center gap-2 font-semibold text-[#2F496E] transition hover:text-[#5C7BA5]">

                  View Details

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover/button:translate-x-1"
                  />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* View All */}

        <div className="mt-16 flex justify-center">

          <button className="group inline-flex items-center gap-3 rounded-full border-2 border-[#2F496E] bg-white px-8 py-4 font-semibold text-[#2F496E] transition-all duration-300 hover:bg-[#2F496E] hover:text-white">

            View All Projects

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>
    </section>
  );
}