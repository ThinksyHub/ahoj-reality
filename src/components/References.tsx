import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const references = [
  {
    id: 1,
    name: "Ján Novák",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Výnimočný servis a profesionalita. AHOJ Reality nám pomohla nájsť náš vysnívaný domov v Bratislave. Tím bol vždy k dispozícii a sprevádzal nás každým krokom procesu.",
    signature: "Ján Novák, Bratislava"
  },
  {
    id: 2,
    name: "Mária Svobodová",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Vynikajúca skúsenosť! Agenti v AHOJ Reality sú skutočnými profesionálmi, ktorí perfektne rozumejú trhu. Našli nám ideálnu investičnú nehnuteľnosť.",
    signature: "Mária Svobodová, Košice"
  },
  {
    id: 3,
    name: "Peter Černý",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Vrelo odporúčam AHOJ Reality! Ich znalosti trhu a vyjednávacie schopnosti nám ušetrili čas aj peniaze. Skutočne výnimočný servis od začiatku do konca.",
    signature: "Peter Černý, Žilina"
  }
];

const References = () => {
  return (
    <section id="references" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-light">Referencie klientov</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-6">
            Čo hovoria naši <span className="text-gradient-golden">klienti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Počúvajte spokojných klientov, ktorí našli svoje dokonalé nehnuteľnosti s našou pomocou
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference) => (
            <Card key={reference.id} className="p-8 hover-lift bg-card border-border/20 shadow-elegant">
              {/* Stars */}
              <div className="flex mb-6">
                {Array.from({ length: reference.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-golden fill-golden" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-8 italic leading-relaxed">
                "{reference.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={reference.image}
                  alt={reference.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-golden/20"
                />
                <div>
                  <h4 className="font-semibold text-primary">{reference.name}</h4>
                  <p className="text-sm text-muted-foreground">{reference.signature}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;