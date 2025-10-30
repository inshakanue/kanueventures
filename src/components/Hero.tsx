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
      {/* Animated Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gold rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-gold -rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-gold/50 rotate-90 animate-rotate-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-gold/30" />
      </div>
      
      {/* Parallax Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
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
            <button 
              onClick={scrollToNext}
              className="inline-flex flex-col items-center gap-3 cursor-pointer hover:text-gold transition-colors group"
            >
              <div className="h-px w-32 bg-gold mb-4" />
              <p className="text-sm text-muted-foreground uppercase tracking-widest group-hover:text-gold transition-colors">
                Scroll to Explore
              </p>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
