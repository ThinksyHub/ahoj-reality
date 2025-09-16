import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-golden rounded-lg flex items-center justify-center">
                <span className="text-golden-foreground font-bold text-2xl">LE</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">
                  Luxury <span className="text-gradient-golden">Estates</span>
                </h3>
                <p className="text-sm text-muted-dark-foreground/70">Premium Real Estate</p>
              </div>
            </div>
            <p className="text-muted-dark-foreground/90 mb-6 max-w-md leading-relaxed">
              Experience unparalleled luxury with our exclusive collection of premium properties
              in the world's most prestigious locations. Your dream estate awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-golden/10 hover:bg-golden rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-golden group-hover:text-golden-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-golden">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Home</a></li>
              <li><a href="#properties" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Properties</a></li>
              <li><a href="#services" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-dark-foreground/80 hover:text-golden transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-golden">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-dark-foreground/90">123 Luxury Boulevard</p>
                  <p className="text-muted-dark-foreground/90">Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-dark-foreground/90 hover:text-golden transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="mailto:info@luxuryestates.com" className="text-muted-dark-foreground/90 hover:text-golden transition-colors">
                  info@luxuryestates.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold text-primary-foreground mb-2">Business Hours</h5>
              <div className="text-sm text-muted-dark-foreground/80 space-y-1">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-golden/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-dark-foreground/70 mb-4 md:mb-0">
              © 2024 Luxury Estates. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-dark-foreground/70">
              <span>Licensed Real Estate Broker</span>
              <span>•</span>
              <span>DRE #01234567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;