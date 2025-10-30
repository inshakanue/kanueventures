import { Card } from "@/components/ui/card";
import { 
  Sprout, 
  Pill, 
  Truck, 
  Plane, 
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
    icon: Plane,
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

const FocusAreas = () => {
  return (
    <section id="focus" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up">
              Areas of <span className="text-gold">Focus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We invest across critical sectors that are shaping our collective future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.number}
                  className="p-6 bg-card border-border hover:border-gold transition-all duration-300 group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-gold/20 transition-colors">
                        {area.number}
                      </span>
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
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

export default FocusAreas;
