import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import mainBanner from "@/assets/main_banner.png";

const Hero = () => {
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
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Mesto</label>
                  <Select>
                    <SelectTrigger className="bg-white/25 backdrop-blur-xl border-white/30 text-white h-12 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">
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

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Typ</label>
                  <Select>
                    <SelectTrigger className="bg-white/25 backdrop-blur-xl border-white/30 text-white h-12 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">
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

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Zmluva</label>
                  <Select>
                    <SelectTrigger className="bg-white/25 backdrop-blur-xl border-white/30 text-white h-12 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <SelectValue placeholder="Typ zmluvy" />
                    </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Predaj</SelectItem>
                    <SelectItem value="rent">Prenájom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Min. cena</label>
                  <Select>
                    <SelectTrigger className="bg-white/25 backdrop-blur-xl border-white/30 text-white h-12 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">
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

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90 block text-left tracking-wide">Max. cena</label>
                  <Select>
                    <SelectTrigger className="bg-white/25 backdrop-blur-xl border-white/30 text-white h-12 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg">
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

              <Button className="btn-golden text-lg px-16 py-5 w-full md:w-auto font-light shadow-luxury hover:shadow-golden hover:scale-105 transition-all duration-300 relative overflow-hidden group">
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