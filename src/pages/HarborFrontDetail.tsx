import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import ExpandableInfo from '../components/ExpandableInfo';

interface ProjectDetailProps {
  // Add any props needed for the component
}

const HarborFrontDetail: React.FC<ProjectDetailProps> = () => {
  const { id } = useParams<{ id: string }>();

  // Replace with actual data for the Harbor Front Development project
  const projectData = {
    name: 'Harbor Front Development',
    heroImage: '/path/to/harbor-front-hero.jpg', // Replace with actual image path
    overview: 'This project involves the comprehensive redevelopment of a key section of the city\'s harbor front, transforming it into a vibrant mixed-use area. It includes residential buildings, commercial spaces, public parks, and improved infrastructure.',
    slideshowImages: [
      '/path/to/harbor-front-slide-1.jpg', // Replace with actual image paths
      '/path/to/harbor-front-slide-2.jpg',
      '/path/to/harbor-front-slide-3.jpg',
    ],
    additionalDetails: [
      { title: 'Scope of Work', content: 'Includes new construction, renovation of existing structures, landscaping, and infrastructure upgrades.' },
      { title: 'Timeline', content: 'Construction is expected to be completed in phases over the next 5 years.' },
      { title: 'Key Features', content: 'Waterfront promenade, retail village, residential towers with harbor views, and a new public transportation hub.' },
    ],
  };

  return (
    <div className="project-detail-page">
      <Navbar />
      <div className="hero-section" style={{ backgroundImage: `url(${projectData.heroImage})` }}>
        <div className="hero-content">
          <h1>{projectData.name}</h1>
          {/* Add a subtitle or brief description if needed */}
        </div>
      </div>

      <div className="container mx-auto py-12">
        <section className="project-overview mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg">{projectData.overview}</p>
        </section>

        <section className="project-slideshow mb-12">
          <Slideshow />
        </section>

        <section className="additional-details">
          <h2 className="text-3xl font-bold mb-4">Additional Details</h2>
          {projectData.additionalDetails.map((detail, index) => (
            <ExpandableInfo key={index} title={detail.title} content={detail.content} />
          ))}
        </section>

        {/* Add more sections as needed, e.g., Location, Team, etc. */}
        <section className="placeholder-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Location</h2>
          <p>Placeholder for map or location details.</p>
        </section>

        <section className="placeholder-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Team</h2>
          <p>Placeholder for team information.</p>
        </section>
      </div>
    </div>
  );
};

export default HarborFrontDetail;