import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const PageLoaderGSAP = ({ pageName, onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Animate logo entrance
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );
    }

    // Set minimum loading time
    const minLoadingTime = 2000; // 2 seconds minimum
    const startTime = Date.now();

    const handleComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            y: '-100%',
            duration: 1.2,
            ease: 'power2.inOut',
            borderRadius: '50%',
            onComplete: () => {
              sessionStorage.setItem('loaderShown', 'true');
              if (onComplete) onComplete();
            },
          });
        }
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      // Fallback timeout
      const fallbackTimeout = setTimeout(handleComplete, 5000);
      
      return () => {
        window.removeEventListener('load', handleComplete);
        clearTimeout(fallbackTimeout);
      };
    }
  }, [onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <div ref={loaderRef} className="loading-screen">
      <div className="logo-container">
        <div ref={logoRef} className="logo-wrapper">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={200} 
            height={200}
            className="logo-image"
            priority
          />
        </div>
      </div>

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
          border-radius: 0;
          transition: border-radius 1.2s ease-in-out;
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
          width: 200px;
          height: 200px;
        }

        .logo-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-image {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
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
          background: linear-gradient(90deg, #23456C, #1C9454);
          animation: loading 3s ease-in-out infinite;
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 150px;
            height: 150px;
          }
          .loading-indicator {
            width: 150px;
          }
        }

        @media (max-width: 480px) {
          .logo-container {
            width: 120px;
            height: 120px;
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