import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Target, FileText, Users, Shield, Phone, Mail, MapPin, User, ArrowRight, CheckCircle } from "lucide-react";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import heroImage from "/assets/hero-chcem-predat.jpg";
import ContactFillingForm from "@/components/ContactFillingForm.tsx";

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
      <section className="py-20 pt-48 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImage}')`
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
              <span className="text-gradient-golden"> Poznáte niekoho, kto predáva nehnuteľnosť? </span>
            </h1>
            <p className="text-lg text-white/90 max-w-4xl mx-auto font-light">
              Dajte nám o tom vedieť a získajte <span className="text-gradient-golden">10 % z našej provízie.</span> <br/>
              Stačí nám poslať kontakt na predávajúceho a o všetko ostatné sa postaráme my – férovo, rýchlo a bez
              starostí. Vy len sledujete, ako vám pribudne odmena.<span className="text-gradient-golden"> Tipnite – my predáme.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Ako prebieha <span className="text-gradient-golden">predaj</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
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

            <ContactFillingForm></ContactFillingForm>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChcemPredat;