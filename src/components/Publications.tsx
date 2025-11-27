import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      "published": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
      "accepted": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      "under-review": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
      "preprint": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
    };
    
    const labels: Record<string, string> = {
      "published": "Published",
      "accepted": "Accepted",
      "under-review": "Under Review",
      "preprint": "Preprint"
    };

    return (
      <Badge className={`${variants[status]} border`}>
        {labels[status]}
      </Badge>
    );
  };

  // Render publication card component
  const renderPublicationCard = (pub: any, index: number, prefix: string) => (
    <Card 
      key={`${prefix}-${index}`} 
      className="p-4 publication-card"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold leading-tight flex-1">
            {pub.title}
          </h3>
          {getStatusBadge(pub.status)}
        </div>
        
        <p className="text-sm text-muted-foreground">
          {pub.authors}
        </p>
        
        <p className="text-sm font-medium text-foreground/80">
          {pub.venue} · <span className="text-xs text-muted-foreground">{formatDate(pub.date)}</span>
        </p>
        
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {pub.doi && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => window.open(`https://doi.org/${pub.doi}`, '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              DOI
            </Button>
          )}
          {pub.arxiv && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => window.open(pub.arxiv, '_blank')}
            >
              <FileText className="h-3 w-3 mr-1" />
              arXiv
            </Button>
          )}
          {pub.pmid && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => window.open(`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}`, '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              PubMed
            </Button>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research contributions in AI, speech processing, and healthcare, published in top-tier journals and conferences.
            </p>
          </div>

          <div className="space-y-8">
            {inProgress.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">To be Published</h3>
                {inProgress.map((pub, index) => renderPublicationCard(pub, index, "inprogress"))}
              </div>
            )}

            {published.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Published</h3>
                {published.map((pub, index) => renderPublicationCard(pub, index, "published"))}
              </div>
            )}

            {preprints.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Preprints</h3>
                {preprints.map((pub, index) => renderPublicationCard(pub, index, "preprint"))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
