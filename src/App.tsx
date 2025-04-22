import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  React.useEffect(() => {
    document.title = "Neha Bagaswar – Data & Business Analyst Portfolio";
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp, .animate-slideIn').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp, .animate-slideIn').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <EducationSection />
      <Footer />
    </div>
  );
}

export default App;