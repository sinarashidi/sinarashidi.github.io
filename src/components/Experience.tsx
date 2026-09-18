import type React from "react";

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

  const work = [
    {
      title: "Deep Learning Research Engineer",
      organization: "BlueDopamine",
      organizationUrl: "https://bluedopamine.ir/",
      location: "Tehran, Iran",
      period: "Feb 2025 - Present",
      highlights: [
        "Designed and optimized multiple LLM-based applications for protein analysis, including generative design for text-to-protein tasks, automated functional annotation (protein-to-text), and sequence-based structure prediction"
      ]
    },
    {
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
    }
  ];

  const renderEntry = (
    period: string,
    location: string,
    title: string,
    organization: React.ReactNode,
    detail: string | undefined,
    highlights: string[],
    key: number
  ) => (
    <article key={key} className="entry entry-signal">
      <div className="entry-date">
        <p>{period}</p>
        <p className="text-muted-foreground/80">{location}</p>
      </div>
      <div>
        <h4 className="text-xl md:text-2xl leading-snug">{title}</h4>
        <p className="text-foreground/90">{organization}</p>
        {detail && <p className="text-sm text-muted-foreground">{detail}</p>}
        <ul className="mt-3 space-y-1.5 max-w-[65ch]">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-[0.95rem] text-foreground/80 grid grid-cols-[1rem_1fr]">
              <span className="text-signal" aria-hidden="true">–</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  return (
    <section id="experience" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Experience</h2>
          <p className="section-lede">
            Research and professional experience in AI, NLP, and speech processing
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="subheading">Research Experience</h3>
            <div className="entry-list">
              {research.map((exp, index) =>
                renderEntry(exp.period, exp.location, exp.title, exp.organization, `Supervisor: ${exp.supervisor}`, exp.highlights, index)
              )}
            </div>
          </div>

          <div>
            <h3 className="subheading">Work Experience</h3>
            <div className="entry-list">
              {work.map((job, index) =>
                renderEntry(
                  job.period,
                  job.location,
                  job.title,
                  "organizationUrl" in job && job.organizationUrl ? (
                    <a
                      href={job.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet"
                    >
                      {job.organization}
                    </a>
                  ) : (
                    job.organization
                  ),
                  "company" in job ? job.company : undefined,
                  job.highlights,
                  index
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
