import { Award, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const licenses = [
  {
    id: 1,
    title: "Real Estate License",
    number: "RE-2024-001",
    description: "Certified real estate broker license valid across Czech Republic",
    image: "https://via.placeholder.com/300x200/DAA520/FFFFFF?text=Real+Estate+License",
    icon: Award
  },
  {
    id: 2,
    title: "Property Management Certification",
    number: "PM-2024-002",
    description: "Professional property management certification for commercial and residential properties",
    image: "https://via.placeholder.com/300x200/DAA520/FFFFFF?text=Property+Management",
    icon: Shield
  },
  {
    id: 3,
    title: "Investment Advisory License",
    number: "IA-2024-003",
    description: "Licensed to provide real estate investment advisory services",
    image: "https://via.placeholder.com/300x200/DAA520/FFFFFF?text=Investment+Advisory",
    icon: CheckCircle
  }
];

const Licenses = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-medium">Certified & Licensed</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our <span className="text-gradient-golden">Licenses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are fully licensed and certified to provide professional real estate services
          </p>
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {licenses.map((license) => {
            const IconComponent = license.icon;
            return (
              <Card key={license.id} className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                {/* License Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={license.image}
                    alt={license.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-golden/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-golden-foreground" />
                    </div>
                  </div>
                </div>

                {/* License Details */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    {license.title}
                  </h3>
                  
                  <div className="text-sm text-golden font-medium mb-4">
                    License #{license.number}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {license.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Licenses;