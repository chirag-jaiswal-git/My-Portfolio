import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* ---------- TITLE ---------- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold leading-relaxed">
              Full-Stack MERN Developer passionate about building practical,
              scalable web applications and solving real-world problems through
              clean and efficient code.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Chirag_jaiswal_Full_Stack_Dev_resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ---------- RIGHT CONTENT ---------- */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>

                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using
                    React.js, Node.js, Express.js, MongoDB, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>

                  <p className="text-muted-foreground">
                    Applying Data Structures, Algorithms, and logical thinking
                    to solve programming and real-world engineering problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Projects</h4>

                  <p className="text-muted-foreground">
                    Developing end-to-end applications with authentication, REST
                    APIs, database management, admin tools, and real-time
                    functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
