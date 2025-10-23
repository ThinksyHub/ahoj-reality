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
          <Header/>
          <section className="w-full">
              <Search/>
          </section>
          <section className="w-full">
              <Advantages/>
          </section>
          <section className="w-full">
              <Testimonials/>
          </section>
          <section className="w-full">
              <QuoteBanner/>
          </section>
          <section className="w-full">
              <Licenses/>
          </section>
          <section className="w-full">
              <Partners/>
          </section>
          <section className="w-full">
              <ContactForm/>
          </section>
          <section className="w-full">
              <Footer/>
          </section>
      </div>
  );
};

export default Index;
