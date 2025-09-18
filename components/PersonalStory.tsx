'use client';

import { useEffect, useRef, useState } from 'react';

export default function PersonalStory() {
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Title */}
        <div className={`mb-20 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-8">
            창업자의 이야기
          </h2>
          <div className="w-24 h-[1px] bg-gray-300 mx-auto" />
        </div>

        {/* Story content */}
        <div className={`prose prose-xl max-w-none ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
          <div className="space-y-8">
            <p className="text-gray-700 font-light leading-relaxed">
              저는 늘 두 가지 극단을 오갔습니다.
              일을 시작하려고 책상 앞에 앉으면 막막해서 아무것도 손에 잡히지 않고,
              반대로 한 번 집중하면 3시간이 훌쩍 지나가 있었죠.
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-8 my-12">
              <p className="text-2xl font-light italic text-gray-900">
                &ldquo;회의 시간을 또 놓쳤네요.
                하나만 끝내려고 했는데 베서 3시간이 지나갅4어요.&rdquo;
              </p>
            </blockquote>

            <p className="text-gray-700 font-light leading-relaxed">
              도움이 될 것 같은 제품들을 시도해봤습니다.
              타임타이머, 큐브 타이머, 모래시계, 전자시계 같은 물리적 타이머들,
              그리고 뽀모도로 앱, 집중력 향상 앱, 습관 관리 앱 같은 디지털 솔루션들...
              처음 몇 번은 효과가 있었지만, 결국 몇 주 후엔 사용하지 않게 되더군요.
            </p>

            <p className="text-gray-700 font-light leading-relaxed">
              타이머를 아예 안 쓰는 건 아니었습니다. 어떨 때는 잘 쓰고, 어떨 때는 까먹게 되고...
              왜 그럴까? 무엇이 부족한 걸까? 그 답을 찾기 시작했습니다.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <p className="text-xl font-medium text-gray-900 mb-4">깨달음</p>
              <p className="text-gray-700 font-light leading-relaxed">
                저에게 필요했던 건 시간을 쪼개는 기계가 아니라,
                좋은 몰입을 돕는 구조였습니다.
                우선순위도, 변수도 없이 앞뒤 없이 덤비는 일을 막아주는,
                실험계획서를 채워나가듯 몰입을 설계할 수 있는 도구 말이죠.
              </p>
            </div>

            <p className="text-gray-700 font-light leading-relaxed">
              그래서 직접 만들기 시작했습니다.
              PC용으로 간단한 타이머를 구현해 쓰면서,
              &ldquo;내가 만든 프로그램에서 아쉬운 점들을 더 개선한다면 무엇일까?&rdquo;
              &ldquo;어떤 기능이 있으면 매일 사용하게 될까?&rdquo; 이런 고민을 계속했습니다.
            </p>

            <p className="text-gray-700 font-light leading-relaxed">
              단순한 알람 대신, 뽀모알람, 타이머&브레이크 모드(과몰입 방지),
              반려 뽀모도로(다마고치 모드) 같은 기능을 하나씩 추가했습니다.
              사용하면서 불편한 점을 개선하고, 필요한 기능을 더하며 계속 발전시켰습니다.
            </p>
          </div>
        </div>

        {/* Closing message */}
        <div className={`mt-20 text-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-500`}>
          <div className="p-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg">
            <h3 className="text-3xl font-light mb-6">
              ChronoLink는 그렇게 탄생했습니다
            </h3>
            <p className="text-lg font-light leading-relaxed mb-8">
              &ldquo;나만 이런 게 어렵나?&rdquo;라는 질문에서 출발해,<br/>
              &ldquo;여러분도 어렵죠?&rdquo;라는 공감으로 이어지는 도구입니다.
            </p>
            <p className="text-xl font-medium">
              ChronoLink는 제품이 아니라,<br/>
              몰입을 회복하고 성과를 쌓아가는 경험입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}