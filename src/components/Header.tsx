import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("ENG");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-golden/10 shadow-elegant">
      <div className="w-full px-6">
        <div className="flex justify-between items-center py-5" style={{paddingBottom: 0}}>
          {/* Logo - Left */}
          <div className="flex items-center space-x-3">
            <a href="/" className="relative group">
              <img
                  src={logo}
                  alt="AHOJ Reality"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                  style={{minWidth: "90px", minHeight: "90px"}}
              />
              <div
                  className="absolute -inset-2 bg-golden/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a href="/ponuka-nehnutelnosti"
               className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Ponuka nehnuteľností</span>
              <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/o-nas"
               className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">O nás</span>
              <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/referencie"
               className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Referencie</span>
              <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/blog"
               className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Blog</span>
              <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
            <a href="/contact"
               className="text-primary hover:text-golden transition-all duration-300 font-light py-3 px-2 relative group">
              <span className="font-medium">Kontakt</span>
              <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-golden scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </a>
          </nav>

          {/* CTA Buttons - Right */}
          <div className="hidden lg:flex rounded-lg overflow-hidden border border-golden">
            <a
                href="/chcem-predat"
                className="px-8 py-3 bg-white text-black font-semibold transition-all duration-300 hover:bg-golden/5"
            >
              CHCEM PREDAŤ
            </a>
            <a
                href="/chcem-kupit"
                className="px-8 py-3 bg-gradient-to-r from-[#decd87cc] to-[#c49a36cc] text-black font-semibold transition-all duration-300 hover:from-[#c49a36] hover:to-[#decd87]"
            >
              CHCEM KÚPIŤ
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
              onClick={toggleMenu}
              className="lg:hidden text-primary hover:text-golden transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200/20">
              <nav className="flex flex-col space-y-4">
                <a href="/ponuka-nehnutelnosti"
                   className="text-primary hover:text-golden transition-colors font-light py-2">
                  Ponuka nehnuteľností
                </a>
                <a href="/o-nas" className="text-primary hover:text-golden transition-colors font-light py-2">
                  O nás
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

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <a
                      href="/chcem-predat"
                      className="block w-full text-center px-6 py-3 bg-white border-2 border-golden text-golden font-semibold rounded-lg hover:bg-golden/5 transition-all duration-300"
                  >
                    CHCEM PREDAŤ
                  </a>
                  <a
                      href="/chcem-kupit"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-golden to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    CHCEM KÚPIŤ
                  </a>
                </div>
              </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;