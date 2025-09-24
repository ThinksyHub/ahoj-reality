import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import kvalifikaciaIcon from "@/assets/icons/kvalifikacia.png";
import kvalitaIcon from "@/assets/icons/kvalita.png";
import loajalitaIcon from "@/assets/icons/loajalita.png";
import ludskostIcon from "@/assets/icons/ludskost.png";
import rychlostIcon from "@/assets/icons/rychlost.png";
import diplomImage from "@/assets/licenses/diplom.jpg";
import licencia1 from "@/assets/licenses/licencia-1.jpg";
import licencia2 from "@/assets/licenses/licencia-2.jpg";
import licencia3 from "@/assets/licenses/licencia-3.jpg";
import csob from "@/assets/partners/csob.png";
import mbank from "@/assets/partners/mbank.png";
import otpBank from "@/assets/partners/otp-bank.png";
import primaBanka from "@/assets/partners/prima-banka.png";
import slovenskaSporitelna from "@/assets/partners/slovenska-sporitelna.png";
import tatraBanka from "@/assets/partners/tatra-banka.png";
import unicredit from "@/assets/partners/unicredit.png";
import vubBanka from "@/assets/partners/vub-banka.png";

const Makleri = () => {
  const maklers = [
    {
      id: 1,
      name: "Ing. Peter Novák",
      position: "Senior realitný maklér",
      description: "Špecializujem sa na byty v Bratislave a pomohol som už viac než 50 rodinám nájsť nový domov. Rád sa s klientmi rozprávam o ich predstavách, pretože verím, že dobrý obchod začína dôkladným počúvaním.",
      phone: "+421 901 234 567",
      email: "peter.novak@ahojreality.sk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mgr. Jana Svobodová",
      position: "Realitný maklér",
      description: "Zaoberám sa predovšetkým predajom rodinných domov a pozemkov. Mám 8 rokov skúseností v realitnom sektore a vždy kladiem dôraz na individuálny prístup k každému klientovi a jeho potrebám.",
      phone: "+421 901 345 678",
      email: "jana.svobodova@ahojreality.sk",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Bc. Michal Horák",
      position: "Realitný maklér",
      description: "Špecializujem sa na komerčné nehnuteľnosti a investičné príležitosti. Pomáham klientom nájsť tie najvhodnejšie riešenia pre ich podnikanie alebo investície s dôrazom na dlhodobú rentabilitu.",
      phone: "+421 901 456 789",
      email: "michal.horak@ahojreality.sk",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: ludskostIcon,
      title: "Transparentnosť",
      description: "férový prístup od prvej obhliadky až po podpis zmluvy"
    },
    {
      icon: loajalitaIcon,
      title: "Dôvera",
      description: "stojíme pri vás počas celého procesu"
    },
    {
      icon: kvalifikaciaIcon,
      title: "Profesionalita",
      description: "držíme krok s trendmi a legislatívou"
    },
    {
      icon: rychlostIcon,
      title: "Ľudskosť",
      description: "predaj či kúpa nehnuteľnosti je vždy aj o emóciách"
    }
  ];

  const certificates = [
    { image: diplomImage, alt: "Diplom" },
    { image: licencia1, alt: "Licencia 1" },
    { image: licencia2, alt: "Licencia 2" },
    { image: licencia3, alt: "Licencia 3" }
  ];

  const partners = [
    { image: csob, alt: "ČSOB", name: "ČSOB" },
    { image: mbank, alt: "mBank", name: "mBank" },
    { image: otpBank, alt: "OTP Bank", name: "OTP Bank" },
    { image: primaBanka, alt: "Prima banka", name: "Prima banka" },
    { image: slovenskaSporitelna, alt: "Slovenská sporiteľňa", name: "Slovenská sporiteľňa" },
    { image: tatraBanka, alt: "Tatra banka", name: "Tatra banka" },
    { image: unicredit, alt: "UniCredit", name: "UniCredit" },
    { image: vubBanka, alt: "VÚB banka", name: "VÚB banka" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Spoznajte náš tím
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Za každým úspešným obchodom stojí profesionál s ľudským prístupom. Naši makléri vám poradia, podporia vás a prevedú celým procesom kúpy či predaja nehnuteľnosti.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ako vzniklo Ahoj Reality
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto mb-8"></div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Na realitnom trhu pôsobíme už niekoľko rokov. Ahoj Reality sme založili s cieľom priniesť férový a priateľský prístup do sveta nehnuteľností.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Veríme, že kúpa či predaj bytu alebo domu nie je len o číslach – je to o dôvere, otvorenosti a korektnom prístupe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Agents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Naši makléri
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maklers.map((makler) => (
              <Card key={makler.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={makler.image} 
                    alt={makler.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{makler.name}</h3>
                  <p className="text-golden font-semibold mb-4">{makler.position}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{makler.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-golden" />
                      <a href={`tel:${makler.phone}`} className="hover:text-primary transition-colors">
                        {makler.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-golden" />
                      <a href={`mailto:${makler.email}`} className="hover:text-primary transition-colors">
                        {makler.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Naše hodnoty
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-golden/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={value.icon} 
                    alt={value.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates and Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Naše skúsenosti a odbornosť
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pravidelne sa vzdelávame a zúčastňujeme odborných školení, aby sme vám vedeli poskytnúť služby na najvyššej úrovni.
            </p>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Certifikáty a licencie</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={cert.image} 
                    alt={cert.alt}
                    className="w-full h-32 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Naši partneri</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  <img 
                    src={partner.image} 
                    alt={partner.alt}
                    className="max-w-full h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Spojte sa s nami
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Radi vám predstavíme možnosti spolupráce a nášho prístupu.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="/contact">Kontaktovať makléra</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Makleri;