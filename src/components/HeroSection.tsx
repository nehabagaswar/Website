import React from 'react';
import SocialLinks from './SocialLinks';
import { Database, BarChart2, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 to-blue-500 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s linear infinite`,
                opacity: 0.1
              }}
            >
              {i % 3 === 0 ? (
                <Database size={24} />
              ) : i % 3 === 1 ? (
                <BarChart2 size={24} />
              ) : (
                <TrendingUp size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="z-10 text-center px-4">
        <div className="animate-slideInDown">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Neha Bagaswar</h1>
          <h2 className="text-xl md:text-2xl mb-8">Data & Business Analyst</h2>
        </div>
        
        <p className="max-w-lg mx-auto text-lg mb-10 animate-slideInUp">
          Because someone has to make sense of all these numbers... 
          <br />
          <span className="text-teal-300 italic">
            (and pretend Excel crashes are part of the plan 😉)
          </span>
        </p>
        
        <SocialLinks className="justify-center animate-fadeIn" iconColor="text-white" iconSize={24} />
        
        <div className="mt-12 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-white text-teal-600 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white hover:text-teal-300 transition-colors duration-300"
        >
          <BarChart2 size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;