const HeroSection = () => {
  return (
    <section className="py-20 pt-48 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Ako vzniklo <span className="text-gradient-golden">AHOJ reality</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Realitná kancelária AHOJ reality poskytuje kompletný servis v oblastí realít, to znamená profesionálne služby v oblasti predaja, kúpy, financovania a právneho poradenstva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;