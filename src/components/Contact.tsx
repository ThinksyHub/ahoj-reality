import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Kontaktujte nás</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-6">
            Kontakt <span className="text-gradient-golden">na nás</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Pripravení nájsť vašu dokonalú nehnuteľnosť? Spojte sa s naším expertným tímom už dnes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-light text-primary mb-6">
                Kontaktné informácie
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Adresa</h4>
                    <p className="text-muted-foreground font-light">Václavské námestie 1<br />110 00 Bratislava 1, Slovensko</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Telefón</h4>
                    <p className="text-muted-foreground font-light">+421 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-light text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground font-light">info@ahojreality.sk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <Card className="p-6 bg-card border-border/20">
              <h3 className="font-heading text-xl font-light text-primary mb-4">
                Odber newslettera
              </h3>
              <p className="text-muted-foreground mb-4 font-light">
                Zostaňte informovaní o najnovších nehnuteľnostiach a trhových pozorovaných
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Zadajte váš email" 
                  className="flex-1"
                />
                <Button className="btn-golden font-light">
                  Odoberať
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
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
                  <Input placeholder="Ján" />
                </div>
                <div>
                  <label className="block text-sm font-light text-primary mb-2">
                    Priezvisko
                  </label>
                  <Input placeholder="Novák" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Email
                </label>
                <Input type="email" placeholder="jan@priklad.sk" />
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Telefón
                </label>
                <Input type="tel" placeholder="+421 123 456 789" />
              </div>

              <div>
                <label className="block text-sm font-light text-primary mb-2">
                  Správa
                </label>
                <Textarea 
                  placeholder="Povedzte nám o vašich požiadavkách na nehnuteľnosť..."
                  rows={5}
                />
              </div>

              <Button className="btn-golden w-full text-lg py-3 font-light">
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

export default Contact;