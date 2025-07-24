'use client';

import React from 'react';

const PageHeader = ({ 
  backgroundImage = '/contactUs/back.webp',
  badge,
  title,
  description,
  decorativeImages = [
    { src: '/contactUs/p1.webp', position: 'top-[-20px] left-[-20px]', size: 'w-16 h-16' },
    { src: '/contactUs/p2.webp', position: 'top-[-30px] right-[-30px]', size: 'w-24 h-24' },
    { src: '/contactUs/p3.webp', position: 'bottom-[-45px] left-[-45px]', size: 'w-20 h-20' },
    { src: '/contactUs/p4.webp', position: 'bottom-[-15px] right-[-15px]', size: 'w-18 h-18' },
  ]
}) => {
  return (
    <div 
      className="rounded-b-[50px] relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center" 
      style={{backgroundImage: `url(${backgroundImage})`, height: '650.151px'}}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative z-10">
          {/* Header Content */}
          <div className="text-center mb-12 relative p-8 rounded-3xl">
            {/* Decorative Images positioned at corners of this div */}
            {decorativeImages.map((image, index) => (
              <div key={index} className={`absolute ${image.position} ${image.size} z-10`}>
                <img 
                  src={image.src} 
                  alt="Decorative" 
                  className="w-full h-full object-cover rounded-full shadow-lg" 
                />
              </div>
            ))}
            
            <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-lg tracking-tighter mb-4">
              {badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-2 text-[#17181D]">
              {title}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
