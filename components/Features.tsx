'use client';

import { useState } from 'react';
import { Timer, Heart, Sparkles, Brain, Apple } from 'lucide-react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Apple,
      title: '🍅 뽀모알람',
      subtitle: '몰입과 휴식의 리듬',
      description: '25분 집중, 5분 휴식의 황금 비율. 일을 시작하기 막막할 때, 타이머를 돌리는 것만으로 첫걸음을 뗄 수 있습니다. 몰입의 시작이 가장 어렵다는 걸 우리는 알고 있죠.',
      benefits: ['막막함을 극복하는 시작 신호', '자연스러운 몰입 유도', '번아웃 방지'],
    },
    {
      icon: Timer,
      title: '⏱️ 타이머 & 브레이크',
      subtitle: '과몰입을 끊어내는 구조',
      description: '과집중으로 몇 시간을 날리셨나요? 저도 그랬습니다. ChronoLink는 설정한 시간이 되면 물리적인 알람과 PC 화면 차단으로 확실하게 몰입을 끊어냅니다.',
      benefits: ['과몰입 방지', '회의/약속 놓치지 않기', '건강한 작업 리듬'],
    },
    {
      icon: Heart,
      title: '🥚 반려 뽀모도로',
      subtitle: '다마고치 모드로 확실한 휴식',
      description: '타이머가 끝나면 귀여운 캐릭터가 나타납니다. 상호작용하며 확실히 쉬도록 유도하죠. 휴식도 일의 일부라는 걸, 이제는 즐겁게 실천할 수 있습니다.',
      benefits: ['재미있는 휴식 유도', '도파민 보상 시스템', '지속 가능한 습관 형성'],
    },
    {
      icon: Sparkles,
      title: '✨ 물리적 경험',
      subtitle: '손끝으로 시간을 조작하다',
      description: '다이얼을 돌리는 촉각적 경험이 뇌에 "이제 시작이야"라는 신호를 보냅니다. 스마트폰을 꺼내지 않아도, 한눈에 남은 시간을 확인할 수 있죠.',
      benefits: ['직관적인 조작', '스마트폰 의존도 감소', '시각적 시간 인지'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
            <Brain className="w-4 h-4" />
            <span>좋은 몰입을 설계하는 구조</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            제가 필요했던 건<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              단순한 타이머가 아니었어요
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            타임타이머도, 큐브 타이머도, 뽀모도로 앱도 다 써봤지만<br />
            결국 꾸준히 사용하지 못했습니다. 왜일까요?
          </p>
        </div>

        {/* 기능 탭 */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeFeature === index
                    ? 'border-black bg-black text-white shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <Icon className={`w-8 h-8 mb-3 ${
                  activeFeature === index ? 'text-white' : 'text-gray-700'
                }`} />
                <h3 className={`font-semibold ${
                  activeFeature === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm mt-1 ${
                  activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {feature.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* 선택된 기능 상세 */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-xl mb-6">
                {(() => {
                  const Icon = features[activeFeature].icon;
                  return <Icon className="w-8 h-8" />;
                })()}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 시각적 표현 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className="w-32 h-32 text-gray-400 mb-4" />;
                  })()}
                  <p className="text-gray-500">기능 시연 이미지</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 사용자 성과 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            사용자들이 경험한 변화
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-blue-600">89%</div>
              <div className="text-sm text-gray-600">집중력 개선</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-green-600">76%</div>
              <div className="text-sm text-gray-600">스마트폰 사용 감소</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-purple-600">4.8/5</div>
              <div className="text-sm text-gray-600">만족도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-orange-600">92%</div>
              <div className="text-sm text-gray-600">재구매 의향</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}