import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// ---------- Contact Details ----------
const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "chiragjaiswal9109@gmail.com",
    href: "mailto:chiragjaiswal9109@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9109351437",
    href: "tel:+919109351437",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indore, Madhya Pradesh, India",
  },
];

// ---------- Social Links ----------
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chirag-jaiswal18/",
    name: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/chirag-jaiswal-git",
    name: "GitHub",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/chirag-jaiswal/",
    name: "LeetCode",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "93aaa7ca-8c0e-4874-bcba-6629f6d879f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        event.target.reset();
      } else {
        console.error("Submission Error:", data);

        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description:
            data.message || "There was a problem sending your message.",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);

      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Could not send the message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, an internship opportunity, or just want to
            connect? Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* ---------- CONTACT INFORMATION ---------- */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-xs">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            {/* Contact Details */}
            <div className="space-y-7">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.title}
                    className="flex items-center gap-4 group"
                  >
                    {/* Icon */}
                    <div
                      className="p-3 rounded-full bg-primary/10 text-primary
                      shrink-0 transition-all duration-300
                      group-hover:bg-primary group-hover:text-primary-foreground
                      group-hover:scale-105"
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Information */}
                    <div className="min-w-0">
                      <h4 className="font-medium mb-1">{detail.title}</h4>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-muted-foreground
                          hover:text-primary transition-colors
                          break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-border my-9" />

            {/* ---------- SOCIAL LINKS ---------- */}
            <div>
              <h4 className="font-medium mb-5">Connect With Me</h4>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Visit my " + social.name + " profile"}
                    title={social.name}
                    className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ---------- AVAILABILITY ---------- */}
            <div
              className="mt-9 p-5 rounded-xl
              bg-primary/5 border border-primary/10"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse shrink-0" />

                <div>
                  <p className="font-medium text-sm mb-1">
                    Open to opportunities
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently open to internships, freelance projects, and
                    full-stack development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- SEND MESSAGE ---------- */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-xs">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>

            <p className="text-sm text-muted-foreground mb-7">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg
                  border border-input bg-background
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg
                  border border-input bg-background
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg
                  border border-input bg-background
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  transition-all duration-200
                  resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  "disabled:cursor-not-allowed disabled:opacity-60",
                  "transition-all duration-300",
                )}
              >
                {loading ? "Sending..." : "Send Message"}

                <Send size={16} className={loading ? "animate-pulse" : ""} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
