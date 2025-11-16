import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutAnimated from "@/components/AboutAnimated";
import FocusAreasAnimated from "@/components/FocusAreasAnimated";
import ApproachAnimated from "@/components/ApproachAnimated";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <AboutAnimated />
      <FocusAreasAnimated />
      <ApproachAnimated />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
