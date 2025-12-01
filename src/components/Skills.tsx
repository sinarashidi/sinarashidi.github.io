import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Users, Brain } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["Python", "C++", "C", "JavaScript", "TypeScript"],
    "ML/DL Frameworks": ["PyTorch", "TensorFlow", "Keras", "Huggingface Transformers"],
    "ML/NLP Tools": ["Langchain", "FAISS", "MLFlow", "Gradio", "Scikit-learn"],
    "Data & Visualization": ["NumPy", "Pandas", "Matplotlib"],
    "Tools & Systems": ["Linux", "Docker", "Git", "LaTeX"]
  };

  const softSkills = [
    "Team Leadership",
    "Analytical Thinking",
    "Problem Solving",
    "Experimental Design",
    "Academic Writing",
    "Interdisciplinary Teamwork",
    "Continuous Learning"
  ];

  const projects = [
    {
      title: "Improving ASR for Persian Language",
      year: "2023",
      description: "Developed state-of-the-art ASR models using Wav2Vec 2.0 and Conformer architectures, achieving 8%-10% WER on Persian datasets",
      tech: ["Transformer", "Conformer", "Wav2Vec 2.0"]
    },
    {
      title: "Persian LLM Fine-tuning",
      year: "2023",
      description: "Created Alpaca Persian dataset and fine-tuned BERT and LLaMA 2 for sentiment analysis, achieving 84% accuracy",
      tech: ["LLaMA 2", "BERT", "Fine-tuning"]
    },
    {
      title: "Speech and Text Keypoint Detection",
      year: "2023",
      description: "Fine-tuned SpeechT5 for Persian and implemented retrieval system with 87% F1-score for query moments detection",
      tech: ["SpeechT5", "NLP", "Retrieval Systems"]
    }
  ];

  return (
    <section id="skills" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            {/* <p className="text-lg text-muted-foreground">
              Technical expertise and hands-on project experience
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Code className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              
              <Card className="p-6">
                <div className="space-y-6">
                  {Object.entries(technicalSkills).map(([category, skills], index) => (
                    <div key={index}>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cta/10 rounded-lg">
                  <Users className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              
              <Card className="p-6 lg:h-[calc(100%-6rem)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="h-2 w-2 rounded-full bg-cta flex-shrink-0"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Projects</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold leading-tight">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Skills;
