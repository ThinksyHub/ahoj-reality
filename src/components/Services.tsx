import { Home, Search, Shield, TrendingUp, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description: "Comprehensive search service to find your perfect luxury property matching your exact requirements and lifestyle preferences."
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Full-service property management ensuring your investment is maintained to the highest standards with maximum returns."
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert market analysis and investment strategies to help you make informed decisions in luxury real estate markets."
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Comprehensive legal assistance throughout the buying process, ensuring secure and smooth property transactions."
  },
  {
    icon: Users,
    title: "Concierge Service",
    description: "Personalized concierge service handling every detail from property tours to closing, providing white-glove treatment."
  },
  {
    icon: Award,
    title: "Market Expertise",
    description: "Unmatched knowledge of luxury markets, providing insider access to exclusive properties and off-market opportunities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-medium">Premium Services</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-gradient-golden">Expertise</span>
          </h2>
          <p className="text-xl text-muted-dark-foreground/90 max-w-2xl mx-auto">
            We provide comprehensive luxury real estate services designed to exceed your expectations
            at every step of your property journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-luxury hover-glow p-8 text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-golden rounded-2xl flex items-center justify-center mx-auto shadow-golden group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-golden-foreground" />
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-card-dark-foreground mb-4 group-hover:text-golden transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-dark-foreground/80 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 h-1 w-12 bg-gradient-golden mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-dark/50 backdrop-blur-sm border border-golden/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-muted-dark-foreground/90 mb-6 max-w-2xl mx-auto">
              Let our team of experts guide you through every step of your luxury real estate journey.
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-golden">
                Schedule Consultation
              </button>
              <button className="btn-outline-golden">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;