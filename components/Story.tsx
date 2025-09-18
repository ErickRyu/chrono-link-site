'use client';

import { useEffect, useRef, useState } from 'react';

export default function Story() {
  const [, setIsVisible] = useState(false);
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
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-8">
            🧩 왜 기존 도구들은 실패했을까?
          </h2>
          <p className="text-xl text-gray-600 font-light">
            우리에게 필요한 건 단순한 타이머가 아니었습니다
          </p>
        </div>

        {/* Problem analysis */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">📱</span>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">앱</h4>
                <p className="text-gray-700 font-light leading-relaxed">
                  주의 분산의 원인이 되는 기기에서 실행 → 알림과 SNS에 휘둘림
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">💻</span>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">소프트웨어만</h4>
                <p className="text-gray-700 font-light leading-relaxed">
                  물리적 강제력 부족 → 무시하기 쉬움
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">⏲️</span>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">물리 타이머</h4>
                <p className="text-gray-700 font-light leading-relaxed">
                  PC와 단절 → 데이터 추적과 기록 불가
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 font-light text-center mt-12 italic text-lg">
            타임타이머, 큐브 타이머, 뽀모도로 앱까지 모두 사용해봤지만,<br/>
            결국 꾸준히 사용하지 못했어요.
          </p>
        </div>

        <div className="w-32 h-[1px] bg-gray-300 mx-auto my-20" />

        {/* Realization */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <p className="text-2xl md:text-3xl font-extralight text-gray-900 leading-relaxed">
            저에게 필요했던 건 단순히 시간을 쪼개는 기계가 아니라,
          </p>
          <p className="text-3xl md:text-4xl font-light text-gray-900 mt-4">
            좋은 몰입을 설계해주는 구조
          </p>
          <p className="text-lg text-gray-600 font-light mt-8">
            라는 걸 깨닫게 되었어요.
          </p>
        </div>

        <div className="w-32 h-[1px] bg-gray-300 mx-auto my-20" />

        {/* The birth of ChronoLink */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extralight text-gray-900 text-center mb-16">
              🌱 ChronoLink의 시작
            </h3>

            <p className="text-xl text-gray-700 font-light text-center mb-12">
              그래서 직접 만들기 시작했어요.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-12 text-lg">
              PC와 연동되는 간단한 타이머를 구현하고, 기능을 하나씩 추가했죠.
            </p>

            <div className="space-y-6 my-16 bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🍅</span>
                <div>
                  <span className="font-medium text-lg">뽀모알람</span>
                  <p className="text-gray-700 font-light mt-1">
                    몰입과 휴식의 리듬을 만들어줍니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">⏱️</span>
                <div>
                  <span className="font-medium text-lg">타이머 & 브레이크 모드</span>
                  <p className="text-gray-700 font-light mt-1">
                    과몰입을 끊어내고 회복을 돕습니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🥚</span>
                <div>
                  <span className="font-medium text-lg">반려 뽀모도로 (다마고치 모드)</span>
                  <p className="text-gray-700 font-light mt-1">
                    타이머가 끝나면 캐릭터와 상호작용하며 확실히 휴식하도록 유도합니다
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-light text-gray-900 text-center mt-16 leading-relaxed">
              ChronoLink는 단순한 알람/타이머가 아니라,<br/>
              <span className="font-medium">몰입과 성과를 함께 설계하는 파트너</span>가 되었어요.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-32 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-extralight text-gray-900 mb-8">
                🎨 디자인과 경험
              </h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p className="text-gray-700 font-light">
                  • <strong>미니멀 & 직관적:</strong> 한눈에 이해되는 다이얼
                </p>
                <p className="text-gray-700 font-light">
                  • <strong>물리적 촉감 + 디지털 인사이트:</strong> 손끝으로 시간을 조작하고, 데이터로 습관을 되돌아봅니다
                </p>
                <p className="text-gray-700 font-light">
                  • <strong>경험 중심:</strong> 타이머가 아니라 &lsquo;몰입과 회복의 경험&rsquo;을 제공합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}