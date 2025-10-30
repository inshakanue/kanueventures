import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                KANUE <span className="text-gold">VENTURES</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                Building sustainable value and impact with partners and communities.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-all duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </button>
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-gold transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("focus-areas")}
                  className="text-foreground hover:text-gold transition-colors text-left"
                >
                  Focus Areas
                </button>
                <button
                  onClick={() => scrollToSection("approach")}
                  className="text-foreground hover:text-gold transition-colors text-left"
                >
                  Our Approach
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-gold transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Kanue Ventures. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                A family-owned investment firm
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
