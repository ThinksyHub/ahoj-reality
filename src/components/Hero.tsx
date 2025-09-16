import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-golden/10 backdrop-blur-sm border border-golden/20 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-golden fill-golden" />
            <span className="text-golden font-medium">Premium Luxury Properties</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Your
            <br />
            <span className="text-gradient-golden">Dream Estate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-dark-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled luxury with our exclusive collection of premium properties
            in the world's most prestigious locations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-golden text-lg px-8 py-4 min-w-[200px]">
              Explore Properties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-outline-golden text-lg px-8 py-4 min-w-[200px]">
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">500+</div>
              <div className="text-muted-dark-foreground/80">Luxury Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">15+</div>
              <div className="text-muted-dark-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden mb-2">98%</div>
              <div className="text-muted-dark-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 bg-card-dark/80 backdrop-blur-sm border border-golden/20 rounded-full px-6 py-3">
            <MapPin className="w-4 h-4 text-golden" />
            <span className="text-primary-foreground font-medium">Beverly Hills, California</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-golden/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;