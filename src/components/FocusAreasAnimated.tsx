import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import { 
  Sprout, 
  Pill, 
  Truck, 
  Plane,
  Hotel, 
  UtensilsCrossed, 
  ShoppingBag, 
  Bitcoin, 
  Zap 
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "AgriTech",
    description: "Modernizing agriculture through technology and sustainable practices",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Pharma",
    description: "Advancing healthcare solutions and pharmaceutical innovation",
    icon: Pill,
  },
  {
    number: "03",
    title: "Logistics",
    description: "Transforming supply chains with intelligent systems",
    icon: Truck,
  },
  {
    number: "04",
    title: "Travel & Hospitality",
    description: "Reimagining experiences in tourism and hospitality",
    icon: "travel",
  },
  {
    number: "05",
    title: "F&B",
    description: "Innovating food and beverage industry standards",
    icon: UtensilsCrossed,
  },
  {
    number: "06",
    title: "Ecommerce & Retail",
    description: "Building next-generation commerce platforms",
    icon: ShoppingBag,
  },
  {
    number: "07",
    title: "Crypto",
    description: "Pioneering decentralized financial infrastructure",
    icon: Bitcoin,
  },
  {
    number: "08",
    title: "Energy",
    description: "Powering sustainable energy solutions for tomorrow",
    icon: Zap,
  },
];

const FocusAreasAnimated = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <section id="focus" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700" />
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div
            ref={headerRef}
            className={`text-center space-y-6 transition-all duration-1000 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Areas of <span className="text-gold">Focus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We invest across critical sectors that are shaping our collective future
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.number}
                  className={`p-6 bg-card border-border hover:border-gold transition-all duration-700 ease-out group cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-gold/10 ${
                    gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ 
                    transitionDelay: gridVisible ? `${index * 100}ms` : "0ms"
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-gold/20 transition-colors duration-300">
                        {area.number}
                      </span>
                      {Icon === "travel" ? (
                        <div className="relative text-gold transform group-hover:scale-110 transition-transform duration-300">
                          <Hotel className="h-6 w-6" />
                          <Plane className="h-4 w-4 absolute -top-1.5 -left-1.5" />
                        </div>
                      ) : (
                        <Icon className="h-6 w-6 text-gold transform group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasAnimated;
