'use client';

import { useEffect, useRef, useState } from 'react';

export default function Solution() {
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
    <section ref={sectionRef} className="py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Solution title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            솔루션: ChronoLink
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            다이얼을 돌리면 PC 타이머가 동기화되고,
            세션 종료 시 화면을 차단하여 과몰입을 중단시킵니다
          </p>
        </div>

        {/* Key features grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Hardware features */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">하드웨어</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">독립 모드 + PC 연동 모드</h4>
                  <p className="text-gray-600 font-light">PC 없이도 독립적으로 사용 가능하며, 필요시 PC와 연동</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">촉각적 다이얼 인터페이스</h4>
                  <p className="text-gray-600 font-light">물리적인 다이얼로 시간을 설정하는 직관적인 경험</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">BLE 5.0 연결</h4>
                  <p className="text-gray-600 font-light">저전력 블루투스로 안정적인 PC 연결</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Software features */}
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-100`}>
            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">소프트웨어</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">과몰입 중단</h4>
                  <p className="text-gray-600 font-light">화면 차단, 호흡 휴식 유도로 강제 브레이크</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">집중 세션 기록 & 리포트</h4>
                  <p className="text-gray-600 font-light">모든 집중 세션을 기록하고 패턴 분석 제공</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">플러그인 확장</h4>
                  <p className="text-gray-600 font-light">n8n, Zapier 등과 연동하여 워크플로우 자동화</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Value propositions */}
        <div className="border-t border-gray-200 pt-20">
          <h3 className="text-3xl font-extralight text-gray-900 text-center mb-16">주요 가치 제안</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h4 className="text-xl font-light text-gray-900 mb-3">집중의 시작</h4>
              <p className="text-gray-600 font-light">짧게라도 쉽게 시작할 수 있도록</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">🛑</div>
              <h4 className="text-xl font-light text-gray-900 mb-3">과몰입의 중단</h4>
              <p className="text-gray-600 font-light">물리 + 디지털로 강제 차단</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">🌱</div>
              <h4 className="text-xl font-light text-gray-900 mb-3">회복의 루틴</h4>
              <p className="text-gray-600 font-light">브레이크 모드로 습관화</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}