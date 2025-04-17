
import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar, Target } from "lucide-react";

const About = () => {
  const statsData = [
    { value: "15+", label: "Years Experience", icon: Calendar },
    { value: "200+", label: "Projects Completed", icon: Target },
    { value: "50+", label: "Team Members", icon: Users },
    { value: "25+", label: "Industry Awards", icon: Award },
  ];

  const valuesData = [
    {
      title: "Quality Excellence",
      description: "We deliver exceptional quality in every project, meeting the highest industry standards.",
    },
    {
      title: "Integrity & Trust",
      description: "We maintain transparent communication and ethical practices in all our business dealings.",
    },
    {
      title: "Safety First",
      description: "Safety of our team and all stakeholders is our top priority on every project site.",
    },
    {
      title: "Innovation",
      description: "We embrace innovative approaches to tackle complex construction and logistics challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-mokotla-blue">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Mokotla
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building excellence through innovation and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Founded in 2008, Mokotla began as a small construction company with big ambitions. Over the years, we've grown into a comprehensive construction and logistics enterprise, known for reliability and excellence across various sectors.
            </p>
            <p className="text-gray-300 mb-6">
              Our integrated approach combines construction expertise with efficient logistics solutions, enabling us to deliver projects that meet and exceed client expectations. We take pride in our team of experienced professionals who bring passion and precision to every project.
            </p>
            <Button className="bg-mokotla-yellow hover:bg-white text-mokotla-blue font-bold">
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 rounded-full bg-mokotla-yellow/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-mokotla-yellow" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className="p-6 border border-white/10 rounded-lg"
              >
                <h4 className="text-xl font-bold text-mokotla-yellow mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mokotla-yellow/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start your project with us?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you have a small renovation or a large-scale development, our team is ready to help you bring your project to life.
          </p>
          <Button className="bg-mokotla-yellow hover:bg-white text-mokotla-blue font-bold px-8 py-3 text-lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
