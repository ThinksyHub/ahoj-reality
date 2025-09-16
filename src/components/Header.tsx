import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Left */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="AHOJ Reality" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary hover:text-golden transition-colors font-light py-2">
                <span>Ponuka nehnuteľností</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#top" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5 font-light">Top ponuky</a>
                <a href="#sale" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5 font-light">Predaj</a>
                <a href="#rent" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5 font-light">Prenájom</a>
              </div>
            </div>
            <a href="#agents" className="text-primary hover:text-golden transition-colors font-light">
              Agenti
            </a>
            <a href="#references" className="text-primary hover:text-golden transition-colors font-light">
              Referencie
            </a>
            <a href="#contact" className="text-primary hover:text-golden transition-colors font-light">
              Kontakt
            </a>
          </nav>

          {/* Search Button - Right */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-primary hover:text-golden hover:bg-golden/10 font-light">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary hover:text-golden transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4">
              <div>
                <button className="flex items-center justify-between w-full text-primary hover:text-golden transition-colors font-light py-2">
                  <span>Ponuka nehnuteľností</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#top" className="block text-primary hover:text-golden py-1 font-light">Top ponuky</a>
                  <a href="#sale" className="block text-primary hover:text-golden py-1 font-light">Predaj</a>
                  <a href="#rent" className="block text-primary hover:text-golden py-1 font-light">Prenájom</a>
                </div>
              </div>
              <a href="#agents" className="text-primary hover:text-golden transition-colors font-light py-2">
                Agenti
              </a>
              <a href="#references" className="text-primary hover:text-golden transition-colors font-light py-2">
                Referencie
              </a>
              <a href="#contact" className="text-primary hover:text-golden transition-colors font-light py-2">
                Kontakt
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;