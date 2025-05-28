import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, Calendar, User, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { blogId } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3" 
            alt="Redefining Luxuriance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl text-white font-normal mb-4">
              Redefining Luxuriance, Luxembourg
            </h1>
            <div className="flex items-center text-white/80 space-x-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>March 2025</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>By Sofia Bergman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  In Luxembourg's historic district, where medieval architecture meets contemporary design, our latest project presents a bold reimagining of luxury living within the constraints of heritage preservation requirements. This mixed-use development integrates residential spaces with boutique retail and cultural amenities, creating a new social hub that respects its historical context while introducing forward-thinking design solutions.
                </p>
                
                <p>
                  The project began with a comprehensive analysis of the site's historical significance and urban context. Working closely with local heritage experts, we identified key architectural elements that needed to be preserved while pinpointing opportunities for contemporary interventions. This collaborative process resulted in a design approach that celebrates the site's historical layers rather than concealing them.
                </p>
                
                <figure>
                  <img 
                    src="https://images.unsplash.com/photo-1741482528461-c619d7430941?ixlib=rb-4.1.0" 
                    alt="Interior courtyard with preserved historical elements" 
                    className="w-full h-auto"
                  />
                  <figcaption className="text-center text-sm text-gray-500 mt-2">The central courtyard maintains original stone elements while introducing contemporary water features and native plantings</figcaption>
                </figure>
                
                <h2>Bridging Centuries Through Materials</h2>
                <p>
                  Our material palette creates a dialogue between old and new, using contemporary interpretations of traditional materials. Weathered copper, textured concrete, and locally sourced stone establish visual connections to the surrounding historic buildings, while large expanses of glass and slim steel profiles introduce a distinctly modern lightness. Interior spaces feature exposed original beams alongside sleek modern furnishings, creating richly layered environments that tell the story of the building's evolution.
                </p>
                
                <p>
                  The project's sustainability strategy focuses on passive design principles, integrating high-performance building systems within the historic envelope. A geothermal system provides heating and cooling, while careful restoration of the original windows, complemented by interior secondary glazing, maintains the building's historic character while significantly improving its thermal performance.
                </p>
                
                <h2>Creating Social Spaces</h2>
                <p>
                  At the heart of the development is a publicly accessible courtyard that transforms what was once a private service area into a vibrant community space. Carefully designed to provide both sunny and shaded areas throughout the day, this courtyard hosts small cultural events and markets, becoming an extension of Luxembourg's vibrant street life. The accessible rooftop garden offers stunning views of the city's historic skyline while providing residents with a tranquil retreat from urban life.
                </p>
                
                <figure>
                  <img 
                    src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3" 
                    alt="Rooftop garden with city views" 
                    className="w-full h-auto"
                  />
                  <figcaption className="text-center text-sm text-gray-500 mt-2">The rooftop garden offers panoramic views while creating biodiversity habitats</figcaption>
                </figure>
                
                <p>
                  The project represents our studio's commitment to creating meaningful spaces that honor historical context while meeting contemporary needs. By approaching heritage not as an obstacle but as a resource, we've created spaces that are simultaneously respectful and forward-looking—proving that historical preservation and innovative design can be complementary rather than contradictory goals.
                </p>
                
                <p>
                  This project has already received recognition from the European Heritage Association for its sensitive approach to adaptive reuse, demonstrating how thoughtful architectural interventions can breathe new life into historic urban settings.
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-8 sticky top-24">
                <h3 className="text-xl font-medium mb-6">Related Articles</h3>
                
                <div className="space-y-6">
                  <div>
                    <Link to="/blog/old-waterway-competition" className="block hover:opacity-80">
                      <h4 className="text-lg font-medium mb-2">Competing: The Old Waterway School & Office</h4>
                      <p className="text-sm text-gray-600">February 2025</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/blog/charleroi-proposal" className="block hover:opacity-80">
                      <h4 className="text-lg font-medium mb-2">Winning proposal joint for Glasserie site at Charleroi</h4>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </Link>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium mb-4">Share</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-600 hover:text-black">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/blog" className="inline-flex items-center text-gray-700 hover:text-black">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to all posts</span>
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

export default BlogPost;
