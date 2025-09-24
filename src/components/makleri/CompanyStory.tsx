const CompanyStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ako vzniklo Ahoj Reality
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto mb-8"></div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Na realitnom trhu pôsobíme už niekoľko rokov. Ahoj Reality sme založili s cieľom priniesť férový a priateľský prístup do sveta nehnuteľností.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Veríme, že kúpa či predaj bytu alebo domu nie je len o číslach – je to o dôvere, otvorenosti a korektnom prístupe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;