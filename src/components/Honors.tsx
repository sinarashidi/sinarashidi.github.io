import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Honors = () => {
  const honors = [
    {
      text: "Special Recognition Prize and Explainability Prize in ",
      link: {
        text: "NIA Challenge Competition: Model Arena (Acoustic Track)",
        url: "https://www.drivendata.org/competitions/299/competition-nih-alzheimers-acoustic-2/leaderboard/"
      },
      suffix: " - SpeechCARE team"
    },
    // "Full Tuition Waiver Scholarship in AI and Robotics from Sharif University of Technology (highest-ranked technical university in Iran), 2021",
    "Ranked 11th among nearly 15,000 participants in nationwide M.Sc. computer engineering entrance exam, 2021",
    // "Full Tuition Waiver Scholarship in Electrical Engineering from Amirkabir University of Technology, 2016",
    "Ranked 339th among nearly 200,000 participants in nationwide B.Sc. mathematics entrance exam, 2016"
  ];

  return (
    <section id="honors" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-cta/10 rounded-lg">
                <Award className="h-6 w-6 text-cta" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Honors & Awards</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Recognition for academic excellence and research achievements
            </p>
          </div>
          
          <Card className="p-8">
            <ul className="space-y-4">
              {honors.map((honor, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-cta mr-3 mt-1 text-lg">★</span>
                  <span className="text-foreground/90 leading-relaxed">
                    {typeof honor === 'string' ? (
                      honor
                    ) : (
                      <>
                        {honor.text}
                        <a
                          href={honor.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 underline inline-flex items-center gap-1"
                        >
                          {honor.link.text}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        {honor.suffix}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Honors;

