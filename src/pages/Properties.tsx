import { useEffect, useState } from "react";
import { Search, MapPin, Home, FileText, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bed, Bath, Square, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Reuse the same properties data from FeaturedProperties
const properties = [
  {
    id: 1,
    title: "Moderná luxusná vila",
    location: "Bratislava",
    city_id: "",
    price: "850000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    beds: 5,
    baths: 6,
    sqft: "650",
    category: "Dom",
    transactionType: "Predaj"
  }
];

interface Property {
  id: number;
  property_name: string;
  property_slug: string;
  property_purpose: string; // e.g. "Sale" | "Rent"
  property_type: string; // could be number/string depending on DB
  description: string;
  sale_price: string | null; 
  rent_price: string | null;
  address: string | null;
  city_id: number | null;
  area: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  map_latitude: string | null;
  map_longitude: string | null;
  property_features: string | null;
  featured_property: number; // probably 0/1
  featured_image: string | null;
  property_images1: string | null;
  property_images2: string | null;
  property_images3: string | null;
  property_images4: string | null;
  property_images5: string | null;
  status: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface City {
  id: number;
  city_name: string;
  status: number;
}

interface PropertyType {
  id: number;
  types: string;
  slug: string;
}

const Properties = () => {
  const [filters, setFilters] = useState({
    city: "",
    propertyType: "",
    contractType: "",
    priceFrom: "",
    priceTo: ""
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [cities, setCities] = useState<City[]>([]);
  const [propertyTypes, setPropertTypes] = useState<PropertyType[]>([]);

  // Filtering logic
  const handleSearch = () => {
    const result = properties.filter((p) => {
      const matchesCity = filters.city
        ? p.location.toLowerCase().includes(filters.city.toLowerCase())
        : true;

      const matchesType = filters.propertyType
        ? p.category.toLowerCase() === filters.propertyType.toLowerCase()
        : true;

      const matchesContract = filters.contractType
        ? p.transactionType.toLowerCase() === filters.contractType.toLowerCase()
        : true;

      const price = Number(p.price);
      const min = filters.priceFrom ? Number(filters.priceFrom) : 0;
      const max = filters.priceTo ? Number(filters.priceTo) : Infinity;

      const matchesMin = price >= min;
      const matchesMax = price <= max;

      return matchesCity && matchesType && matchesContract && matchesMin && matchesMax;
    });

    setFilteredProperties(result);
  };

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/api/cities")
    .then((res) => res.json())
    .then((data) => setCities(data))
    .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("api/property_types")
    .then((res) => res.json())
    .then((data) => setPropertTypes(data))
    .then((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
                Aktuálna ponuka <span className="text-gradient-golden">nehnuteľností</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Prezrite si našu ponuku bytov, domov a pozemkov. Pomocou filtra si jednoducho vyberiete presne podľa svojich predstáv – od lokality, cez typ zmluvy až po cenové rozpätie. Všetky ponuky sú aktuálne a overené.
              </p>
            </div>

            {/* Filter Section */}
            <div className="max-w-5xl mx-auto mb-16">
              <Card className="p-8 bg-card border-border/20 shadow-elegant">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* City Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 text-golden" />
                      <span className="text-sm font-medium">Mesto</span>
                    </div>
                    <Select value={filters.city} onValueChange={(value) => setFilters(prev => ({...prev, city: value}))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Vyberte mesto" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.id} value ={city.city_name}>{city.city_name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Property Type Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <Home className="w-4 h-4 text-golden" />
                      <span className="text-sm font-medium">Typ nehnuteľnosti</span>
                    </div>
                    <Select value={filters.propertyType} onValueChange={(value) => setFilters(prev => ({...prev, propertyType: value}))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Vyberte typ" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.id} value={type.slug}>{type.types}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contract Type Filter */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <FileText className="w-4 h-4 text-golden" />
                      <span className="text-sm font-medium">Typ zmluvy</span>
                    </div>
                    <Select value={filters.contractType} onValueChange={(value) => setFilters(prev => ({...prev, contractType: value}))}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Vyberte typ zmluvy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="predaj">Predaj</SelectItem>
                        <SelectItem value="prenájom">Prenájom</SelectItem>
                        <SelectItem value="kúpa">Kúpa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <Euro className="w-4 h-4 text-golden" />
                      <span className="text-sm font-medium">Cena</span>
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Od"
                        value={filters.priceFrom}
                        onChange={(e) => setFilters(prev => ({...prev, priceFrom: e.target.value}))}
                        className="flex-1"
                      />
                      <Input 
                        placeholder="Do"
                        value={filters.priceTo}
                        onChange={(e) => setFilters(prev => ({...prev, priceTo: e.target.value}))}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center mt-8">
                  <Button onClick={handleSearch} className="btn-golden px-8 py-3 text-base font-light">
                    <Search className="w-5 h-5 mr-2" />
                    Vyhľadať nehnuteľnosti
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Properties Grid - Same as FeaturedProperties */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            {/* Properties Grid - 4x2 layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="group overflow-hidden hover-lift bg-card border-border/20 shadow-elegant">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Category and Transaction Type Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-golden text-black px-3 py-1 rounded-full text-sm font-light">
                        {property.category}
                      </span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-light">
                        {property.transactionType}
                      </span>
                    </div>

                    {/* Heart Icon */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-golden hover:text-golden-foreground transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {property.price}
                      </span>
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

            {/* Call to Action Text */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Nenašli ste, čo hľadáte? Dajte nám vedieť, akú nehnuteľnosť si predstavujete, a my vás budeme kontaktovať hneď, ako pribudne vhodná ponuka.
                </p>
                <Link to={"/contact"}>
                  <Button className="btn-golden mt-6 px-8 py-3 text-base font-light">
                    Kontaktujte nás
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;