import { ArrowRight, ExternalLink, Github } from "lucide-react";

import img from "../Images/website UI.jpg";
import img2 from "../Images/Ecom home ss.jpg";

const projects = [
  {
    id: 1,
    title: "BookMyTurf - Turf Booking Platform",
    description:
      "Full-stack turf booking platform with secure authentication, venue discovery, online booking, admin management, booking cancellation, and real-time notifications.",
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
    demoUrl: "https://book-my-turf-jta8.vercel.app/",
    githubUrl: "https://github.com/chirag-jaiswal-git/BookMyTurf",
  },
  {
    id: 2,
    title: "Forever - E-Commerce Platform",
    description:
      "Full-stack e-commerce application featuring a product catalog, cart management, user authentication, RESTful APIs, MongoDB persistence, and a responsive React interface.",
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
    githubUrl: "https://github.com/chirag-jaiswal-git/Forever-Ecommerce-WebApp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          A selection of full-stack applications built with the MERN stack,
          focusing on real-world functionality, responsive interfaces,
          authentication, APIs, and backend development.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-card shadow-xs card-hover"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex items-center justify-center gap-5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      title="View Live Demo"
                      className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                    >
                      <ExternalLink size={20} aria-hidden="true" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    title="View Source Code"
                    className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/chirag-jaiswal-git"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
          >
            Check My GitHub
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
