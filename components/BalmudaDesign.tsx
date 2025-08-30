'use client';

import { useEffect, useRef, useState } from 'react';

export default function BalmudaDesign() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section title */}
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide">
            Design
          </h2>
        </div>

        {/* Design grid */}
        <div className="grid md:grid-cols-2 gap-32">
          {/* Left: Product detail */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1500ms] ease-out`}>
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm flex items-center justify-center">
              <img 
                src="/timer-placeholder.svg" 
                alt="ChronoLink Detail" 
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-extralight mb-4 text-gray-900">
                다이얼
              </h3>
              <p className="text-base font-light leading-relaxed text-gray-600">
                정밀하게 가공된 알루미늄 다이얼.
                <br />
                매끄러운 회전감과 섬세한 클릭감이
                <br />
                시간 설정을 의식적 행위로 바꿉니다.
              </p>
            </div>
          </div>

          {/* Right: Material detail */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1500ms] delay-200 ease-out`}>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-sm flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full" />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-extralight mb-4 text-gray-900">
                재질
              </h3>
              <p className="text-base font-light leading-relaxed text-gray-600">
                매트 블랙 아노다이징 처리.
                <br />
                지문이 남지 않는 특수 코팅으로
                <br />
                언제나 깨끗한 외관을 유지합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Design philosophy text */}
        <div className="mt-32 max-w-3xl mx-auto text-center">
          <p className="text-xl font-light leading-loose text-gray-700">
            모든 디테일에는 이유가 있습니다.
            <br />
            불필요한 것은 제거하고,
            <br />
            본질만을 남겼습니다.
          </p>
        </div>

        {/* Specifications - minimal */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-extralight text-gray-900 mb-2">
              80
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider">
              mm
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extralight text-gray-900 mb-2">
              120
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider">
              g
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extralight text-gray-900 mb-2">
              6
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider">
              months
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extralight text-gray-900 mb-2">
              BLE
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider">
              4.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}