import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Cennik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
              Cenník realitných služieb
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparentné ceny za profesionálne realitné služby. Všetky poplatky sú uvedené vrátane DPH.
            </p>
          </div>

          {/* Sales Commission Section */}
          <div className="mb-12">
            <Card className="p-8 bg-card border-border/20 shadow-elegant">
              <h2 className="font-serif text-3xl font-normal text-primary mb-6 text-center">
                Provízia za sprostredkovanie <span className="text-golden">predaja</span> nehnuteľnosti
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="text-left p-4 font-medium text-primary">Cena nehnuteľnosti</th>
                      <th className="text-left p-4 font-medium text-primary">Výška provízie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/10">
                      <td className="p-4 text-muted-foreground">Nehnuteľnosti do 59.999 €</td>
                      <td className="p-4 text-muted-foreground">3% z kúpnej ceny (minimálne 2.000 €)</td>
                    </tr>
                    <tr className="border-b border-border/10">
                      <td className="p-4 text-muted-foreground">Nehnuteľnosti od 60.000 €</td>
                      <td className="p-4 text-primary font-semibold">od 3% do 5% z kúpnej ceny</td>
                    </tr>
                    <tr className="border-b border-border/10">
                      <td className="p-4 text-muted-foreground">Rodinné domy</td>
                      <td className="p-4 text-muted-foreground">od 3% do 5% z kúpnej ceny</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-muted-foreground">Nehnuteľnosti v zahraničí</td>
                      <td className="p-4 text-muted-foreground">% z kúpnej ceny podľa individuálnej dohody</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Rental Commission Section */}
          <div className="mb-12">
            <Card className="p-8 bg-card border-border/20 shadow-elegant">
              <h2 className="font-serif text-3xl font-normal text-primary mb-6 text-center">
                Provízia za sprostredkovanie <span className="text-golden">prenájmu</span> nehnuteľnosti
              </h2>
              
              <div className="text-center">
                <div className="bg-golden/10 rounded-lg p-6 max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground mb-2">
                    Výška jednomesačného nájmu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Účtuje sa od toho, kto o poskytnutie služby požiadal (spravidla prenajímateľ nehnuteľnosti).
                  </p>
                  <div className="mt-4 text-primary font-semibold text-lg">
                    Minimálna výška provízie: 450 €
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Services Section */}
          <div className="mb-12">
            <Card className="p-8 bg-card border-border/20 shadow-elegant">
              <h2 className="font-serif text-3xl font-normal text-primary mb-6 text-center">
                Individuálne služby a úkony
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Ak nie sú zahrnuté v cene provízie
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Nábor nehnuteľnosti</h3>
                    <div className="text-2xl font-bold text-golden mb-2">300 €</div>
                    <p className="text-sm text-muted-foreground">
                      Dokumentačná obhliadka, fotografie, cenová analýza
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Inzerovanie</h3>
                    <div className="text-2xl font-bold text-golden mb-2">8 € / deň</div>
                    <p className="text-sm text-muted-foreground">
                      Internet, tlačené médiá (bez DPH)
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Obhliadky</h3>
                    <div className="text-2xl font-bold text-golden mb-2">300 € / mesiac</div>
                    <p className="text-sm text-muted-foreground">
                      Minimum 3 obhliadky za mesiac
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Osobná asistencia</h3>
                    <div className="text-2xl font-bold text-golden mb-2">35 € / 30 min</div>
                    <p className="text-sm text-muted-foreground">
                      Za každú začatú polhodinu
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Právne poradenstvo</h3>
                    <div className="text-2xl font-bold text-golden mb-2">300 €</div>
                    <p className="text-sm text-muted-foreground">
                      Zastrešíme vám kompletný právny a administratívny servis
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Nájomná zmluva</h3>
                    <div className="text-2xl font-bold text-golden mb-2">150 €</div>
                    <p className="text-sm text-muted-foreground">
                      Príprava zmluvnej dokumentácie
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Profesionálna fotografia</h3>
                    <div className="text-2xl font-bold text-golden mb-2">100 €</div>
                    <p className="text-sm text-muted-foreground">
                      Foto staging do 50m² (+50€ za každých ďalších 50m²)
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Home Staging</h3>
                    <div className="text-2xl font-bold text-golden mb-2">200 €</div>
                    <p className="text-sm text-muted-foreground">
                      Základný Home Staging + 15 profesionálnych fotografií
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border/20">
                    <h3 className="font-semibold text-primary mb-2">Ocenenie nehnuteľnosti</h3>
                    <div className="text-2xl font-bold text-golden mb-2">100 €</div>
                    <p className="text-sm text-muted-foreground">
                      Profesionálne ocenenie pre súdne účely
                    </p>
                  </div>
                  
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-card border-border/20 shadow-elegant">
              <h3 className="font-serif text-xl font-normal text-primary mb-4">Dokumenty z úradov</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Úradný poplatok (napr. 8€ za LV)</p>
                <p>• Paušálna suma: <span className="font-semibold text-golden">50€</span></p>
                <p>• Pohonné hmoty: <span className="font-semibold text-golden">1,80€/km</span> (nad 20km)</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/20 shadow-elegant">
              <h3 className="font-serif text-xl font-normal text-primary mb-4">Špeciálne služby</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Dron fotografia + video: <span className="font-semibold text-golden">150€</span></p>
                <p>• 3D vizualizácia: <span className="font-semibold text-golden">30€</span></p>
                <p>• Cenová mapa: <span className="font-semibold text-golden">50€</span></p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/20 shadow-elegant">
              <h3 className="font-serif text-xl font-normal text-primary mb-4">Hypotekárne úvery</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Odporučíme ideálne financovanie</p>
                <p>• Spolupráca so všetkými bankami</p>
                <p>• Autorizácia zmlúv našim advokátom</p>
              </div>
            </Card>

          </div>

          {/* Important Note */}
          <Card className="p-6 bg-golden/5 border-golden/20 shadow-elegant">
            <div className="text-center">
              <h3 className="font-serif text-xl font-normal text-primary mb-4">Dôležité informácie</h3>
              <p className="text-muted-foreground mb-4">
                Všetky platby za služby "Home Stagingu", profesionálnej fotografie a záberov z "DRONU" 
                sú hradené vopred.
              </p>
              <p className="text-sm text-muted-foreground">
                Služby hradené vopred budú odrátané z provízie sprostredkovateľa po ukončení obchodu 
                (po obdržaní celej kúpnej ceny záujemcom).
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cennik;