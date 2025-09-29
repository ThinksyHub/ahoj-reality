const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-normal mb-8 leading-tight">
              Ako vzniklo <span className="text-gradient-golden">AHOJ reality</span>
            </h1>
            <div className="text-lg md:text-xl leading-relaxed opacity-90 space-y-6 max-w-3xl mx-auto font-light">
              <p>
                Realitná kancelária AHOJ reality poskytuje kompletný servis v oblastí realít, to znamená profesionálne služby v oblasti predaja, kúpy, financovania a právneho poradenstva.
              </p>
              <p>
                Za všetkým stojí zakladateľka a majiteľka firmy Mgr. Kristína Karaffová, ktorá v oblasti realít pôsobí od roku 2010. Od roku 2010 až do roku 2016 pôsobila v spoločnosti Profit finance, s.r.o, ako konateľka spoločnosti, taktiež aj ako maklérka, kde v realitnom trhu nadobudla bohaté skúsenosti a prax.
              </p>
              <p>
                Hlavným cieľom realitnej kancelárii AHOJ reality je poskytovať kvalitné a profesionálne služby ako v realitách, tak aj v poradenstve hypotekárnych úverov. Neoddeliteľnou súčasťou a ambíciou firmy je podieľať sa na financovaní veľkých investičných a developerských projektoch.
              </p>
              <p>
                Cieľom spoločnosti je aj spolupracovať s väčším počtom maklérov pod zastrešením značky AHOJ reality a rozvíjať filozofiu firmy aj do iných miest východného a západného Slovenska. Nebránime sa pokračovať až do zahraničného trhu.
              </p>
              <p>
                Ponúkame výber nehnuteľností od rodinných domov, bytov, pozemkov, a taktiež prenájmy nehnuteľností. Staviame na individuálnom prístupe ku klientom a na dokonalej znalosti regiónu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;