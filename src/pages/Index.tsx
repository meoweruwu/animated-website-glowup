
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
      name: 'Roblox',
      url: 'https://www.roblox.com/users/93386486/profile',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<title id="icons05-icon-1-title">Roblox</title>
			<path d="M29.8,37L3,29.8L10.2,3l13.4,3.6L37,10.2L29.8,37z M24.7,17.3l-7.5-2.1l-2,7.5l7.5,2.1L24.7,17.3z"/></svg>
      ),
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/mDFWsvDA',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M33.2,8.3c-2.5-1.1-5.1-1.9-7.9-2.4c-0.3,0.6-0.7,1.4-1,2c-2.9-0.4-5.8-0.4-8.7,0c-0.3-0.6-0.7-1.4-1-2 c-2.8,0.5-5.4,1.3-7.9,2.4c-5,7.2-6.3,14.2-5.6,21.1c3.3,2.3,6.5,3.8,9.6,4.7c0.8-1,1.5-2.1,2.1-3.3c-1.1-0.4-2.2-0.9-3.2-1.5 c0.3-0.2,0.5-0.4,0.8-0.6c6.3,2.8,13,2.8,19.2,0c0.3,0.2,0.5,0.4,0.8,0.6c-1,0.6-2.1,1.1-3.2,1.5c0.6,1.1,1.3,2.2,2.1,3.3 c3.1-0.9,6.3-2.4,9.6-4.7C39.7,21.4,37.5,14.4,33.2,8.3z M13.7,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C17.1,23.4,15.6,25.1,13.7,25.1z M26.3,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C29.7,23.4,28.2,25.1,26.3,25.1z"/>
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
