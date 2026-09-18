const Footer = () => {
  const links = [
    { label: "About", id: "about" },
    { label: "Publications", id: "publications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-12 lg:grid-cols-[16rem_1fr]">
          <h3 className="font-serif text-xl">Sina Rashidi</h3>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-sm text-muted-foreground">
                AI Researcher | Natural Language Processing | Speech Processing | Healthcare AI
              </p>

              <div className="flex gap-6 text-sm">
                {links.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="link-sweep text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground/80">
              © {new Date().getFullYear()} Sina Rashidi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
