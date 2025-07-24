"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function FloatingCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Set up refs array
    cardsRef.current = cardsRef.current.slice(0, 5);

    // GSAP Context for cleanup
    const ctx = gsap.context(() => {
      // Set initial positions and properties
      gsap.set(cardsRef.current, {
        transformOrigin: "center center",
        filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))",
        width: "" // Prevent GSAP from changing the width
      });

      // Create floating animations for each card with different timings
      const animationConfigs = [
        { duration: 4, delay: -1 },
        { duration: 5, delay: -2 },
        { duration: 4.5, delay: -3 },
        { duration: 5.5, delay: -1.5 },
        { duration: 4.8, delay: -2.5 }
      ];

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const config = animationConfigs[index];
          
          // Create main timeline for each card
          const mainTl = gsap.timeline({ 
            repeat: -1, 
            yoyo: true,
            delay: config.delay 
          });

          // Main floating animation (X movement)
          mainTl.to(card, {
            x: 15,
            duration: config.duration / 2,
            ease: "power2.inOut"
          });

          // Scale animation with dynamic shadow
          gsap.to(card, {
            scale: 1.05 + (index * 0.01),
            filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.25))",
            duration: config.duration * 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: config.delay + 0.3
          });

          
          // Additional gentle scale pulsing with lighter shadow
          gsap.to(card, {
            scale: 0.98,
            filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))",
            duration: config.duration * 0.6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: config.delay + 1.2
          });
        }
      });

      // Parallax effects for each card with different scroll speeds
      const parallaxSpeeds = [0.3, 0.9, 2, 0.4, 1.2]; // Different speeds for each card
      
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -100 * parallaxSpeeds[index],
            ease: "none"
          });
        }
      });

      // Container parallax (slower baseline movement)
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: 1,
        },
        y: -20,
        ease: "none"
      });

    }, containerRef);

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  // Helper function to add refs
  const addToRefs = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-6 mt-10 md:mt-20 lg:px-8">
        <div className="relative w-full flex justify-center">
          {/* Left side cards - hidden on mobile */}
          <div 
            ref={(el) => addToRefs(el, 0)}
            className="floating-card absolute w-[343px] top-[189px] left-[0px] z-10 hidden md:block"
            data-scroll-speed="0.3"
          >
            <Image src="/card1.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            ref={(el) => addToRefs(el, 1)}
            className="floating-card absolute w-[343px] top-[325px] left-[80px] z-10 hidden md:block"
            data-scroll-speed="0.5"
          >
            <Image src="/card2.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            ref={(el) => addToRefs(el, 2)}
            className="floating-card absolute w-[273px] top-[461px] left-[48px] z-10 hidden md:block"
            data-scroll-speed="0.7"
          >
            <Image src="/card3.webp" alt="Feature card" width={273} height={200} />
          </div>

          {/* Right side cards - hidden on mobile */}
          <div 
            ref={(el) => addToRefs(el, 3)}
            className="floating-card absolute w-[343px] top-[312px] right-[0px] z-10 hidden md:block"
            data-scroll-speed="0.4"
          >
            <Image src="/card4.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            ref={(el) => addToRefs(el, 4)}
            className="floating-card absolute w-[343px] top-[426px] right-[80px] z-10 hidden md:block"
            data-scroll-speed="0.6"
          >
            <Image src="/card5.svg" alt="Feature card" width={343} height={200} />
          </div>

          {/* Center mobile image - always visible */}
          <div className="relative z-0 py-5 md:py-0 flex justify-center w-full">
            <div className="w-full px-4 md:w-auto md:max-w-[350px] md:px-0">
              <Image 
                src="/card6.webp" 
                alt="Mobile app" 
                width={500} 
                height={1000}
                priority
                className="object-contain h-auto w-full md:w-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}