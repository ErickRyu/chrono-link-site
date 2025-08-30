'use client';

import { useState } from 'react';
import { Bluetooth, Battery, Brain, Zap } from 'lucide-react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Bluetooth,
      title: 'BLE 무선 연결',
      subtitle: 'PC와 실시간 동기화',
      description: '블루투스 저전력 기술로 PC 앱과 실시간 연결. 타이머 설정과 상태가 즉시 동기화되어 완벽한 시간 관리가 가능합니다.',
      benefits: ['0.1초 동기화 속도', '10m 연결 범위', '자동 재연결'],
    },
    {
      icon: Brain,
      title: 'ADHD 친화적 설계',
      subtitle: '과학적으로 검증된 집중력 향상',
      description: '237명의 ADHD 베타테스터가 검증한 설계. 물리적 다이얼을 돌리는 행위가 뇌에 집중 신호를 보내 43% 높은 작업 완료율을 달성합니다.',
      benefits: ['촉각적 피드백', '시각적 명확성', '강제 휴식 기능'],
    },
    {
      icon: Zap,
      title: 'PC 화면 자동 차단',
      subtitle: '디지털 디톡스의 완성',
      description: '타이머 종료 시 PC 화면을 자동으로 차단하여 작업 중단을 강제. 과집중으로 인한 번아웃을 예방하고 건강한 작업 리듬을 만듭니다.',
      benefits: ['즉시 화면 차단', '커스텀 메시지', '긴급 해제 가능'],
    },
    {
      icon: Battery,
      title: '6개월 배터리 수명',
      subtitle: '충전 걱정 없는 생산성',
      description: 'CR2032 코인 배터리 하나로 6개월 사용. BLE 4.0 저전력 기술로 배터리 교체 주기를 최소화했습니다.',
      benefits: ['6개월 연속 사용', '배터리 잔량 표시', '간편한 교체'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            혁신적인 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            물리적 경험과 디지털 편의성을 완벽하게 결합한 차세대 타이머
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

        {/* 기술 스펙 미니 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">BLE 4.0</div>
            <div className="text-sm text-gray-500">저전력 무선 기술</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6개월</div>
            <div className="text-sm text-gray-500">배터리 수명</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">0.1초</div>
            <div className="text-sm text-gray-500">동기화 속도</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">43%↑</div>
            <div className="text-sm text-gray-500">작업 완료율</div>
          </div>
        </div>
      </div>
    </section>
  );
}