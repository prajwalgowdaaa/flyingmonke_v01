import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-normal max-w-2xl leading-tight mb-12">
            Contact
          </h1>
          <p className="max-w-2xl text-gray-600">
            We'd love to hear about your project. Please get in touch with our team to discuss how we can collaborate and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="w-full h-[400px] mb-12">
            <iframe 
              src="https://www.google.com/maps?q=13.04547702539867,77.54348144678023(FlyingMonké)&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-4 md:px-16 lg:px-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-normal mb-8">Get in touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Head Office</h3>
                  <address className="not-italic text-gray-700">
                    Bengaluru, India
                  </address>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p><a href="mailto:workflyingmonke@gmail.com" className="text-gray-700 hover:underline">workflyingmonke@gmail.com</a></p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p><a href="tel:+919535696698" className="text-gray-700 hover:underline">+91-9535696698</a></p>
                  <p><a href="tel:+919606165475" className="text-gray-700 hover:underline">+91-9606165475</a></p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-normal mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8">Let's connect</h2>
          <p className="mb-10 max-w-xl mx-auto">Follow us on social media for the latest updates, behind-the-scenes content, and design inspiration</p>
          
          <div className="flex justify-center space-x-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
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

export default Contact;
