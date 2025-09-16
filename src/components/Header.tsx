import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-golden/10 shadow-elegant">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo - Left */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src={logo} 
                alt="AHOJ Reality" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-2 bg-golden/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative">
                <span className="font-medium">Ponuka nehnuteľností</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </button>
              <div className="absolute top-full left-0 w-56 bg-white/98 backdrop-blur-xl shadow-luxury rounded-xl py-3 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-golden/10">
                <a href="#top" className="block px-6 py-3 text-primary hover:text-golden hover:bg-golden/5 font-light transition-all duration-200">Top ponuky</a>
                <a href="#sale" className="block px-6 py-3 text-primary hover:text-golden hover:bg-golden/5 font-light transition-all duration-200">Predaj</a>
                <a href="#rent" className="block px-6 py-3 text-primary hover:text-golden hover:bg-golden/5 font-light transition-all duration-200">Prenájom</a>
              </div>
            </div>
            <a href="#agents" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Agenti</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="#references" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Referencie</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="#contact" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Kontakt</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
          </nav>

          {/* Search Button - Right */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:text-golden hover:bg-golden/10 font-light relative group overflow-hidden px-4 py-2 rounded-xl border border-transparent hover:border-golden/20 transition-all duration-300"
            >
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="ml-2 hidden md:inline font-medium">Hľadať</span>
              <div className="absolute inset-0 bg-gradient-to-r from-golden/0 via-golden/5 to-golden/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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