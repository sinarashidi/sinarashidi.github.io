import { ExternalLink } from "lucide-react";

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
    <section id="honors" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Honors &amp; Awards</h2>
          <p className="section-lede">
            Recognition for academic excellence and research achievements
          </p>
        </div>

        <ul className="entry-list">
          {honors.map((honor, index) => (
            <li key={index} className="py-5 first:pt-1 grid grid-cols-[1.75rem_1fr] max-w-[65ch]">
              <span className="text-ember font-serif text-xl leading-none pt-1" aria-hidden="true">✳</span>
              <span className="text-lg font-serif leading-relaxed">
                {typeof honor === 'string' ? (
                  honor
                ) : (
                  <>
                    {honor.text}
                    <a
                      href={honor.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet"
                    >
                      {honor.link.text}
                      <ExternalLink className="ml-1 inline h-3.5 w-3.5 align-baseline" />
                    </a>
                    {honor.suffix}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Honors;
