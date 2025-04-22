import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projects" 
          subtitle="Explore my data analytics and business analysis projects" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;