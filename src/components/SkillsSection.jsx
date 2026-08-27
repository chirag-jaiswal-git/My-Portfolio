import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Skills Data ---
const skills = [
  // Frontend
  { name: "HTML5 / CSS3", level: 90, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },

  // Database
  { name: "MongoDB", level: 80, category: "database" },
 

  // Programming
  { name: "Java", level: 80, category: "programming" },
  { name: "Data Structures & Algorithms", level: 80, category: "programming" },
  { name: "Object-Oriented Programming", level: 80, category: "programming" },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
];

// --- Categories ---
const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "programming",
  "tools",
  "certifications",
];

// --- Certifications Data ---
const certifications = [
  {
    name: "Programming in Java",
    issuer: "NPTEL, IIT Kharagpur",
    date: "Nov 2025",
    achievement: "Gold Medalist",
    link: "#", // Add your actual certificate URL
  },
  {
    name: "AI Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    achievement: "Certified",
    link: "#", // Add your actual certificate URL
  },
  {
    name: "React JS Development",
    issuer: "GeeksforGeeks",
    date: "Nov 2025",
    achievement: "8-Week Self-Paced Course",
    link: "#", // Add your actual certificate URL
  },
  
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* --- Skills Title --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* --- Category Filters --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Skills Grid --- */}
        {activeCategory !== "certifications" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Certifications Section --- */}
        {activeCategory === "certifications" && (
          <div className="space-y-6">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card p-6 rounded-lg shadow-xs card-hover transition-transform duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                    <h4 className="font-semibold text-lg text-card-foreground">
                      {cert.name}
                    </h4>

                    <p className="text-muted-foreground mt-1">{cert.issuer}</p>

                    <p className="text-primary text-sm font-medium mt-2">
                      {cert.achievement}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right shrink-0">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
