'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhatWeDo() {
  const dynamicImageRef = useRef(null);
  const nextImageRef = useRef(null);
  const smallDecorativeCurrentRef = useRef(null);
  const smallDecorativeNextRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    {
      title: "AI-Powered Diagnostics",
      description: "Our smart tools use AI to provide quick, reliable assessments of mental health conditions, ensuring early detection and intervention.",
      image: "/whatWeDo/card1.png",
      innerImage: "/whatWeDo/card1inner.png",
      icon: "/whatWeDo/icon1.png"
    },
    {
      title: "Therapeutic Solutions",
      description: "We offer evidence-based therapeutic exercises and self-help resources tailored to individual needs for a holistic mental health approach.",
      image: "/whatWeDo/card2.png",
      innerImage: "/whatWeDo/card2inner.png",
      icon: "/whatWeDo/icon2.png"
    },
    {
      title: "Professional Guidance",
      description: "Connecting users with certified therapists and counselors for personalized care and professional support.",
      image: "/whatWeDo/card3.png",
      innerImage: "/whatWeDo/card3inner.png",
      icon: "/whatWeDo/icon3.svg"
    },
    {
      title: "Mood Tracking",
      description: "Monitor your emotional well-being with intelligent mood tracking that helps identify patterns and suggests personalized interventions.",
      image: "/whatWeDo/card4.png",
      innerImage: "/whatWeDo/card4inner.png",
      icon: "/whatWeDo/icon4.svg"
    }
  ];

  const images = features.map(feature => feature.image);
  const smallImages = features.map(feature => feature.innerImage);

  useEffect(() => {
    // Only apply animations on desktop/tablet screens
    if (window.innerWidth >= 768) {
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger);

      const dynamicImage = dynamicImageRef.current;
      const nextImage = nextImageRef.current;
      const smallDecorativeCurrent = smallDecorativeCurrentRef.current;
      const smallDecorativeNext = smallDecorativeNextRef.current;

      function changeImage(index) {
        // Only change if it's a different image
        if (dynamicImage.src.includes(images[index].split('/').pop())) return;
        
        // Set the next image source
        nextImage.src = images[index];
        
        // Cross-fade between main images with smooth transition
        gsap.to(dynamicImage, { 
          opacity: 0, 
          duration: 0.8,
          ease: "power2.inOut"
        });
        gsap.to(nextImage, { 
          opacity: 1, 
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            // Swap the images
            dynamicImage.src = images[index];
            gsap.set(dynamicImage, { opacity: 1 });
            gsap.set(nextImage, { opacity: 0 });
          }
        });

        // Small decorative image slider effect
        smallDecorativeNext.src = smallImages[index];
        gsap.set(smallDecorativeNext, { 
          y: "100%", 
          opacity: 0 
        });

        // Create a timeline for simultaneous animations
        const tl = gsap.timeline();
        
        // Animate current image: move up and fade out
        tl.to(smallDecorativeCurrent, {
          y: "-100%",
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut"
        }, 0) // Start at time 0
        
        // Animate next image: move in from below and fade in
        .to(smallDecorativeNext, {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            // Swap the images and reset positions
            smallDecorativeCurrent.src = smallImages[index];
            gsap.set(smallDecorativeCurrent, { 
              y: 0,
              opacity: 1 
            });
            gsap.set(smallDecorativeNext, { 
              y: "100%",
              opacity: 0 
            });
          }
        }, 0); // Also start at time 0 for simultaneous animation
      }

      // Set up scroll triggers for each card
      cardsRef.current.forEach((card, index) => {
        if (card) {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => changeImage(index),
            onEnterBack: () => changeImage(index)
          });
        }
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else {
      // For mobile, set the first image as default
      if (dynamicImageRef.current) {
        dynamicImageRef.current.src = images[0];
      }
      if (smallDecorativeCurrentRef.current) {
        smallDecorativeCurrentRef.current.src = smallImages[0];
      }
    }
  }, []);

  return (
    <section className="min-h-screen">
      {/* Title Section */}
      <div className="text-center mt-30">
        <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-lg tracking-tighter mb-4">
          FEATURES
        </div>
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-2 text-[#17181D]">
          The Science of Better Sleep
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
          Smart technology to personalize your sleep journey
        </p>
      </div>
      
    {/* Desktop layout with scroll animation */}
    <div className="w-full hidden md:flex items-start px-4 md:px-8 lg:px-16 xl:px-[262px]">
      {/* Left content column - 45% width with minimum width to ensure readability */}
      <div className="w-[45%] min-w-[300px] p-2 min-h-screen flex flex-col gap-8 overflow-y-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="w-full card" 
            data-image={index}
            style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
          >
            <div className="flex flex-col items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-xl p-2">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full">
                <h3 className="text-3xl font-medium tracking-tighter text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-xl tracking-tighter text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right image column - 55% width to ensure image is large enough */}
      <div className="w-[55%] sticky top-0 flex items-center justify-center">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="relative w-full max-w-[600px] mx-auto">
            {/* Inner card image */}
            <div className="absolute inset-x-0 bottom-5 z-10 transition-transform duration-300 scale-75">
              <img 
                ref={smallDecorativeCurrentRef}
                id="small-decorative-current" 
                src="/whatWeDo/card1inner.png" 
                alt="Current small decorative image" 
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <img 
                ref={smallDecorativeNextRef}
                id="small-decorative-next" 
                alt="Next small decorative image" 
                width={500}
                height={300}
                className="w-full h-auto absolute top-0 left-0 opacity-0"
              />
            </div>
            {/* Main card image */}
            <div className="rounded-[32px] overflow-hidden transition-transform duration-300 w-full">
              <img 
                ref={dynamicImageRef}
                id="dynamic-image" 
                src="/whatWeDo/card1.png" 
                alt="Dynamic image" 
                width={600}
                height={450}
                className="w-full h-auto object-contain"
              />
              <img 
                ref={nextImageRef}
                id="next-image" 
                alt="Next image" 
                width={600}
                height={450}
                className="w-full h-auto object-contain absolute top-0 left-0 opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Mobile layout with static content in column format */}
    <div className="md:hidden px-4 py-8">
      {features.map((feature, index) => (
        <div key={index} className="mb-16">
          <div className="flex flex-col items-start gap-6">
            {/* Content section */}
            <div className="w-full">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl p-2 mb-4">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium tracking-tighter text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-lg tracking-tighter text-gray-700 leading-relaxed mb-8">
                {feature.description}
              </p>
            </div>
            
            {/* Image section */}
            <div className="w-full relative rounded-[20px] overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-auto"
              />
              <div className="absolute inset-x-0 bottom-4 flex justify-center">
                <div className="w-3/4 scale-75">
                  <img 
                    src={feature.innerImage} 
                    alt="" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}