import Header from "@/components/Header";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import QuoteBanner from "@/components/QuoteBanner";
import Licenses from "@/components/Licenses";
import ContactForm from "@/components/ContactForm.tsx";
import Footer from "@/components/Footer";
import Search from "@/components/Search";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Search />
      <Advantages />
      <Testimonials />
      <QuoteBanner />
      <Licenses />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
