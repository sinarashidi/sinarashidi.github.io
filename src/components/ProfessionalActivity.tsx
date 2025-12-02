import { Card } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";

const ProfessionalActivity = () => {
  const activities = [
    {
      title: "Reviewer",
      description: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2026"
    }
  ];

  return (
    <section id="professional-activity" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Activity</h2>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <ClipboardCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
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

export default ProfessionalActivity;

