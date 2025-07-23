import React from 'react'

const page = () => {
  return (
    <>
      <div className="rounded-b-[50px] contact-three-hero-big-container relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: 'url(/contactUs/back.webp)', height: '650.151px'}}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="contact-three-hero-content relative z-10">
            {/* Header Content */}
            <div className="contact-heading-part text-center mb-12 relative p-8 rounded-3xl">
              {/* Decorative Images positioned at corners of this div */}
              <div className="absolute top-[-20px] left-[-20px] w-16 h-16 z-10">
                <img src="/contactUs/p1.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute top-[-30px] right-[-30px] w-24 h-24 z-10">
                <img src="/contactUs/p2.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-[-45px] left-[-45px] w-20 h-20 z-10">
                <img src="/contactUs/p3.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-[-15px] right-[-15px] w-18 h-18 z-10">
                <img src="/contactUs/p4.webp" alt="Decorative" className="w-full h-full object-cover rounded-full shadow-lg" />
              </div>
              
              <div className="inline-block px-4 py-1 rounded-full bg-[#17181D] text-[#CDAC67] text-lg tracking-tighter mb-4">
                ABOUT US
              </div>
              <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-2 text-[#17181D]">
                Get to Know Neuroticure Better
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-[#17181D]/70 tracking-tighter">
                At Neuroticure, we are driven by a mission to blend technology with neuroscience to improve lives.
                Discover who we are, what we stand for, and the vision that powers our innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
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
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
    </>
  )
}

export default page