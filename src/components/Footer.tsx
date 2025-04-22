import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Neha Bagaswar</h2>
            <p className="text-gray-400">Data & Business Analyst</p>
            <div className="mt-4">
              <SocialLinks iconColor="text-white" iconSize={20} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nagpur, India</li>
              <li>
                <a 
                  href="mailto:nehabagaswar28@gmail.com"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  nehabagaswar28@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Latest Projects</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/nehabagaswar/Covid-_19-_Data-Analysis_Python-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  COVID-19 Data Analysis
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/nehabagaswar/DIwali_Sales_Analysis_Python-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  Diwali Sales Analysis
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Neha Bagaswar. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Back to top &uarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;