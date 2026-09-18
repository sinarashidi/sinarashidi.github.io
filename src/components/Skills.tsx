
const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["Python", "C++", "C", "JavaScript", "TypeScript"],
    "ML/DL Frameworks": ["PyTorch", "Huggingface Transformers", "TensorFlow", "Keras"],
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
    <section id="skills" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Skills</h2>
          {/* <p className="text-lg text-muted-foreground">
            Technical expertise and hands-on project experience
          </p> */}
        </div>

        <div>
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
              <h3 className="subheading">Technical Skills</h3>
              <dl className="entry-list">
                {Object.entries(technicalSkills).map(([category, skills], index) => (
                  <div key={index} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="text-sm text-muted-foreground pt-0.5">{category}</dt>
                    <dd className="flex flex-wrap gap-x-4 gap-y-1">
                      {skills.map((skill, idx) => (
                        <span key={idx} className="font-serif text-lg">{skill}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="subheading">Soft Skills</h3>
              <ul className="entry-list">
                {softSkills.map((skill, index) => (
                  <li key={index} className="py-2.5 font-serif text-lg">
                    {skill}
                  </li>
                ))}
              </ul>
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
