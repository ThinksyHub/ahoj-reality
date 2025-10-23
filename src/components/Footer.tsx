import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import image1 from "@/assets/Logo_dla-klienta-kopia1.png"
import image2 from "@/assets/Logo_dla-klienta-kopia2.png"
import image3 from "@/assets/Logo_dla-klienta-kopia3.png"


const Footer = () => {
  return (
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                    src={logo}
                    alt="AHOJ Reality"
                    className="h-16 w-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0"/>
                  <div>
                    <p className="text-muted-dark-foreground/90 font-light">AHOJ reality</p>
                    <p className="text-muted-dark-foreground/90 font-light">Partizánska 423/6 (Bocianie hniezdo)</p>
                    <p className="text-muted-dark-foreground/90 font-light">085 01 Bardejov</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-golden flex-shrink-0"/>
                  <a href="tel:+421917927536"
                     className="text-muted-dark-foreground/90 hover:text-golden transition-colors font-light">
                    +421 917 927 536
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-golden flex-shrink-0"/>
                  <a href="mailto:info@ahojreality.sk"
                     className="text-muted-dark-foreground/90 hover:text-golden transition-colors font-light">
                    info@ahojreality.sk
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg font-light mb-6 text-golden-luxury">Služby</h4>
              <ul className="space-y-3">
                <li><a href="/homestaging"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Homestaging</a>
                </li>
                <li><a href="/ponuka-nehnutelnosti"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Nehnuteľnosti</a>
                </li>
                <li><a href="/cennik"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Cenník</a>
                </li>
                <li><a href="/kariera"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Kariéra
                  u nás</a></li>
                <li><a href="/eticky-kodex"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Etický
                  kódex</a></li>
                <li><a href="/contact"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Kontakt</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading text-lg font-light mb-6 text-golden-luxury">Právne informácie</h4>
              <ul className="space-y-3">
                <li><a href="/cookies"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Cookies</a>
                </li>
                <li><a href="/obchodne-podmienky"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Obchodné
                  podmienky</a></li>
                <li><a href="/vseobecne-podmienky"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">Všeobecné
                  podmienky</a></li>
                <li><a href="/gdpr"
                       className="text-muted-dark-foreground/80 hover:text-golden transition-colors font-light">GDPR</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-heading text-lg font-light mb-6 text-golden-luxury">Sledujte nás</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61573379655552"
                   className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                  <Facebook className="w-5 h-5 text-golden group-hover:text-golden-foreground"/>
                </a>
                <a href="https://www.instagram.com/ahoj_reality/"
                   className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                  <Instagram className="w-5 h-5 text-golden group-hover:text-golden-foreground"/>
                </a>
                <a href=""
                   className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                  <Youtube className="w-5 h-5 text-golden group-hover:text-golden-foreground"/>
                </a>
              </div>
              <div className="flex justify-start" style={{paddingTop: '20px', justifyContent: 'space-between'}}>
                <img src={image1} style={{maxHeight: '100px'}}/>
                <img src={image2} style={{maxHeight: '100px'}}/>
                <img src={image3} style={{maxHeight: '100px'}}/>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-golden/20 py-6">
            <div className="text-center">
              <div className="text-sm text-muted-dark-foreground/70 font-light">
                Copyright © {new Date().getFullYear()} AHOJ Reality. Všetky práva vyhradené.
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;