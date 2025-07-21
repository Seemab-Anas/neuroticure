import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 py-3">
      <div className="flex justify-between items-center w-[1200px] h-[64px] bg-[#17181D] rounded-[64px] px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-base tracking-tighter text-[#F4F3F0] leading-6">
            <Image 
              src="/logo.png" 
              alt="Neuroticure Logo" 
              width={42} 
              height={42} 
              className="mr-2" 
            />
            Neuroticure
          </Link>
          <div className="hidden md:flex items-center ml-[100px] space-x-3">
            <Link 
              href="#features" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="#pricing" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="#blog" 
              className="w-[86px] h-10 flex items-center justify-center text-base tracking-tighter text-[#F4F3F0] font-normal leading-6 rounded-[24px] hover:bg-[#ffffff09] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center h-10 px-6 text-base tracking-tighter font-normal leading-6 text-[#171824] bg-[#D5CEBC] rounded-[24px] hover:bg-[#fefefe] transition-colors"
          >
            Pre Launch Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
