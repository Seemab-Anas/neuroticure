'use client';

import { useState, useEffect } from 'react';
import PageLoaderGSAP from './PageLoaderGSAP';

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const checkAssetsLoaded = () => {
      // Wait for document to be ready
      if (document.readyState !== 'complete') {
        return false;
      }

      // Check if all images are loaded
      const images = document.querySelectorAll('img');
      const allImagesLoaded = Array.from(images).every(img => {
        return img.complete && img.naturalHeight !== 0;
      });

      // Check if fonts are loaded
      const fontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();

      return allImagesLoaded && fontsLoaded;
    };

    const waitForAssets = async () => {
      // Wait for window load event first
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }

      // Wait for fonts to be ready
      if (document.fonts) {
        await document.fonts.ready;
      }

      // Additional check for images with a small delay
      await new Promise(resolve => setTimeout(resolve, 100));

      // Final check for all images
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to prevent hanging
          // Fallback timeout
          setTimeout(resolve, 3000);
        });
      });

      await Promise.all(imagePromises);
      
      // Small delay to ensure rendering is complete
      await new Promise(resolve => setTimeout(resolve, 200));
      
      setAssetsLoaded(true);
    };

    waitForAssets();
  }, []);

  const handleLoadingComplete = () => {
    // Animation completed, now hide the loader
    setIsLoading(false);
  };

  // Trigger loader completion when assets are loaded
  useEffect(() => {
    if (assetsLoaded && isLoading) {
      // Assets are loaded, signal the loader to start its exit animation
      // The PageLoaderGSAP component will handle the animation and call handleLoadingComplete when done
    }
  }, [assetsLoaded, isLoading]);

  return (
    <>
      {isLoading && (
        <PageLoaderGSAP 
          pageName="home" 
          onComplete={handleLoadingComplete}
          assetsLoaded={assetsLoaded}
        />
      )}
      {!isLoading && children}
    </>
  );
}
