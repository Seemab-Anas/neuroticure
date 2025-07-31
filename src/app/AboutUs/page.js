'use client';
import React from 'react'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import PageLoaderGSAP from '@/components/PageLoaderGSAP'
import { useState, useEffect } from 'react';

const Page = () => {

  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && (
        <PageLoaderGSAP 
          pageName="aboutus" 
          onComplete={handleLoaderComplete}
        />
      )}

      <PageHeader 
        backgroundImage="/contactUs/back.webp"
        badge="ABOUT US"
        title="Get to Know Neuroticure Better"
        description="At Neuroticure, we are driven by a mission to blend technology with neuroscience to improve lives. Discover who we are, what we stand for, and the vision that powers our innovation."
      />
      
      {/* Our Vision Section */}
      <div className="vision-section py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Vision Heading - Left */}
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#17181D]">
                Our Vision
              </h2>
            </div>
            
            {/* Vision Text - Right */}
            <div className="w-full md:w-3/5 mt-20">
              <p className="text-xl font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                At Neuroticure, we envision a world where mental health is as prioritized and accessible as physical health. By leveraging innovative technology and evidence-based practices, we aim to destigmatize mental health and make diagnostic and therapeutic care available to everyone, regardless of their socioeconomic background.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Us Section */}
      <div className="why-us-section py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Why Us Heading - Left */}
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#17181D]">
                Why Us
              </h2>
            </div>
            
            {/* Why Us Points - Right */}
            <div className="w-full md:w-3/5 mt-20">
              <div className="timeline-container relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-[#17181D]/50" style={{ height: 'calc(100% - 48px)' }}></div>
                
                {/* Point 1 */}
                <div className="why-us-point flex mb-16 relative">
                  <div className="timeline-circle flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#17181D]/50 flex items-center justify-center mr-6 bg-[#D5CEBC] z-10">
                    <span className="text-lg font-semibold text-[#17181D]/50">1</span>
                  </div>
                  <div className="timeline-content pt-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#17181D] mb-2">Affordable and Scalable</h3>
                    <p className="text-lg font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                      Neuroticure ensures cost-effective care through free and premium app features, making mental health support accessible to a wide audience.
                    </p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="why-us-point flex mb-16 relative">
                  <div className="timeline-circle flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#17181D]/50 flex items-center justify-center mr-6 bg-[#D5CEBC] z-10">
                    <span className="text-lg font-semibold text-[#17181D]/50">2</span>
                  </div>
                  <div className="timeline-content pt-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#17181D] mb-2">Culturally Sensitive</h3>
                    <p className="text-lg font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                      Our platform is designed with inclusivity in mind, offering solutions that respect diverse cultural and social contexts.
                    </p>
                  </div>
                </div>
                
                {/* Point 3 */}
                <div className="why-us-point flex relative">
                  <div className="timeline-circle flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#17181D]/50 flex items-center justify-center mr-6 bg-[#D5CEBC] z-10">
                    <span className="text-lg font-semibold text-[#17181D]/50">3</span>
                  </div>
                  <div className="timeline-content pt-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#17181D] mb-2">AI-driven Care</h3>
                    <p className="text-lg font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                      By combining the latest in artificial intelligence with human-centered care, Neuroticure delivers personalized, data-backed mental health support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Members Section */}
      <div className="members-section py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Members Heading - Left */}
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#17181D]">
                Our Members
              </h2>
            </div>
            
            {/* Members Text - Right */}
            <div className="w-full md:w-3/5 mt-20">
              <p className="text-xl font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                Our team is a tight-knit family of designers, artists, and visionaries, all bound by the same creative enthusiasm.
              </p>
            </div>
          </div>
          
          {/* Team Members Cards */}
          <div className="mt-16">
            <div className="flex flex-wrap -mx-4">
              {[
                {
                  id: 1,
                  name: "John Doe",
                  role: "Chief Executive Officer",
                  image: "/about/team1.jpg"
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  role: "Chief Technology Officer",
                  image: "/about/team2.jpg"
                },
                {
                  id: 3,
                  name: "Michael Johnson",
                  role: "Lead Designer",
                  image: "/about/team3.jpg"
                },
                {
                  id: 4,
                  name: "Sarah Williams",
                  role: "Marketing Director",
                  image: "/about/team1.jpg"
                }
              ].map((member) => (
                <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-10">
                  <div className="team-member-card">
                    <div className="member-image h-80 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        width={300}
                        height={320}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#17181D] mb-1 mt-2">{member.name}</h3>
                    <p className="text-md font-light text-[#17181D]/60 tracking-tight">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Aligned with UN SDGs Section */}
      <div className="sdg-section py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* SDG Heading - Left */}
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#17181D]">
                Aligned with UN SDGs
              </h2>
            </div>
            
            {/* SDG Text - Right */}
            <div className="w-full md:w-3/5 mt-20">
              <p className="text-xl font-medium text-[#17181D]/80 tracking-tighter leading-relaxed">
                Driving global mental health initiatives in line with Sustainable Development Goals (SDGs).
              </p>
            </div>
          </div>
          
          {/* SDG Cards */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  title: "Good Health and Well-being",
                  description: "Promoting mental health and well-being for all at all ages through innovative technology solutions.",
                  icon: "/about/icon1.jpg",
                  background: "/about/card1.jpg"
                },
                {
                  id: 2,
                  title: "Reduced Inequalities",
                  description: "Making mental healthcare accessible to underserved communities and reducing disparities in care.",
                  icon: "/about/icon2.jpg",
                  background: "/about/card2.jpg"
                },
                {
                  id: 3,
                  title: "Quality Education",
                  description: "Providing educational resources on mental health awareness and prevention strategies.",
                  icon: "/about/icon3.jpg",
                  background: "/about/card3.jpg"
                },
                {
                  id: 4,
                  title: "Partnerships for the Goals",
                  description: "Collaborating with healthcare providers, NGOs, and governments to scale mental health solutions globally.",
                  icon: "/about/icon4.jpg",
                  background: "/about/card4.jpg"
                }
              ].map((sdg) => (
                <div
                  key={sdg.id}
                  className="relative h-[380px] w-full overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={sdg.background}
                      alt={sdg.title}
                      fill
                      className="object-cover"
                      priority={sdg.id === 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/0 transition-all duration-1000 ease-out group-hover:bg-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-3 text-white">
                    {/* Icon - No background, bigger size */}
                    <div className="flex justify-start">
                      <Image
                        src={sdg.icon}
                        alt={`${sdg.title} icon`}
                        width={48}
                        height={48}
                        className="w-22 h-22"
                      />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {sdg.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-sm">
                        {sdg.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page