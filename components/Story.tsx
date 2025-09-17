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
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide">
            문제 정의
          </h2>
        </div>

        {/* Main story narrative - problem definition */}
        <div className="space-y-20">
          {/* Problem 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                집중을 시작하지 못하는 사람들
              </h3>
            </div>
            <div className="text-gray-700 font-light">
              <p className="mb-3">작업을 시작하는 것 자체가 너무 높은 벽이 됩니다.</p>
              <p>생각만 하고 행동으로 옮기지 못합니다.</p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="text-6xl mb-4">😵</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                과몰입에서 벗어나지 못하는 사람들
              </h3>
            </div>
            <div className="text-gray-700 font-light">
              <p className="mb-3">한 번 시작하면 몇 시간이고 멈추지 못합니다.</p>
              <p>식사도 거르고 화장실도 참습니다.</p>
            </div>
          </div>

          <div className="w-32 h-[1px] bg-gray-300 mx-auto my-16" />

          {/* Existing solutions limitations */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-extralight text-gray-900 text-center mb-12">
              기존 솔루션의 한계
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">모바일 앱</h4>
                <p className="text-sm text-gray-700 font-light">
                  주의 분산의 원인이 되는 기기에서 실행
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">소프트웨어만</h4>
                <p className="text-sm text-gray-700 font-light">
                  물리적 강제력 부족, 무시하기 쉽움
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏲️</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">물리 타이머</h4>
                <p className="text-sm text-gray-700 font-light">
                  PC와 단절, 데이터 추적 불가
                </p>
              </div>
            </div>
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