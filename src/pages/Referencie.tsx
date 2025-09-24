import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Referencie = () => {
  const testimonials = [
    // Facebook Reviews
    {
      id: 1,
      name: "Jitka Knapová",
      source: "Facebook",
      text: "Touto cestou by som chcela poďakovať pani Karaffovej, za jej profesionálny prístup a ochoty prispôsobiť sa, aby nám mohla vyjsť v ústrety pri predaji nehnuteľnosti k našej spokojnosti. Ďakujem Knapová",
      rating: 5
    },
    // Web Reviews
    {
      id: 2,
      name: "Lýdia Taščicová",
      source: "Web",
      text: "Ďakujeme za super odvedenú prácu. Určite odporúčame každému, kto potrebuje pomoc s bývaním či už kúpiť alebo predať. Nám sa náš sen s bývaním splnil vďaka AhojReality. 🤩🏠👏 Poďakovanie patrí Kristinke Karaffovej, ktorá sa aj s Luckou Petrikovou o nás starali a všetko potrebné nám vysvetlili a samozrejme aj zrealizovali.",
      rating: 5
    },
    {
      id: 3,
      name: "Tomáš Běčák",
      source: "Web",
      text: "Chcel by som sa veľmi pekne poďakovať pani maklérke Kristíne Karaffovej z realitnej kancelárie Ahoj Reality za jej skvelý prístup a neuveriteľnú ochotu. Od prvého stretnutia bola profesionálna, milá a vždy pripravená pomôcť s každým detailom. Počas celého procesu kúpy som sa cítil v dobrých rukách – všetko bolo jasné, rýchle a bez stresu. Pani Karaffová si získala moju dôveru nielen svojimi odbornými znalosťami, ale aj ľudským a srdečným prístupom. Ak budem v budúcnosti opäť riešiť nehnuteľnosti, určite sa na ňu obrátim. Ďakujem ešte raz a úprimne odporúčam každému, kto hľadá niekoho spoľahlivého a férového.",
      rating: 5
    },
    {
      id: 4,
      name: "Tomáš Kuľka",
      source: "Web",
      text: "Maximalna spokojnost....Super pristup a vsetko poriesene v max spokojnosti pri predaji bytu.....Vrelo odporucam 👍👍👍👍",
      rating: 5
    },
    {
      id: 5,
      name: "Ľuboš Tyliščák",
      source: "Web",
      text: "Všetko super. Na čom sme sa dohodli to platilo. Realitka nám pomohla so všetkým čo sme potrebovali aj po odovzdaní bytu.",
      rating: 5
    },
    {
      id: 6,
      name: "Mária Baranová",
      source: "Web",
      text: "Pani Kristinka aj touto cestou Vám chcem poďakovať za úžasnú spoluprácu , ktorá prebehla tak rýchlo a hladko ,že ešte dlho na Vás budem u nás v Sladkovičove spomínať. Ešte raz ĎAKUJEM ❤",
      rating: 5
    },
    {
      id: 7,
      name: "Tomáš Soroka",
      source: "Web",
      text: "Ďakujem veľmi pekne za pomoc pri kúpe bytu. Bol som veľmi spokojný so službami realitnej kancelárie. Pani Kafaffová bola veľmi ústretová, sčítana a dokázala mi odpovedať na všetky moje otázky, čo je pre človeka, ktorý nekupuje byt každý deň veľmi dôležité. Ešte raz ďakujem za pomoc s kúpou bytu.",
      rating: 5
    },
    {
      id: 8,
      name: "Maria Bartosova",
      source: "Web",
      text: "AHOJ REALITY..... Vrelo odporúčame ..... skvelý prístup,profesionalita,finančné poradenstvo a ľudskosť. Všetko prebehlo veľmi rýchlo a bez problémov… Toto všetko nájdete v tejto realitke.... Vďaka patrí Pani G.Varholikovej, ktorá vždy myslí na všetko a veľmi nám pomohla s vybavovaním úveru.......s pozdravom",
      rating: 5
    },
    {
      id: 9,
      name: "Soňa",
      source: "Web",
      text: "Chcela by som srdečne odporučiť pani Karaffovú! Môj sen o kúpe bytu sa stal skutočnosťou v neuveriteľne krátkom čase, a to všetko vďaka jej výnimočnej šikovnosti a podpore. Od začiatku bola veľmi profesionálna a vždy ochotná pomôcť. Keď som prišla s požiadavkou na vybavenie kúpy bytu, Kristínka sa okamžite pustila do práce. Za menej ako mesiac sa mi podarilo získať kľúče od bytu, ktorý prekročil všetky moje očakávania. Jej schopnosť riešiť problémy a zabezpečiť všetky potrebné úkony mi veľmi zjednodušila celý proces. Ak hľadáte realitnú maklérku, ktorá sa naozaj stará o svojich klientov a dokáže vám pomôcť nielen pri kúpe, ale aj predaji nehnuteľnosti určite sa obráťte na p. Karaffovú. Jej profesionalita a osobný prístup sú naozaj výnimočné.",
      rating: 5
    },
    {
      id: 10,
      name: "Roman Lienik",
      source: "Web",
      text: "AHOJ reality - realitná kancelária, s ktorou som mal skúsenosť, sa vyznačovala vynikajúcou úrovňou profesionality a starostlivosti o svojich klientov. Komunikácia bola príjemná a transparentná, čo ma vždy uistilo, že som v dobrých rukách a že moje otázky a obavy boli vypočuté. Mgr. Karaffová riešila problémy a navigovala ma cez celý proces kúpy nehnuteľnosti . Okrem toho, ich schopnosť byť flexibilnými a prispôsobivými mojim potrebám a časovému plánu bola veľkou výhodou. Moja skúsenosť s touto realitnou kanceláriou bola veľmi pozitívna a s istotou by som odporučil ich služby ďalším záujemcom o nehnuteľnosti.",
      rating: 5
    },
    {
      id: 11,
      name: "Silvia Marková",
      source: "Web",
      text: "Spoluprácu s Ahoj reality by sme odporučili všetkimi desiatimi. Všetko bolo vybavené veľmi rýchlo, korektne a na veľmi vysokej profesionálnej úrovni. Úžasná komunikácia. Vždy sa nám vedeli prispôsobiť. Dokonca aj keď to prebiehalo za prítomnosti našich malých deti bolo to vždy veľmi ústretové, milé a všetko bolo vždy zrozumiteľne vysvetlené. Vyzdvihla by som aj ochotu, s takou som sa dávno nestretla. Ešte raz veľmi pekne ďakujeme.",
      rating: 5
    },
    {
      id: 12,
      name: "Val Oslacka",
      source: "Web",
      text: "Od samého začiatku bola pani Karaffová maximálne profesionálna a promptná vo svojej práci. Potenciálnych kupcov nám predstavila už na druhý deň. Veľmi oceňujeme jej znalosť trhu a skúsenosti s nehnuteľnosťami, ktoré pomohli predať byt v krátkom čase, pričom veľmi dbala na potreby a záujmy oboch strán predávajúceho a kupujúceho. Tiež pravidelne poskytovala aktualizácie a efektívne a milo komunikovala, čo sme naozaj veľmi ocenili. Bola kedykoľvek k dispozícii a vždy nám poskytovala užitočné rady a návrhy. Celý proces predaja prebehol bez problémov. Zariadila všetky tzv. papierovačky ohľadom predaja nehnuteľnosti aby sme my, ako klienti, boli zaťažovaní minimálne. Jej nasadenie nám dodalo dôveru, že sa naša nehnuteľnosť predá k našej spokojnosti a celá vec je v dobrých rukách. Pani Karaffová je profesionál s vynikajúcimi schopnosťami vyjednávať a v budúcnosti bezpochyby opäť vyhľadáme jej služby. Mgr. V. Oslacká",
      rating: 5
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Testimonials Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Recenzie od <span className="text-gradient-golden">klientov</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Prečítajte si skúsenosti našich klientov, ktorí nám dôverovali pri kúpe či predaji nehnuteľnosti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-golden/20">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed font-light mb-6 text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-golden/10 text-golden font-medium text-sm">
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-golden-luxury font-light">
                        {testimonial.source}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-golden/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-golden/10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Staňte sa naším ďalším spokojným klientom
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Pripojte sa k stovkám spokojných klientov, ktorí si vybrali našu realitku pre profesionálny a ľudský prístup.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-golden to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referencie;