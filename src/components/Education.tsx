import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc., Artificial Intelligence and Robotics",
      institution: "Sharif University of Technology",
      location: "Tehran, Iran",
      period: "Oct 2021 - Jun 2024",
      gpa: "16.73/20 (3.6/4.0)",
      thesis: "Improving Direct Speech-to-Speech Translation: A Unit-based Pipeline and Synthetic Corpus for Persian and English",
      supervisor: "Prof. Hossein Sameti",
      highlight: true
    },
    {
      degree: "B.Sc., Electrical Engineering (Electronics)",
      institution: "Amirkabir University of Technology (Tehran Polytechnic)",
      location: "Tehran, Iran",
      period: "Sep 2016 - Sep 2021",
      gpa: "15.03/20 (3.0/4.0 last two years)",
      thesis: "Building a Fire Detector Guard Robot for Indoor Places Using Real-time Object Detection",
      supervisor: "Prof. Amir Jahanshahi, Prof. Mohsen Moezzi"
    }
  ];

  const honors = [
    "Special Recognition Prize and Explainability Prize in NIA Challenge Competition: Model Arena (Acoustic Track) - SpeechCARE team",
    "Full Tuition Waiver Scholarship in AI and Robotics from Sharif University of Technology (highest-ranked technical university in Iran), 2021",
    "Ranked 11th among nearly 15,000 participants in nationwide M.Sc. computer engineering entrance exam, 2021",
    "Full Tuition Waiver Scholarship in Electrical Engineering from Amirkabir University of Technology, 2016",
    "Ranked 339th among nearly 200,000 participants in nationwide B.Sc. mathematics entrance exam, 2016"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 hover:shadow-lg transition-all duration-300 ${
                      edu.highlight ? 'border-2 border-accent/30 bg-accent/5' : ''
                    }`}
                  >
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-lg text-foreground/90">{edu.institution}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <Badge className="bg-accent/10 text-accent border-accent/20">
                            {edu.period}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{edu.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          <span className="text-muted-foreground">GPA:</span> {edu.gpa}
                        </p>
                        <p className="text-sm">
                          <span className="text-muted-foreground font-medium">Thesis:</span>{" "}
                          <span className="italic">{edu.thesis}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supervisor: {edu.supervisor}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cta/10 rounded-lg">
                  <Award className="h-6 w-6 text-cta" />
                </div>
                <h2 className="text-3xl font-bold">Honors & Awards</h2>
              </div>
              
              <Card className="p-6">
                <ul className="space-y-4">
                  {honors.map((honor, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-cta mr-3 mt-1 text-lg">★</span>
                      <span className="text-foreground/90 leading-relaxed">{honor}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 mt-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span>🗣️</span>
                  Language Proficiency
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Persian (Native)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">English (Fluent)</p>
                    <div className="mt-2 p-3 bg-background/50 rounded-lg">
                      <p className="text-sm font-semibold text-accent mb-1">TOEFL iBT: 111/120</p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <p>Reading: 27/30</p>
                        <p>Listening: 29/30</p>
                        <p>Speaking: 26/30</p>
                        <p>Writing: 29/30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
