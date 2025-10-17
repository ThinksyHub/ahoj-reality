import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm.tsx";

const Contact = () => {
  return (
      <div className="min-h-screen">
          <Header/>
          <ContactForm/>
          <Footer/>
      </div>
  );
};

export default Contact;