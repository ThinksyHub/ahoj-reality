import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import References from "@/components/References";
import Partners from "@/components/Partners";
import QuoteBanner from "@/components/QuoteBanner";
import Licenses from "@/components/Licenses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <References />
      <Partners />
      <QuoteBanner />
      <Partners />
      <Licenses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
