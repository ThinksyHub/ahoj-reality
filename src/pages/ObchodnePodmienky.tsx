import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ObchodnePodmienky = () => {
  return (
      <div className="bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 leading-relaxed">
          <h2 className="text-4xl font-bold mb-10 text-center">Všeobecné obchodné podmienky (VOP)</h2>

          <p className="mb-6">
            Realitná spoločnosť <strong>AHOJ reality</strong>, s.r.o., so sídlom Slnečná ulica 4342/9, 085 01 Bardejov-Bardejovská Nová Ves, IČO: 53 942 345, zapísaná v Obchodnom registri Okresného súdu Prešov, oddiel: Sro, Vložka: 42599/P (ďalej len „Realitná kancelária“ alebo „Sprostredkovateľ“) sa špecializuje na sprostredkovanie kúpy, predaja a prenájmu nehnuteľností. Tieto VOP upravujú podmienky poskytovania služieb klientom a záujemcom o nehnuteľnosti.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok I. Všeobecné ustanovenia</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>VOP sú súčasťou všetkých zmlúv s klientmi a tretími osobami, pokiaľ nie sú výslovne zmenené.</li>
            <li>VOP sú dostupné online na <a href="https://www.ahojreality.sk" className="text-primary underline">www.ahojreality.sk</a>.</li>
            <li>Klientom je fyzická alebo právnická osoba, ktorej sú poskytované služby na základe písomnej alebo ústnej dohody.</li>
            <li>Právne vzťahy neupravené VOP sa riadia právom Slovenskej republiky.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok II. Organizačná štruktúra</h3>
          <p className="mb-6">
            Spoločnosť zabezpečuje metodické, materiálne, finančné a personálne vedenie pobočiek, školenia a vzdelávanie realitných maklérov. Makléri sú samostatné subjekty, prepojené so spoločnosťou zmluvne, a vykonávajú realitnú činnosť pod obchodnou značkou „<strong>AHOJ reality</strong>“. Všetky pobočky a makléri dodržiavajú Etický kódex, Reklamačný poriadok a VOP.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok III. Predmet činnosti a systém práce</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Vyhľadávanie a kontaktovanie záujemcov o nehnuteľnosti.</li>
            <li>Zabezpečenie dokumentácie a vypracovanie zmlúv súvisiacich s obchodnými prípadmi.</li>
            <li>Sprostredkovanie predaja, prenájmu a kúpy nehnuteľností na základe Dohody o sprostredkovaní.</li>
            <li>Doklady potrebné pre sprostredkovanie zahŕňajú listy vlastníctva, geometrické plány, pôdorysy, súhlasy spoluvlastníkov a plné moci podľa typu nehnuteľnosti.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok IV. Práva a povinnosti</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Realitná kancelária je povinná konať odborne, oznamovať klientovi dôležité informácie, propagovať nehnuteľnosť a získavať potrebné podklady.</li>
            <li>Klient poskytuje súčinnosť, pravdivé údaje, uhrádza záväzky, umožňuje obhliadky a v prípade ústnej dohody uzatvorí písomnú Dohodu.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok V. Vznik Dohody</h3>
          <p className="mb-6">
            Dohoda môže byť výhradná alebo nevýhradná. Považuje sa za uzatvorenú podpisom oboch strán a platí na dobu neurčitú, pokiaľ Dohoda neurčuje inak.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok VI. Zánik Dohody</h3>
          <p className="mb-6">
            Dohoda zaniká splnením účelu, uplynutím doby, písomnou dohodou alebo výpoveďou. Realitná kancelária alebo klient môžu dohody ukončiť aj z dôvodov porušenia zmluvy, nečinnosti, neplatby alebo nesplnenia povinností.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok VII. Sankcie</h3>
          <p className="mb-6">
            Porušenie výhradnej Dohody zo strany klienta môže viesť k zmluvnej pokute: 3% z ceny nehnuteľnosti alebo jedno mesačné nájomné. Zmluvná pokuta je splatná do 5 pracovných dní.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok VIII. Reklamácie</h3>
          <p className="mb-6">
            Klient môže reklamovať fakturovanú Odmenu alebo kvalitu služieb písomne do 30 dní od doručenia faktúry. Realitná kancelária vybaví reklamáciu do 30 dní, v zložitých prípadoch do 60 dní. Opodstatnené reklamácie sa vracajú na účet klienta.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok IX. Zmena zmluvných dokumentov</h3>
          <p className="mb-6">
            Spoločnosť si vyhradzuje právo jednostranne meniť VOP. Dohody je možné meniť len po dohode oboch strán písomným dodatkom.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok X. Zodpovednosť za škodu</h3>
          <p className="mb-6">
            Zodpovednosť Realitnej kancelárie za škodu je obmedzená na vrátenie alebo zníženie Odmeny. Klient je povinný uhradiť vzniknutú škodu spôsobenú nesplnením svojich povinností. Úroky z omeškania sú 0,05% denne.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok XI. Doručovanie</h3>
          <p className="mb-6">
            Informácie považované za doručené po uplynutí 5 kalendárnych dní od odoslania. Ak doručenie nie je možné, zásielka sa považuje za doručenú oznámením poštovej služby.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok XII. Ochrana osobných údajov a mlčanlivosť</h3>
          <p className="mb-6">
            Realitná kancelária spracováva osobné údaje klienta v súlade so zákonom č. 18/2018 Z. z., chráni ich a používa len na účely poskytovania služieb, vyúčtovania a marketingu. Klient súhlasí so spracovaním a môže súhlas kedykoľvek odvolať.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-3">Článok XIII. Záverečné ustanovenia</h3>
          <p className="mb-6">
            VOP nadobúdajú platnosť dňom zverejnenia. Dohody sa riadia aktuálnymi VOP. Neplatnosť niektorého ustanovenia nemá vplyv na platnosť ostatných. Klient podpisom Dohody potvrdzuje, že sa s VOP oboznámil a súhlasí s nimi.
          </p>
        </section>
        <Footer />
      </div>
  );
};

export default ObchodnePodmienky;
