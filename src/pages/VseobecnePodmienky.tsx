import Footer from "@/components/Footer";
import Header from "@/components/Header";

const VseobecnePodmienky = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 leading-relaxed">
        <h2 className="text-4xl font-bold mb-10 text-center">Všeobecné podmienky</h2>

        <p className="mb-6">
          Tieto všeobecné podmienky upravujú základné pravidlá a zásady spolupráce medzi
          spoločnosťou <strong>AHOJ reality</strong> a jej klientmi pri poskytovaní realitných služieb.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">1. Všeobecné ustanovenia</h3>
        <p className="mb-6">
          AHOJ reality poskytuje realitné, poradenské a sprostredkovateľské služby v súlade s platnými právnymi
          predpismi Slovenskej republiky a s cieľom zabezpečiť maximálnu spokojnosť klienta.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">2. Zodpovednosť</h3>
        <p className="mb-6">
          Spoločnosť nezodpovedá za rozhodnutia klienta, ktoré sú výsledkom jeho vlastného posúdenia situácie.
          Zodpovednosť za správnosť údajov o nehnuteľnostiach nesú ich vlastníci alebo osoby, ktoré ich poskytli.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">3. Ochrana osobných údajov</h3>
        <p className="mb-6">
          Spracúvanie osobných údajov klientov sa riadi zásadami uvedenými v dokumente{" "}
          <a href="/gdpr" className="text-primary underline">Ochrana osobných údajov (GDPR)</a>.
          Klient má právo kedykoľvek požiadať o prístup, opravu alebo vymazanie svojich údajov.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">4. Komunikácia</h3>
        <p className="mb-6">
          Komunikácia medzi spoločnosťou a klientom prebieha písomne, telefonicky alebo elektronicky.
          Klient je povinný poskytovať aktuálne a pravdivé kontaktné údaje.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">5. Zmeny podmienok</h3>
        <p className="mb-6">
          Spoločnosť si vyhradzuje právo meniť tieto všeobecné podmienky. O zmenách bude klient informovaný
          zverejnením aktualizovanej verzie na webovej stránke{" "}
          <a href="https://ahojreality.sk" className="text-primary underline">ahojreality.sk</a>.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default VseobecnePodmienky;
