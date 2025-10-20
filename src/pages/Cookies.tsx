import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Cookies = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 leading-relaxed">
        <h2 className="text-4xl font-bold mb-10 text-center">Používanie súborov cookies</h2>
        
        <h3 className="text-2xl font-semibold mt-10 mb-3">1. Čo sú cookies</h3>
        <p className="mb-6">
          Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom zariadení (počítač, tablet, mobil) pri návšteve
          webovej stránky. Tieto súbory umožňujú webu zapamätať si vaše nastavenia a preferencie (napr. jazyk, veľkosť
          písma, prihlásenie) po určitý čas.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">2. Aké cookies používame</h3>
        <p className="mb-4">
          Na našej stránke používame nasledujúce typy cookies:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            <strong>Nevyhnutné cookies</strong> – sú potrebné na správne fungovanie webu, napr. na navigáciu
            a zabezpečenie formulárov.
          </li>
          <li>
            <strong>Funkčné cookies</strong> – umožňujú zapamätať si vaše preferencie, napríklad jazyk alebo
            lokalitu.
          </li>
          <li>
            <strong>Analytické cookies</strong> – pomáhajú nám porozumieť, ako návštevníci používajú našu stránku,
            aby sme ju mohli zlepšovať (napr. Google Analytics).
          </li>
          <li>
            <strong>Marketingové cookies</strong> – používajú sa na personalizáciu reklamy a meranie jej efektivity.
            Tieto cookies sú ukladané len s vaším súhlasom.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-3">3. Ako môžete spravovať cookies</h3>
        <p className="mb-6">
          Používanie cookies môžete ovplyvniť prostredníctvom nastavení svojho internetového prehliadača. Väčšina
          prehliadačov umožňuje cookies zablokovať, obmedziť alebo vymazať. Upozorňujeme, že zablokovaním niektorých
          cookies môže dôjsť k obmedzeniu funkčnosti našej webovej stránky.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">4. Cookies tretích strán</h3>
        <p className="mb-6">
          Naša stránka môže používať služby tretích strán (napr. Google Analytics, Facebook Pixel), ktoré môžu
          ukladať vlastné cookies. Tieto súbory podliehajú zásadám ochrany osobných údajov týchto služieb.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-3">5. Súhlas s používaním cookies</h3>
        <p className="mb-6">
          Pri prvej návšteve našej webovej stránky sa vám zobrazí lišta s upozornením o používaní cookies.
          Kliknutím na tlačidlo <strong>"Súhlasím"</strong> vyjadrujete svoj súhlas s ich používaním v súlade
          s týmto dokumentom.
        </p>

      </section>
      <Footer />
    </div>
  );
};

export default Cookies;
