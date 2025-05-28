import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";
import NewsCard from "../components/NewsCard";
import Slideshow from "../components/Slideshow";
import ExpandableInfo from "../components/ExpandableInfo";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Slideshow />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal max-w-3xl leading-tight animate-fade-in-fast">
            Redefining architectural design to forge inspiring, enduring, and sustainable environments
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading">
                The architectural paradigm of flying<span className="font-bold">monké</span> centers on aspirational design realized through innovative, contextually sensitive solutions, creating enduring spaces that fundamentally enhance lives
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                We are a multidisciplinary startup and every project is a chance to push creative boundaries, delivering designs that balance compelling expression with optimal functionality. Sustainability and community well-being are core to our contextual approach. 
              </p>
              
              <div>
                <Link to="/studio" className="inline-block border-b border-black pb-1 hover:pb-2 transition-all">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Stats 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[146px] pt-[50px] border-t border-gray-200">
            <StatCard number="27" label="Years Experience" />
            <StatCard number="9" label="Awards" />
            <StatCard number="28" label="Team Members" />
            <StatCard number="70" label="Projects" />
          </div>*/}
        </div>
      </section>

      {/* Philosophy Section with Expandable Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading max-w-2xl">
            Elevating Your Vision
          </h2>

          <div className="mt-16 space-y-4">
            <ExpandableInfo 
              title="Architecture" 
              content="Our architectural practice focuses on creating spaces that respond sensitively to their context and the unique needs of their users. We embark on a collaborative journey with you, guiding your vision from initial concept to final realization. We believe in a holistic approach that seamlessly combines innovative design thinking with sustainable practices, resulting in buildings that are both aesthetically pleasing and exceptionally functionally efficient."
            />
            <ExpandableInfo 
              title="Interior Design" 
              content="We believe interior spaces are deeply personal ecosystems that should reflect identity, enhance well-being, and optimize functionality. Our Integrated Interior Design service goes beyond aesthetics, focusing on creating immersive and highly effective environments that resonate with their users. We craft interiors that seamlessly extend the architectural narrative, bringing light, materiality, and form into harmonious balance within. Our approach ensures every design decision contributes to a cohesive, inspiring, and comfortable experience."
            />
            <ExpandableInfo 
              title="Product Design" 
              content="Our commitment to holistic design extends to the individual elements that furnish and define a space. Our Bespoke Product Design service focuses on creating custom furniture, lighting, fixtures, and unique architectural elements that are precisely tailored to the specific needs and aesthetic vision of your project. We believe that every detail contributes to the overall spatial experience. Our product design process integrates seamlessly with our architectural and interior design services, ensuring that custom pieces are not just standalone items but are integral components that enhance functionality, articulate design narratives, and elevate the unique character of your environment."
            />
            <ExpandableInfo 
              title="Engineering" 
              content="Our engineering expertise ensures that creative vision meets technical excellence. We understand that groundbreaking architecture requires equally robust and intelligent underlying systems. We integrate advanced structural solutions and sophisticated building systems that not only support our architectural innovation but also actively optimize performance, efficiency, and long-term sustainability. Our collaborative approach brings together a network of specialists across various engineering disciplines to address complex design challenges. We meticulously coordinate with consultants in Structural Engineering, Mechanical, Electrical, and Plumbing (MEP) Engineering and Environmental Engineering."
            />
            <ExpandableInfo 
              title="Branding and Visual design" 
              content="At flyingmonké, we understand that a compelling brand extends beyond physical spaces; it lives in every interaction and visual touchpoint. Our Branding & Visual Design service is tailored for clients who seek a cohesive and impactful identity that seamlessly aligns with their architectural and interior design aspirations. We believe that a strong brand narrative enhances how spaces are perceived and experienced. Leveraging our creative insight and understanding of holistic design, we help establish or refine your brand's visual language, ensuring it resonates authentically with your vision and target audience. This service is particularly beneficial for hospitality, retail, commercial, and institutional clients looking to create a singular, memorable impression."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading">
            The Built Expression, Spaces That Tell Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Sandfjord Quarter"
              location="Oslo, Norway"
              image="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3"
              href="/projects/sandfjord-quarter"
            />
            <ProjectCard 
              title="Noromsvien"
              location="Bergen, Norway"
              image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3"
              href="/projects/noromsvien"
            />
            <ProjectCard 
              title="Kongsberg II"
              location="Kongsberg, Norway"
              image="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3"
              href="/projects/kongsberg-ii"
            />
            <ProjectCard 
              title="Fjord Museum"
              location="Flåm, Norway"
              image="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3"
              href="/projects/fjord-museum"
            />
            <ProjectCard 
              title="The Atrium"
              location="Stockholm, Sweden"
              image="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3"
              href="/projects/the-atrium"
            />
            <ProjectCard 
              title="Community Church Kirkenes"
              location="Kirkenes, Norway"
              image="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3"
              href="/projects/community-church"
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
              All projects
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section (formerly Blog) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading">
            Stay updated on our latest projects, achievements, and events
          </h2>

          <div className="bg-white">
            <NewsCard 
              title="Redefining Luxuriance, Luxembourg"
              date="March 2025"
              href="/blog/redefining-luxuriance"
            />
            <NewsCard 
              title="Competing: The Old Waterway School & Office"
              date="February 2025" 
              href="/blog/old-waterway-competition"
            />
            <NewsCard 
              title="Winning proposal joint for Glasserie site at Charleroi" 
              date="January 2025"
              href="/blog/charleroi-proposal"
            />
          </div>

          <div className="mt-8">
            <Link to="/blog" className="inline-block border-b border-black pb-1 hover:pb-2 transition-all">
              View all
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

export default Index;
