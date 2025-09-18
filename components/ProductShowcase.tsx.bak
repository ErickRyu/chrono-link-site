'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProductShowcase() {
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-20 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            ChronoLink Design
          </h2>
          <p className="text-xl text-gray-600 font-light">
            미니멀하고 직관적인 디자인, 집중을 위한 완벽한 파트너
          </p>
        </div>

        {/* Main Product Display */}
        <div className={`flex justify-center mb-32 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl blur-3xl opacity-50" />
            <img
              src="/timer-concept.png"
              alt="ChronoLink Timer"
              className="relative max-w-2xl w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}