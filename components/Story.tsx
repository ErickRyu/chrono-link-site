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
            ChronoLink를 만들게 된 이야기
          </h2>
          <p className="text-xl text-gray-600 font-light">
            집중과 시간 관리의 어려움, 그 솔직한 고백
          </p>
        </div>

        {/* Personal story */}
        <div className="prose prose-lg max-w-4xl mx-auto mb-32">
          <p className="text-gray-700 font-light leading-relaxed mb-8">
            저는 늘 집중과 시간 관리에 어려움을 겪어왔습니다. 일을 시작하려고 앉으면 막막해서
            아무것도 손에 잡히지 않았죠. 커피를 마시고, 이메일을 확인하고, SNS를 보다가
            어느새 오전이 끝나있곤 했습니다.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-8">
            반대로 한 가지 일에 빠지면 과몰입해서 3시간이 훌쩍 지나있기 일쑤였습니다.
            회의 시간을 놓치고, 점심을 거르고, 약속 시간에 늦는 일이 반복됐죠.
            체계적으로 접근하기보다 무작정 시도하고,
            막히면 다시 처음부터 반복하는 비효율적인 방식이었습니다.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-8">
            다른 사람들은 계획적으로 일하는데, 왜 나만 이렇게 중구난방일까?
            손은 지치고 마음은 무너져 더 이상 하고 싶지 않은 상태가 반복됐습니다.
          </p>
          <p className="text-gray-900 font-medium text-xl leading-relaxed mb-8">
            "나만 이런 게 어렵나?"
          </p>
        </div>

        {/* Main story narrative - problem definition */}
        <div className="space-y-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              이런 분들을 위해 만들었습니다
            </h3>
          </div>

          {/* Problem 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                "5분만 하자"가 어려운 분들
              </h3>
            </div>
            <div className="text-gray-700 font-light">
              <p className="mb-3">작업을 시작하는 것 자체가 너무 높은 벽이 됩니다.</p>
              <p>"일단 시작하면 되는데" 그 시작이 제일 어렵습니다.</p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <div className="text-6xl mb-4">😵</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                과몰입을 끊어내지 못하는 분들
              </h3>
            </div>
            <div className="text-gray-700 font-light">
              <p className="mb-3">한 번 시작하면 몇 시간이고 멈추지 못합니다.</p>
              <p>식사도 거르고, 약속도 놓치고, 화장실도 참습니다.</p>
            </div>
          </div>

          <div className="w-32 h-[1px] bg-gray-300 mx-auto my-16" />

          {/* My journey with timers */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="prose prose-lg">
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-center italic">
                "타임타이머, 큐브 타이머, 모래시계, 전자시계까지...<br/>
                도움이 될 것 같은 제품들을 모조리 사봤지만 결국 쓰지 않게 되더군요."
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                앱도 여러가지 설치해서 사용해봤습니다. 뽀모도로 타이머, 집중력 향상 앱, 습관 관리 앱...
                처음엔 분명 도움이 되었습니다. "5분만 하자"라는 시작을 도와주었고,
                과몰입을 끊어내는 데에도 효과가 있었죠. 하지만 곧 한계를 느꼈습니다.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-12">
                타이머를 아예 안 쓰는 건 아니었습니다. 어떨 때는 잘 쓰고, 어떨 때는 안 쓰게 되더군요.
                왜 그럴까? 상황에 맞지 않거나, 과몰입을 끊어내 주지 못했거나,
                단순히 시간을 알려주기만 했기 때문이었습니다.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                내가 만든 프로그램에서 아쉬운 점들을 더 개선한다면 무엇일까?
                어떤 기능이 있으면 매일 사용하게 될까? 이런 고민을 계속했습니다.
              </p>
              <p className="text-gray-900 font-medium text-xl leading-relaxed text-center">
                깨달음: 저에게 필요했던 건 시간을 쪼개는 기계가 아니라,<br/>
                좋은 몰입을 돕는 구조였습니다.
              </p>
            </div>
          </div>

          <div className="w-32 h-[1px] bg-gray-300 mx-auto my-16" />

          {/* Existing solutions limitations */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-extralight text-gray-900 text-center mb-12">
              왜 기존 타이머들은 실패했나
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

        {/* The birth of ChronoLink */}
        <div className="mt-32 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
              그래서 직접 만들기 시작했습니다
            </h3>
            <div className="prose prose-lg">
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                PC용으로 간단한 타이머를 구현해 쓰면서, 원하는 기능을 커스터마이징하기 시작했습니다.
                단순한 알람 대신, 뽀모알람, 타이머&브레이크 모드(과몰입 방지),
                반려 뽀모도로(다마고치 모드) 같은 기능을 담았습니다.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                이건 단순히 시간을 알려주는 타이머가 아니라,
                몰입과 휴식을 함께 설계할 수 있는 파트너에 가까웠습니다.
              </p>
              <p className="text-gray-900 font-medium text-xl leading-relaxed text-center">
                실험계획서를 채워나가듯<br/>
                몰입을 설계할 수 있는 도구
              </p>
            </div>
          </div>
        </div>

        {/* Closing statement - minimal */}
        <div className="mt-40 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-extralight leading-loose text-gray-900 mb-8">
              ChronoLink는 제품이 아니라,<br/>
              몰입을 회복하고 성과를 쌓아가는 경험입니다.
            </p>
            <p className="text-lg font-light leading-loose text-gray-600">
              저 같은 사람이 어떻게 삽질하고 실패하고 눈물 흘리면서<br/>
              결국 만들어냈는지를 담고 싶습니다.
            </p>
            <p className="text-xl font-medium text-gray-900 mt-12">
              "여러분도 어렵죠? 함께 해결해요."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}