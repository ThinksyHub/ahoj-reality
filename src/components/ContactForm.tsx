import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Kontaktujte nás</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-6">
            Kontakt <span className="text-gradient-golden">na nás</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Pripravení nájsť vašu dokonalú nehnuteľnosť? Spojte sa s naším expertným tímom už dnes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ContactForm Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-light text-primary mb-6">
                Kontaktné informácie
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden"/>
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Adresa</h4>
                    <p className="text-muted-foreground font-light">AHOJ reality<br/>Partizánska 6 (Bocianie
                      hniezdo)<br/>085 01 Bardejov</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden"/>
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Telefón</h4>
                    <p className="text-muted-foreground font-light">+421 917 927 536</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-golden"/>
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground font-light">info@ahojreality.sk</p>
                  </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.1537592523528!2d21.26650497620469!3d49.29243037139426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e80d94bcceb0b%3A0x355b15dbb1308208!2sAHOJ%20reality!5e0!3m2!1sen!2ssk!4v1760621085750!5m2!1sen!2ssk"
                    width="600" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

          </div>

          {/* ContactForm Form */}
          <Card className="p-8 bg-card border-border/20 shadow-elegant">
            <h3 className="font-heading text-2xl font-light text-primary mb-6">
              Pošlite nám správu
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-light text-primary mb-2">
                    Meno
                  </label>
                  <Input />
                </div>
                <div>
                  <label className="block text-sm font-light text-primary mb-2">
                    Priezvisko
                  </label>
                  <Input  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Email
                </label>
                <Input type="email" />
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Telefón
                </label>
                <Input type="tel" />
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Správa
                </label>
                <Textarea
                  rows={5}
                />
              </div>

              <Button className="bg-black text-white hover:bg-black/90 w-full text-lg py-3 font-light">
                <Send className="mr-2 w-5 h-5" />
                Odoslať správu
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;