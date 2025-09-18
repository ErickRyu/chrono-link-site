'use client';

import { useState, useEffect } from 'react';

export default function BalmudaHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] overflow-x-hidden py-24 sm:py-0 bg-texture">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5]" />

      {/* Main content with proper padding - increased negative space */}
      <div className="relative z-10 text-center w-full px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Product image - centered and prominent */}
          <div className={`mb-8 sm:mb-12 lg:mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1200ms] ease-out`}>
            <div className="relative inline-block w-full">
              <div className="w-[120px] sm:w-[220px] md:w-[300px] lg:w-[400px] mx-auto">
                {/* Timer Display SVG */}
                <svg viewBox="0 0 300 300" className="w-full h-auto filter drop-shadow-2xl">
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
              <div className="mt-3 sm:mt-6">
                <h2 className="text-sm sm:text-lg md:text-xl lg:text-xl tracking-[0.05em] sm:tracking-[0.1em] text-stone-800 font-350">
                  ChronoLink
                </h2>
                <p className="text-[11px] sm:text-sm md:text-base text-stone-600 mt-0.5 sm:mt-1 font-350">
                  시간을 손에 쥐다
                </p>
              </div>
            </div>
          </div>

          {/* Main headline - personal story */}
          <div className={`mb-10 sm:mb-12 lg:mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-300 ease-out`}>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-350 text-stone-900 leading-[1.3]">
              안녕하세요.
            </h1>
            <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-350 text-stone-900 mt-3 sm:mt-4 leading-[1.5]">
              늘 집중과 시간 관리에<br />
              어려움을 겪어왔어요.
            </p>
          </div>

          {/* Subheadline - founder story */}
          <div className={`mb-10 sm:mb-14 lg:mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-500 ease-out`}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[13px] leading-[1.6] sm:text-base md:text-lg lg:text-lg font-380 text-stone-800">
                일을 시작하려 하면 막막해서<br className="sm:hidden" />
                아무것도 못 하거나,<br />
                반대로 과몰입을 해서<br className="sm:hidden" />
                몇 시간을 날리기도 했어요.
              </p>
              <p className="text-[13px] leading-[1.6] sm:text-base md:text-lg lg:text-lg font-380 text-stone-800">
                회의는 놓치고, 점심은 거르고,<br />
                약속에도 늦곤 했죠.
              </p>
              <p className="text-xs leading-[1.6] sm:text-sm md:text-base lg:text-base text-stone-700 mt-6 sm:mt-8 font-medium">
                아마 여러분 중에도<br className="sm:hidden" />
                비슷한 경험을 하신 분들이<br />
                있을거라 생각해요.
              </p>
            </div>
          </div>

          {/* Single CTA - refined and minimal */}
          <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms] delay-700 ease-out`}>
            <button className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-black text-white border border-black font-350 text-[11px] sm:text-sm md:text-base transition-all duration-800 hover:bg-transparent hover:text-black">
              함께 시간의 주인이 되어볼까요?
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-8 sm:h-12 lg:h-14 bg-stone-300 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-stone-600 animate-[slideDown_2s_ease-in-out_infinite]" />
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