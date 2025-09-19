import { Award, Shield, CheckCircle, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import diplomImage from "@/assets/licenses/diplom.jpg";
import licencia1Image from "@/assets/licenses/licencia-1.jpg";
import licencia2Image from "@/assets/licenses/licencia-2.jpg";
import licencia3Image from "@/assets/licenses/licencia-3.jpg";

const licenses = [
  {
    id: 1,
    title: "Realitná licencia LRK",
    number: "RK 21-06-02",
    description: "Certifikovaná realitná maklerská licencia platná na celom Slovensku",
    image: licencia1Image,
    icon: Award
  },
  {
    id: 2,
    title: "CEPI Attestation",
    number: "POA: 2506/2017/56/1",
    description: "Európska certifikácia realitných profesionálov pre najvyššie štandardy",
    image: licencia2Image,
    icon: Shield
  },
  {
    id: 3,
    title: "Realitný makler LRM",
    number: "RM 21-06-12",
    description: "Licencia realitného maklera pre poskytovanie komplexných služieb",
    image: licencia3Image,
    icon: CheckCircle
  },
  {
    id: 4,
    title: "Vysokoškolský diplom",
    number: "Mgr. Kristína Karaffová, RSc.",
    description: "Slovenská realitná akadémia - špecializácia realitná činnosť",
    image: diplomImage,
    icon: GraduationCap
  }
];

const Licenses = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Certifikované a licencované</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
            Naše <span className="text-gradient-golden">licencie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Sme plne licencovaní a certifikovaní na poskytovanie profesionálnych realitných služieb
          </p>
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenses.map((license) => {
            const IconComponent = license.icon;
            return (
              <Card key={license.id} className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                {/* License Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={license.image}
                    alt={license.title}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="w-8 h-8 bg-golden/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-golden-foreground" />
                    </div>
                  </div>
                </div>

                {/* License Details */}
                <div className="p-4">
                  <h3 className="font-heading text-sm font-semibold text-primary mb-1">
                    {license.title}
                  </h3>
                  
                  <div className="text-xs text-golden-luxury font-light mb-2">
                    {license.number}
                  </div>

                  <p className="text-muted-foreground leading-relaxed font-light text-xs">
                    {license.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Licenses;