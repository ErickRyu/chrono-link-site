// TRMNL 스타일을 적용한 ChronoLink Hero 섹션 예시
import { useState, useEffect } from 'react';

export default function TRMNLStyleHero() {
  const [backers, setBackers] = useState(237);
  const [superEarlyBird, setSuperEarlyBird] = useState(12);
  
  // 실시간 카운터 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setBackers(prev => prev + 1);
      }
      if (Math.random() > 0.95 && superEarlyBird > 0) {
        setSuperEarlyBird(prev => prev - 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [superEarlyBird]);

  return (
    <section className="min-h-screen flex items-center bg-white">
      {/* 긴급성 배너 - TRMNL의 "In Stock" 스타일 차용 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            슈퍼 얼리버드 {superEarlyBird}/50석 남음
          </span>
          <span className="text-gray-400">|</span>
          <span>48시간 내 종료</span>
          <span className="text-gray-400">|</span>
          <span>무료 배송</span>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="space-y-8">
            {/* TRMNL 스타일 배지 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-xs font-mono uppercase tracking-wider">
                Kickstarter Coming Soon
              </span>
            </div>

            {/* 메인 헤드라인 - TRMNL의 간결한 스타일 */}
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
              Focus,
              <br />
              <span className="text-gray-400">at your fingertips.</span>
            </h1>

            {/* 서브헤드라인 */}
            <p className="text-xl text-gray-600 max-w-md">
              물리적 타이머와 디지털 인사이트가 만나는 곳.
              스마트폰 없이도 완벽한 시간 관리를 경험하세요.
            </p>

            {/* 실시간 소셜 프루프 */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-black">{backers}명</span>이 대기 중
                </p>
                <p className="text-xs text-gray-400">실시간 업데이트</p>
              </div>
            </div>

            {/* CTA 버튼 - TRMNL 스타일 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                지금 43% 할인받기
                <span className="ml-2 text-gray-400">₩39,000</span>
              </button>
              <button className="px-8 py-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                자세히 알아보기
              </button>
            </div>

            {/* 신뢰 신호 */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h-.5a1 1 0 000-2H8a2 2 0 012-2z" clipRule="evenodd" />
                </svg>
                30일 환불 보장
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6a1 1 0 001 1h.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-1-1h-5z" />
                </svg>
                무료 배송
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5년 A/S
              </span>
            </div>
          </div>

          {/* 오른쪽: 제품 이미지 */}
          <div className="relative">
            {/* 배경 장식 - TRMNL 스타일 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-3xl" />
            
            {/* 제품 이미지 플레이스홀더 */}
            <div className="relative bg-gray-100 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <p className="text-gray-400">ChronoLink Timer</p>
                </div>
              </div>
            </div>
            
            {/* 제품 특징 플로팅 카드 - TRMNL 스타일 */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">6개월 배터리</p>
                  <p className="text-xs text-gray-500">BLE 저전력</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">237명 검증</p>
                  <p className="text-xs text-gray-500">베타 테스터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}