import React from 'react'
import Hero from '@/components/Hero';
import FloatingCards from '@/components/FloatingCards';
import LogoSlider from '@/components/LogoSlider';
import WhatWeDo from '@/components/WhatWeDo';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function page() {
  return (
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
  );
}