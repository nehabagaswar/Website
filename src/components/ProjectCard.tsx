import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectProps {
  title: string;
  achievements: string[];
  techUsed: string[];
  githubLink?: string;
  externalLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  achievements,
  techUsed,
  githubLink,
  externalLink
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <div className="p-6 border-l-4 border-teal-500">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 group">
          {title}
          <span className="block h-1 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
        </h3>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">ACHIEVEMENTS</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="text-teal-600 mr-2">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {techUsed.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm transform transition-all duration-300 hover:scale-105 hover:bg-teal-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4 border-t border-gray-100">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              <Github size={18} className="mr-1" />
              <span>View Code</span>
            </a>
          )}
          
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;