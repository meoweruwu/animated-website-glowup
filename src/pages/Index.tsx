
import React, { useEffect, useState } from 'react';
import StarBackground from '../components/StarBackground';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: 'Discord',
      url: '#',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"></path>
          <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"></path>
          <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"></path>
          <path d="M8.7 10.7L15.3 7.3"></path>
          <path d="M8.7 13.3L15.3 16.7"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden gradient-bg">
      <StarBackground />
      
      <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 
                       transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-8">
          <div className="text-white/80 text-xl md:text-2xl mb-2 animate-fade-in">The Work Of:</div>
          <h1 className="text-zillex-pink text-6xl md:text-8xl font-bold mb-4 animate-float glow-text">
            ZILLEX
          </h1>
        </div>

        <SocialLinks links={socialLinks} />
        
        <div className="mt-12 w-full max-w-4xl animate-pulse-light">
          <ProjectCard 
            title="Terrain Serializer" 
            detailsLink="#details" 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
