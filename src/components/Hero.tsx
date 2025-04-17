
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-r from-mokotla-blue to-[#2B4F81]"
    >
      {/* Background overlay with pattern */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Building Tomorrow's
              <span className="text-mokotla-yellow"> Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
              Mokotla combines expertise in construction and logistics to deliver exceptional projects on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-mokotla-yellow hover:bg-white hover:text-mokotla-blue text-mokotla-blue font-bold text-lg py-6 px-8"
                size="lg"
              >
                Our Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-mokotla-blue font-bold text-lg py-6 px-8"
                size="lg"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-2xl animate-fade-up">
              <h3 className="text-2xl font-bold text-white mb-4">Get a Free Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/20 placeholder-white/70 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-mokotla-yellow"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/20 placeholder-white/70 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-mokotla-yellow"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/20 placeholder-white/70 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-mokotla-yellow"
                />
                <textarea
                  placeholder="Project Details"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 placeholder-white/70 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-mokotla-yellow"
                ></textarea>
                <Button className="w-full bg-mokotla-yellow hover:bg-white hover:text-mokotla-blue text-mokotla-blue font-bold py-3">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
