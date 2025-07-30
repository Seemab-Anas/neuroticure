"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const iconRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Set initial state for answer content
    if (answerRef.current) {
      gsap.set(answerRef.current, {
        height: 0,
        opacity: 0,
        overflow: 'hidden'
      });
    }
  }, []);

  const toggleFAQ = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    // Create GSAP timeline for smooth animations
    const tl = gsap.timeline();

    if (newState) {
      // Opening animation
      tl.to(iconRef.current, {
        rotation: 45,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(cardRef.current, {
        backgroundColor: "#FAF6E9", // Background color when open
        duration: 0.2,
        ease: "power2.out"
      }, 0)
      .to(answerRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out"
      }, 0.1)
      .to(answerRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, 0.2);
    } else {
      // Closing animation
      tl.to(answerRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      })
      .to(answerRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0.1)
      .to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(cardRef.current, {
        backgroundColor: "#FAF6E9", 
        duration: 0.2,
        ease: "power2.out"
      }, 0);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-[#FAF6E9] rounded-[40px] shadow-lg cursor-pointer mb-4 hover:shadow-xl transition-shadow duration-300 w-full"
      onClick={toggleFAQ}
      tabIndex="0"
      data-highlight="true"
      style={{
        maxWidth: '100%',
        minHeight: '80px',
        boxShadow: "rgba(0, 0, 0, 0.03) 0px 0.602187px 1.80656px -0.25px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -0.5px, rgba(0, 0, 0, 0.13) 0px 10px 30px -0.75px"
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center">
          <div className="mr-5">
            <div ref={iconRef}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(23,24,29)]">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className="text-left text-[rgb(23,24,29)] font-semibold text-lg">
            {question}
          </div>
        </div>
        <div ref={answerRef} className="overflow-hidden">
          <div className="mt-5 pl-11 text-[rgba(23,24,29,0.7)] text-base pr-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Neuroticure and how does it work?",
      answer: "Neuroticure is a mental‑health platform that combines AI‑powered assessments, personalized therapeutic exercises, and access to licensed professionals. Our AI quickly analyzes your responses and sleep/mood tracking data to recommend tailored self‑help activities and, if needed, connect you with a certified therapist."
    },
    {
      question: "Do I need any special equipment to use Neuroticure?",
      answer: "No extra hardware is required. You can use Neuroticure on any modern smartphone or tablet (iOS 13+ or Android 8+). For sleep or mood tracking, you can manually log entries or sync data from popular wearables like Fitbit or Apple Watch."
    },
    {
      question: "What kind of therapeutic exercises does Neuroticure offer?",
      answer: "We provide evidence‑based exercises including guided mindfulness meditations, cognitive behavioral therapy (CBT) modules, mood journaling prompts, and biofeedback‑assisted breathing sessions."
    },
    {
      question: "How do I schedule a session with a licensed therapist?",
      answer: "In the app’s “Professional Guidance” tab, browse available therapists by specialization and availability. Choose a time slot, and you’ll receive a secure video‑chat link along with appointment reminders."
    },
  ];
  

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-[262px]">
        {/* Header section - centered on mobile like testimonials */}
        <div className="flex flex-col items-center lg:items-start mb-10">
          <div className="bg-[rgb(40,41,46)] h-auto rounded-[40px] inline-block px-6 py-2 mb-4">
            <p className="text-[rgb(205,172,103)]">FAQ</p>
          </div>
          <h2 className="text-4xl font-medium mb-4 text-center lg:text-left text-[rgb(23,24,29)]">
            Got Questions? <br /> We&#39;ve Got Answers
          </h2>
          <p className="text-[rgba(23,24,29,0.7)] text-xl mb-8 text-center lg:text-left font-['Open_Sans']" style={{ letterSpacing: '-0.02em', lineHeight: '28px' }}>
            Explore common questions about AuraPod
          </p>
        </div>
        
        {/* Content section - column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* FAQ items section */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <div className="flex flex-col items-start space-y-6">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
          
          {/* Image section - below FAQs on mobile, side by side on desktop */}
          <div className="w-full lg:w-1/2 lg:pt-0">
            <div className="relative w-full max-w-[585px] mx-auto lg:mx-0">
              <Image 
                src="/faq.jpg" 
                alt="AuraPod FAQ" 
                width={585} 
                height={776}
                className="rounded-[20%] object-cover h-full w-full"
              />
              <div className="absolute bottom-8 left-0 right-0 bg-[rgb(40,41,46)] rounded-[40px] w-80 mx-auto p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 mr-4">
                    <Image 
                      src="/faq.jpg" 
                      alt="Ava Sinclair" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[rgb(244,243,240)]">
                      I&#39;ve never understood my sleep patterns this clearly before.
                    </p>
                    <p className="text-[rgb(205,172,103)]">
                      Ava Sinclair
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;