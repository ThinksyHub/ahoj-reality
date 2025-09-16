import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center">
                <span className="text-golden-foreground font-bold text-2xl">AR</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">
                  AHOJ <span className="text-gradient-golden">Reality</span>
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-dark-foreground/90 font-light">Václavské námestie 1</p>
                  <p className="text-muted-dark-foreground/90 font-light">110 00 Bratislava 1</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="tel:+421123456789" className="text-muted-dark-foreground/90 hover:text-golden transition-colors font-light">
                  +421 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="mailto:info@ahojreality.sk" className="text-muted-dark-foreground/90 hover:text-golden transition-colors font-light">
                  info@ahojreality.sk
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-light mb-6 text-golden">Služby</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Cenník</a></li>
              <li><a href="#contact" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Kontakt</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">GDPR</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Často kladené otázky</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-lg font-light mb-6 text-golden">Právne informácie</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Všeobecné podmienky</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Podnikajte s nami</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Kariéra u nás</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-lg font-light mb-6 text-golden">Sledujte nás</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-golden/20 py-6">
          <div className="text-center">
            <div className="text-sm text-muted-dark-foreground/70 font-light">
              Copyright © 2025 AHOJ Reality. Všetky práva vyhradené.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;