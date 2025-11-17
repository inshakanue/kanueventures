import { Mail, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in <span className="text-gold">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Are you a founder building something transformative? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:kanueventures@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Send Direct Email
            </a>
            <a
              href="https://www.linkedin.com/company/kanueventures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
