import UserStats from './UserStats';

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-[80vh] md:min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <UserStats />
          </div>
          <h1 className="text-4xl font-normal tracking-tighter text-[#17181D] sm:text-6xl">
            Enjoy Better Mental Health with AI-Powered Solutions
          </h1>
          <p className="mt-6 text-lg tracking-tighter font-normal text-[#17181D]">
            Combining AI intelligence and advanced technology to personalize your mental wellness journey
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center h-12 px-8 text-base tracking-tighter font-normal text-[#F4F3F0] bg-[#17181D] rounded-[24px] hover:bg-[#111111] transition-colors"
            >
              Download App Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
