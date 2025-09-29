import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar, Eye, Home, Star } from "lucide-react";
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
    title: "Moderná luxusná vila",
    location: "Bratislava, SK",
    price: "€850,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 5,
    baths: 6,
    sqft: "650",
    category: "Domy",
    transactionType: "Predaj",
    description: "Táto výnimočná moderná vila sa nachádza v prestížnej lokalite Bratislavy a ponúka luxusné bývanie na najvyššej úrovni. Vila je navrhnutá s dôrazom na detail a kvalitu, s veľkými oknami, ktoré zabezpečujú prirodzené svetlo v celom dome.",
    features: [
      "Priestranná obývacia izba s krbom",
      "Moderne vybavená kuchyňa",
      "Hlavná spálňa s vlastnou kúpeľňou",
      "Domáce kino",
      "Vínovka",
      "Dvojgaráž",
      "Záhrada s bazénom",
      "Inteligentný domový systém"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
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
        {/* Property Details - Two Column Layout */}
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Images */}
            <div>
              {/* Main Image */}
              <div className="mb-6">
                <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-normal text-primary">Galéria fotografií</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                        <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${property.title} ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            {/* Right Side - Property Details */}
            <div>
              {/* Property Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-golden text-black px-4 py-2 rounded-full text-sm font-medium">
                    {property.category}
                  </span>
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {property.transactionType}
                  </span>
                </div>
                
                <h1 className="font-serif text-4xl font-normal text-primary mb-4">
                  {property.title}
                </h1>
                
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

                <div className="text-4xl font-bold text-primary mb-8">{property.price}</div>
              </div>

              {/* Property Stats with Icons */}
              <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-card rounded-lg border border-border/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bed className="w-8 h-8 text-golden" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{property.beds}</div>
                  <div className="text-sm text-muted-foreground">Spálne</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bath className="w-8 h-8 text-golden" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{property.baths}</div>
                  <div className="text-sm text-muted-foreground">Kúpeľne</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Square className="w-8 h-8 text-golden" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{property.sqft}</div>
                  <div className="text-sm text-muted-foreground">m²</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-normal text-primary mb-4">Vybavenie a vlastnosti</h2>
                <div className="grid grid-cols-1 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Description - Full Width */}
        <div className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-normal text-primary mb-6">Popis nehnuteľnosti</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </div>
        </div>

        {/* Why Choose Us Section - Centered */}
        <div className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-normal text-primary text-center mb-8">Prečo si vybrať nás</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20">
                <img src="/src/assets/icons/kvalita.png" alt="Kvalita" className="w-12 h-12 mb-4" />
                <div className="font-medium text-primary mb-2">Kvalita</div>
                <div className="text-sm text-muted-foreground">Najvyššie štandardy</div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20">
                <img src="/src/assets/icons/rychlost.png" alt="Rýchlosť" className="w-12 h-12 mb-4" />
                <div className="font-medium text-primary mb-2">Rýchlosť</div>
                <div className="text-sm text-muted-foreground">Efektívne riešenia</div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20">
                <img src="/src/assets/icons/ludskost.png" alt="Ľudskosť" className="w-12 h-12 mb-4" />
                <div className="font-medium text-primary mb-2">Ľudskosť</div>
                <div className="text-sm text-muted-foreground">Osobný prístup</div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20">
                <img src="/src/assets/icons/loajalita.png" alt="Loajalita" className="w-12 h-12 mb-4" />
                <div className="font-medium text-primary mb-2">Loajalita</div>
                <div className="text-sm text-muted-foreground">Dlhodobé partnerstvo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Full Width */}
        <div className="container mx-auto px-6 pb-12">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border/20 shadow-elegant">
              <h3 className="font-serif text-2xl font-normal text-primary text-center mb-8">Kontaktujte nás</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button className="btn-golden">
                  <Phone className="w-4 h-4 mr-2" />
                  Zavolať teraz
                </Button>
                
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Poslať email
                </Button>
                
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Naplánovať prehliadku
                </Button>
              </div>

              <div className="border-t border-border/20 pt-6">
                <h4 className="font-medium text-primary text-center mb-4">Váš makléri</h4>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="/src/assets/team/jana-svobodova.jpg"
                    alt="Jana Svobodová"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-medium text-primary">Jana Svobodová</div>
                    <div className="text-sm text-muted-foreground">Senior makléri</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;