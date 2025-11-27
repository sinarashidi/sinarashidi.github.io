import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import publicationsData from "@/data/publications.json";

const Publications = () => {
  const publications = publicationsData;

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

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className={`p-6 publication-card ${pub.highlight ? 'border-2 border-accent/30 bg-accent/5' : ''}`}
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight flex-1">
                      {pub.title}
                    </h3>
                    {getStatusBadge(pub.status)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  
                  <p className="text-sm font-medium text-foreground/80">
                    {pub.venue}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 pt-2">
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
                      <Badge variant="outline" className="text-xs">
                        PMID: {pub.pmid}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
