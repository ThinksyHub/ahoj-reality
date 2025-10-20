import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Kariera = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Maklér na plný plyn
        </h1>
        <p className="text-lg text-center mb-8">
          Ak ste pripravený rozbehnúť svoje vlastné podnikanie, ponúkame vám
          pomocnú ruku a osvedčené metódy, ako byť úspešný na realitnom trhu!
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Kariera;
