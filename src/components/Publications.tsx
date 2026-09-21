import { ExternalLink } from "lucide-react";
import publicationsData from "@/data/publications.json";

const Publications = () => {
  // Helper function to sort by date (reverse chronological)
  const sortByDate = (a: any, b: any) => {
    const dateA = new Date(a.date + "-01");
    const dateB = new Date(b.date + "-01");
    return dateB.getTime() - dateA.getTime();
  };

  // Separate into three groups: In Progress, Published, Preprints
  const inProgress = publicationsData
    .filter(pub => pub.status === "under-review" || pub.status === "accepted")
    .sort(sortByDate);

  const published = publicationsData
    .filter(pub => pub.status === "published")
    .sort(sortByDate);

  const preprints = publicationsData
    .filter(pub => pub.status === "preprint")
    .sort(sortByDate);

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "published": "text-signal",
      "accepted": "text-signal",
      "under-review": "text-ember",
      "preprint": "text-muted-foreground"
    };
    
    const labels: Record<string, string> = {
      "published": "Published",
      "accepted": "Accepted",
      "under-review": "Under Review",
      "preprint": "Preprint"
    };

    return (
      <span className={`inline-flex items-center gap-1.5 text-sm ${variants[status]}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
        {labels[status]}
      </span>
    );
  };

  // Render a publication entry: date + status in the margin, citation on the right.
  const renderPublicationCard = (pub: any, index: number, prefix: string) => (
    <article
      key={`${prefix}-${index}`}
      className="entry entry-signal"
    >
      <div className="entry-date flex flex-row flex-wrap gap-x-3 sm:flex-col sm:gap-1">
        <span>{formatDate(pub.date)}</span>
        {getStatusBadge(pub.status)}
      </div>

      <div className="space-y-1.5">
        <h4 className="text-lg md:text-xl leading-snug max-w-[62ch]">
          {(prefix === "published" && pub.doi) || pub.arxiv ? (
            <a
              href={pub.arxiv ?? `https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep box-decoration-clone hover:text-signal"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h4>
        
        <p className="text-sm text-muted-foreground max-w-[70ch]">
          {pub.authors}
        </p>
        
        <p className="font-serif italic text-foreground/85">
          {pub.venue}
        </p>
        
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 text-sm empty:hidden">
          {/* In the Published group the title itself links to the DOI. */}
          {pub.doi && prefix !== "published" && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet inline-flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              DOI
            </a>
          )}
          {pub.pmid && (
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet inline-flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              PubMed
            </a>
          )}
        </div>
      </div>
    </article>
  );

  const groups = [
    { title: "To be Published", items: inProgress, prefix: "inprogress" },
    { title: "Published", items: published, prefix: "published" },
    { title: "Preprints", items: preprints, prefix: "preprint" },
  ];

  return (
    <section id="publications" className="section border-t border-border">
      <div className="section-grid">
        <div>
          <h2 className="section-heading">Publications</h2>
          <p className="section-lede">
            Research contributions in AI, speech processing, and healthcare, published in top-tier journals and conferences.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map(({ title, items, prefix }) =>
            items.length > 0 && (
              <div key={prefix}>
                <h3 className="subheading">{title}</h3>
                <div className="entry-list">
                  {items.map((pub, index) => renderPublicationCard(pub, index, prefix))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
