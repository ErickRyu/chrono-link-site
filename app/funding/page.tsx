import '../balmuda-globals.css';
import Link from 'next/link';

export default function Funding() {
  return (
    <div className="font-['Helvetica_Neue'] bg-[#FAFAFA] min-h-screen">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-sm font-light tracking-[0.2em] uppercase">
            <Link href="/" className="hover:text-gray-600 transition-colors duration-500">
              ChronoLink
            </Link>
          </div>
          <div className="flex gap-12">
            <Link href="/" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              About
            </Link>
            <Link href="/funding" className="text-sm font-light text-gray-900 border-b border-gray-900">
              Funding
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 tracking-wide mb-8">
            Fund the Future
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            깊이 있는 디자인과 의미 있는 기술로 집중력과 생산성을 재정의하는 ChronoLink의 여정을 함께해 주세요.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-5xl font-extralight text-gray-900 mb-4">
              ₩24,680,000
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-8">
              목표 ₩50,000,000 중 달성
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
              <div className="bg-gray-900 h-1 rounded-full" style={{ width: '49.4%' }}></div>
            </div>
            <div className="flex justify-between text-sm font-light text-gray-600">
              <span>237명 후원</span>
              <span>49% 달성</span>
              <span>18일 남음</span>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Tiers */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Choose Your Support
            </h2>
            <p className="text-lg font-light text-gray-600">
              모든 후원이 ChronoLink 출시에 한 걸음 더 가까이 가져다 줍니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Super Early Bird */}
            <div className="bg-[#FAFAFA] p-12 text-center group hover:bg-gray-50 transition-all duration-500 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-gray-900 text-white px-3 py-1 text-xs font-light tracking-wider uppercase">
                  -43%
                </span>
              </div>
              <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-2">한정 시간</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">슈퍼 얼리버드</div>
              <div className="text-4xl font-extralight text-gray-900 mb-2">₩39,000</div>
              <div className="text-sm font-light text-gray-500 line-through mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-600 mb-12">
                <div>• ChronoLink 물리 타이머 1개</div>
                <div>• PC 연동 앱 라이선스</div>
                <div>• BLE 무선 연결</div>
                <div>• &apos;ChronoLink Pioneer&apos; 베타 테스터 자격</div>
                <div>• 신기능 개발 우선 투표권</div>
              </div>
              <div className="text-xs font-light text-gray-500 mb-6">
                한정: 50개 중 3개 남음
              </div>
              <button className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                선택하기
              </button>
            </div>

            {/* Early Bird */}
            <div className="bg-gray-900 text-white p-12 text-center group relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gray-900 text-white px-4 py-1 text-xs font-light tracking-wider uppercase">
                  가장 인기
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white text-gray-900 px-3 py-1 text-xs font-light tracking-wider uppercase">
                  -29%
                </span>
              </div>
              <div className="text-2xl font-extralight mb-4">얼리버드</div>
              <div className="text-4xl font-extralight mb-2">₩49,000</div>
              <div className="text-sm font-light text-gray-400 line-through mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-300 mb-12">
                <div>• ChronoLink 물리 타이머 1개</div>
                <div>• PC 연동 앱 라이선스</div>
                <div>• BLE 무선 연결</div>
                <div>• &apos;ChronoLink Pioneer&apos; 베타 테스터 자격</div>
                <div>• 신기능 개발 우선 투표권</div>
              </div>
              <div className="text-xs font-light text-gray-400 mb-6">
                예상 배송: 2025년 3월
              </div>
              <button className="w-full py-3 bg-white text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-100 transition-all duration-500">
                선택하기
              </button>
            </div>

            {/* Standard */}
            <div className="bg-[#FAFAFA] p-12 text-center group hover:bg-gray-50 transition-all duration-500">
              <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-2">정가</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">스킠다드</div>
              <div className="text-4xl font-extralight text-gray-900 mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-600 mb-12">
                <div>• ChronoLink 물리 타이머 1개</div>
                <div>• 스키다드 기프트 박스</div>
                <div>• 디지털 매뉴얼</div>
                <div>• 모바일 앱 연동</div>
                <div>• 1년 보증</div>
                <div>• 기본 지원</div>
              </div>
              <div className="text-xs font-light text-gray-500 mb-6">
                예상 배송: 2025년 4월
              </div>
              <button className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                선택하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Story */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Our Mission
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="text-center">
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                끊임없는 주의 산만의 시대에, 우리는 집중이 우연이 아닌 의도적이어야 한다고 믿습니다. 
                ChronoLink는 단순한 기술 그 이상—마음챙김 생산성의 철학입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-extralight text-gray-900 mb-6">왜 후원이 필요한가요?</h3>
                <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                  우리의 비전을 구현하는 하드웨어를 만들기 위해서는 정밀 제조, 
                  고품질 소재, 그리고 광범위한 테스트가 필요합니다. 여러분의 후원으로 우리는:
                </p>
                <ul className="space-y-3 text-sm font-light text-gray-600">
                  <li>• 산업 디자인 및 금형 완성</li>
                  <li>• 책임감 있는 프리미엄 재료 소싱</li>
                  <li>• 광범위한 품질 보증 실시</li>
                  <li>• 지속 가능한 제조 파트너십 구축</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-extralight text-gray-300 mb-4">237</div>
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">
                  초기 후원자
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Journey Timeline
            </h2>
            <p className="text-lg font-light text-gray-600">
              발견에서 창작까지, 마음챙김 생산성을 향한 10년간의 여정.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">2014</div>
              </div>
              <div className="w-px h-16 bg-gray-200 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Discovery</h3>
                <p className="text-sm font-light text-gray-600">Pomodoro 기법을 알게 되고 생산성 향상을 위한 다양한 방법들을 시도.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">2018</div>
              </div>
              <div className="w-px h-16 bg-gray-200 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Creation</h3>
                <p className="text-sm font-light text-gray-600">기존 앱들의 한계를 느끼고 직접 Powerdoro 앱을 개발하여 개인적 니즈 해결.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Aug 2025</div>
              </div>
              <div className="w-px h-16 bg-gray-900 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Evolution</h3>
                <p className="text-sm font-light text-gray-600">물리적 타이머의 필요성을 깨닫고 ChronoLink 하드웨어 개발을 위한 펀딩 시작.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-8">
            Join the Movement
          </h2>
          <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto">
            집중, 생산성, 그리고 의도적인 삶에 대한 새로운 접근을 함께 정의해 나가요.
          </p>
          <button className="px-16 py-4 bg-black text-white border border-black font-light tracking-wider text-sm uppercase transition-all duration-800 hover:bg-transparent hover:text-black">
            ChronoLink 후원하기
          </button>
          <div className="mt-8 text-sm font-light text-gray-500">
            30일 환불 보장 • 보안 결제 • 무료 배송
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-light tracking-[0.2em] uppercase text-gray-500">
              ChronoLink © 2024
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}