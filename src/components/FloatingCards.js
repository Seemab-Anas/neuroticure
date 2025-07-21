"use client"
import Image from 'next/image';

export default function FloatingCards() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mt-20 lg:px-8">
        <div className="relative w-full flex justify-center">
          {/* Left side cards */}
          <div 
            className="floating-card absolute w-[343px] top-[189px] left-[0px] z-10 transition-transform duration-[3000ms] translate-x-2 animate-[float_4s_ease-in-out_infinite] [animation-delay:-1s]"
          >
            <Image src="/card1.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            className="floating-card absolute w-[343px] top-[325px] left-[80px] z-10 transition-transform duration-[3000ms] translate-x-2 animate-[float_5s_ease-in-out_infinite] [animation-delay:-2s]"
          >
            <Image src="/card2.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            className="floating-card absolute w-[273px] top-[461px] left-[48px] z-10 transition-transform duration-[3000ms] translate-x-2 animate-[float_4.5s_ease-in-out_infinite] [animation-delay:-3s]"
          >
            <Image src="/card3.webp" alt="Feature card" width={273} height={200} />
          </div>

          {/* Right side cards */}
          <div 
            className="floating-card absolute w-[343px] top-[312px] right-[0px] z-10 transition-transform duration-[3000ms] translate-x-2 animate-[float_5.5s_ease-in-out_infinite] [animation-delay:-1.5s]"
          >
            <Image src="/card4.svg" alt="Feature card" width={343} height={200} />
          </div>
          <div 
            className="floating-card absolute w-[343px] top-[426px] right-[80px] z-10 transition-transform duration-[3000ms] translate-x-2 animate-[float_4.8s_ease-in-out_infinite] [animation-delay:-2.5s]"
          >
            <Image src="/card5.svg" alt="Feature card" width={343} height={200} />
          </div>

          {/* Center mobile image */}
          <div className="relative z-0">
            <Image 
              src="/card6.webp" 
              alt="Mobile app" 
              width={350} 
              height={800}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
      `}</style>
    </div>
  );
}
