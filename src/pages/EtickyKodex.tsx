import Footer from "@/components/Footer";
import Header from "@/components/Header";

const EtickyKodex = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Etický kódex
        </h1>

        <p className="text-lg mb-8 leading-relaxed text-center text-muted-foreground">
          Etický kódex Realitného poradcu certifikovaného SORA
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Slovenská realitná akadémia ako nezávislá organizácia vykonávajúca
          vzdelávaciu činnosť a certifikáciu v oblasti obchodovania s
          nehnuteľnosťami vydáva tento etický kódex, ktorého úlohou je definovať
          základné princípy a hodnoty, ktoré by mali byť integrálnou súčasťou
          profesionálnej výbavy každého realitného poradcu.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          I. Predmet etického kódexu
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Etický kódex predstavuje súhrn základných hodnôt, princípov a
          pravidiel správania realitného poradcu pri poskytovaní realitného
          poradenstva a sprostredkovaní kúpy, predaja a prenájmu nehnuteľností.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          II. Záväznosť etického kódexu
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Etický kódex je záväzný pre všetkých držiteľov preukazu „Realitný
          poradca“, ktorý vydáva Slovenská realitná akadémia (ďalej len „realitný poradca“).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          III. Základné vlastnosti realitného poradcu
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Realitný poradca vykonáva svoje povolanie čestne, v súlade s dobrými
          mravmi a poctivým obchodným stykom. Vystupuje vždy vo vlastnom mene a
          poskytuje svoje služby odborne, svedomito a zodpovedne. Je povinný
          rešpektovať všeobecne záväzné právne predpisy Slovenskej republiky a
          predpisy vydané Slovenskou realitnou akadémiou.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Realitný poradca je odborník, ktorý sa priebežne vzdeláva a zvyšuje
          svoje znalosti. Pri poskytovaní služieb dbá najmä na napĺňanie cieľov
          klienta a uprednostňuje ich záujmy pred vlastnými.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          IV. Komunikácia s klientom
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Realitný poradca vystupuje pri komunikácii s klientmi slušne a
          transparentne. Nesmie zakrývať svoju identitu a nesmie sa prezentovať
          ako súkromná osoba. Informácie o nehnuteľnostiach poskytované tretím
          osobám musia byť pravdivé, presné a aktuálne.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Poradca zachováva diskrétnosť a rešpektuje profesionálne tajomstvo —
          nesmie prezradiť dôverné informácie o klientoch ani ich použiť bez
          súhlasu v ich neprospech. Ku všetkým klientom pristupuje zdvorilo,
          korektne a nestranne. V prípade konfliktov vystupuje ako mediátor a
          pomáha hľadať vhodné riešenie.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          V. Komunikácia s inými poradcami alebo maklérmi
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Pri spolupráci s inými realitnými poradcami alebo maklérmi si poradca
          vždy na začiatku dohodne pravidlá spolupráce a oblasti zodpovednosti.
          Dohoda musí obsahovať aj jasne definované podmienky odmeňovania osôb
          zapojených do obchodného prípadu.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          VI. Poskytovanie sprostredkovateľských služieb
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Realitný poradca je povinný informovať klienta o rozsahu svojich
          služieb, výške odplaty, celkových nákladoch a poplatkoch spojených s
          obchodom. Musí klienta priebežne informovať o vývoji prípadu, chrániť
          zverené dokumenty a osobné údaje pred stratou alebo zneužitím.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Poskytuje služby len v oblastiach, ktoré zvláda po odbornej stránke, a
          v prípade potreby konzultuje detaily s odborníkmi. Ak prijíma preddavky
          alebo finančné prostriedky od klientov, je povinný ich riadne evidovať,
          používať výlučne na daný účel a viesť o nich transparentnú dokumentáciu.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          VII. Záverečné ustanovenia
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Etický kódex je platný na celom území Slovenskej republiky. V prípade
          zistenia porušenia pravidiel si Slovenská realitná akadémia vyhradzuje
          právo začať disciplinárne konanie, ktorého výsledkom môže byť
          napomenutie, odobratie preukazu realitného poradcu alebo vyškrtnutie
          zo zoznamu realitných poradcov.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Tento kódex bol prijatý Valným zhromaždením Slovenskej realitnej
          akadémie dňa <strong>10. septembra 2005</strong>. Zmeny prijaté
          Valným zhromaždením dňa <strong>6. marca 2009</strong> nadobúdajú
          účinnosť <strong>1. mája 2009</strong>.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default EtickyKodex;
