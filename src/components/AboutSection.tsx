import React from 'react';
import SectionTitle from './SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6 animate-fadeIn">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">🚀</span> <strong>Working on:</strong> Developing data analytics projects with Python & SQL (and sometimes my code fights back 😅)
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">🤝</span> <strong>Collaborate on:</strong> Data projects, creative visualizations, or ML experiments 📊
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">🤔</span> <strong>Need help with:</strong> Cloud data pipelines & ETL automation (my coffee is my best friend ☕)
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">📚</span> <strong>Learning:</strong> Advanced ML with scikit-learn & TensorFlow 🤖
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">❓</span> <strong>Ask about:</strong> Python data wrangling & Power BI dashboards 🔍
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <p className="text-lg leading-relaxed">
                <span className="text-2xl">🎉</span> <strong>Fun fact:</strong> I once spent a weekend cleaning data… and it was already clean! 😂
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;