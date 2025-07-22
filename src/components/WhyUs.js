"use client"
import Image from 'next/image';

export default function WhyUs() {
  const cards = [
    {
      title: "Science-Backed Methods",
      description: "Our techniques are grounded in neuroscience and sleep research, ensuring effective and reliable results.",
      icon: "/whyus/icon1.svg",
      background: "/whyus/card1.webp"
    },
    {
      title: "Personalized Experience",
      description: "Adaptive technology that learns and adjusts to your unique sleep patterns and preferences.",
      icon: "/whyus/icon2.svg",
      background: "/whyus/card2.webp"
    },
    {
      title: "Continuous Support",
      description: "24/7 access to resources and guidance to help you maintain healthy sleep habits.",
      icon: "/whyus/icon3.svg",
      background: "/whyus/card3.webp"
    },
    {
      title: "Privacy First",
      description: "Your data is encrypted and protected, ensuring your sleep information stays completely private.",
      icon: "/whyus/icon4.svg",
      background: "/whyus/card4.webp"
    }
  ];

  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 w-full">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-lg tracking-tighter mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-2 text-[#17181D]">
            The Science of Better Sleep
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
            We combine cutting-edge technology with proven sleep science to help you achieve your best rest yet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative rounded-[50px] overflow-hidden group transition-all duration-300 aspect-square"
              style={{
                backgroundImage: `url(${card.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0" />
              <div className="relative z-10 p-5 flex flex-col items-start h-full">
                <div className="flex-shrink-0 mb-6">
                  <Image
                    src={card.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-medium tracking-tighter mb-4 text-white">
                    {card.title}
                  </h3>
                  <p className="text-lg text-white/90 tracking-tighter leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
