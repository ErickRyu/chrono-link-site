'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, Brain, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  const [backers, setBackers] = useState(0);
  const [superEarlyBird] = useState(12);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // 실시간 카운터 시뮬레이션
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setBackers(prev => prev + Math.floor(Math.random() * 3));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* 메인 헤드라인 */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-3xl lg:text-4xl">⏳</span> ChronoLink,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">시간을 손에 쥐다</span>
            </h1>

            {/* 서브헤드라인 */}
            <div className="text-xl text-gray-600 leading-relaxed max-w-lg space-y-4">
              <p>
                안녕하세요.<br />
                저는 늘 집중과 시간 관리에 어려움을 겪어왔어요.
              </p>
              <p>
                일을 시작하려 하면 막막해서 아무것도 못 하거나, 반대로 과몰입을 해서 몇 시간을 날리기도 했어요. 회의는 놓치고, 점심은 거르고, 약속에도 늦곤 했죠.
              </p>
              <p className="font-semibold text-black">
                아마 여러분 중에도 비슷한 경험을 하신 분들이 있을거라 생각해요.
              </p>
            </div>

            {/* 문제 인식 */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                🧩 왜 기존 도구들은 실패했을까?
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span><strong>앱:</strong> 주의 분산의 원인이 되는 기기에서 실행 → 알림과 SNS에 휘둘림</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span><strong>소프트웨어만:</strong> 물리적 강제력 부족 → 무시하기 쉬움</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-500">•</span>
                  <span><strong>물리 타이머:</strong> PC와 단절 → 데이터 추적과 기록 불가</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500 italic">
                타임타이머, 큐브 타이머, 뽀모도로 앱까지 모두 사용해봤지만, 결국 꾸준히 사용하지 못했어요.
              </p>
            </div>

            {/* ChronoLink 솔루션 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    🌱 ChronoLink의 시작
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    저에게 필요했던 건 단순히 시간을 쪼개는 기계가 아니라,<br />
                    <strong>좋은 몰입을 설계해주는 구조</strong>였어요.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Early Bird {superEarlyBird}/50명 한정
                  </p>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  43% OFF
                </div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                함께 시간의 주인 되기
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                내 이야기 들어보기
              </Button>
            </div>

            {/* 소셜 프루프 */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">{backers.toLocaleString()}명</span>과 함께하는 여정
                </p>
                <p className="text-xs text-gray-500">만족도 4.8/5.0</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 제품 이미지 */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              {/* 배경 장식 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30" />
              
              {/* 제품 이미지 플레이스홀더 */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/timer-placeholder.svg" 
                      alt="ChronoLink Timer" 
                      className="w-48 h-48 mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-gray-600">ChronoLink Timer</p>
                    <p className="text-sm text-gray-500 mt-2">제품 이미지 준비 중</p>
                  </div>
                </div>
              </div>

              {/* 플로팅 특징 카드 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">뽀모도로 알람</p>
                    <p className="text-xs text-gray-500">몰입과 휴식의 리듬</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">반려 뽀모도로</p>
                    <p className="text-xs text-gray-500">다마고치 모드</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 제품 스펙 미니 */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-xs text-gray-500">집중력 개선</p>
              </div>
              <div>
                <p className="text-2xl font-bold">76%</p>
                <p className="text-xs text-gray-500">스마트폰 사용 감소</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-xs text-gray-500">만족도</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
