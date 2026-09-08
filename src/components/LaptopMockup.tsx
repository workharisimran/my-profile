import React from 'react';
import Image from 'next/image';
import { WebsiteItem } from '@/lib/types';

interface LaptopMockupProps {
  item: WebsiteItem;
  className?: string;
}

export default function LaptopMockup({ item, className = '' }: LaptopMockupProps) {
  const accentColor = item.accentColor || item.brandColor || '#00f59b';

  return (
    <div
      className={`showcase-image-frame ${className}`}
      style={{ '--mockup-accent': accentColor } as React.CSSProperties}
    >
      {/* Ambient Backlight Glow */}
      <div className="showcase-img-glow" aria-hidden="true" />

      {/* Direct Full-Size Laptop Mockup Image */}
      <div className="showcase-img-container">
        <Image
          src={item.image}
          alt={`${item.name} laptop mockup`}
          width={900}
          height={560}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="showcase-mockup-img"
          priority={item.id <= 3}
        />
      </div>
    </div>
  );
}
