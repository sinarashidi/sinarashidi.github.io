
const Education = () => {
  const education = [
    {
      degree: "PhD, Speech and Language Technologies for Low-Resource Languages",
      institution: "University of Groningen",
      location: "Groningen, The Netherlands",
      period: "Sep 2026 - Present",
      supervisor: "Prof. Martijn Wieling, Prof. Malvina Nissim",
      highlight: true
    },
    {
      degree: "M.Sc., Artificial Intelligence and Robotics",
      institution: "Sharif University of Technology",
      location: "Tehran, Iran",
      period: "Oct 2021 - Jun 2024",
      thesis: "Improving Direct Speech-to-Speech Translation: A Unit-based Pipeline and Synthetic Corpus for Persian and English",
      supervisor: "Prof. Hossein Sameti",
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
    <section id="education" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Education</h2>
          <p className="section-lede">
            Academic background and research experience
          </p>
        </div>

        <div className="entry-list">
          {education.map((edu, index) => (
            <article key={index} className="entry entry-signal first:pt-1">
              <div className="entry-date">
                <p>{edu.period}</p>
                <p className="text-muted-foreground/80">{edu.location}</p>
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-xl md:text-2xl leading-snug">{edu.degree}</h3>
                  <p className="text-foreground/90">{edu.institution}</p>
                </div>

                {/* <p className="text-sm font-medium">
                  <span className="text-muted-foreground">GPA:</span> {edu.gpa}
                </p> */}
                <p className="max-w-[62ch]">
                  <span className="text-sm text-muted-foreground">Thesis</span>
                  <br />
                  <span className="font-serif italic text-lg leading-snug">{edu.thesis}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Supervisor: {edu.supervisor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
