'use client';

import { useState, useEffect } from 'react';

export default function BalmudaHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5]" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Product image - centered and prominent */}
        <div className={`mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1200ms] ease-out`}>
          <div className="relative inline-block">
            <div className="w-[500px] h-[500px] mx-auto flex items-center justify-center">
              <img 
                src="/timer-placeholder.svg" 
                alt="ChronoLink" 
                className="w-full h-full object-contain filter contrast-[1.05] brightness-[1.02]"
              />
            </div>
            {/* Product name - minimal and elegant */}
            <div className="absolute -bottom-10 left-0 right-0">
              <h2 className="text-sm tracking-[0.3em] text-gray-500 font-light uppercase">
                ChronoLink
              </h2>
            </div>
          </div>
        </div>

        {/* Main headline - poetic and powerful */}
        <div className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-300 ease-out`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide leading-[1.1] text-gray-900">
            시간을
            <br />
            만지다
          </h1>
        </div>

        {/* Subheadline - philosophical */}
        <div className={`mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-500 ease-out`}>
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
            우리는 보이지 않는 시간을
            <br />
            만질 수 있는 경험으로 바꿉니다
          </p>
        </div>

        {/* Single CTA - refined and minimal */}
        <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-700 ease-out`}>
          <button className="px-12 py-4 bg-black text-white border border-black font-light tracking-wider text-sm uppercase transition-all duration-800 hover:bg-transparent hover:text-black">
            Discover
          </button>
        </div>

        {/* Scroll indicator - subtle */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gray-300 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-gray-600 animate-[slideDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}