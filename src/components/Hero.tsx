import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gold rotate-12" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-gold -rotate-45" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              Building Sustainable Value in{" "}
              <span className="text-gold">Future-Ready</span> Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We back determined builders working on transformative solutions in critical sectors.
            </p>
          </div>

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block">
              <div className="h-px w-32 bg-gold mb-4 mx-auto" />
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Based in Kashmir
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
