'use client';

import { useState } from 'react';
import { Bluetooth, Timer, Target, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Bluetooth,
      number: '01',
      title: '연결하기',
      description: '블루투스를 통해 PC 앱과 ChronoLink를 연결합니다. 한 번 연결하면 자동으로 재연결됩니다.',
      image: '/images/step-connect.png',
      tips: [
        'Windows, Mac 모두 지원',
        '10m 이내 자동 연결',
        '멀티 디바이스 지원',
      ],
    },
    {
      icon: Timer,
      number: '02',
      title: '시간 설정',
      description: '다이얼을 돌려 원하는 시간을 설정합니다. 물리적 다이얼의 만족감과 함께 정확한 시간 설정이 가능합니다.',
      image: '/images/step-set.png',
      tips: [
        '1분 단위 정밀 설정',
        '최대 120분 설정 가능',
        '프리셋 저장 기능',
      ],
    },
    {
      icon: Target,
      number: '03',
      title: '집중하기',
      description: '타이머가 작동하는 동안 깊은 몰입을 경험하세요. 시간이 끝나면 PC 화면이 자동으로 차단됩니다.',
      image: '/images/step-focus.png',
      tips: [
        '화면 차단으로 강제 휴식',
        '커스텀 알림 메시지',
        '긴급 해제 옵션',
      ],
    },
    {
      icon: BarChart3,
      number: '04',
      title: '분석하기',
      description: '앱에서 생산성 데이터를 확인하고 개선점을 찾아보세요. 매일 더 나은 집중력을 만들어갑니다.',
      image: '/images/step-analyze.png',
      tips: [
        '일간/주간/월간 통계',
        '집중 패턴 분석',
        'AI 기반 개선 제안',
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            간단한 사용법
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ChronoLink로 시작하는 생산적인 하루
          </p>
        </div>

        {/* 스텝 네비게이션 */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="flex items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-black text-white scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block w-24 h-0.5 ml-4 transition-colors duration-300 ${
                      activeStep > index ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 스텝 콘텐츠 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 설명 */}
            <div className={`${activeStep % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6">
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-8 h-8 text-gray-700" />;
                })()}
              </div>
              
              <div className="text-6xl font-bold text-gray-200 mb-4">
                {steps[activeStep].number}
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                {steps[activeStep].description}
              </p>
              
              <div className="space-y-3">
                {steps[activeStep].tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 이미지 */}
            <div className={`${activeStep % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-32 h-32 text-gray-400 mb-4" />;
                  })()}
                  <p className="text-gray-500">스텝 {activeStep + 1} 이미지</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            PC 화면 차단 기능
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            타이머가 종료되면 PC 화면이 자동으로 차단되어 작업을 중단하도록 유도합니다. 
            물리 타이머의 알람을 놓치더라도 PC에서 확실하게 알 수 있습니다.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            화면 차단 예시 보기 →
          </button>
        </div>
      </div>
    </section>
  );
}