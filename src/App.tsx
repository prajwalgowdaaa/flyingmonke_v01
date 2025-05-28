import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BlogPost from "./pages/BlogPost";
import Studio from "./pages/Studio";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CursorFollower from "./components/CursorFollower";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/projects/sandfjord-quarter" element={<ProjectDetail />} />
              <Route path="/projects/noromsvien" element={<ProjectDetail />} />
              <Route path="/projects/kongsberg-ii" element={<ProjectDetail />} />
              <Route path="/projects/fjord-museum" element={<ProjectDetail />} />
              <Route path="/projects/the-atrium" element={<ProjectDetail />} />
              <Route path="/projects/community-church" element={<ProjectDetail />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="/blog/redefining-luxuriance" element={<BlogPost />} />
              <Route path="/blog/old-waterway-competition" element={<BlogPost />} />
              <Route path="/blog/charleroi-proposal" element={<BlogPost />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/blog" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CursorFollower />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
