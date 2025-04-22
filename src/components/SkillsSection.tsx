import React from 'react';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    category: 'Technical',
    skills: [
      'Python (Pandas, NumPy, Matplotlib, Seaborn)',
      'SQL',
      'Excel',
      'Power BI'
    ]
  },
  {
    category: 'Analytical',
    skills: [
      'Data Analysis',
      'Market Research',
      'Strategic Planning',
      'Competitive Analysis'
    ]
  },
  {
    category: 'Communication',
    skills: [
      'Client Engagement',
      'Presentation',
      'Stakeholder Management'
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills" />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="animate-fadeIn"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-center text-xl font-semibold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <p className="text-gray-700 text-center">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;