
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DirectorWelcome from "@/components/DirectorWelcome";
import Services from "@/components/Services";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DirectorWelcome />
      <Services />
      <ProjectsShowcase />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
