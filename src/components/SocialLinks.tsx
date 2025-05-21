
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SocialLinksProps {
  links: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-zillex-light-purple flex items-center justify-center 
                     transition-all duration-300 hover:scale-110 hover:bg-zillex-purple neon-border"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
