import { Quote } from "lucide-react";

const QuoteBanner = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="w-16 h-16 text-golden mx-auto mb-8 opacity-80" />
          
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-semibold italic text-primary-foreground mb-8 leading-tight">
            <span className="text-gradient-golden">"Čistý proces, odovzdané kľúče, od A-Z do 1 mesiaca."</span>
          </blockquote>
          
          <p className="text-xl text-muted-dark-foreground/90 font-thin italic">
            — Mgr. Kristína Karaffová, RSc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;