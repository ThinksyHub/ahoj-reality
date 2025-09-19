import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
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
      <Advantages />
      <Testimonials />
      <QuoteBanner />
      <Licenses />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
