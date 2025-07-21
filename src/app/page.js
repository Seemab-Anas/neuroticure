import React from 'react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FloatingCards from '@/components/FloatingCards';
import LogoSlider from '@/components/LogoSlider';
import WhatWeDo from '@/components/WhatWeDo';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FloatingCards />
      <LogoSlider />
      <WhatWeDo />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Hero />
      <Footer />
    </main>
  );
}