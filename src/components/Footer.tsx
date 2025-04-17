
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mokotla-blue text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              MOKOTLA
              <span className="text-mokotla-yellow">.</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Leading provider of construction and logistics solutions across South Africa, delivering excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mokotla-yellow hover:text-mokotla-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mokotla-yellow hover:text-mokotla-blue transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mokotla-yellow hover:text-mokotla-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mokotla-yellow hover:text-mokotla-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Construction Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Logistics Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Heavy Equipment Operation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Material Supply Chain
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mokotla-yellow transition-colors">
                  Infrastructure Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-mokotla-yellow flex-grow"
              />
              <Button className="bg-mokotla-yellow hover:bg-white text-mokotla-blue rounded-l-none">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mokotla Construction & Logistics. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
