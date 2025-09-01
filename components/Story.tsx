'use client';

import { useEffect, useRef, useState } from 'react';

export default function Story() {
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
    <section ref={sectionRef} className="py-40 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        {/* Story title */}
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide">
            Origin
          </h2>
        </div>

        {/* Main story narrative */}
        <div className="space-y-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-800 text-center">
              시중의 모든 타이머를
              <br />
              시도해봤습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light leading-loose text-gray-600 text-center">
              10개 이상의 디지털 앱들과 물리적 타이머들.
              <br />
              각각은 기능적으로 완벽했지만,
              <br />
              무언가 빠져있었습니다.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-800 text-center">
              집중력과 퍼포먼스가
              <br />
              너무 떨어져
              <br />
              직장에 다니는 것조차
              <br />
              '기적'이라고 했습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light leading-loose text-gray-600 text-center">
              시간과 집중을 다루는 어려움.
              <br />
              ADHD는 아니지만, 그 스펙트럼 어딘가에서
              <br />
              지속성을 찾기 위해 고군분투했습니다.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-800 text-center">
              그래서 직접
              <br />
              만들었습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light leading-loose text-gray-600 text-center">
              '저 같은 사람도 쓸 수 있는 타이머'를.
              <br />
              물리적 접촉과 디지털 분석이 만나는 순간,
              <br />
              시간은 단순한 측정이 아닌 경험이 됩니다.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="max-w-xl mx-auto">
            <p className="text-base font-light leading-loose text-gray-500 text-center italic">
              &ldquo;최고의 도구는 필요에서 태어나는 것이 아니라
              <br />
              간절함에서 태어납니다.
              <br />
              ChronoLink는 제 간절함이
              <br />
              형태를 갖춘 것입니다.&rdquo;
            </p>
          </div>
        </div>

        {/* Closing statement - minimal */}
        <div className="mt-40 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-light leading-loose text-gray-700">
              비슷한 어려움을 겪는 모든 분들과
              <br />
              이 경험을 나누고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}