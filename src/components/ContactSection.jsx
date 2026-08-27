import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// ---------- Contact Details ----------
const contactDetails = [
  {
    icon: Mail,
    value: "chiragjaiswal9109@gmail.com",
    href: "mailto:chiragjaiswal9109@gmail.com",
  },
  {
    icon: Phone,
    value: "+91 9109351437",
    href: "tel:+919109351437",
  },
  {
    icon: MapPin,
    value: "Indore, Madhya Pradesh, India",
  },
  
];

// ---------- Social Links ----------
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chirag-jaiswal18/",
    value:"chirag-jaiswal18",
    name: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/chirag-jaiswal-git",
    value:"chirag-jaiswal-git",
    name: "GitHub",
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
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        event.target.reset();
      } else {
        console.error("Submission Error:", data);

        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: data.message || "There was a problem with your request.",
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
      <div className="container mx-auto max-w-5xl">
        {/* ---------- SECTION TITLE ---------- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* ---------- MAIN GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ==================================================
              LEFT BOX: CONTACT INFORMATION + CONNECT WITH ME
          ================================================== */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            {/* ---------- Contact Details ---------- */}
            <div className="space-y-7">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <div key={index} className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="font-medium">{detail.title}</h4>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ---------- Divider ---------- */}
            <div className="border-t border-border my-8" />

            {/* ---------- Connect With Me ---------- */}
            <div>
              <h4 className="font-medium mb-6">Connect With Me</h4>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 "
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT BOX: SEND A MESSAGE
          ================================================== */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* ---------- Name ---------- */}
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Chirag..."
                />
              </div>

              {/* ---------- Email ---------- */}
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="chirag@gmail.com"
                />
              </div>

              {/* ---------- Message ---------- */}
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
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* ---------- Submit ---------- */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  "disabled:cursor-not-allowed disabled:opacity-60",
                )}
              >
                {loading ? "Sending..." : "Send Message"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
