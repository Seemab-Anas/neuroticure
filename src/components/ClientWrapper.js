'use client';

import { useState, useEffect } from 'react';
import PageLoaderGSAP from './PageLoaderGSAP';

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <PageLoaderGSAP 
          pageName="home" 
          onComplete={handleLoadingComplete} 
        />
      )}
      {!isLoading && children}
    </>
  );
}
