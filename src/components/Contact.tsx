import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";
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
    <section id="contact" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Get in Touch</h2>
        </div>

        <div>
          <p className="font-serif text-2xl md:text-4xl font-light leading-tight max-w-[24ch]">
            Interested in my research? I'd love to hear from you.
          </p>

          <div className="mt-10 border-t border-border pt-6">
            <h3 className="text-2xl">Sina Rashidi</h3>
            <p className="text-muted-foreground">
              AI Researcher | Master's Graduate in Artificial Intelligence
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button
                size="lg"
                className="rounded-sm bg-foreground text-background hover:bg-signal hover:text-background group transition-colors"
                onClick={() => window.location.href = 'mailto:s.rashidi@rug.nl'}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
                Email Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-sm border-foreground/80 bg-transparent hover:bg-foreground hover:text-background group"
                asChild
              >
                <a
                  href={cvFile}
                  download="Sina_Rashidi_CV.pdf"
                >
                  <FileDown className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

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
