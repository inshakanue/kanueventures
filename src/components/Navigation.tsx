import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kanue-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-500 ${
      scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            {!logoLoaded && (
              <div className="h-8 md:h-10 w-32 bg-muted/30 animate-pulse rounded" />
            )}
            <img 
              src={logo} 
              alt="Kanue Ventures" 
              className={`h-8 md:h-10 w-auto cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 ${
                logoLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onLoad={() => setLogoLoaded(true)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("focus")}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              Focus Areas
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-muted-foreground hover:text-gold transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("focus")}
              className="block text-muted-foreground hover:text-gold transition-colors"
            >
              Focus Areas
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="block text-muted-foreground hover:text-gold transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-muted-foreground hover:text-gold transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
