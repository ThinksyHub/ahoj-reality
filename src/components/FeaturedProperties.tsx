import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$8,500,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 5,
    baths: 6,
    sqft: "6,500",
    featured: true
  },
  {
    id: 2,
    title: "Oceanfront Penthouse",
    location: "Malibu, CA",
    price: "$12,200,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    beds: 4,
    baths: 5,
    sqft: "4,800",
    featured: true
  },
  {
    id: 3,
    title: "Contemporary Estate",
    location: "Hollywood Hills, CA",
    price: "$6,750,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    beds: 6,
    baths: 7,
    sqft: "8,200",
    featured: false
  },
  {
    id: 4,
    title: "Luxury High-rise Condo",
    location: "Downtown LA, CA",
    price: "$3,900,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 3,
    baths: 4,
    sqft: "3,200",
    featured: false
  },
  {
    id: 5,
    title: "Mediterranean Mansion",
    location: "Bel Air, CA",
    price: "$15,800,000",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    beds: 8,
    baths: 10,
    sqft: "12,000",
    featured: true
  },
  {
    id: 6,
    title: "Modern Glass House",
    location: "West Hollywood, CA",
    price: "$5,200,000",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 4,
    baths: 5,
    sqft: "4,500",
    featured: false
  }
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Exkluzívna kolekcia</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-6">
            Vybrané <span className="text-gradient-golden">nehnuteľnosti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Objavte náš starostlivo vybraný výber luxusných nehnuteľností na najprestížnejších lokalitách
          </p>
        </div>

        {/* Properties Grid - 4x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.slice(0, 8).map((property) => (
            <Card key={property.id} className="group overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-golden text-golden-foreground px-3 py-1 rounded-full text-sm font-light">
                      Odporúčané
                    </span>
                  </div>
                )}

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-golden hover:text-golden-foreground transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold">{property.price}</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-golden" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <h3 className="font-heading text-xl font-light text-primary mb-4 group-hover:text-golden transition-colors">
                  {property.title}
                </h3>

                {/* Property Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} izby</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} kúp.</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} m²</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 btn-golden text-sm font-light">
                    Zobraziť detaily
                  </Button>
                  <Button className="flex-1 btn-outline-golden text-sm font-light">
                    Naplánovať prehliadku
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-outline-golden text-lg px-8 py-4 font-light">
            Zobraziť všetky nehnuteľnosti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;