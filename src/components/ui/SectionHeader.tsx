import React from 'react';
import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} ${className}`}>
      <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sand text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
