import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileDown, ExternalLink } from "lucide-react";
import cvFile from "@/data/Sina_Rashidi_CV.pdf";

const Contact = () => {
  const references = [
    {
      name: "Prof. Maryam Zolnoori",
      title: "Assistant Professor",
      institution: "School of Nursing, Columbia University",
      email: "mz2825@cumc.columbia.edu"
    },
    {
      name: "Prof. Hossein Sameti",
      title: "Associate Professor",
      institution: "Computer Engineering Department, Sharif University of Technology",
      email: "sameti@sharif.edu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Interested in my research or PhD opportunities? I'd love to hear from you.
            </p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Sina Rashidi</h3>
                <p className="text-muted-foreground mb-4">
                  AI Researcher | Master's Graduate in Artificial Intelligence
                </p>
                {/* <p className="text-lg font-medium text-accent">
                  Open to PhD opportunities in AI, NLP, and Healthcare
                </p> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-accent-glow group"
                  onClick={() => window.location.href = 'mailto:sinarashidi46@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Email Me
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-accent/30 hover:bg-accent/10"
                  asChild
                >
                  <a
                    href={cvFile}
                    download="Sina_Rashidi_CV.pdf"
                  >
                    <FileDown className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Academic References</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {references.map((ref, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{ref.name}</h4>
                    <p className="text-sm text-muted-foreground">{ref.title}</p>
                    <p className="text-sm text-foreground/80">{ref.institution}</p>
                    <Button
                      variant="link"
                      className="text-accent hover:text-accent/80 p-0 h-auto text-sm"
                      onClick={() => window.location.href = `mailto:${ref.email}`}
                    >
                      <Mail className="mr-1.5 h-3.5 w-3.5" />
                      {ref.email}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
