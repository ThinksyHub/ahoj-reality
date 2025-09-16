import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Search Button - Left */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-primary hover:text-golden hover:bg-golden/10">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-primary hover:text-golden transition-colors font-medium py-2">
                <span>Property offer</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#top" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5">Top</a>
                <a href="#sale" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5">Sale</a>
                <a href="#rent" className="block px-4 py-2 text-primary hover:text-golden hover:bg-golden/5">Rent</a>
              </div>
            </div>
            <a href="#agents" className="text-primary hover:text-golden transition-colors font-medium">
              Agents
            </a>
            <a href="#references" className="text-primary hover:text-golden transition-colors font-medium">
              References
            </a>
            <a href="#contact" className="text-primary hover:text-golden transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Logo - Right */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
              <span className="text-golden-foreground font-bold text-xl">AR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-primary">
                AHOJ <span className="text-gradient-golden">Reality</span>
              </h1>
            </div>
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
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <div>
                <button className="flex items-center justify-between w-full text-primary hover:text-golden transition-colors font-medium py-2">
                  <span>Property offer</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#top" className="block text-primary hover:text-golden py-1">Top</a>
                  <a href="#sale" className="block text-primary hover:text-golden py-1">Sale</a>
                  <a href="#rent" className="block text-primary hover:text-golden py-1">Rent</a>
                </div>
              </div>
              <a href="#agents" className="text-primary hover:text-golden transition-colors font-medium py-2">
                Agents
              </a>
              <a href="#references" className="text-primary hover:text-golden transition-colors font-medium py-2">
                References
              </a>
              <a href="#contact" className="text-primary hover:text-golden transition-colors font-medium py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;