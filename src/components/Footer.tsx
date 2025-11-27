const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Sina Rashidi</h3>
            <p className="text-primary-foreground/80 text-sm">
              AI Researcher | Natural Language Processing | Speech Processing | Healthcare AI
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-primary-foreground/70">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-accent transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Sina Rashidi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
