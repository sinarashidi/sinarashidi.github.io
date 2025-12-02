import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import ProfessionalActivity from "@/components/ProfessionalActivity";
import Experience from "@/components/Experience";
import Honors from "@/components/Honors";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Publications />
      <ProfessionalActivity />
      <Experience />
      <Honors />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
