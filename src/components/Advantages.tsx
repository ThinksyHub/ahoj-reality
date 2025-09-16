import { Zap, Award, Users, Star, CreditCard, Heart } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Rýchlosť",
    description: "Zabezpečujeme najrýchlejšie spracovanie všetkých požiadaviek a transakcií."
  },
  {
    icon: Award,
    title: "Kvalita",
    description: "Poskytujeme služby najvyššej kvality s dôrazom na dokonalosť v každom detaile."
  },
  {
    icon: Users,
    title: "Kvalifikácia",
    description: "Náš tím tvorí certifikovaní a skúsení odborníci v oblasti nehnuteľností."
  },
  {
    icon: Star,
    title: "Lojalita",
    description: "Budujeme dlhodobé partnerstvá založené na dôvere a vzájomnom rešpekte."
  },
  {
    icon: Heart,
    title: "Ľudskosť",
    description: "Pristupujeme k každému klientovi individuálne s porozumením a empatiou."
  }
];

const Advantages = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`
        }}
      />
      
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/80" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6">
            Naše hlavné <span className="text-gradient-golden">výhody</span>
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto font-light">
            Prečo si vybrať práve nás? Pozrite si kľúčové výhody, ktoré nás odlišujú od konkurencie
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group text-center hover-lift"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-golden/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-golden group-hover:shadow-golden transition-all duration-300">
                  <Icon className="w-10 h-10 text-golden group-hover:text-black transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-light text-black mb-4 group-hover:text-golden transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-black/70 font-light text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;