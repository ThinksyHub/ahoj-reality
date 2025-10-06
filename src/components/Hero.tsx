import { Euro, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import mainBanner from "@/assets/AHOJ_reality_HP_banner_1536x1024_3.png";
import { useEffect, useState } from "react";
import { City, Property, PropertyType } from "@/pages/Properties";
import { Input } from "./ui/input";

const Hero = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    city_id: 0,
    property_type: "",
    property_purpose: "",
    priceFrom: "",
    priceTo: ""
  });

  const [properties, setProperties] = useState<Property[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [propertyTypes, setPropertTypes] = useState<PropertyType[]>([]);

  const handleClick = () => {
    onSearch(filters);
  }

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      })
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
      .then((data) => {
        setPropertTypes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('${mainBanner}')`
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-golden/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Luxury Property Search Filter */}
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 max-w-5xl mx-auto border border-white/20 shadow-luxury relative overflow-hidden animate-fade-in">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-golden/10 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden/50 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8 text-center">
                Nájdite svoju <span className="text-gradient-golden">vysnívanú nehnuteľnosť</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Mesto</label>
                  <Select value={filters.city_id ? filters.city_id.toString() : ""} onValueChange={(value) => setFilters(prev => ({ ...prev, city_id: Number(value) }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Vyberte mesto" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.id.toString()}>{city.city_name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Nehnuteľnosti</label>
                  <Select value={filters.property_type} onValueChange={(value) => setFilters(prev => ({ ...prev, property_type: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Vyberte typ" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id.toString()}>{type.types}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Typ</label>
                  <Select value={filters.property_purpose} onValueChange={(value) => setFilters(prev => ({ ...prev, property_purpose: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Vyberte typ zmluvy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">Predaj</SelectItem>
                      <SelectItem value="rent">Prenájom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <Euro className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium">Cena</span>
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Od"
                      value={filters.priceFrom}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceFrom: e.target.value }))}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Do"
                      value={filters.priceTo}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceTo: e.target.value }))}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <Button onClick={ handleClick } className="btn-golden text-lg px-16 py-5 w-full md:w-auto font-light shadow-luxury hover:shadow-golden hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-golden/0 via-white/10 to-golden/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Search className="mr-3 w-6 h-6 relative z-10" />
                <span className="relative z-10 font-medium tracking-wide">Hľadať nehnuteľnosti</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;