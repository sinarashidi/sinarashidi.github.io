const Hero = () => {
  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-muted shadow-lg">
                {/* Placeholder - Replace this src with your actual photo path */}
                <div className="w-full h-full flex items-center justify-center bg-muted/30">
                  <div className="text-center">
                    <div className="text-6xl mb-3">👤</div>
                    <p className="text-sm text-muted-foreground">Your Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Sina Rashidi
              </h1>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 text-foreground">
                  A Bit About Me:
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                  I'm an AI researcher and Master's graduate specializing in 
                  Natural Language Processing, Speech Processing, and Healthcare AI. 
                  Currently working as a Research Assistant at Columbia University on 
                  cognitive impairment detection from speech.
                </p>
              </div>

              {/* Circular Navigation Links */}
              <div className="flex gap-6 mt-10">
                <button
                  onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-publications"
                >
                  <span className="font-bold text-lg">Publications</span>
                </button>
                
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-experience"
                >
                  <span className="font-bold text-lg">Experience</span>
                </button>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="circular-link circular-link-contact"
                >
                  <span className="font-bold text-lg">Contact</span>
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
