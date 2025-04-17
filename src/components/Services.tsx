
import React from "react";
import { 
  Building, 
  Truck, 
  Construction as ConstructionCrane, 
  Warehouse, 
  Construction, 
  HardHat 
} from "lucide-react";

const Services = () => {
  const serviceData = [
    {
      title: "Construction Management",
      description:
        "Expert project management services from planning to completion, ensuring your project stays on schedule and within budget.",
      icon: Building,
    },
    {
      title: "Logistics Solutions",
      description:
        "Comprehensive logistics services including transportation, warehousing, and distribution for construction materials and equipment.",
      icon: Truck,
    },
    {
      title: "Heavy Equipment Operation",
      description:
        "Skilled operators and modern heavy equipment for all types of construction and earthmoving projects.",
      icon: ConstructionCrane,
    },
    {
      title: "Material Supply Chain",
      description:
        "End-to-end management of construction materials from sourcing to delivery, optimizing cost and quality.",
      icon: Warehouse,
    },
    {
      title: "Infrastructure Development",
      description:
        "Specialized in roads, bridges, and public utilities construction with a focus on durability and sustainability.",
      icon: Construction,
    },
    {
      title: "Safety Compliance",
      description:
        "Industry-leading safety protocols and compliance management to ensure accident-free work environments.",
      icon: HardHat,
    },
  ];

  return (
    <section id="services" className="py-20 bg-mokotla-lightgray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Comprehensive construction and logistics solutions tailored to meet your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg shadow-md p-8 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-full bg-mokotla-blue/10 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-mokotla-blue" />
              </div>
              <h3 className="text-xl font-bold text-mokotla-blue mb-3">
                {service.title}
              </h3>
              <p className="text-mokotla-gray flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center text-mokotla-yellow hover:text-mokotla-blue font-medium"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
