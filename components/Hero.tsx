'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { ArrowRight, Clock, Zap, Shield } from 'lucide-react';

export default function Hero() {
  const [backers, setBackers] = useState(237);
  const [superEarlyBird, setSuperEarlyBird] = useState(12);
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
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Kickstarter 런칭 예정
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              당신의 시간을
              <br />
              <span className="text-gray-500">되찾으세요</span>
            </h1>

            {/* 서브헤드라인 */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              물리적 타이머와 디지털 인사이트가 만나는 곳.
              BLE 연결로 PC와 동기화되는 혁신적인 생산성 도구.
            </p>

            {/* 핵심 특징 */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>6개월 배터리</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <span>BLE 무선 연결</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gray-500" />
                <span>30일 환불 보장</span>
              </div>
            </div>

            {/* 긴급성 표시 */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-orange-900">
                    슈퍼 얼리버드 특가
                  </p>
                  <p className="text-sm text-orange-700">
                    {superEarlyBird}/50석 남음 · 48시간 한정
                  </p>
                </div>
                <div className="text-2xl font-bold text-orange-900">
                  43% OFF
                </div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                지금 구매하기
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                자세히 알아보기
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
                  <span className="font-bold text-black">{backers.toLocaleString()}명</span>이 대기 중
                </p>
                <p className="text-xs text-gray-500">베타테스터 평점 4.8/5.0</p>
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
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">PC 화면 자동 차단</p>
                    <p className="text-xs text-gray-500">집중력 극대화</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">ADHD 친화적</p>
                    <p className="text-xs text-gray-500">237명 검증</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 제품 스펙 미니 */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">6개월</p>
                <p className="text-xs text-gray-500">배터리 수명</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0.1초</p>
                <p className="text-xs text-gray-500">동기화 속도</p>
              </div>
              <div>
                <p className="text-2xl font-bold">43%</p>
                <p className="text-xs text-gray-500">작업 완료율 ↑</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}