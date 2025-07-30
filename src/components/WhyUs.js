"use client"
import Image from 'next/image';

export default function WhyUs() {
  const cards = [
    {
      title: "Affordable and Scalable",
      description: "Neuroticure ensures cost-effective care through free and premium app features, making mental health support accessible to a wide audience.",
      icon: "/whyUs/icon1.svg",
      background: "/whyUs/card1.jpg"
    },
    {
      title: "Culturally Sensitive",
      description: "Our platform is designed with inclusivity in mind, offering solutions that respect diverse cultural and social contexts.",
      icon: "/whyUs/icon2.svg",
      background: "/whyUs/card2.jpg"
    },
    {
      title: "AI-driven Care",
      description: "By combining the latest in artificial intelligence with human-centered care, Neuroticure delivers personalized, data-backed mental health support.",
      icon: "/whyUs/icon3.svg",
      background: "/whyUs/card3.jpg"
    },
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

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.background}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Base Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-1000 ease-out group-hover:bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Icon */}
                <div className="flex justify-start">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
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