
const ProfessionalActivity = () => {
  const activities = [
    {
      title: "Reviewer",
      description: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2026"
    }
  ];

  return (
    <section id="professional-activity" className="section border-t border-border">
      <div className="section-grid">
        <h2 className="section-heading">Professional Activity</h2>

        <div className="entry-list">
          {activities.map((activity, index) => (
            <div key={index} className="entry sm:grid-cols-[7.5rem_1fr] pt-1">
              <p className="entry-date">{activity.title}</p>
              <p className="text-lg md:text-xl font-serif leading-snug max-w-[60ch]">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalActivity;
