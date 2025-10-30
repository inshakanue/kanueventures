import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const principles = [
  {
    title: "Long-term Partnership",
    description: "We're not just investors—we're partners committed to building lasting relationships and sustainable value over the long haul.",
  },
  {
    title: "Strategic Support",
    description: "Beyond capital, we provide strategic guidance, operational expertise, and access to our network to help you scale effectively.",
  },
  {
    title: "Community Impact",
    description: "We believe great businesses create positive ripple effects. We invest in companies that generate value for communities and society.",
  },
  {
    title: "Founder-Friendly",
    description: "We respect the vision and autonomy of founders. Our role is to support, not to dictate. You remain in the driver's seat.",
  },
];

const ApproachAnimated = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section id="approach" className="py-32 bg-charcoal-lighter relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-0 w-96 h-96 border border-gold/5 -rotate-12" />
      <div className="absolute bottom-10 right-0 w-72 h-72 border border-gold/5 rotate-45" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div
            ref={headerRef}
            className={`max-w-3xl space-y-6 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gold">Approach</span>
            </h2>
            <div className="h-1 w-24 bg-gold" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              We invest in people first, ideas second. The best businesses are built by exceptional 
              founders who combine vision with relentless execution.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className={`p-8 bg-card border-border hover:border-gold transition-all duration-700 hover:scale-105 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: gridVisible ? `${index * 150}ms` : "0ms"
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div
            ref={quoteRef}
            className={`pt-8 space-y-6 transition-all duration-1000 ${
              quoteVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic border-l-4 border-gold pl-6">
              "The future is not something we enter. The future is something we create."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachAnimated;
