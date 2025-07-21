import Image from 'next/image'

export default function UserStats() {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="relative h-7 w-16">
        <div 
          className="absolute top-0 left-0 h-7 w-7 rounded-[14px] border border-[#D5CEBC] overflow-hidden"
          style={{ aspectRatio: '1/1' }}
        >
          <Image
            src="/avatar1.png"
            alt="User avatar"
            fill
            sizes="28px"
            style={{ objectFit: 'fill' }}
          />
        </div>
        <div 
          className="absolute top-0 left-[17px] h-7 w-7 rounded-[14px] border border-[#D5CEBC] overflow-hidden"
          style={{ aspectRatio: '1/1' }}
        >
          <Image
            src="/avatar2.png"
            alt="User avatar"
            fill
            sizes="28px"
            style={{ objectFit: 'fill' }}
          />
        </div>
        <div 
          className="absolute top-0 left-[36px] h-7 w-7 rounded-[14px] border border-[#D5CEBC] overflow-hidden"
          style={{ aspectRatio: '1/1' }}
        >
          <Image
            src="/avatar3.png"
            alt="User avatar"
            fill
            sizes="28px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <p className="text-base tracking-tighter text-[#17181D] flex flex-col justify-start">
        Over 12M Active Users
      </p>
    </div>
  )
}
