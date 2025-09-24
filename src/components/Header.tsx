import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
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
            <a href="/ponuka-nehnutelnosti" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Ponuka nehnuteľností</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/makleri" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Makléri</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/referencie" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Referencie</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/blog" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Blog</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/contact" className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Kontakt</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
          </nav>

          {/* Search Button - Right */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-white text-black hover:text-golden hover:bg-white/90 font-light relative group overflow-hidden px-4 py-2 rounded-xl border border-golden/20 hover:border-golden/40 transition-all duration-300 shadow-sm"
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
              <a href="/ponuka-nehnutelnosti" className="text-primary hover:text-golden transition-colors font-light py-2">
                Ponuka nehnuteľností
              </a>
              <a href="/makleri" className="text-primary hover:text-golden transition-colors font-light py-2">
                Makléri
              </a>
              <a href="/referencie" className="text-primary hover:text-golden transition-colors font-light py-2">
                Referencie
              </a>
              <a href="/blog" className="text-primary hover:text-golden transition-colors font-light py-2">
                Blog
              </a>
              <a href="/contact" className="text-primary hover:text-golden transition-colors font-light py-2">
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