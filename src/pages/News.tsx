import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface NewsItem {
  title: string;
  date: string;
  href: string;
  categories: string[];
}

const newsData: NewsItem[] = [
  { 
    title: "Redefining Luxuriance, Luxembourg", 
    date: "March 2025", 
    href: "/blog/redefining-luxuriance", 
    categories: ["Design", "Residential"] 
  },
  { 
    title: "Competing: The Old Waterway School & Office", 
    date: "February 2025", 
    href: "/blog/old-waterway-competition", 
    categories: ["Competition", "Commercial", "Public"] 
  },
  { 
    title: "Winning proposal joint for Glasserie site at Charleroi", 
    date: "January 2025", 
    href: "/blog/charleroi-proposal", 
    categories: ["Award", "Urban Planning"] 
  },
  { 
    title: "New sustainability framework implemented across all projects", 
    date: "December 2024", 
    href: "/blog/sustainability-framework", 
    categories: ["Sustainability", "Innovation"] 
  },
  { 
    title: "Arch Studio wins Oslo Urban Design Award", 
    date: "November 2024", 
    href: "/blog/oslo-design-award", 
    categories: ["Award", "Urban Planning"] 
  },
  { 
    title: "Exhibition: Future Cities at the National Museum", 
    date: "October 2024", 
    href: "/blog/future-cities-exhibition", 
    categories: ["Event", "Innovation"] 
  },
  { 
    title: "Announcing our expansion to Copenhagen", 
    date: "September 2024", 
    href: "/blog/copenhagen-expansion", 
    categories: ["Company News"] 
  },
  { 
    title: "Fjord Museum project featured in Architecture Today", 
    date: "August 2024", 
    href: "/blog/fjord-museum-feature", 
    categories: ["Project Feature", "Cultural"] 
  },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    newsData.forEach(item => {
      item.categories.forEach(cat => uniqueCategories.add(cat));
    });
    return ["All", ...Array.from(uniqueCategories).sort()];
  }, []);

  const filteredNews = useMemo(() => {
    return newsData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === "All" || item.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Insights
          </h1>
          <p className="max-w-2xl text-gray-600">
            Stay updated with the latest news, events, and insights from Arch Studio. Learn about our recent project awards, design competitions, exhibitions, and thought leadership in architecture and design.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="pb-12 px-4 md:px-16 lg:px-24">
        <div className="container-custom flex flex-col gap-6">
          <Input
            type="text"
            placeholder="Search insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-4 py-2 text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="bg-white">
            {filteredNews.length > 0 ? (
              filteredNews.map((newsItem) => (
                <NewsCard 
                  key={newsItem.title} // Using title as key, ideally use a unique ID
                  title={newsItem.title}
                  date={newsItem.date}
                  href={newsItem.href}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 text-lg">No insights found matching your criteria.</p>
            )}
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

export default News;
