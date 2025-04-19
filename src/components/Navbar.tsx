import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-mokotla-blue">
            MOKOTLA
            <span className="text-mokotla-yellow">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-mokotla-blue font-medium hover:text-mokotla-yellow transition-colors">
              {link.name}
            </a>)}
        </div>

        <div className="hidden md:block">
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-mokotla-blue" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-mokotla-blue font-medium py-2 hover:bg-gray-50 hover:text-mokotla-yellow px-2 rounded" onClick={toggleMenu}>
                {link.name}
              </a>)}
            <Button className="bg-mokotla-yellow hover:bg-mokotla-blue text-white w-full">
              Get a Quote
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;