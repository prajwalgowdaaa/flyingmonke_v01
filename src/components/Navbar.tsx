import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-white/35 backdrop-blur-md grainy-texture"
      }`}
    >
      <div className="container-custom flex justify-between items-center py-6">
        <Link to="/" className="text-2xl font-medium tracking-tighter">
          flying<span className="font-bold">monké</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/projects" className="text-sm hover:underline">
            Projects
          </Link>
          <Link to="/studio" className="text-sm hover:underline">
            Studio
          </Link>
          <Link to="/blog" className="text-sm hover:underline">
            Insights
          </Link>
          <Link to="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="flex flex-col py-4">
            <Link
              to="/projects"
              className="py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/studio"
              className="py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Studio
            </Link>
            <Link
              to="/blog"
              className="py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
