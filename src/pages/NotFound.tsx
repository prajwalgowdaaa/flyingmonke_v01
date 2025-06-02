import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Facebook, Instagram, Twitter, Linkedin, X } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="text-7xl font-light mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Page not found</p>
          <Link to="/" className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
            Return to homepage
          </Link>
        </div>
      </div>
      
      {/* Footer - Updated to match home page */}
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

export default NotFound;
