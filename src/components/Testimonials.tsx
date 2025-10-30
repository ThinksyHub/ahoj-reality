import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Lýdia Taščicová",
    role: "Spokojná klientka",
    location: "Kúpa nehnuteľnosti",
    rating: 5,
    text: "Ďakujeme za super odvedenú prácu. Určite odporúčame každému, kto potrebuje pomoc s bývaním či už kúpiť alebo predať. Nám sa náš sen s bývaním splnil vďaka AhojReality. 🤩🏠👏 Poďakovanie patrí Kristinke Karaffovej, ktorá sa aj s Luckou Petrikovou o nás starali a všetko potrebné nám vysvetlili a samozrejme aj zrealizovali.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Tomáš Běčák",
    role: "Spokojný klient",
    location: "Kúpa nehnuteľnosti",
    rating: 5,
    text: "Chcel by som sa veľmi pekne poďakovať pani maklérke Kristíne Karaffovej z realitnej kancelárie Ahoj Reality za jej skvelý prístup a neuveriteľnú ochotu. Od prvého stretnutia bola profesionálna, milá a vždy pripravená pomôcť s každým detailom. Počas celého procesu kúpy som sa cítil v dobrých rukách – všetko bolo jasné, rýchle a bez stresu. Pani Karaffová si získala moju dôveru nielen svojimi odbornými znalosťami, ale aj ľudským a srdečným prístupom. Ak budem v budúcnosti opäť riešiť nehnuteľnosti, určite sa na ňu obrátim. Ďakujem ešte raz a úprimne odporúčam každému, kto hľadá niekoho spoľahlivého a férového.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Mária Baranová",
    role: "Spokojná klientka",
    location: "Sladkovičovo",
    rating: 5,
    text: "Pani Kristinka aj touto cestou Vám chcem poďakovať za úžasnú spoluprácu, ktorá prebehla tak rýchlo a hladko, že ešte dlho na Vás budem u nás v Sladkovičove spomínať. Ešte raz ĎAKUJEM ❤",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const Testimonials = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden font-medium">Referencie klientov</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Čo hovoria naši <span className="text-gradient-golden">klienti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prečítajte si, prečo si naši klienti vybrali práve nás pre svoje realitné potreby
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
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-golden/10 text-golden font-medium text-sm">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
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
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">28</div>
              <div className="text-primary-foreground font-medium">Dní priemerný čas predaja</div>
              {/* <div className="text-muted-dark-foreground/70 text-sm">Úspešne zrealizované</div> */}
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">TOP 1</div>
              <div className="text-primary-foreground font-medium">v meste Bardejov podľa recenzií klientov</div>
              {/* <div className="text-muted-dark-foreground/70 text-sm">V eurách</div> */}
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">100%</div>
              <div className="text-primary-foreground font-medium">Spokojnosť klientov</div>
              <div className="text-muted-dark-foreground/70 text-sm">5-hviezdičkové hodnotenia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-golden mb-2">15+</div>
              <div className="text-primary-foreground font-medium">Rokov skúseností</div>
              <div className="text-muted-dark-foreground/70 text-sm">Na trhu nehnuteľností</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;