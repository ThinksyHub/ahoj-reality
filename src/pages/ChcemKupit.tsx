import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, Shield, Heart, Clock, FileText, Phone, Mail, MapPin, ArrowRight, Search } from "lucide-react";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import heroImage from "@/assets/hero-chcem-kupit.jpg";

const ChcemKupit = () => {
  const benefits = [
    {
      icon: Home,
      title: "Široká ponuka",
      description: "nehnuteľnosti v rôznych lokalitách a cenových kategóriách"
    },
    {
      icon: Shield,
      title: "Bezpečný obchod",
      description: "preverujeme právny stav každej nehnuteľnosti"
    },
    {
      icon: Heart,
      title: "Individuálny prístup",
      description: "hľadáme riešenie presne podľa vašich predstáv"
    },
    {
      icon: Clock,
      title: "Úspora času",
      description: "vyberáme len tie ponuky, ktoré dávajú zmysel"
    },
    {
      icon: FileText,
      title: "Plná podpora",
      description: "pomôžeme so zmluvami, financovaním aj katastrom"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Povedzte nám, čo hľadáte",
      description: "lokalitu, veľkosť, rozpočet"
    },
    {
      number: "02", 
      title: "Vyberieme ponuky",
      description: "najvhodnejšie možnosti pre vás"
    },
    {
      number: "03",
      title: "Dohodneme prehliadky",
      description: "podľa vašich možností"
    },
    {
      number: "04",
      title: "Pomôžeme pri rokovaní",
      description: "o cene a podmienkach"
    },
    {
      number: "05",
      title: "Zabezpečíme právny servis",
      description: "a podpis zmluvy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 pt-48 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImage}')`
          }}
        />
        
        {/* Strong overlay for text visibility */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Pomôžeme vám nájsť váš <span className="text-gradient-golden">vysnívaný domov</span>
            </h1>
            <p className="text-lg text-primary/80 max-w-4xl mx-auto font-light">
              Či už hľadáte prvý byt, rodinný dom alebo investičnú nehnuteľnosť, v Ahoj Reality vás prevedieme celým procesom – od výberu až po podpis zmluvy.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
              Prečo si vybrať <span className="text-gradient-golden">Ahoj Reality</span> pri kúpe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Váš spoľahlivý partner pri hľadaní nového domova
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover-lift bg-card border-border/20 shadow-elegant group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-6 p-4 bg-gradient-to-br from-golden/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-golden/20">
                    <benefit.icon className="w-full h-full text-golden" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Jednoduchý proces <span className="text-gradient-golden">kúpy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Od prvého kontaktu až po kľúče od vášho nového domova
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center p-6 hover-lift bg-card border-border/20 shadow-elegant group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-golden to-accent rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-golden" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
              Klienti, ktorí už <span className="text-gradient-golden">našli svoj domov</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Prečítajte si skúsenosti našich spokojných klientov
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 bg-gradient-to-br from-golden/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
                Pošlite mi <span className="text-gradient-golden">ponuky na mieru</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Hľadáte nové bývanie či investičnú príležitosť? Radi vám ukážeme ponuky, ktoré splnia vaše očakávania.
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl border-border/20">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Meno a priezvisko *
                      </label>
                      <Input 
                        placeholder="Vaše meno"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Telefón *
                      </label>
                      <Input 
                        placeholder="+421 xxx xxx xxx"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="vas.email@example.com"
                      className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Typ nehnuteľnosti
                      </label>
                      <select className="w-full px-3 py-2 border border-golden/20 rounded-md focus:outline-none focus:ring-2 focus:ring-golden/30 focus:border-golden/50">
                        <option value="">Vyberte typ</option>
                        <option value="byt">Byt</option>
                        <option value="dom">Dom</option>
                        <option value="pozemok">Pozemok</option>
                        <option value="komercia">Komerčná nehnuteľnosť</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Preferovaná lokalita
                      </label>
                      <Input 
                        placeholder="Mesto, časť"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Rozpočet od (€)
                      </label>
                      <Input 
                        type="number"
                        placeholder="50 000"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Rozpočet do (€)
                      </label>
                      <Input 
                        type="number"
                        placeholder="200 000"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Vaše požiadavky
                    </label>
                    <Textarea 
                      placeholder="Opíšte vaše predstavy - počet izieb, potrebná výmera, parkovanie, balkon, záhrada..."
                      rows={4}
                      className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="gdpr" className="rounded border-golden/20" />
                    <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                      Súhlasím so spracovaním osobných údajov podľa GDPR
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-golden to-accent text-white font-semibold py-4 text-lg hover:shadow-lg transition-all duration-300"
                    >
                      Pošlite mi ponuky na mieru
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      size="lg"
                      className="w-full border-golden/30 text-golden hover:bg-golden/5 font-semibold py-4 text-lg transition-all duration-300"
                      asChild
                    >
                      <a href="/ponuka-nehnutelnosti" className="flex items-center justify-center">
                        <Search className="w-5 h-5 mr-2" />
                        Pozrieť ponuku nehnuteľností
                      </a>
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-golden/10">
                  <h3 className="text-lg font-semibold text-primary mb-4">Alebo nás kontaktujte priamo:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-golden" />
                      <span>+421 901 234 567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-golden" />
                      <span>info@ahojreality.sk</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-golden" />
                      <span>Bratislava, Slovensko</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChcemKupit;