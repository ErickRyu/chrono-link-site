// TRMNL 스타일을 적용한 ChronoLink Features 섹션
import { useState } from 'react';

export default function TRMNLStyleFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🎯',
      title: 'Physical Focus',
      subtitle: '물리적 다이얼의 힘',
      description: 'MIT 연구: 물리적 인터페이스는 디지털보다 43% 높은 작업 완료율',
      stat: '43%',
      statLabel: '작업 완료율 증가'
    },
    {
      icon: '📱',
      title: 'BLE Connection',
      subtitle: '무선으로 연결되는 생산성',
      description: 'PC와 실시간 동기화되어 화면을 자동으로 차단하고 집중을 유도',
      stat: '0.1초',
      statLabel: '동기화 속도'
    },
    {
      icon: '🔋',
      title: 'Long Battery',
      subtitle: '6개월 지속되는 집중력',
      description: 'CR2032 배터리 하나로 6개월 사용. 충전 걱정 없는 생산성',
      stat: '6개월',
      statLabel: '배터리 수명'
    },
    {
      icon: '🧠',
      title: 'ADHD Friendly',
      subtitle: '과학적으로 설계된 집중',
      description: '237명의 ADHD 베타테스터가 검증한 집중력 향상 효과',
      stat: '2.3시간',
      statLabel: '일일 집중력 증가'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 - TRMNL 스타일 */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4">
            Features
          </p>
          <h2 className="text-5xl font-bold mb-6">
            디지털 방해 없는
            <br />
            <span className="text-gray-400">순수한 집중</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ChronoLink는 스마트폰의 유혹에서 벗어나 진정한 딥워크를 가능하게 합니다
          </p>
        </div>

        {/* 기능 그리드 - TRMNL의 미니멀 카드 스타일 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                activeFeature === index
                  ? 'shadow-2xl scale-105 border-2 border-black'
                  : 'shadow-md hover:shadow-lg'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              {/* 아이콘 */}
              <div className="text-3xl mb-4">{feature.icon}</div>
              
              {/* 타이틀 */}
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{feature.subtitle}</p>
              
              {/* 통계 */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-3xl font-bold mb-1">{feature.stat}</div>
                <div className="text-xs text-gray-500">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 선택된 기능 상세 - TRMNL 스타일 확장 뷰 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl mb-6">{features[activeFeature].icon}</div>
              <h3 className="text-3xl font-bold mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                {features[activeFeature].description}
              </p>
              
              {/* 추가 설명 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    스마트폰 없이 독립적으로 작동
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    PC 앱과 실시간 동기화
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    데이터 분석으로 생산성 개선
                  </p>
                </div>
              </div>
            </div>
            
            {/* 시각적 표현 */}
            <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">{features[activeFeature].icon}</div>
                <div className="text-5xl font-bold text-gray-700">
                  {features[activeFeature].stat}
                </div>
                <div className="text-lg text-gray-500">
                  {features[activeFeature].statLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 비교 테이블 - TRMNL 스타일 */}
        <div className="mt-16 bg-black text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            왜 ChronoLink인가?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">❌</div>
              <h4 className="font-bold mb-2">스마트폰 앱</h4>
              <p className="text-gray-400 text-sm">
                알림과 SNS의 유혹
                <br />
                배터리 소모
                <br />
                산만한 멀티태스킹
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h4 className="font-bold mb-2">일반 타이머</h4>
              <p className="text-gray-400 text-sm">
                데이터 추적 불가
                <br />
                PC 연동 없음
                <br />
                제한적인 기능
              </p>
            </div>
            <div className="text-center border-2 border-white rounded-xl p-4">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-bold mb-2">ChronoLink</h4>
              <p className="text-sm">
                물리적 만족감
                <br />
                스마트 연동
                <br />
                데이터 인사이트
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}