import rychlostIcon from "@/assets/icons/rychlost.png";
import kvalitaIcon from "@/assets/icons/kvalita.png";
import kvalifikaciaIcon from "@/assets/icons/kvalifikacia.png";
import lojalitaIcon from "@/assets/icons/loajalita.png";
import ludskostIcon from "@/assets/icons/ludskost.png";

const advantages = [
  {
    icon: rychlostIcon,
    title: "Rýchlosť",
    description: "Zabezpečujeme najrýchlejšie spracovanie všetkých požiadaviek a transakcií."
  },
  {
    icon: kvalitaIcon,
    title: "Kvalita",
    description: "Poskytujeme služby najvyššej kvality s dôrazom na dokonalosť v každom detaile."
  },
  {
    icon: kvalifikaciaIcon,
    title: "Kvalifikácia",
    description: "Náš tím tvorí certifikovaní a skúsení odborníci v oblasti nehnuteľností."
  },
  {
    icon: lojalitaIcon,
    title: "Lojalita",
    description: "Budujeme dlhodobé partnerstvá založené na dôvere a vzájomnom rešpekte."
  },
  {
    icon: ludskostIcon,
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
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Naše hlavné <span className="text-gradient-golden">výhody</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Prečo si vybrať práve nás? Pozrite si kľúčové výhody, ktoré nás odlišujú od konkurencie
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={index}
                className="group text-center hover-lift"
              >
                {/* Icon */}
                <div className="mx-auto mb-6">
                  <img 
                    src={advantage.icon} 
                    alt={advantage.title}
                    className="w-12 h-12 object-contain mx-auto transition-all duration-300" 
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-light text-white mb-4 group-hover:text-gradient-golden transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-white/80 font-light text-sm leading-relaxed">
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