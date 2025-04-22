import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 20,
  iconColor = 'text-gray-700' 
}) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://www.linkedin.com/in/neha-bagaswar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-teal-600 transition-colors duration-300`}
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://github.com/nehabagaswar" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-teal-600 transition-colors duration-300`}
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="mailto:nehabagaswar28@gmail.com" 
        className={`${iconColor} hover:text-teal-600 transition-colors duration-300`}
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;