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
              {/* Timer Display SVG */}
              <svg width="300" height="300" viewBox="0 0 300 300" className="filter drop-shadow-2xl">
                <defs>
                  <radialGradient id="displayGradient">
                    <stop offset="0%" style={{stopColor:'#1f1f1f', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#000000', stopOpacity:1}} />
                  </radialGradient>
                  <filter id="innerShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="2" result="offsetblur"/>
                    <feFlood floodColor="#000000" floodOpacity="0.5"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Display circle with time */}
                <g filter="url(#innerShadow)">
                  {/* Outer ring */}
                  <circle cx="150" cy="150" r="140" fill="none" stroke="#2a2a2a" strokeWidth="3" />

                  {/* Inner display area */}
                  <circle cx="150" cy="150" r="135" fill="url(#displayGradient)" />

                  {/* Progress ring */}
                  <circle
                    cx="150"
                    cy="150"
                    r="110"
                    fill="none"
                    stroke="#3a3a3a"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Time text */}
                  <text
                    x="150"
                    y="165"
                    fontSize="56"
                    fontFamily="'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
                    fontWeight="200"
                    fill="white"
                    textAnchor="middle"
                    letterSpacing="3"
                  >
                    24:00
                  </text>

                  {/* Subtle glow effect for text */}
                  <text
                    x="150"
                    y="165"
                    fontSize="56"
                    fontFamily="'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
                    fontWeight="200"
                    fill="white"
                    textAnchor="middle"
                    letterSpacing="3"
                    opacity="0.2"
                    filter="blur(3px)"
                  >
                    24:00
                  </text>
                </g>

                {/* Highlight on top */}
                <ellipse cx="150" cy="120" rx="80" ry="15" fill="white" opacity="0.03" />
              </svg>
            </div>
            {/* Product name - minimal and elegant */}
            <div className="absolute -bottom-10 left-0 right-0">
              <h2 className="text-sm tracking-[0.3em] text-gray-500 font-light uppercase">
                ChronoLink
              </h2>
            </div>
          </div>
        </div>

        {/* Main headline - personal story */}
        <div className={`mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-300 ease-out`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide leading-[1.2] text-gray-900">
            나만 이런 게 어렵나?
            <br />
            <span className="font-light">여러분도 어렵죠?</span>
          </h1>
        </div>

        {/* Subheadline - founder story */}
        <div className={`mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-500 ease-out`}>
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            일을 시작하려고 앉으면 막막해서 아무것도 못하거나
            <br />
            반대로 한 가지에 빠져 3시간이 훌쩍 지나가 약속을 놓치는 경험, 다들 있으시죠?
            <br />
            <span className="text-base text-gray-700 mt-4 block">
              저 같은 사람이 어떻게 삽질하고 실패하고 눈물 흘리면서
              <br />
              결국 만들어낸 집중과 회복의 솔루션
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