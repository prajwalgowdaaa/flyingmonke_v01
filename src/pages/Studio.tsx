import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, X } from "lucide-react";
// Removed Dialog imports as they are no longer needed
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Prajwal Gowda",
    title: "Architect",
    image: "https://images.pexels.com/photos/32193076/pexels-photo-32193076.jpeg?auto=compress",
    description: "Prajwal brings bold vision and thoughtful design intelligence to every project. A graduate of SPA Vijayawada, he blends architectural insight with advanced tools like BIM, computational design, and AI-driven methodologies. His work focuses on creating human-centered, climate-responsive, and timelessly relevant environments.",
  },
  {
    name: "Suhas",
    title: "Architect",
    image: "https://images.pexels.com/photos/32388468/pexels-photo-32388468.jpeg?auto=compress",
    description: "Suhas brings a unique blend of artistic flair and technical precision to every project. Specializing in interior architecture, he transforms ordinary spaces into extraordinary experiences. His meticulous attention to detail and commitment to client satisfaction make him an invaluable asset to our team.",
  },
  {
    name: "Sakshi Pandey",
    title: "Architect",
    image: "https://images.pexels.com/photos/32388223/pexels-photo-32388223.jpeg?auto=compress",
    description: "Sakshi is our organizational powerhouse, ensuring every project runs smoothly from conception to completion. With a background in construction management, she expertly navigates complex timelines and budgets, keeping our team on track and delivering results that exceed expectations.",
  },  
];

const Studio = () => {
  // Removed state for selectedMember and isDialogOpen as they are no longer needed
  // const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Removed handleMemberClick function as it is no longer needed
  // const handleMemberClick = (member: TeamMember) => {
  //   setSelectedMember(member);
  //   setIsDialogOpen(true);
  // };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Studio
          </h1>
          <p className="max-w-2xl text-gray-600">
            Founded in 2024, flying<span className="font-bold">monké</span> is a dynamic architectural and interior design practice dedicated to shaping compelling environments. We bring a fresh, innovative perspective and keen design intelligence to every project, ensuring our solutions are both visionary and exceptionally practical. Our focus is on crafting inspiring, contextually rich spaces that truly resonate with their users and redefine the built environment for lasting impact.
          </p>
        </div>
      </section>

      {/* Studio Image */}
      <section className="pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3"
              alt="Arch Studio Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-normal mb-8">Our approach</h2>
              <p className="text-gray-700 mb-6">
                At flying<span className="font-bold">monké</span> our philosophy centers on design as a transformative catalyst, driven by insight and responsibility. We create innovative, contextually sensitive spaces that transcend mere function, deeply resonating with users and evolving over time. 
              </p>
              <p className="text-gray-700 mb-6">
                Our core tenets guide us to build less, often slimming programs and footprints, while crafting slender, light structures. We champion robust designs that age beautifully, breathing new life into existing structures. Ultimately, flyingmonmé fosters vibrant, joyful, and safe environments, driven by genuine need to ensure every space offers a lasting legacy of inspiration.
              </p>              
            </div>
            <div>
              <h2 className="text-3xl font-normal mb-8">Our team</h2>
              <p className="text-gray-700 mb-6">
                We believe extraordinary design flourishes in an environment where creativity thrives and well-being is paramount. We are building a vibrant studio culture in Bengaluru that champions innovation not just in our projects, but in how we work together.
              </p>
              <p className="text-gray-700">
                While deeply rooted in foundational architectural and design principles, our team embodies agility and forward-thinking. This enables us to approach every project with renewed energy, constantly seeking unique solutions and pushing creative boundaries. We are more than just designers; we are dedicated problem-solvers meticulously crafting spaces that truly resonate.
              </p>
            </div>
          </div>

          {/* Stats 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-64 pt-[50px] border-t border-gray-200">
            <StatCard number="27" label="Years Experience" />
            <StatCard number="9" label="Awards" />
            <StatCard number="28" label="Team Members" />
            <StatCard number="70" label="Projects" />
          </div>*/}
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-24 px-4 md:px-16 lg:px-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-normal mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-member" // Removed cursor-pointer class
                // Removed onClick handler
              >
                <div className="relative overflow-hidden group">
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Dialog - Removed this entire section */}
      {/*
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] overflow-auto p-4 md:p-6">
          {selectedMember && (
            <div className="flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full pt-4 md:pt-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-base text-gray-600">
                    {selectedMember.title}
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-4 text-gray-700">{selectedMember.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      */}

      {/* Footer - Updated address and email */}
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
              <h3 className="mb-4 text-xl font-semibold">workflyingmonke@gmail.com</h3>
              <div className="flex md:justify-end space-x-4 mb-6">
                <a href="https://www.instagram.com/flyingmonke__/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/people/flyingmonk%C3%A9/61576847467953/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>                
                <a href="https://x.com/flyingmonke_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <X size={22} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://www.linkedin.com/company/flyingmonkecreativelabs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                {/* 
                <a href="https://www.youtube.com/@theflyingmonke" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
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

export default Studio;
