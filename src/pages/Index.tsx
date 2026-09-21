import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import ProfessionalActivity from "@/components/ProfessionalActivity";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Publications />
      <ProfessionalActivity />
      <Experience />
      <Education />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
