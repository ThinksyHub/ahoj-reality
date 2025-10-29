import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Shield, CheckCircle, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/makleri/SectionHeader";

// Assets
import kvalifikaciaIcon from "/assets/icons/kvalifikacia.png";
import loajalitaIcon from "/assets/icons/loajalita.png";
import ludskostIcon from "/assets/icons/ludskost.png";
import rychlostIcon from "/assets/icons/rychlost.png";
import diplomImage from "/assets/licenses/diplom.jpg";
import licencia1Image from "/assets/licenses/licencia-1.jpg";
import licencia2Image from "/assets/licenses/licencia-2.jpg";
import licencia3Image from "/assets/licenses/licencia-3.jpg";
import gabrielaVarholikovaPhoto from "/assets/team/gabriela-varholikova.jpg";
import kristinaKaraffovaPhoto from "/assets/team/kristina-karaffova.jpg";
import team from "/assets/team/AHOJreality.jpg";
import billboard1 from "/assets/billboards/billboard1.jpg";
import billboard2 from "/assets/billboards/billboard2.jpg";
import csob from "/assets/partners/csob.png";
import mbank from "/assets/partners/mbank.png";
import otpBank from "/assets/partners/otp-bank.png";
import primaBanka from "/assets/partners/prima-banka.png";
import slovenskaSporitelna from "/assets/partners/slovenska-sporitelna.png";
import tatraBanka from "/assets/partners/tatra-banka.png";
import unicredit from "/assets/partners/unicredit.png";
import vubBanka from "/assets/partners/vub-banka.png";
import {Link} from "react-router-dom";

const AboutUs = () => {
  const maklers = [
    {
      id: 1,
      name: "Mgr. Kristína Karaffová, RSc.",
      position: "Zakladateľka a majiteľka AHOJ reality",
      description:
          "V realitách pôsobím od roku 2010, vďaka čomu som v realitnom svete nadobudla svoje bohaté skúsenosti a prax. Nepredávam len nehnuteľnosti – pomáham ľuďom začať ich novú kapitolu života.\n" +
          "Každý príbeh je iný, a preto verím v individuálny prístup, otvorenosť a poctivú prácu.\n" +
          "Moja najväčšia odmena? Keď klient povie: „S vami to bolo jednoduché.“\n" +
          "Realitám sa venujem s energiou a vášňou, klientom dávam zážitok z aktuálnej obhliadky nehnuteľnosti,  vďaka čomu si nájdu svoj vysnívaný domov. \n" +
          "Dôvera, odbornosť a osobný prístup sú u mňa samozrejmosťou.\n" +
          "Ak hľadáte niekoho, kto sa do vašej situácie naozaj vcíti a postará sa o všetko od A po Z, ste na správnom mieste.",
      phone: "+421 917 927 536",
      email: "info@ahojreality.sk",
      image: kristinaKaraffovaPhoto,
    },
    {
      id: 2,
      name: "Gabriela Varholíková",
      position: "Realitná maklérka",
      description:
          "Mám rada ľudí. Milujem obchod, 20 rokov vo finančnom sprostredkovaní ma veľa naučilo. Posledné roky ma začali baviť reality a s tým spojené poradenstvo, ako ľuďom pomôcť kúpiť vysnívanú nehnuteľnosť.",
      phone: "0918 973 241",
      email: "varholikova@ahojreality.sk",
      image: gabrielaVarholikovaPhoto,
    },
  ];

  const values = [
    {
      icon: rychlostIcon,
      title: "Rýchlosť",
      description: "Efektívne vybavenie všetkých krokov procesu.",
    },
    {
      icon: kvalifikaciaIcon,
      title: "Kvalifikácia",
      description: "Naši makléri sú licencovaní odborníci s dlhoročnou praxou.",
    },
    {
      icon: loajalitaIcon,
      title: "Lojalita",
      description: "Naši klienti sú pre nás vždy na prvom mieste.",
    },
    {
      icon: ludskostIcon,
      title: "Ľudskosť",
      description: "Prístup založený na empatii a úprimnej komunikácii.",
    },
  ];

  const licenses = [
    {
      id: 1,
      title: "Realitná licencia LRK",
      number: "RK 21-06-02",
      description:
          "Certifikovaná realitná maklerská licencia platná na celom Slovensku.",
      image: licencia1Image,
      icon: Award,
    },
    {
      id: 2,
      title: "CEPI Attestation",
      number: "POA: 2506/2017/56/1",
      description:
          "Európska certifikácia realitných profesionálov pre najvyššie štandardy.",
      image: licencia2Image,
      icon: Shield,
    },
    {
      id: 3,
      title: "Realitný maklér LRM",
      number: "RM 21-06-12",
      description:
          "Licencia realitného makléra pre poskytovanie komplexných služieb.",
      image: licencia3Image,
      icon: CheckCircle,
    },
    {
      id: 4,
      title: "Vysokoškolský diplom",
      number: "Mgr. Kristína Karaffová, RSc.",
      description:
          "Slovenská realitná akadémia - špecializácia realitná činnosť.",
      image: diplomImage,
      icon: GraduationCap,
    },
  ];

  const partners = [
    { image: csob, alt: "ČSOB" },
    { image: mbank, alt: "mBank" },
    { image: otpBank, alt: "OTP Bank" },
    { image: primaBanka, alt: "Prima banka" },
    { image: slovenskaSporitelna, alt: "Slovenská sporiteľňa" },
    { image: tatraBanka, alt: "Tatra banka" },
    { image: unicredit, alt: "UniCredit" },
    { image: vubBanka, alt: "VÚB banka" },
  ];

  const features = [
    { title: 'Čomu sa venujete alebo ste sa v minulosti venovali?',
      text: 'Moja súčasná situácia je práca v realitnom svete, kde pomáham ľuďom splniť si ich sny o bývaní. Som zakladateľkou realitnej kancelárie AHOJ reality s.r.o, kde som konateľkou od roku 2021. V oblasti realít však pôsobím od roku 2010 (ako konateľka a zároveň ako maklérka), kde som v realitnom odvetví nadobudla bohaté skúsenosti. Pohybovala som sa doposiaľ aj vo Finančnom a Hypotekárnom poradenstve. Vďaka tomu viem klientom zaručiť ich pokojný proces k nadobudnutiu ich vysnívanej nehnuteľnosti.'
    },
    { title: 'Čo považujete za svoj najväčší prínos pre Bardejov alebo miestnu komunitu?',
      text: 'Znalosť v svojom obore, chuť sa vzdelávať a osobnostne rásť, kde som získala najvyššie možné vzdelanie profesionálnych poradcov na Slovensku – RSc. (Real estate consultant). Absolventi sú zapísaný do verejného registra elitných realitných poradcov. Najväčším prínosom pre mňa je úsmev a recenzie od mojich spokojných klientov. Za tým sa skrýva aj úspech a prínos pre  naše mesto Bardejov. Už trikrát  po sebe sa mi podarilo umiestniť v ankete: ORLY nehnuteľnosti na 1. mieste v meste Bardejov na základe recenzií od našich klientov, čo si veľmi vážim.'
    },
    {
      title: 'Na čo ste vo svojom živote najviac hrdá?',
      text: 'Na svoju prácu, ktorú robím s láskou a ktorá je mojím poslaním.'
    },
    {
      title: 'Ako by ste sa opísali ako človek? (povaha, silné stránky)',
      text: 'Mojimi charakterovými črtami je spoľahlivosť, pracovitosť, priateľskosť. Rada komunikujem s ľuďmi, v každom sa snažím vidieť ich pozitívnu stránku. Rada sa učím novým veciam. Som cieľavedomá. Moja silná stránka je vzdelanie, rýchlosť a viera dokázať aj nemožné.'
    },
    {
      title: 'Máte životné motto alebo myšlienku, ktorá Vás vystihuje?',
      text: 'Cesta k úspechu vedie cez údolie pokory.'
    },

  ]

  return (
      <div className="min-h-screen bg-white">
        <Header/>

        {/* HERO */}
        <section className="py-24 bg-white text-center pt-52">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Ako vzniklo <span className="text-golden"><strong>AHOJ reality</strong></span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Realitná kancelária <strong>AHOJ reality</strong> poskytuje komplexný servis v
              oblasti realít. To znamená poradenstvo, služby v oblasti kúpy,
              predaja, financovania a prenájmu nehnuteľností.
            </p>
          </div>
        </section>

        {/* AGENTS */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeader title="Naši makléri"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {maklers.map((m) => (
                  <Card
                      key={m.id}
                      className="bg-white border border-gray-100 shadow-md hover:shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 transition-all"
                  >
                    <img
                        src={m.image}
                        alt={m.name}
                        className="w-40 h-40 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {m.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {m.position}
                      </p>
                      <p className="text-muted-foreground mb-3">{m.description}</p>
                      <p className="text-sm text-primary font-medium">{m.phone}</p>
                      <a
                          href={`mailto:${m.email}`}
                          className="text-golden hover:underline text-sm"
                      >
                        {m.email}
                      </a>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT COMPANY */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 gap-20 grid md:grid-cols-[1.1fr_1.4fr] items-start"
               style={{maxWidth: '1900px'}}>
            <div className="flex justify-end">
              <img
                  src={team}
                  alt="Kristína a Gabriela"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                  style={{maxWidth: '70%'}}
              />
            </div>
              <div className="max-w-none">
                <h2 className="text-3xl font-serif text-primary mb-10">
                  <strong>AHOJ reality</strong> – o nás
                </h2>

                <div className="text-muted-foreground leading-relaxed text-[17px] font-light space-y-6">
                  <p>
                    Realitná kancelária <span className="text-primary font-medium"><strong>AHOJ reality</strong></span> je spoľahlivým
                    partnerom v oblasti nehnuteľností, ktorý svojim klientom prináša komplexné služby od A po Z.
                    Spoločnosť sa zameriava na profesionálne sprostredkovanie predaja, kúpy a prenájmu nehnuteľností,
                    pričom dôraz kladie na individuálny prístup ku každému klientovi.
                    Súčasťou jej činnosti je aj finančné poradenstvo a právny servis, aby celý proces prebehol rýchlo,
                    bezpečne a bez starostí. Klienti tak v jednom mieste získavajú všetko, čo potrebujú pre úspešnú
                    realizáciu svojho realitného zámeru – od prvotnej konzultácie až po podpis zmluvy.
                    Za značkou <strong>AHOJ reality</strong> stojí Mgr. Kristína, RSc.
                    Karaffová, zakladateľka a majiteľka firmy, ktorá sa realitnému trhu venuje už od roku 2010. Počas
                    svojho pôsobenia si vybudovala výborné meno vďaka profesionalite, zodpovednosti a dôrazu na detail.
                    Od roku 2010 do roku 2016 pôsobila ako konateľka a maklérka v spoločnosti Profit finance, s.r.o.,
                    kde
                    získala cenné skúsenosti nielen v oblasti realít, ale aj vo financovaní a komunikácii s klientmi.
                    Tieto skúsenosti ju viedli k rozhodnutiu vydať sa vlastnou cestou a založiť spoločnosť, ktorá bude
                    stavať na osobnom prístupe, dôvere a dlhodobých vzťahoch s klientmi.
                  </p>
                  <p>
                    Pod jej vedením sa <strong>AHOJ reality</strong> stala synonymom
                    spoľahlivosti, profesionality a ľudského prístupu. Mgr. Kristína Karaffová, RSc. verí, že úspešná realitná
                    kancelária nie je len o číslach a obchodoch, ale predovšetkým o pochopení potrieb ľudí, ktorí
                    hľadajú
                    nový domov, investičnú príležitosť či priestor na nové začiatky.
                    Práve preto sa jej tím riadi filozofiou, že každý klient je jedinečný a zaslúži si individuálnu
                    starostlivosť, odborné poradenstvo a férové jednanie v každom kroku spolupráce.
                  </p>
                </div>
                <div className="flex justify-end">
                 <Link to={"/contact"}>
                   <Button className="mt-12 bg-golden text-white hover:bg-golden/90">
                     Kontaktujte nás
                   </Button>
                 </Link>
                </div>
              </div>
            </div>
        </section>

        {/* PERSONAL SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-serif text-primary mb-10">
              O mne – Mgr. Kristína Karaffová, RSc.
            </h2>
            <div className="space-y-8 text-muted-foreground">
              {features.map((feature) => (
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p>
                      {feature.text}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h2 className="text-4xl font-serif mb-12">
              Naše hlavné <span className="text-golden">výhody</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <img src={v.icon} alt={v.title} className="w-14 h-14 mb-4"/>
                    <h4 className="text-xl font-semibold mb-2">{v.title}</h4>
                    <p className="text-sm text-gray-200">{v.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* LICENSES */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeader
                title="Naše skúsenosti a odbornosť"
                subtitle="Pravidelne sa vzdelávame a zúčastňujeme odborných školení."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {licenses.map((l) => {
                const IconComponent = l.icon;
                return (
                    <Card
                        key={l.id}
                        className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className="relative">
                        <img
                            src={l.image}
                            alt={l.title}
                            className="w-full h-auto object-contain"
                        />
                        <div
                            className="absolute top-2 right-2 bg-golden/90 w-8 h-8 rounded-full flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-white"/>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-primary font-semibold mb-1">
                          {l.title}
                        </h4>
                        <p className="text-golden text-xs mb-1">{l.number}</p>
                        <p className="text-muted-foreground text-sm">
                          {l.description}
                        </p>
                      </div>
                    </Card>
                );
              })}
            </div>

            {/* PARTNERS */}
            <div className="mt-20">
              <h3 className="text-2xl font-serif text-primary text-center mb-8">
                Naši partneri
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {partners.map((p, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md flex items-center justify-center border transition-all"
                    >
                      <img
                          src={p.image}
                          alt={p.alt}
                          className="h-10 object-contain"
                      />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BILLBOARDS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 max-w-6xl">
            <img
                src={billboard1}
                alt="Billboard 1"
                className="rounded-xl shadow-md"
            />
            <img
                src={billboard2}
                alt="Billboard 2"
                className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-golden/10 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Staňte sa naším ďalším spokojným klientom
            </h2>
            <p className="text-muted-foreground mb-8">
              Pripojte sa k stovkám spokojných klientov, ktorí si vybrali našu
              realitku pre profesionálny a ľudský prístup.
            </p>
            <Link to={"/contact"}>
              <Button className="mt-12 bg-golden text-white hover:bg-golden/90">
                Kontaktujte nás
              </Button>
            </Link>
          </div>
        </section>

        <Footer/>
      </div>
  );
};

export default AboutUs;
