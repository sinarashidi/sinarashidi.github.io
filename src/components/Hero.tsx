import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-muted shadow-lg">
                <img 
                  src="/sina.jpg" 
                  alt="Sina Rashidi" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="mailto:sinarashidi46@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/sinarashidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://github.com/sinarashidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=R_U1wDsAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-left w-full">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-foreground">
                Sina Rashidi
              </h1>
              
              <div className="mb-6 sm:mb-8">
                {/* <h2 className="text-xl font-bold mb-3 text-foreground">
                  A Bit About Me:
                </h2> */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  I'm an AI researcher and Master's graduate specializing in 
                  Natural Language Processing, Speech Processing, and Healthcare AI. 
                  Currently working as a Research Assistant at Columbia University on 
                  cognitive impairment detection from speech.
                </p>
              </div>

              {/* Circular Navigation Links */}
              <div className="flex gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-10">
                <button
                  onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-publications !w-20 !h-20 sm:!w-24 sm:!h-24 md:!w-32 md:!h-32 rounded-full flex-shrink-0"
                >
                  <span className="font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">Publications</span>
                </button>
                
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-experience !w-20 !h-20 sm:!w-24 sm:!h-24 md:!w-32 md:!h-32 rounded-full flex-shrink-0"
                >
                  <span className="font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">Experience</span>
                </button>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-contact !w-20 !h-20 sm:!w-24 sm:!h-24 md:!w-32 md:!h-32 rounded-full flex-shrink-0"
                >
                  <span className="font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
