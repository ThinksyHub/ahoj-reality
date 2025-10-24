import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Shield, Heart, Clock, FileText, ArrowRight } from "lucide-react";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import heroImage from "/assets/hero-chcem-kupit.jpg";
import ContactFillingForm from "@/components/ContactFillingForm.tsx";

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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
              Ako prebieha <span className="text-gradient-golden">kúpa</span>
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

            <ContactFillingForm></ContactFillingForm>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChcemKupit;