"use client"
import Image from 'next/image';

export default function LogoSlider() {
  // Create an array of logos for the infinite scroll effect
  const logos = Array(10).fill('/logotemp.svg');

  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 mt-10 md:mt-20 lg:px-8">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#FAF6E9] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#FAF6E9] to-transparent pointer-events-none" />
        
        {/* Slider container */}
        <div className="relative overflow-hidden">
          {/* Infinite scroll track */}
          <div className="flex animate-scroll gap-4 md:gap-20 py-4 md:py-12">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-none w-36 h-20 md:w-48 md:h-24 relative">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-none w-36 h-20 md:w-48 md:h-24 relative">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
