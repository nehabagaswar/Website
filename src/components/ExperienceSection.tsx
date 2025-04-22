import React from 'react';
import SectionTitle from './SectionTitle';
import { BriefcaseIcon } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-teal-700">
              <div className="absolute left-0 sm:left-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-teal-500 flex items-center justify-center bg-white z-10">
                  <BriefcaseIcon size={24} className="text-teal-500" />
                </div>
                <div className="h-full w-px bg-teal-300 absolute top-16 -bottom-6"></div>
              </div>
              
              <div className="sm:pl-20">
                <span className="text-teal-600 font-semibold text-lg mb-1 block">May 2023 – July 2023</span>
                <h3 className="font-bold text-xl text-gray-800">UI/UX Design & Digital Analytics Intern</h3>
                <p className="text-gray-600 mb-4">Skill Guru Foundation, India</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <span className="text-teal-600 mr-2 mt-1 font-bold">•</span>
                    <span>
                      <strong className="text-gray-800">Optimized user experience:</strong> Enhanced digital interfaces by integrating feedback with data analytics, which improved engagement metrics.
                    </span>
                  </li>
                  
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <span className="text-teal-600 mr-2 mt-1 font-bold">•</span>
                    <span>
                      <strong className="text-gray-800">Streamlined reporting:</strong> Developed detailed, data-driven reports for stakeholder meetings, contributing to actionable strategy improvements.
                    </span>
                  </li>
                  
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <span className="text-teal-600 mr-2 mt-1 font-bold">•</span>
                    <span>
                      <strong className="text-gray-800">Strengthened collaboration:</strong> Coordinated with cross-functional teams to convert analytical insights into design and marketing recommendations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;