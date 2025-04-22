import React from 'react';
import SocialLinks from './SocialLinks';
import { Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 mb-6">
              Ready to turn your data nightmares into insights? 
              <br />
              <span className="text-teal-400">I promise to make Excel behave... mostly 😉</span>
            </p>
            <SocialLinks iconColor="text-white" iconSize={24} />
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:nehabagaswar28@gmail.com"
              className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300"
            >
              <Mail className="mr-2" size={20} />
              nehabagaswar28@gmail.com
            </a>
            <div className="flex items-center text-gray-300">
              <MapPin className="mr-2" size={20} />
              Nagpur, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;