import React from 'react';
import SectionTitle from './SectionTitle';
import { GraduationCapIcon } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* MBA Education */}
            <div className="relative pl-8 sm:pl-32 py-6 group animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-teal-700">
                <div className="absolute left-0 sm:left-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-teal-500 flex items-center justify-center bg-white z-10">
                    <GraduationCapIcon />
                  </div>
                  <div className="h-full w-px bg-teal-300 absolute top-16 -bottom-6"></div>
                </div>
                
                <div className="sm:pl-20">
                  <span className="text-teal-600 font-semibold text-lg mb-1 block">2023 - 2025</span>
                  <h3 className="font-bold text-xl text-gray-800">MBA – Marketing & Business Analytics</h3>
                  <p className="text-gray-600 mb-4">Rashtrasant Tukadoji Maharaj, Nagpur University, Nagpur, India</p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Relevant Coursework:</h4>
                    <p className="text-gray-600">
                      Corporate Sales Strategies, Strategic Marketing, Consumer Behavior Analysis, 
                      Business Analytics, Digital Marketing & Sales, Data-Driven Decision Making
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* BSc Education */}
            <div className="relative pl-8 sm:pl-32 py-6 group animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-teal-700">
                <div className="absolute left-0 sm:left-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-teal-500 flex items-center justify-center bg-white z-10">
                    <GraduationCapIcon />
                  </div>
                </div>
                
                <div className="sm:pl-20">
                  <span className="text-teal-600 font-semibold text-lg mb-1 block">2019 - 2022</span>
                  <h3 className="font-bold text-xl text-gray-800">B.Sc.</h3>
                  <p className="text-gray-600">Rashtrasant Tukadoji Maharaj, Nagpur University, Nagpur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;