import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar, Eye, Home, Star, Car, Trees, Shield, Snowflake, Flame, Wifi, Waves, Mountain, Archive, WashingMachine, ChefHat, Sofa, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Property data (same as in FeaturedProperties for now)
const properties = [
  {
    id: 1,
    title: "Nádherný rodinný dom",
    location: "Beloveža",
    price: "299,900 €",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 5,
    baths: 2,
    sqft: "163",
    category: "Domy",
    transactionType: "Predaj",
    description: "AHOJ reality exkluzívne ponúka na predaj nádherný rodinný dom v obci Beloveža s ideálnym prostredím pre pohodlný život. Tento dom má nádhernú rovinatú záhradu s príjazdom po obecnej ceste a moderné vybavenie, ktoré je súčasťou ceny pri predaji.\n\nAk máte radi útulné bývanie, tak tento dom je určite pre Vás. V nehnuteľnosti zažijete pocit šťastia a pokojnej atmosféry, čo dodá Vašej duši neopísateľný pocit. Je zrejmé, že dom si Vás hneď na prvej obhliadke určite získa.\n\nJedná sa o samostatne stojaci rodinný dom s rozmerom zastavanej plochy 163 m2, postavený z tehly a kompletne zateplený so sedlovou strechou. Dom sa nachádza na rovinatom pozemku vo veľkosti 1 699 m2 s betónovým plotom, pričom záhrada bola navrhnutá záhradným architektom.\n\nVykurovanie zabezpečuje plynový kotol s podlahovým systémom a dom má vlastnú studňu pre zásobovanie vodou. K domu patrí elektrická brána, čistička odpadových vôd, kozub a moderné solárne panely. Pre pohodlie majiteľov je k dispozícii automatické zavlažovanie trávnika a altánok s kapacitou pre 3 autá.\n\nDom má znížené stropy a nachádza sa vo výbornej lokalite. Dispozícia domu je nasledovná: prízemie obsahuje vstupnú chodbu, obývačku spojenú s kuchyňou, 2 izby, samostatnú kúpeľňa, WC, verandu a technickú miestnosť. Na prvom poschodí sa nachádzajú 3 izby, 2 balkóny a kúpeľňa s WC.\n\nV cene je zahrnuté právne poradenstvo, hypotekárne poradenstvo a popredajný servis. Klientom odovzdáme aj veľmi hodnotný darček, ktorý využije celá rodina.",
    features: [
      "Rovinatý pozemok",
      "Zavlažovanie trávnika", 
      "Solárne panely",
      "Elektrická brána",
      "Plynový kotol s podlahovým kúrením",
      "Vlastná studňa",
      "Čistička",
      "Kozub",
      "Altánok na 3 autá",
      "Záhrada navrhnutá záhradným architektom",
      "Betónový plot",
      "Zateplený dom"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  
  const property = properties.find(p => p.id === parseInt(id || "1"));
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Nehnuteľnosť sa nenašla</h1>
          <Button onClick={() => navigate("/")} className="btn-golden">
            Späť na hlavnú stránku
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Property Details - Main Layout */}
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Main Image and Gallery */}
            <div>
              {/* Main Image */}
              <div className="mb-6">
                <AspectRatio ratio={4/3} className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>

              {/* Gallery Section */}
              <div>
                <h3 className="font-serif text-xl font-normal text-primary mb-4">Galéria fotografií</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {property.images.slice(1, 9).map((image, index) => (
                    <AspectRatio key={index} ratio={4/3} className="overflow-hidden">
                      <img
                        src={image}
                        alt={`${property.title} ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </AspectRatio>
                  ))}
                </div>
                {property.images.length > 9 && (
                  <div className="text-center pt-4">
                    <span className="text-sm text-muted-foreground">
                      +{property.images.length - 9} ďalších fotografií
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Property Details */}
            <div>
              {/* Property Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="font-serif text-3xl font-normal text-primary">
                    {property.title}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span className="bg-golden text-black px-3 py-1 rounded-full text-xs font-medium">
                      {property.category}
                    </span>
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {property.transactionType}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-golden" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-golden">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-golden">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary mb-6">{property.price}</div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-6 gap-0.5 mb-8 p-1 bg-card rounded-lg border border-border/20">
                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Bed className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">{property.beds}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Bath className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">{property.baths}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Square className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">{property.sqft}</div>
                </div>

                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Car className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">3</div>
                </div>

                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Trees className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">✓</div>
                </div>

                <div className="text-center">
                  <div className="w-6 h-6 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Flame className="w-3 h-3 text-golden" />
                  </div>
                  <div className="text-sm font-bold text-primary">✓</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-normal text-primary mb-4">Vybavenie a vlastnosti</h2>
                <div className="grid grid-cols-1 gap-2">
                  {property.features.slice(0, isFeaturesExpanded ? property.features.length : 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                {property.features.length > 3 && (
                  <button
                    onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
                    className="flex items-center mt-2 text-golden hover:text-golden/80 transition-colors text-sm font-medium"
                  >
                    {isFeaturesExpanded ? (
                      <>
                        Zobraziť menej <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Zobraziť viac <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Description with Expander */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-normal text-primary mb-4">Popis nehnuteľnosti</h2>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  <p className={`transition-all duration-300 ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}>
                    {property.description}
                  </p>
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="flex items-center mt-2 text-golden hover:text-golden/80 transition-colors text-sm font-medium"
                  >
                    {isDescriptionExpanded ? (
                      <>
                        Zobraziť menej <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Zobraziť viac <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <Card className="p-6 bg-card border-border/20 shadow-elegant">
                  <h3 className="font-serif text-xl font-normal text-primary text-center mb-6">Kontaktujte nás</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button className="btn-golden text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Zavolať teraz
                    </Button>
                    
                    <Button className="btn-golden text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Poslať email
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Naplánovať prehliadku
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Why Choose Us Section - Full Width Background */}
      <div className="w-full bg-gradient-to-br from-primary/5 to-golden/5 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/kvalita.png" alt="Kvalita" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Kvalita</div>
                <div className="text-muted-foreground">Najvyššie štandardy</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/rychlost.png" alt="Rýchlosť" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Rýchlosť</div>
                <div className="text-muted-foreground">Efektívne riešenia</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/ludskost.png" alt="Ľudskosť" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Ľudskosť</div>
                <div className="text-muted-foreground">Osobný prístup</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img src="/src/assets/icons/loajalita.png" alt="Loajalita" className="w-16 h-16" />
              <div>
                <div className="text-2xl font-bold text-primary">Loajalita</div>
                <div className="text-muted-foreground">Dlhodobé partnerstvo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;