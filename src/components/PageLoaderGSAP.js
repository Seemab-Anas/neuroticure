// components/PageLoaderGSAP.js
// First install GSAP: npm install gsap
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoaderGSAP = ({ pageName, onComplete }) => {
  const loaderRef = useRef(null);
  const leftPartRef = useRef(null);
  const rightPartRef = useRef(null);
  const visiblePartRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup - completely hide left and right parts, show only middle
    gsap.set([leftPartRef.current, rightPartRef.current], {
      x: 0,
    });

    // Animate the reveal - much slower timing
    tl.to(leftPartRef.current, {
      x: '-100%',
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 1,
    })
    .to(rightPartRef.current, {
      x: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    }, '<'); // Start at the same time as previous animation

    // Hide loader after animation - slide up to reveal page
    const hideTimer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }, 5000); // Increased from 3000 to 5000

    return () => {
      clearTimeout(hideTimer);
      tl.kill();
    };
  }, [onComplete]);

  const getDisplayText = () => {
    switch (pageName.toLowerCase()) {
      case 'contact':
        return { full: 'CONTACT', left: 'CON', visible: 'T', right: 'ACT' };
      case 'home':
        return { full: 'NEUROTICURE', left: 'NEURO', visible: 'T', right: 'CURE' };
      case 'aboutus':
        return { full: 'ABOUT US', left: 'ABO', visible: 'U', right: 'T US' };
      default:
        return { full: pageName.toUpperCase(), left: '', visible: pageName.charAt(0), right: '' };
    }
  };

  const textData = getDisplayText();

  return (
    <div ref={loaderRef} className="loading-screen">
      <div className="text-container">
        {/* Full word always visible but parts covered by boxes */}
        <span ref={visiblePartRef} className="full-text">{textData.full}</span>
        
        {/* Empty covering boxes - no text, just background color */}
        <div ref={leftPartRef} className="text-part left-part"></div>
        <div ref={rightPartRef} className="text-part right-part"></div>
      </div>

      {/* Loading progress indicator */}
      <div className="loading-indicator">
        <div className="progress-bar"></div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #FAF6E9;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .text-container {
          display: flex;
          align-items: center;
          font-family: 'Arial Black', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: #333;
          letter-spacing: 0.1em;
          overflow: visible;
          margin-bottom: 2rem;
          position: relative;
        }

        .text-part {
          position: relative;
          display: inline-block;
        }

        .left-part,
        .right-part {
          background: #FAF6E9;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 120%;
          z-index: 3;
        }

        .left-part {
          left: 0;
          right: 50%; /* Covers left half, stops at middle */
        }

        .right-part {
          left: 50%; /* Starts from middle, covers right half */
          right: 0;
        }

        .visible-part {
          z-index: 1;
          position: relative;
        }

        .full-text {
          color: #333;
          position: relative;
          z-index: 2;
        }

        .loading-indicator {
          width: 200px;
          height: 4px;
          background: rgba(51, 51, 51, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #333, transparent);
          animation: loading 3s ease-in-out infinite;
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .text-container {
            font-size: 2.5rem;
          }
          .loading-indicator {
            width: 150px;
          }
        }

        @media (max-width: 480px) {
          .text-container {
            font-size: 2rem;
          }
          .loading-indicator {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoaderGSAP;