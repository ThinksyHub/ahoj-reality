import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      
      <main>
        {/* Back Button */}
        <div className="container mx-auto px-6 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Späť</span>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Property Title Overlay */}
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-golden text-black px-4 py-2 rounded-full text-sm font-light">
                {property.category}
              </span>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-light">
                {property.transactionType}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-normal mb-2">
              {property.title}
            </h1>
            <div className="flex items-center space-x-2 text-lg">
              <MapPin className="w-5 h-5 text-golden" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Price */}
          <div className="absolute bottom-8 right-8 text-white">
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-bold mb-2">{property.price}</div>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-golden">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-golden">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Stats */}
              <div className="flex flex-wrap items-center gap-8 mb-8 p-6 bg-card rounded-lg border border-border/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
                    <Bed className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Spálne</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
                    <Bath className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Kúpeľne</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
                    <Square className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{property.sqft}</div>
                    <div className="text-sm text-muted-foreground">m²</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-normal text-primary mb-4">Popis nehnuteľnosti</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-normal text-primary mb-6">Vybavenie a vlastnosti</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="font-serif text-3xl font-normal text-primary mb-6">Galéria</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${property.title} ${index + 2}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border/20 shadow-elegant sticky top-8">
                <h3 className="font-serif text-2xl font-normal text-primary mb-6">Kontaktujte nás</h3>
                
                <div className="space-y-4 mb-6">
                  <Button className="btn-golden w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Zavolať teraz
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Poslať email
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Naplánovať prehliadku
                  </Button>
                </div>

                <div className="border-t border-border/20 pt-6">
                  <h4 className="font-medium text-primary mb-4">Váš makléri</h4>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/src/assets/team/jana-svobodova.jpg"
                      alt="Jana Svobodová"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-primary">Jana Svobodová</div>
                      <div className="text-sm text-muted-foreground">Senior makléri</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;