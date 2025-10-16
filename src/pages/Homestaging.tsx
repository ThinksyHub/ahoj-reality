import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Homestaging = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Home Staging
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          Čo <strong>Home Staging</strong> vlastne je? Určite ste už počuli o
          tejto modernej metóde predaja nehnuteľností, ale možno vám nie je
          úplne jasné, čo konkrétne tento pojem skrýva. Predstavte si, že idete
          na rande – chcete zanechať čo najlepší dojem, a tak si dáte záležať na
          svojom vzhľade, oblečení či vôni. Rovnaký princíp platí aj pre predaj
          nehnuteľnosti – chcete, aby váš dom alebo byt vyzeral čo najlepšie a
          najatraktívnejšie pre potenciálnych kupujúcich. To je presne to, čo
          Home Staging robí.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Ako prebieha príprava a realizácia Home Stagingu?
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Je to proces smerujúci k príprave domu alebo bytu tak, aby dokázal čo
          najlepšie vyniknúť na fotografiách určených pre realitný trh. Príprava
          sa týka nielen interiéru, ale aj exteriéru nehnuteľnosti a zahŕňa
          rôzne aspekty – od generálneho upratovania, cez úpravu nábytku až po
          detaily, ako je výber farieb alebo dekorácií.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Po úspešnej realizácii Home Stagingu sa váš dom alebo byt stane
          nehnuteľnosťou pripravenou na predaj. Môže byť úspešne uvedený na
          realitný trh ako štandardná, ale pritom atraktívna ponuka.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Home Staging & interiérový dizajn
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Je dôležité zdôrazniť, že Home Staging nerieši technický stav
          nehnuteľnosti. Ak váš dom potrebuje novú strechu, kotol, alebo má iné
          zásadné problémy, Home Staging nebude stačiť – tieto nedostatky by mal
          predávajúci riešiť s pomocou svojho realitného makléra.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Rovnako si treba uvedomiť, že Home Staging nie je bytový dizajn.
          Interiérový dizajn sa zaoberá výberom nábytku a doplnkov, ktoré
          odrážajú osobnosť majiteľa. Home Staging je presný opak – cieľom je
          odstrániť osobný charakter priestoru a pripraviť ho tak, aby bol
          atraktívny pre čo najširšie spektrum potenciálnych kupujúcich.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Pre koho je služba určená?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
          <li>
            Realitné kancelárie, ktoré realizujú predaj nehnuteľností a chcú
            zvýšiť atraktivitu ponúk.
          </li>
          <li>
            Majitelia nehnuteľností, ktorí chcú predať svoj dom alebo byt za čo
            najvyššiu možnú cenu.
          </li>
          <li>
            Stavebné a developerské firmy, ktoré potrebujú profesionálnu
            prezentáciu svojich priestorov pre budúcich klientov.
          </li>
        </ul>

        <p className="text-lg mt-8 leading-relaxed">
          <strong>Home Staging</strong> sa ukázal ako efektívna metóda na
          zvýšenie rýchlosti aj profitability predaja. Je to umenie, ktoré
          vyžaduje skúsenosti, cit pre detail a odborné vedomosti – no ide o
          investíciu, ktorá sa veľmi rýchlo vráti.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Homestaging;
