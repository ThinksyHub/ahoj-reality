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
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h2 className="font-serif text-2xl font-normal text-white mb-6">Nájdite svoju vysnívanú nehnuteľnosť</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-light text-white block text-left">Mesto</label>
                <Select>
                  <SelectTrigger className="bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <SelectValue placeholder="Vyberte mesto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bratislava">Bratislava</SelectItem>
                    <SelectItem value="kosice">Košice</SelectItem>
                    <SelectItem value="presov">Prešov</SelectItem>
                    <SelectItem value="zilina">Žilina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-white block text-left">Typ</label>
                <Select>
                  <SelectTrigger className="bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <SelectValue placeholder="Typ nehnuteľnosti" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Byt</SelectItem>
                    <SelectItem value="house">Dom</SelectItem>
                    <SelectItem value="villa">Vila</SelectItem>
                    <SelectItem value="commercial">Komerčný priestor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-white block text-left">Zmluva</label>
                <Select>
                  <SelectTrigger className="bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <SelectValue placeholder="Typ zmluvy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Predaj</SelectItem>
                    <SelectItem value="rent">Prenájom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-white block text-left">Min. cena</label>
                <Select>
                  <SelectTrigger className="bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <SelectValue placeholder="Minimálna cena" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Bez minima</SelectItem>
                    <SelectItem value="50000">50 000 €</SelectItem>
                    <SelectItem value="100000">100 000 €</SelectItem>
                    <SelectItem value="200000">200 000 €</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-white block text-left">Max. cena</label>
                <Select>
                  <SelectTrigger className="bg-white/20 backdrop-blur-md border-white/20 text-white">
                    <SelectValue placeholder="Maximálna cena" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200000">200 000 €</SelectItem>
                    <SelectItem value="500000">500 000 €</SelectItem>
                    <SelectItem value="1000000">1 000 000 €</SelectItem>
                    <SelectItem value="unlimited">Bez maxima</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="btn-golden text-lg px-12 py-4 w-full md:w-auto font-light">
              <Search className="mr-2 w-5 h-5" />
              Hľadať nehnuteľnosti
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;