import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            KANUE <span className="text-gold">VENTURES</span>
          </h1>

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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
