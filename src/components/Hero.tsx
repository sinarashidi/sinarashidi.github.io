import { Mail, Linkedin, Github, GraduationCap, ArrowDown } from "lucide-react";
import Waveform from "@/components/Waveform";

const SemanticScholar = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 8.609c-.848.536-1.436.83-2.146 1.245-4.152 2.509-8.15 5.295-11.247 8.981l-1.488 1.817-4.568-7.268c1.021.814 3.564 3.098 4.603 3.599l3.356-2.526c2.336-1.644 8.946-5.226 11.49-5.848ZM8.046 15.201c.346.277.692.537.969.744.761-3.668.121-7.613-1.886-11.039 3.374-.052 6.731-.087 10.105-.139a14.794 14.794 0 0 1 1.298 5.295c.294-.156.588-.294.883-.433-.104-1.868-.641-3.91-1.662-6.263-4.602-.018-9.188-.018-13.79-.018 2.993 3.547 4.36 7.839 4.083 11.853Zm-.623-.484c.087.086.191.155.277.225-.138-3.409-1.419-6.887-3.824-9.881H1.73c3.098 2.855 4.984 6.299 5.693 9.656Zm-.744-.658c.104.087.208.173.329.277-.9-2.526-2.492-5.018-4.741-7.198H0c2.89 2.076 5.122 4.481 6.679 6.921Z" />
  </svg>
);

const Hero = () => {
  const socials = [
    { href: "mailto:s.rashidi@rug.nl", label: "Email", icon: Mail },
    { href: "https://linkedin.com/in/sinarashidi", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/sinarashidi", label: "GitHub", icon: Github },
    { href: "https://scholar.google.com/citations?user=R_U1wDsAAAAJ", label: "Google Scholar", icon: GraduationCap },
    { href: "https://www.semanticscholar.org/author/Sina-Rashidi/2375201873", label: "Semantic Scholar", icon: SemanticScholar },
  ];

  const quickLinks = [
    { label: "Publications", id: "publications" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section className="relative bg-background pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[13rem_1fr] md:gap-12 lg:grid-cols-[16rem_1fr]">
          {/* Profile Photo */}
          <div className="flex flex-row items-end gap-6 md:flex-col md:items-start">
            <div className="w-32 sm:w-40 md:w-full aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img
                src="/sina.jpg"
                alt="Sina Rashidi"
                className="h-full w-full object-cover grayscale-[0.15]"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-1.5 -ml-2.5 md:ml-0 md:w-full md:justify-center">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted-foreground hover:text-signal transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-end">
            <h1 className="font-serif font-light text-[3.5rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-[-0.03em] text-foreground mb-6 md:mb-8">
              Sina
              <br />
              Rashidi
            </h1>

            <p className="max-w-[36rem] text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a PhD candidate at the University of Groningen, working on speech and language technology for low-resource languages. My background is in artificial intelligence and robotics (M.Sc., Sharif University of Technology), and I've spent the past few years building deep learning systems for clinical speech AI. I'm interested in how speech technology can better serve the people and communities that mainstream systems overlook, and I continue to pursue research on speech-based detection of cognitive impairment alongside my doctoral work.
            </p>

            {/* Jump links: one joined control; ink rises like a level meter on hover. */}
            <div className="mt-8 grid grid-cols-3 sm:inline-grid sm:w-fit rounded-sm border border-foreground/80 divide-x divide-foreground/80 overflow-hidden">
              {quickLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className="meter-button group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {label}
                    <ArrowDown
                      className="hidden sm:block h-3.5 w-3.5 shrink-0 text-signal transition-[transform,color] duration-300 group-hover:translate-y-0.5 group-hover:text-background group-focus-visible:text-background"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <Waveform />
        </div>
      </div>
    </section>
  );
};

export default Hero;
