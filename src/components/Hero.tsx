import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import mainBanner from "@/assets/main_banner.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${mainBanner}')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Property Search Filter */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6">Find Your Dream Property</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary block text-left">City</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prague">Prague</SelectItem>
                    <SelectItem value="brno">Brno</SelectItem>
                    <SelectItem value="ostrava">Ostrava</SelectItem>
                    <SelectItem value="plzen">Plzen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary block text-left">Type</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary block text-left">Contract</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Sale</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary block text-left">Min Price</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Min price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No minimum</SelectItem>
                    <SelectItem value="1000000">1,000,000 CZK</SelectItem>
                    <SelectItem value="3000000">3,000,000 CZK</SelectItem>
                    <SelectItem value="5000000">5,000,000 CZK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary block text-left">Max Price</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Max price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000000">5,000,000 CZK</SelectItem>
                    <SelectItem value="10000000">10,000,000 CZK</SelectItem>
                    <SelectItem value="20000000">20,000,000 CZK</SelectItem>
                    <SelectItem value="unlimited">No maximum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="btn-golden text-lg px-12 py-4 w-full md:w-auto">
              <Search className="mr-2 w-5 h-5" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;