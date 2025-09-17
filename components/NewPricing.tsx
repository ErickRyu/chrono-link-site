'use client';

import { useState, useEffect } from 'react';

export default function NewPricing() {
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return { hours: 48, minutes: 0, seconds: 0 };
        }

        let { hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pricingTiers = [
    {
      name: '슈퍼 얼리버드',
      originalPrice: 159000,
      price: 119000,
      discount: '25%',
      available: true,
      highlight: true,
      limit: '선착순 100명'
    },
    {
      name: '얼리버드',
      originalPrice: 159000,
      price: 129000,
      discount: '19%',
      available: true,
      highlight: false,
      limit: '선착순 200명'
    },
    {
      name: '일반 판매',
      originalPrice: 159000,
      price: 159000,
      discount: null,
      available: false,
      highlight: false,
      limit: '펀딩 종료 후'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Timer Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 mb-16 text-center">
          <p className="text-sm uppercase tracking-wider mb-2">한정 기간 특가</p>
          <div className="flex justify-center items-center gap-6 text-3xl font-bold">
            <div>
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-sm font-normal block">시간</span>
            </div>
            <span>:</span>
            <div>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-sm font-normal block">분</span>
            </div>
            <span>:</span>
            <div>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-sm font-normal block">초</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            가격 정보
          </h2>
          <p className="text-xl font-light text-gray-600">
            ChronoLink 예상 판매 가격
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                tier.highlight
                  ? 'border-orange-500 bg-orange-50 scale-105 shadow-xl'
                  : tier.available
                    ? 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                    : 'border-gray-100 bg-gray-50 opacity-60'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  BEST DEAL
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-500">{tier.limit}</p>
              </div>

              <div className="text-center mb-8">
                {tier.discount && (
                  <div className="mb-2">
                    <span className="text-gray-400 line-through text-lg">
                      ₩{tier.originalPrice.toLocaleString()}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      {tier.discount} OFF
                    </span>
                  </div>
                )}
                <div className="text-4xl font-bold text-gray-900">
                  ₩{tier.price.toLocaleString()}
                </div>
              </div>

              <div className="text-center py-4 text-gray-500 font-light text-sm">
                {tier.available ? '예정 가격' : '정식 출시 후'}
              </div>
            </div>
          ))}
        </div>

        {/* App subscription info */}
        <div className="mt-20 p-8 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">앱 구독 정보</h3>
            <p className="text-gray-600 font-light mb-6">
              기본 기능은 무료로 제공됩니다
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Free</h4>
                <p className="text-gray-600 font-light">기본 타이머 기능<br />세션 기록</p>
                <div className="text-2xl font-bold text-gray-900 mt-4">무료</div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Pro</h4>
                <p className="text-gray-600 font-light">상세 분석 리포트<br />API 연동 & 플러그인</p>
                <div className="text-2xl font-bold text-gray-900 mt-4">₩5,900/월</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}