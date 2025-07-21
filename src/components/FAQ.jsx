"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-[rgb(228,225,214)] rounded-[40px] shadow-lg cursor-pointer mb-4"
      onClick={() => setIsOpen(!isOpen)}
      tabIndex="0"
      data-highlight="true"
      style={{
        width: '419.986px',
        minHeight: '80px',
        boxShadow: "rgba(0, 0, 0, 0.03) 0px 0.602187px 1.80656px -0.25px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -0.5px, rgba(0, 0, 0, 0.13) 0px 10px 30px -0.75px",
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center">
          <div className="mr-5">
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
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
        {isOpen && (
          <div className="mt-5 pl-11 text-[rgba(23,24,29,0.7)] text-base pr-4">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How does AuraPod help me sleep better?",
      answer: "AuraPod uses advanced sound technology to create a personalized audio environment that adapts to your sleep patterns. Our AI-driven system monitors your sleep stages and adjusts sounds in real-time to promote deeper, more restful sleep."
    },
    {
      question: "Is AuraPod compatible with my existing devices?",
      answer: "Yes, AuraPod is designed to work seamlessly with most smartphones, tablets, and smart home systems. Our app is available for both iOS and Android, and integrates with popular platforms like Apple HomeKit, Google Home, and Amazon Alexa."
    },
    {
      question: "How long does the battery last?",
      answer: "AuraPod features an energy-efficient design with a battery life of up to 10 hours on a single charge. The included fast-charging technology allows you to fully recharge in just 90 minutes."
    },
    {
      question: "Can I customize the sounds?",
      answer: "Absolutely! AuraPod comes with a library of over 50 high-quality sounds, from nature sounds to white noise. You can also create custom sound mixes, adjust frequencies, and set personalized sound schedules through our intuitive app."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto" style={{ paddingLeft: '262px', paddingRight: '262px' }}>
        <div className="flex flex-wrap justify-between">
          <div className="flex-1 pr-8">
            <div className="bg-[rgb(40,41,46)] h-auto rounded-[40px] inline-block px-6 py-2 mb-4">
              <p className="text-[rgb(205,172,103)]">FAQ</p>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-left text-[rgb(23,24,29)]">
              Got Questions? <br /> We've Got Answers
            </h2>
            <p className="text-[rgba(23,24,29,0.7)] text-xl mb-8 text-left font-['Open_Sans']" style={{ letterSpacing: '-0.02em', lineHeight: '28px' }}>
              Explore common questions about AuraPod
            </p>
            
            <div className="flex flex-col items-start space-y-6">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
          
          <div className="flex-1 pt-8">
            <div className="relative w-[100%]">
              <Image 
                src="/faq.jpg" 
                alt="AuraPod FAQ" 
                width={585} 
                height={776}
                className="rounded-[20%] object-cover h-full w-full"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-[rgb(40,41,46)] rounded-[40px] w-80 mx-auto p-6 shadow-lg">
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
                      I've never understood my sleep patterns this clearly before.
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
