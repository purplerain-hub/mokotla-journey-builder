import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const ProjectsShowcase = () => {
  const projectsData: Project[] = [{
    id: 1,
    title: "Highway Infrastructure Expansion",
    category: "Infrastructure",
    description: "A major highway expansion project improving connectivity and reducing congestion.",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&h=500"
  }, {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    description: "Modern office complex with sustainable design features and state-of-the-art facilities.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&h=500"
  }, {
    id: 3,
    title: "Industrial Warehouse Development",
    category: "Industrial",
    description: "Large-scale warehouse development with advanced logistics infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=800&h=500"
  }, {
    id: 4,
    title: "Residential Housing Community",
    category: "Residential",
    description: "Comprehensive residential development with modern amenities and green spaces.",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&h=500"
  }, {
    id: 5,
    title: "Bridge Reconstruction Project",
    category: "Infrastructure",
    description: "Critical bridge reconstruction improving safety and increasing capacity.",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&h=500"
  }, {
    id: 6,
    title: "Shopping Mall Construction",
    category: "Commercial",
    description: "Retail development featuring contemporary design and sustainable construction methods.",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&h=500"
  }];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Infrastructure", "Commercial", "Industrial", "Residential"];

  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(project => project.category === filter);

  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Projects</h2>
          <p className="section-subheading">
            Explore our diverse portfolio of successful construction and logistics projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button 
              key={category} 
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`
                ${filter === category 
                  ? "bg-mokotla-blue text-white" 
                  : "bg-white text-mokotla-blue border border-mokotla-blue"}
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-mokotla-yellow text-mokotla-blue font-semibold px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-mokotla-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-mokotla-gray mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-mokotla-yellow hover:bg-mokotla-blue text-mokotla-blue hover:text-white font-bold px-8 py-6">
            View All Projects
          </Button>
        </div>
      </div>
    </section>;
};

export default ProjectsShowcase;
