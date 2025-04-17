
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Services />
      <ProjectsShowcase />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
