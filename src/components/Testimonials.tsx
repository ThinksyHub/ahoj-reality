import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    location: "Purchased in Beverly Hills",
    rating: 5,
    text: "The level of service and attention to detail was extraordinary. They found us the perfect home that exceeded all our expectations. Truly a luxury experience from start to finish.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "Investment Banker",
    location: "Purchased in Malibu",
    rating: 5,
    text: "Their market expertise and professional network made the impossible possible. We secured an off-market property that was exactly what we were looking for. Outstanding service.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Isabella Rodriguez",
    role: "Fashion Designer",
    location: "Purchased in West Hollywood",
    rating: 5,
    text: "From the initial consultation to the final closing, every detail was handled with precision and care. The concierge service made the entire process seamless and stress-free.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-medium">Client Stories</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            What Our <span className="text-gradient-golden">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning clients choose us for their luxury real estate needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-card border-border/20 shadow-elegant p-8 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-golden" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-golden fill-golden" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-golden/20"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-golden">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">500+</div>
              <div className="text-primary-foreground font-medium">Properties Sold</div>
              <div className="text-muted-dark-foreground/70 text-sm">Luxury homes delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">$2.5B+</div>
              <div className="text-primary-foreground font-medium">Total Sales Volume</div>
              <div className="text-muted-dark-foreground/70 text-sm">In luxury transactions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">98%</div>
              <div className="text-primary-foreground font-medium">Client Satisfaction</div>
              <div className="text-muted-dark-foreground/70 text-sm">5-star reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">15+</div>
              <div className="text-primary-foreground font-medium">Years Experience</div>
              <div className="text-muted-dark-foreground/70 text-sm">Market expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;