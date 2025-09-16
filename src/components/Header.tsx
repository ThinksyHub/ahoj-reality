import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-golden/20">
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-golden/10">
          <div className="flex items-center space-x-6 text-muted-dark-foreground/80">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-golden" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-golden" />
              <span>info@luxuryestates.com</span>
            </div>
          </div>
          <div className="text-golden font-medium">
            Luxury Real Estate
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
              <span className="text-golden-foreground font-bold text-xl">LE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-primary-foreground">
                Luxury <span className="text-gradient-golden">Estates</span>
              </h1>
              <p className="text-xs text-muted-dark-foreground/60">Premium Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-golden transition-colors font-medium">
              Home
            </a>
            <a href="#properties" className="text-primary-foreground hover:text-golden transition-colors font-medium">
              Properties
            </a>
            <a href="#services" className="text-primary-foreground hover:text-golden transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-primary-foreground hover:text-golden transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-golden transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-golden">
              Schedule Viewing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary-foreground hover:text-golden transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-golden/10">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-primary-foreground hover:text-golden transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#properties"
                className="text-primary-foreground hover:text-golden transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Properties
              </a>
              <a
                href="#services"
                className="text-primary-foreground hover:text-golden transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-primary-foreground hover:text-golden transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-primary-foreground hover:text-golden transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="btn-golden mt-4">
                Schedule Viewing
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;