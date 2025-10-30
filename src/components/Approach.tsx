import { Card } from "@/components/ui/card";

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

const Approach = () => {
  return (
    <section id="approach" className="py-32 bg-charcoal-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up">
              Our <span className="text-gold">Approach</span>
            </h2>
            <div className="h-1 w-24 bg-gold" />
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We invest in people first, ideas second. The best businesses are built by exceptional 
              founders who combine vision with relentless execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className="p-8 bg-card border-border hover:border-gold transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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

          <div className="pt-8 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic border-l-4 border-gold pl-6">
              "The future is not something we enter. The future is something we create."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
