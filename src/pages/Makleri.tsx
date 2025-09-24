import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/makleri/HeroSection";
import CompanyStory from "@/components/makleri/CompanyStory";
import MaklerCard from "@/components/makleri/MaklerCard";
import ValueCard from "@/components/makleri/ValueCard";
import SectionHeader from "@/components/makleri/SectionHeader";

// Icons and assets
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
      
      <HeroSection 
        title="Spoznajte náš tím"
        subtitle="Za každým úspešným obchodom stojí profesionál s ľudským prístupom. Naši makléri vám poradia, podporia vás a prevedú celým procesom kúpy či predaja nehnuteľnosti."
      />

      <CompanyStory />

      {/* Our Agents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Naši makléri" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {maklers.map((makler) => (
              <MaklerCard key={makler.id} {...makler} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader title="Naše hodnoty" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates and Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Naše skúsenosti a odbornosť"
            subtitle="Pravidelne sa vzdelávame a zúčastňujeme odborných školení, aby sme vám vedeli poskytnúť služby na najvyššej úrovni."
          />

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Certifikáty a licencie</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border">
                    <img 
                      src={cert.image} 
                      alt={cert.alt}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Naši partneri</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group border">
                    <img 
                      src={partner.image} 
                      alt={partner.alt}
                      className="max-w-full h-8 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
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
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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