
import React, { useEffect, useState } from 'react';
import seedrandom from 'seedrandom'

const rng = seedrandom('test')

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationClass: string;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000) + 500;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        const animationClasses = ['animate-twinkle-1', 'animate-twinkle-2', 'animate-twinkle-3', 'animate-twinkle-4', 'animate-twinkle-5', 'animate-twinkle-6'];
        newStars.push({
          id: i,
          x: rng() * 100,
          y: rng() * 100,
          size: rng() * 2 + 1,
          animationClass: animationClasses[Math.floor(rng() * animationClasses.length)]
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.animationClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
