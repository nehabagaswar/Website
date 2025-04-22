import React from 'react';
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Google Digital Marketing & E-commerce Certification',
    issuer: 'Google',
    icon: '🔍'
  },
  {
    id: 2,
    name: 'HubSpot Content Marketing Certification',
    issuer: 'HubSpot',
    icon: '📝'
  },
  {
    id: 3,
    name: 'Facebook Blueprint Certification',
    issuer: 'Facebook',
    icon: '📱'
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Certifications" />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl">{cert.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;