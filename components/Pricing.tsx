'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      name: '슈퍼 얼리버드',
      badge: '초특가',
      price: 39000,
      originalPrice: 69000,
      discount: 43,
      description: '첫 50명 한정 초특가',
      stock: '12/50석 남음',
      features: [
        'ChronoLink 물리 타이머 1개',
        'PC 연동 앱 라이선스',
        'BLE 무선 연결',
        '⭐ ChronoLink Pioneer 베타 테스터 자격',
        '🗳️ 신기능 개발 우선 투표권',
        '🛡️ 5년 A/S 보장 (일반 1년)',
        '🎁 차기 제품 얼리버드 자동 자격',
        '💎 향후 모든 제품 10% 영구 할인',
      ],
      popular: false,
    },
    {
      name: '얼리버드',
      badge: '인기',
      price: 49000,
      originalPrice: 69000,
      discount: 29,
      description: '첫 200명 한정 특가',
      stock: '87/200석 남음',
      features: [
        'ChronoLink 물리 타이머 1개',
        'PC 연동 앱 라이선스',
        'BLE 무선 연결',
        '고급 알림 & 통계 기능',
        '🗳️ 신기능 개발 투표권',
        '🛡️ 3년 A/S 보장 (일반 1년)',
        '💎 향후 모든 제품 5% 할인',
      ],
      popular: true,
    },
    {
      name: '스탠다드',
      price: 69000,
      description: '일반 출시가',
      features: [
        'ChronoLink 물리 타이머 1개',
        'PC 연동 앱 라이선스',
        'BLE 무선 연결',
        '고급 알림 & 통계',
        '평생 무료 업데이트',
        '클라우드 백업',
        '1년 A/S 보장',
      ],
      popular: false,
    },
    {
      name: '프로 번들',
      badge: '베스트 밸류',
      price: 149000,
      originalPrice: 207000,
      discount: 28,
      description: '멀티 공간 활용 풀세트',
      features: [
        'ChronoLink 물리 타이머 3개',
        'PC 연동 앱 라이선스 3개',
        '프리미엄 케이스 & 액세서리',
        '고급 분석 대시보드',
        '베타 기능 조기 액세스',
        '1:1 맞춤 설정 컨설팅',
        '5년 A/S 보장',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            펀딩 옵션
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            당신에게 맞는 패키지를 선택하고 생산성 혁명에 동참하세요
          </p>
        </div>

        {/* 긴급성 배너 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="font-semibold">48시간 한정 특가</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">슈퍼얼리버드 12/50석 남음</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">현재 73% 펀딩 달성</span>
            </div>
          </div>
        </div>

        {/* 가격 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? 'bg-black text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200 hover:border-gray-300'
              } ${selectedPlan === index ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}
              onClick={() => setSelectedPlan(index)}
            >
              {/* 배지 */}
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    plan.popular ? 'bg-white text-black' : 'bg-black text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* 할인율 */}
              {plan.discount && (
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    -{plan.discount}%
                  </span>
                </div>
              )}

              {/* 플랜 이름 */}
              <h3 className={`text-xl font-bold mb-2 mt-2 ${
                plan.popular ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>

              {/* 설명 */}
              <p className={`text-sm mb-4 ${
                plan.popular ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>

              {/* 재고 */}
              {plan.stock && (
                <p className={`text-xs font-semibold mb-4 ${
                  plan.popular ? 'text-yellow-400' : 'text-orange-600'
                }`}>
                  {plan.stock}
                </p>
              )}

              {/* 가격 */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className={`text-sm line-through ${
                    plan.popular ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                    ₩{plan.originalPrice.toLocaleString()}
                  </div>
                )}
                <div className={`text-3xl font-bold ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  ₩{plan.price.toLocaleString()}
                </div>
              </div>

              {/* 기능 목록 */}
              <ul className="space-y-3 mb-6">
                {plan.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.features.length > 5 && (
                  <li className={`text-sm ${
                    plan.popular ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    +{plan.features.length - 5}개 더보기
                  </li>
                )}
              </ul>

              {/* CTA 버튼 */}
              <Button
                variant={plan.popular ? 'secondary' : 'default'}
                className="w-full"
                size="lg"
              >
                {index === 0 ? '지금 구매하기' : '선택하기'}
              </Button>
            </div>
          ))}
        </div>

        {/* 보증 정보 */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">안심하고 구매하세요</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl mb-2">↩️</div>
              <div className="font-semibold">30일 환불 보장</div>
              <div className="text-sm text-gray-600">무조건 100% 환불</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <div className="font-semibold">무료 배송</div>
              <div className="text-sm text-gray-600">전국 무료</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold">품질 보증</div>
              <div className="text-sm text-gray-600">최대 5년 A/S</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold">안전한 결제</div>
              <div className="text-sm text-gray-600">SSL 암호화</div>
            </div>
          </div>
        </div>

        {/* 비교 테이블 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">상세 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">기능</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="text-center py-4 px-4">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">타이머 개수</td>
                  <td className="text-center py-4 px-4">1개</td>
                  <td className="text-center py-4 px-4">1개</td>
                  <td className="text-center py-4 px-4">1개</td>
                  <td className="text-center py-4 px-4">3개</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">A/S 기간</td>
                  <td className="text-center py-4 px-4 font-semibold">5년</td>
                  <td className="text-center py-4 px-4 font-semibold">3년</td>
                  <td className="text-center py-4 px-4">1년</td>
                  <td className="text-center py-4 px-4 font-semibold">5년</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">영구 할인</td>
                  <td className="text-center py-4 px-4 text-green-600">10%</td>
                  <td className="text-center py-4 px-4 text-green-600">5%</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 text-green-600">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}