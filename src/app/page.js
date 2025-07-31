'use client';
import React from 'react'
import Hero from '@/components/Hero';
import FloatingCards from '@/components/FloatingCards';
import LogoSlider from '@/components/LogoSlider';
import WhatWeDo from '@/components/WhatWeDo';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import PageLoaderGSAP from '@/components/PageLoaderGSAP';
import { useState, useEffect } from 'react';


export default function Page() {

  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      
      {showLoader && (
        <PageLoaderGSAP 
          pageName="home" 
          onComplete={handleLoaderComplete}
        />
      )}

    <main className="min-h-screen">
      <Hero />
      <FloatingCards />
      <LogoSlider />
      <WhatWeDo />
      <WhyUs /> 
      <Testimonials />
      <FAQ /> 
      <Hero />
    </main>
    </>
  );
}