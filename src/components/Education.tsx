import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc., Artificial Intelligence and Robotics",
      institution: "Sharif University of Technology",
      location: "Tehran, Iran",
      period: "Oct 2021 - Jun 2024",
      thesis: "Improving Direct Speech-to-Speech Translation: A Unit-based Pipeline and Synthetic Corpus for Persian and English",
      supervisor: "Prof. Hossein Sameti",
      highlight: true
    },
    {
      degree: "B.Sc., Electrical Engineering (Electronics)",
      institution: "Amirkabir University of Technology (Tehran Polytechnic)",
      location: "Tehran, Iran",
      period: "Sep 2016 - Sep 2021",
      thesis: "Building a Fire Detector Guard Robot for Indoor Places Using Real-time Object Detection",
      supervisor: "Prof. Amir Jahanshahi, Prof. Mohsen Moezzi"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Academic background and research experience
            </p>
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
                    {/* <p className="text-sm font-medium">
                      <span className="text-muted-foreground">GPA:</span> {edu.gpa}
                    </p> */}
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
      </div>
    </section>
  );
};

export default Education;
