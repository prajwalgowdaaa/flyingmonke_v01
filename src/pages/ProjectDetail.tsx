import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // This would typically fetch based on the ID, but for now we'll use static content
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3" 
            alt="Sandfjord Quarter" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-4">
              Sandfjord Quarter
            </h1>
            <p className="text-xl text-white/80">Oslo, Norway</p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Project Overview */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-normal mb-8">Project Overview</h2>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  The Sandfjord Quarter represents a significant urban renewal project in Oslo's eastern district, transforming an underutilized industrial zone into a vibrant mixed-use neighborhood that respects the site's historical significance while boldly embracing contemporary needs.
                </p>
                
                <p>
                  Working collaboratively with the municipality, local residents, and business stakeholders, our team developed a masterplan that preserves key industrial structures while introducing new housing, commercial spaces, and public amenities. The development prioritizes pedestrian circulation, creates generous public spaces, and establishes a distinctive architectural identity that bridges Oslo's industrial past with its sustainable future.
                </p>
                
                <p>
                  The first phase, completed in 2024, includes 120 residential units, 4,500 square meters of office space, and a variety of street-level retail and food establishments. A central plaza connects to a restored waterfront promenade, enhancing public access to the fjord and creating a new destination for both residents and visitors.
                </p>
                
                <h3 className="text-xl font-medium mt-10 mb-4">Sustainability Features</h3>
                <p>
                  The Sandfjord Quarter achieves BREEAM Excellent certification through numerous sustainability strategies:
                </p>
                <ul>
                  <li>Integration of existing structures to reduce embodied carbon</li>
                  <li>Highly efficient building envelopes with triple-glazing throughout</li>
                  <li>District heating connection supplemented by geothermal heat pumps</li>
                  <li>Extensive green roofs and rainwater harvesting systems</li>
                  <li>On-site renewable energy through building-integrated photovoltaics</li>
                  <li>Materials selected for durability, low environmental impact, and indoor air quality</li>
                </ul>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p>Sandfjord Development AS</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p>32,000 m²</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p>2020-2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>Oslo, Norway</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Services</p>
                  <p>Architecture, Landscape Design, Urban Planning</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sustainability</p>
                  <p>BREEAM Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-normal mb-12">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3" 
                alt="Sandfjord Quarter Exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3" 
                alt="Sandfjord Quarter Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3" 
                alt="Sandfjord Quarter Plaza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3" 
                alt="Sandfjord Quarter Waterfront" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3" 
                alt="Sandfjord Quarter Aerial View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-16 pt-8">
            <Link to="/projects" className="inline-flex items-center text-gray-700 hover:text-black">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to all projects</span>
            </Link>
          </div>
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

export default ProjectDetail;
