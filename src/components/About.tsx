
const About = () => {
  const interests = [
    {
      title: "Natural Language Processing",
      description: "Large Language Models, multimodal speech and language models, and text processing"
    },
    {
      title: "Healthcare AI",
      description: "Clinical NLP and Speech Processing, EHR Data Analysis, Cognitive Impairment Detection"
    },
    {
      title: "Speech Processing",
      description: "ASR, TTS, Voice Conversion, Speaker Verification, and Speech-to-Speech Translation"
    },
    {
      title: "Multimodal AI",
      description: "Multimodal Foundation Models, integration of speech, text, and vision models for complex clinical tasks"
    },
    {
      title: "Explainable AI, Counterfactual Reasoning, and Causal Inference",
      description: "Interpretable AI systems, counterfactual analysis, and causal reasoning for transparent and trustworthy AI"
    }
  ];

  return (
    <section id="about" className="section pt-8 md:pt-12">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Research Interests</h2>
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My research focuses on developing advanced AI systems that bridge the gap between 
            human language, speech, and healthcare applications, with a particular emphasis on 
            cognitive health assessment and multilingual communication.
          </p> */}
        </div>

        <div>
          <ul className="entry-list">
            {interests.map((interest, index) => (
              <li key={index} className="py-5 first:pt-1">
                <h3 className="text-xl md:text-2xl leading-snug mb-1.5">{interest.title}</h3>
                <p className="text-muted-foreground max-w-[60ch]">{interest.description}</p>
              </li>
            ))}
          </ul>

          {/* <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I am a Master's graduate in Artificial Intelligence and Robotics from <strong>Sharif University of Technology</strong>, 
                Iran's top technical university. Currently, I work as a Research Assistant at <strong>Columbia University</strong> 
                under the supervision of Prof. Maryam Zolnoori, focusing on cognitive impairment detection using multimodal AI approaches.
              </p>
              <p>
                My Master's thesis focused on improving direct speech-to-speech translation between Persian and English using 
                discrete units and synthetic parallel data, supervised by Prof. Hossein Sameti. I have achieved state-of-the-art 
                results in Alzheimer's disease detection from speech using advanced techniques including synthetic data generation 
                with LLMs, Audio-LLMs, and voice conversion models.
              </p>
              <p>
                I have published multiple papers in prestigious journals and conferences, including <em>npj Digital Medicine</em>, 
                <em>Frontiers in AI</em>, and <em>Studies in Health Technology and Informatics</em>. My work has been recognized 
                with awards including the <strong>Special Recognition Prize</strong> and <strong>Explainability Prize</strong> in 
                the NIA Challenge Competition.
              </p>
            </div>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default About;
