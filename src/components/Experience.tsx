import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const research = [
    {
      title: "Research Assistant",
      organization: "Columbia University",
      location: "Remote",
      period: "Jan 2024 - Present",
      supervisor: "Prof. Maryam Zolnoori",
      highlights: [
        "Conducted research on cognitive impairment detection from interview speech using NLP and speech processing",
        "Developed multi-modal Transformer-based pipelines for cognitive impairment detection from speech, text, and EHR data",
        "Achieved state-of-the-art performance in Alzheimer's Disease detection using Synthetic Data Generation with LLMs",
        "Fine-tuned multiple open-weight LLMs and Audio-LLMs from HuggingFace using LoRA",
        "Developed award-winning demo website for Alzheimer's detection with real-time inference using serverless computing"
      ]
    },
    {
      title: "Research Assistant",
      organization: "Sharif University of Technology",
      location: "Tehran, Iran",
      period: "Jan 2021 - Jun 2024",
      supervisor: "Prof. Hossein Sameti",
      highlights: [
        "Research on ASR, TTS, Voice Conversion, Speaker Verification, and Digital Signal Processing",
        "Developed speech-to-speech translation systems for Persian and English",
        "Published research on improving direct speech-to-speech translation using discrete units"
      ]
    },
    {
      title: "Research Assistant",
      organization: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      period: "Feb 2021 - Sep 2021",
      supervisor: "Prof. Amir Jahanshahi, Prof. Mohsen Moezzi",
      highlights: [
        "Real-time Object Detection and Robotics research",
        "Built fire detector guard robot using real-time object detection",
        "Data augmentation techniques and edge device optimization"
      ]
    }
  ];

  const work = {
    title: "ML Engineer (Speech & NLP)",
    organization: "Sharif Information Systems and Data Science Center",
    company: "Asr Gooyesh Pardaz",
    location: "Tehran, Iran",
    period: "Jan 2022 - Jan 2024",
    highlights: [
      "Led development of RAG-based enterprise chatbot 'Dana' with successful integration and optimization",
      "Improved existing ASR and TTS models for Persian language by 10%-20% achieving state-of-the-art performance",
      "Contributed to multiple projects focused on LLM-based applications, ASR, and TTS systems",
      "Advised multiple groups of interns on speech and language processing technologies"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Research and professional experience in AI, NLP, and speech processing
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Research Experience</h3>
              </div>
              <div className="space-y-6">
                {research.map((exp, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-lg text-foreground/90">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground">Supervisor: {exp.supervisor}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <Badge className="bg-accent/10 text-accent border-accent/20">{exp.period}</Badge>
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start">
                          <span className="text-accent mr-2 mt-1">▪</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cta/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-cta" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cta/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{work.title}</h4>
                    <p className="text-lg text-foreground/90">{work.organization}</p>
                    <p className="text-sm text-muted-foreground">{work.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge className="bg-cta/10 text-cta border-cta/20">{work.period}</Badge>
                    <span className="text-sm text-muted-foreground">{work.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {work.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-start">
                      <span className="text-cta mr-2 mt-1">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
