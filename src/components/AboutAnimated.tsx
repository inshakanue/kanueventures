import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const AboutAnimated = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: col1Ref, isVisible: col1Visible } = useScrollAnimation();
  const { ref: col2Ref, isVisible: col2Visible } = useScrollAnimation();
  const { ref: parallaxRef, offset } = useParallax(0.4);

  return (
    <section id="about" className="py-32 bg-charcoal-lighter relative overflow-hidden">
      {/* Decorative Elements with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-20 right-10 w-64 h-64 border border-gold/10 rotate-45 transition-transform duration-700" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-gold/5 transition-transform duration-700" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div
            ref={titleRef}
            className={`space-y-6 transition-all duration-1000 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The future belongs to those who build it
            </h2>
            <div className="h-1 w-24 bg-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              ref={col1Ref}
              className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
                col1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kanue Ventures, we believe that true innovation happens at the intersection of 
                vision and execution. We are a family-owned investment firm rooted in Kashmir, 
                committed to partnering with entrepreneurs who are shaping the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is simple: we invest in businesses that create lasting value—not just 
                for shareholders, but for communities and the world at large.
              </p>
            </div>

            <div
              ref={col2Ref}
              className={`space-y-6 transition-all duration-1000 delay-300 ease-out ${
                col2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not interested in following trends. We seek out founders who are willing to 
                venture into uncharted territory, solve hard problems, and build sustainable 
                enterprises that stand the test of time.
              </p>
              <p className="text-lg text-gold leading-relaxed font-medium">
                We back the bold, the resilient, and the visionary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAnimated;
