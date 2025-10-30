const About = () => {
  return (
    <section id="about" className="py-32 bg-charcoal-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The future belongs to those who build it
            </h2>
            <div className="h-1 w-24 bg-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Kanue Ventures, we believe that true innovation happens at the intersection of 
                vision and execution. We are a family-owned investment firm rooted in South Kashmir, 
                committed to partnering with entrepreneurs who are shaping the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is simple: we invest in businesses that create lasting value—not just 
                for shareholders, but for communities and the world at large.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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

export default About;
