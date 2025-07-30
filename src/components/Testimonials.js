"use client"
import { useRef } from 'react';
import Image from 'next/image';

const avatarImages = [
  "/avatar1.png",
  "/avatar2.png",
  "/avatar3.png",
  "/avatar3.png"
];

const testimonials = [
  {
    message: "Like having a sleep coach in my pocket. Awesome!",
    author: "Leo Barker",
    avatar: "/avatar1.png"
  },
  {
    message: "With AuraPod, my smart home finally feels... smart.",
    author: "Maya Clarke",
    avatar: "/avatar1.png"
  },
  {
    message: "I love seeing how my environment affects my sleep each night.",
    author: "Owen Daniels",
    avatar: "/avatar1.png"
  },
  {
    message: "It's the first app I've used that actually improved my sleep.",
    author: "Zara Miller",
    avatar: "/avatar1.png"
  },
  {
    message: "The sleep tracking is incredibly accurate and helpful.",
    author: "Sarah Johnson",
    avatar: "/avatar1.png"
  },
  {
    message: "Finally found something that actually works for me!",
    author: "Mike Peters",
    avatar: "/avatar2.png"
  },
  {
    message: "Best sleep tracking app I've ever used!",
    author: "Emma Thompson",
    avatar: "/avatar1.png"
  },
  {
    message: "The insights are incredibly detailed.",
    author: "James Wilson",
    avatar: "/avatar2.png"
  },
  {
    message: "Changed my sleeping habits completely.",
    author: "Sophie Chen",
    avatar: "/avatar1.png"
  },
  {
    message: "Simple yet powerful sleep analysis.",
    author: "David Kumar",
    avatar: "/avatar2.png"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  // Split testimonials into two rows
  const firstRowTestimonials = testimonials.slice(0, 5);
  const secondRowTestimonials = testimonials.slice(5, 10);
  
  // Duplicate testimonials for infinite slider effect
  const firstRowSlider = [...firstRowTestimonials, ...firstRowTestimonials];
  const secondRowSlider = [...secondRowTestimonials, ...secondRowTestimonials];

  return (
    <section className="min-h-screen" ref={containerRef}>
      <div className="py-24">
        {/* Header section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#28292E] text-[#CDAC67] text-lg mb-8">
              TESTIMONIALS
            </div>
            
            <h2 className="text-4xl md:text-5xl text-center font-normal tracking-[-0.02em] text-[#17181D] mb-2 max-w-3xl flex items-center justify-center flex-wrap gap-2">
              From the Mouths of Happy Users
              <span className="inline-flex relative mx-2">
                <div className="flex items-center relative">
                  {avatarImages.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-[#F4F3F0] overflow-hidden relative"
                      style={{
                        marginLeft: index === 0 ? 0 : '-8px',
                        zIndex: 4 - index,
                      }}
                    >
                      <Image
                        src={avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </span>
              To Your Ears
            </h2>
            
            <p className="text-[#17181D]/70 text-center text-xl max-w-2xl">
              AuraPod has transformed the sleep experience of over 12 million users worldwide.
            </p>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="space-y-20 overflow-hidden">
          {/* First row */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#FAF6E9] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#FAF6E9] to-transparent pointer-events-none" />
            <div className="flex animate-scroll-left gap-8 w-max mb-8" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              {firstRowSlider.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 bg-[#FAF6E9] rounded-[40px] p-5 border border-[#17181D]/[0.07] shadow-[0px_0.6px_1.8px_-0.25px_rgba(0,0,0,0.03),0px_2.3px_6.9px_-0.5px_rgba(0,0,0,0.05),0px_10px_30px_-0.75px_rgba(0,0,0,0.13)]"
                style={{
                  width: '380px',
                  height: '216px',
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="text-[#17181D] text-lg mb-4">{testimonial.message}</p>
                    <p className="text-[#17181D]/70 text-sm">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* Second row */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#FAF6E9] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#FAF6E9] to-transparent pointer-events-none" />
            <div className="flex animate-scroll-right gap-8 w-max pb-10" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              {secondRowSlider.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 bg-[#FAF6E9] rounded-[40px] p-5 border border-[#17181D]/[0.07] shadow-[0px_0.6px_1.8px_-0.25px_rgba(0,0,0,0.03),0px_2.3px_6.9px_-0.5px_rgba(0,0,0,0.05),0px_10px_30px_-0.75px_rgba(0,0,0,0.13)]"
                style={{
                  width: '380px',
                  height: '216px',
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="text-[#17181D] text-lg mb-4">{testimonial.message}</p>
                    <p className="text-[#17181D]/70 text-sm">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scrollRight 60s linear infinite;
        }
      `}</style>
    </section>
  );
}