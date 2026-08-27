import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

import img from "../Images/website UI.jpg";
import img2 from "../Images/Ecom home ss.jpg";

const projects = [
  {
    id: 1,
    title: "BookMyTurf - Turf Booking Platform",
    description:
      "Full-stack turf booking platform with passwordless OTP authentication, venue booking, admin management, refund workflows, and real-time booking notifications.",
    image: img,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "Tailwind CSS",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/chirag-jaiswal-git",
  },

  {
    id: 2,
    title: "Forever - E-Commerce Platform",
    description:
      "Full-stack e-commerce application featuring product catalog, cart management, user authentication, RESTful APIs, MongoDB persistence, and a responsive React interface.",
    image: img2,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
    demoUrl: "https://forever-store-app.vercel.app/",
    githubUrl: "https://github.com/chirag-jaiswal-git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* ---------- SECTION TITLE ---------- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of full-stack applications I've built using the MERN
          stack, focusing on real-world functionality, clean interfaces,
          authentication, APIs, and scalable backend architecture.
        </p>

        {/* ---------- PROJECT GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* ---------- PROJECT IMAGE ---------- */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* ---------- PROJECT CONTENT ---------- */}
              <div className="p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-center items-center gap-5">
                  {/* Live Demo */}
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- GITHUB BUTTON ---------- */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chirag-jaiswal-git"
          >
            Check My GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
