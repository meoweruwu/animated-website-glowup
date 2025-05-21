
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, detailsLink }) => {
  return (
    <div className="w-full max-w-4xl rounded-3xl bg-black/20 backdrop-blur-sm p-1 
                    overflow-hidden transition-all duration-444 hover:scale-[1.01] neon-border">
      <div className="rounded-[22px] bg-gradient-to-br from-black via-zillex-purple/20 to-black 
                      p-8 md:p-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-mono font-semibold text-white mb-6">{title}</h2>
        
        <a 
          href={detailsLink}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
                     bg-zillex-light-purple/50 hover:bg-zillex-light-purple 
                     transition-all duration-300 text-white"
        >
          Details <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
