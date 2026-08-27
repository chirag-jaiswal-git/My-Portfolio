import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* ---------- INTRO ---------- */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Chirag
            </span>

            <span className="text-white ml-2 opacity-0 animate-fade-in-delay-2">
              Jaiswal
            </span>
          </h1>

          {/* ---------- ROLE ---------- */}
          <h2 className="text-xl md:text-2xl font-semibold opacity-0 animate-fade-in-delay-2">
            Full-Stack <span className="text-primary">(MERN)</span> Developer
          </h2>

          {/* ---------- DESCRIPTION ---------- */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build modern, scalable web applications using React.js, Node.js,
            Express.js, and MongoDB — from responsive user interfaces to secure
            REST APIs, authentication, and real-time features.
          </p>

          {/* ---------- BUTTONS ---------- */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* ---------- SCROLL INDICATOR ---------- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll down</span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
