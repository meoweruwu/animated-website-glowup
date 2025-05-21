
import React, { useEffect, useState } from 'react';
import StarBackground from '../components/StarBackground';

const TerrainSerializer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden gradient-bg">
      <StarBackground />
      
      <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>



      </div>
    </div>
  );
};

export default TerrainSerializer;
