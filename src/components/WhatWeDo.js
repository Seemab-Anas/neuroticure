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
      // Set the next small image source and position it below using y transform
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
  }, []);

  return (
    <section className="min-h-screen">
      {/* Title Section */}
      <div className="text-center mt-10">
        <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-sm tracking-tighter mb-4">
          FEATURES
        </div>
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-6 text-[#17181D]">
          The Science of Better Sleep
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
          Smart technology to personalize your sleep journey
        </p>
      </div>
      
    <div className="w-full flex items-start" style={{ padding: '0 262px' }}>
      <div style={{ width: '568.995px' }} className="p-2 min-h-screen flex flex-col gap-8 overflow-y-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="max-w-xl card" 
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
              <div className="max-w-sm">
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
      
      <div className="flex-1 p-4 sticky top-0">
        <div className="p-4 flex items-center justify-center relative" style={{ height: '100vh' }}>
          <div className="relative">
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
            <div className="rounded-[32px] overflow-hidden transition-transform duration-300">
              <img 
                ref={dynamicImageRef}
                id="dynamic-image" 
                src="/whatWeDo/card1.png" 
                alt="Dynamic image" 
                width={600}
                height={450}
              />
              <img 
                ref={nextImageRef}
                id="next-image" 
                alt="Next image" 
                width={600}
                height={450}
                className="w-full h-auto absolute top-0 left-0 opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}