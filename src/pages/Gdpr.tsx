import Footer from "@/components/Footer";
import Header from "@/components/Header";

const GDPR = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 leading-relaxed">
        <h2 className="text-4xl font-bold mb-10 text-center">Ochrana osobných údajov (GDPR)</h2>

        <h3 className="text-2xl font-semibold mt-10 mb-3">1. Aké údaje spracúvame</h3>
        <p className="mb-4">
          Spracúvame len údaje, ktoré sú nevyhnutné na poskytovanie našich služieb:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Meno a priezvisko</li>
          <li>Telefónne číslo a e-mailová adresa</li>
          <li>Adresa nehnuteľnosti a údaje o nej</li>
          <li>Údaje potrebné na vypracovanie zmlúv a fakturáciu</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-3">2. Účel spracovania údajov</h3>
        <p className="mb-6">
          Vaše osobné údaje používame výhradne na účely:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>komunikácie s klientmi,</li>
          <li>poskytovania realitných služieb,</li>
          <li>uzatvárania zmlúv a plnenia zákonných povinností,</li>
          <li>marketingových oznámení (iba s vaším súhlasom).</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-3">3. Právny základ spracovania</h3>
        <p className="mb-6">
          Spracúvanie údajov sa vykonáva na základe:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>plnenia zmluvy,</li>
          <li>plnenia zákonných povinností,</li>
          <li>oprávneného záujmu prevádzkovateľa,</li>
          <li>alebo vášho výslovného súhlasu.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-3">4. Uchovávanie osobných údajov</h3>
        <p className="mb-6">
          Vaše údaje uchovávame len po dobu nevyhnutnú na splnenie účelu, na ktorý boli získané, 
          alebo po dobu stanovenú právnymi predpismi Slovenskej republiky.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">5. Zdieľanie údajov</h3>
        <p className="mb-6">
          Osobné údaje neposkytujeme tretím stranám, okrem prípadov, keď je to nevyhnutné 
          na plnenie zákonných povinností (napr. účtovníctvo, orgány verejnej moci, banky).
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">6. Vaše práva</h3>
        <p className="mb-6">Máte právo na:</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>prístup k svojim osobným údajom,</li>
          <li>opravu alebo vymazanie údajov,</li>
          <li>obmedzenie spracúvania,</li>
          <li>námietku proti spracúvaniu,</li>
          <li>prenesenie údajov k inému prevádzkovateľovi,</li>
          <li>odvolanie súhlasu so spracovaním údajov.</li>
        </ul>

        <p className="mb-6">
          Ak sa domnievate, že vaše osobné údaje sú spracúvané v rozpore s platnými právnymi predpismi, 
          máte právo podať sťažnosť na <strong>Úrad na ochranu osobných údajov SR</strong>.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default GDPR;
