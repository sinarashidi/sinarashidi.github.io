import { Mail, Linkedin, Github, GraduationCap, ArrowDown } from "lucide-react";
import Waveform from "@/components/Waveform";

const Hero = () => {
  const socials = [
    { href: "mailto:s.rashidi@rug.nl", label: "Email", icon: Mail },
    { href: "https://linkedin.com/in/sinarashidi", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/sinarashidi", label: "GitHub", icon: Github },
    { href: "https://scholar.google.com/citations?user=R_U1wDsAAAAJ", label: "Google Scholar", icon: GraduationCap },
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
            <div className="flex gap-1.5 -ml-2.5">
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
              I'm an AI researcher and Master's graduate specializing in
              Natural Language Processing, Speech Processing, and Healthcare AI.
              Currently working as a Research Assistant at Columbia University on
              cognitive impairment detection from speech.
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
