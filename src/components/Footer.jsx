import { ArrowUp } from "lucide-react";

export const Footer = () => {
  // Function to handle scroll to hero
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Footer content */}
      <footer className="py-4 px-1 bg-card relative border-t border-border mt-10 pt-2 flex flex-wrap justify-between items-center">

        <button
        onClick={scrollToHero}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce focus:outline-none"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Up</span>
        <ArrowUp className="h-5 w-5 text-primary" />
      </button>

        <p className="text-lg text-muted-foreground text-center w-full mt-1">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
};
