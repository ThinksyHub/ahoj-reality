import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Properties, { Property, PropertyType } from "@/pages/Properties";
import { useEffect, useState } from "react";

interface FeaturedProperty {
  filteredProperties: Property[];
}

const FeaturedProperties = ({filteredProperties}: FeaturedProperty) => {
const [propertyTypes, setPropertTypes] = useState<PropertyType[]>([]);
  
  useEffect(() => {
    fetch("api/property_types")
    .then((res) => res.json())
    .then((data) => setPropertTypes(data))
    .then((err) => console.error(err));
  }, []);
  
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-golden-luxury font-light">⭐⭐⭐⭐⭐ Exkluzívna kolekcia</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
            Najnovšie <span className="text-gradient-golden">nehnuteľnosti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Objavte náš starostlivo vybraný výber luxusných nehnuteľností na najprestížnejších lokalitách
          </p>
        </div>

        {/* Properties Grid - 4x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.slice(0, 8).map((property) => (
            <Card key={property.id} className="group overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={`/properties/${property.featured_image}-b.jpg`}
                  alt={property.property_name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category and Transaction Type Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-golden text-black px-3 py-1 rounded-full text-sm font-light">
                    {property.property_purpose}
                  </span>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-light">
                    {propertyTypes.find((t) =>  t.id === Number(property.property_type))?.types ?? "Unknown"}
                  </span>
                </div>

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-golden hover:text-golden-foreground transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    {property.sale_price}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-golden" />
                  <span className="text-sm">{property.address}</span>
                </div>

                <h3 className="font-heading text-xl font-light text-primary mb-4 group-hover:text-golden transition-colors truncate">
                  {property.property_name}
                </h3>


                {/* Property Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} izby</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} kúp.</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.area} m²</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Link to={`/property/${property.id}`}>
                    <Button className="btn-golden text-sm font-light w-full">
                      Zobraziť detaily
                    </Button>
                  </Link>
                  <div className="text-center">
                    <button className="text-sm text-black hover:text-golden transition-colors">
                      Naplánovať<br />prehliadku
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-black text-white hover:bg-black/90 text-lg px-8 py-4 font-light">
            <a href="/ponuka-nehnutelnosti">Ukázať všetky nehnuteľnosti</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;