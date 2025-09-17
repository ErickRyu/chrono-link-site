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

        {/* Main headline - brand mission */}
        <div className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-300 ease-out`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide leading-[1.2] text-gray-900">
            시간을 끊어내고,
            <br />
            <span className="font-light">집중을 회복하다</span>
          </h1>
        </div>

        {/* Subheadline - founder story */}
        <div className={`mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-500 ease-out`}>
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            ADHD 당사자의 경험에서 시작된 집중 & 회복 플랫폼
            <br />
            <span className="text-base text-gray-700 mt-2 block">
              "직장을 다니는 것 자체가 기적"이라는 말을 들을 정도로 어려웠던
              <br />
              창업자가 같은 문제를 겪는 사람들을 위해 만든 솔루션
            </span>
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