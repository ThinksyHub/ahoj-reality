import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Target, FileText, Users, Shield, Phone, Mail, MapPin, User, ArrowRight, CheckCircle } from "lucide-react";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";

const ChcemPredat = () => {
  const benefits = [
    {
      icon: Camera,
      title: "Profesionálna prezentácia",
      description: "kvalitné fotografie, 3D prehliadky a atraktívne inzeráty"
    },
    {
      icon: Target,
      title: "Marketing na mieru",
      description: "inzercia na realitných portáloch, sociálnych sieťach a vlastnej databáze klientov"
    },
    {
      icon: FileText,
      title: "Kompletný servis",
      description: "od prvého stretnutia až po podpis kúpnej zmluvy"
    },
    {
      icon: Users,
      title: "Overení záujemcovia",
      description: "preveríme serióznosť kupujúcich, aby ste nestrácali čas"
    },
    {
      icon: Shield,
      title: "Právna istota",
      description: "spolupracujeme s právnikmi a notármi, aby bol predaj bezpečný"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Kontaktujete nás",
      description: "dohodneme si osobné stretnutie"
    },
    {
      number: "02", 
      title: "Ohodnotíme nehnuteľnosť",
      description: "nastavíme optimálnu cenu"
    },
    {
      number: "03",
      title: "Pripravíme prezentáciu",
      description: "profesionálne fotografie a materiály"
    },
    {
      number: "04",
      title: "Zabezpečíme marketing",
      description: "nájdeme kvalitných kupcov"
    },
    {
      number: "05",
      title: "Vyberieme najlepšiu ponuku",
      description: "pripravíme všetky zmluvy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Predajte svoju nehnuteľnosť výhodne a bez starostí
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Naším cieľom je, aby ste získali čo najlepšiu cenu a celý proces bol pre vás jednoduchý, rýchly a bezpečný.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
              Čo pre vás <span className="text-gradient-golden">urobíme</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Poskytujeme komplexný servis pre predaj vašej nehnuteľnosti
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
              Ako to <span className="text-gradient-golden">prebieha</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Jednoduchý a transparentný proces predaja v 5 krokoch
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
              Naši klienti <span className="text-gradient-golden">hovoria za nás</span>
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
                Nechajte si <span className="text-gradient-golden">ohodnotiť</span> svoju nehnuteľnosť
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Chcete predať svoju nehnuteľnosť rýchlo a bezpečne? Nechajte to na nás – radi sa o všetko postaráme.
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
                        Lokalita
                      </label>
                      <Input 
                        placeholder="Mesto, časť"
                        className="border-golden/20 focus:border-golden/50 focus:ring-golden/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Dodatočné informácie
                    </label>
                    <Textarea 
                      placeholder="Opíšte svoju nehnuteľnosť, vaše predstavy o cene, termíne predaja..."
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

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-golden to-accent text-white font-semibold py-4 text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Nechať si ohodnotiť nehnuteľnosť
                  </Button>
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

export default ChcemPredat;