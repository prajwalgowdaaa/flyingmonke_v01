import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button"; // Import Button component

interface Project {
  title: string;
  location: string;
  image: string;
  href: string;
  typology: string;
  dateCompleted: string; // YYYY-MM-DD format for easy sorting
}

const projectsData: Project[] = [
  { 
    title: "Sandfjord Quarter", 
    location: "Oslo, Norway", 
    image: "https://images.pexels.com/photos/1496307653780-42ee777d4833/pexels-photo-1496307653780-42ee777d4833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/sandfjord-quarter", 
    typology: "Residential", 
    dateCompleted: "2023-08-15" 
  },
  { 
    title: "Noromsvien", 
    location: "Bergen, Norway", 
    image: "https://images.pexels.com/photos/1460574283810-2aab119d8511/pexels-photo-1460574283810-2aab119d8511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/noromsvien", 
    typology: "Commercial", 
    dateCompleted: "2024-01-20" 
  },
  { 
    title: "Kongsberg II", 
    location: "Kongsberg, Norway", 
    image: "https://images.pexels.com/photos/1486718448742-163732cd1544/pexels-photo-1486718448742-163732cd1544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/kongsberg-ii", 
    typology: "Residential", 
    dateCompleted: "2023-03-10" 
  },
  { 
    title: "Fjord Museum", 
    location: "Flåm, Norway", 
    image: "https://images.pexels.com/photos/1497604401993-f2e922e5cb0a/pexels-photo-1497604401993-f2e922e5cb0a.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/fjord-museum", 
    typology: "Cultural", 
    dateCompleted: "2022-11-01" 
  },
  { 
    title: "The Atrium", 
    location: "Stockholm, Sweden", 
    image: "https://images.pexels.com/photos/1551038247-3d9af20df552/pexels-photo-1551038247-3d9af20df552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/the-atrium", 
    typology: "Commercial", 
    dateCompleted: "2024-02-28" 
  },
  { 
    title: "Community Church Kirkenes", 
    location: "Kirkenes, Norway", 
    image: "https://images.pexels.com/photos/1524230572899-a752b3835840/pexels-photo-1524230572899-a752b3835840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/community-church", 
    typology: "Public", 
    dateCompleted: "2023-06-05" 
  },
  { 
    title: "Harbor Front Development", 
    location: "Copenhagen, Denmark", 
    image: "https://images.pexels.com/photos/1493397212122-2b85dda8106b/pexels-photo-1493397212122-2b85dda8106b.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/harbor-front", 
    typology: "Mixed-Use", 
    dateCompleted: "2024-04-10" 
  },
  { 
    title: "Urban Renewal District", 
    location: "Gothenburg, Sweden", 
    image: "https://images.pexels.com/photos/1459767129954-1b1c1f9b9ace/pexels-photo-1459767129954-1b1c1f9b9ace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/urban-renewal", 
    typology: "Urban Planning", 
    dateCompleted: "2023-09-20" 
  },
  { 
    title: "Mountain View Pavilion", 
    location: "Ålesund, Norway", 
    image: "https://images.pexels.com/photos/1439337153520-7082a56a81f4/pexels-photo-1439337153520-7082a56a81f4.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    href: "/projects/mountain-pavilion", 
    typology: "Cultural", 
    dateCompleted: "2022-07-01" 
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypology, setSelectedTypology] = useState("All");
  const [sortOrder, setSortOrder] = useState("date-newest");

  const typologies = useMemo(() => {
    const uniqueTypologies = new Set(projectsData.map(p => p.typology));
    return ["All", ...Array.from(uniqueTypologies).sort()];
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let filteredProjects = projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTypology = 
        selectedTypology === "All" || project.typology === selectedTypology;
      return matchesSearch && matchesTypology;
    });

    filteredProjects.sort((a, b) => {
      if (sortOrder === "date-newest") {
        return new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime();
      } else if (sortOrder === "date-oldest") {
        return new Date(a.dateCompleted).getTime() - new Date(b.dateCompleted).getTime();
      } else if (sortOrder === "alpha-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "alpha-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return filteredProjects;
  }, [searchTerm, selectedTypology, sortOrder]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Projects
          </h1>
          <p className="max-w-2xl text-gray-600">
            Our portfolio showcases a diverse range of architectural projects spanning residential, commercial, cultural, and public spaces. Each project reflects our commitment to innovative design, sustainability, and enhancing the human experience.
          </p>
        </div>
      </section>

      {/* Filters, Sort, and Search */}
      <section className="pb-12 px-4 md:px-16 lg:px-24">
        <div className="container-custom flex flex-col gap-6"> {/* Changed to flex-col for stacking */}
          {/* Top line: Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:max-w-xs"
            />
            <Select onValueChange={setSortOrder} defaultValue="date-newest">
              <SelectTrigger className="w-full sm:w-[220px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-newest">Date Completed (Newest)</SelectItem>
                <SelectItem value="date-oldest">Date Completed (Oldest)</SelectItem>
                <SelectItem value="alpha-asc">Alphabetical (A-Z)</SelectItem>
                <SelectItem value="alpha-desc">Alphabetical (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lower line: Typology Buttons */}
          <div className="flex flex-wrap gap-2">
            {typologies.map(typology => (
              <Button
                key={typology}
                variant={selectedTypology === typology ? "default" : "outline"}
                onClick={() => setSelectedTypology(typology)}
                className="rounded-full px-4 py-2 text-sm"
              >
                {typology}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          {filteredAndSortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProjects.map((project) => (
                <ProjectCard 
                  key={project.title} // Using title as key, ideally use a unique ID
                  title={project.title}
                  location={project.location}
                  image={project.image}
                  href={project.href}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">No projects found matching your criteria.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-gray-200">
              <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-4 text-xl font-medium tracking-tighter">flying<span className="font-bold">monké</span></div>
                    <address className="not-italic text-sm text-gray-600 mb-6">
                      Bengaluru, India
                    </address>
                    <div className="text-sm text-gray-600 mb-6">
                      <p>+91-9535696698</p>
                      <p>+91-9606165475</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <h3 className="text-2xl mb-4">workflyingmonke@gmail.com</h3>
                    <div className="flex md:justify-end space-x-4 mb-6">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Facebook size={20} />
                        <span className="sr-only">Facebook</span>
                      </a>                
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      {/* 
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Youtube size={22} />
                        <span className="sr-only">Youtube</span>
                      </a>
                      */}
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 text-sm">
                      <Link to="/" className="hover:underline">Home</Link>
                      <Link to="/projects" className="hover:underline">Projects</Link>
                      <Link to="/studio" className="hover:underline">Studio</Link>
                      <Link to="/blog" className="hover:underline">Insights</Link>
                      <Link to="/contact" className="hover:underline">Contact</Link>
                    </div>
                  </div>
                </div>
                <div className="mt-16 pt-6 border-t border-gray-200 text-xs text-gray-400">
                  © flyingmonké, {new Date().getFullYear()} . All rights reserved
                </div>
              </div>
            </footer>
    </div>
  );
};

export default Projects;
