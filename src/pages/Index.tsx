import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <FocusAreas />
      <Approach />
      <Footer />
    </div>
  );
};

export default Index;
