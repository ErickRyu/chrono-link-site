'use client';

export default function Progress() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            현재 진행 상황
          </h2>
          <p className="text-xl font-light text-gray-600">
            프로토타입 완성, 앱 개발 진행중
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="text-6xl mb-6">🔧</div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">시제품 완성</h3>
            <p className="text-gray-600 font-light">ESP32-S3 기반<br />하드웨어 프로토타입</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">앱 알파 버전</h3>
            <p className="text-gray-600 font-light">Windows/macOS<br />데스크톱 앱 개발 중</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">펀딩 준비</h3>
            <p className="text-gray-600 font-light">2025년 9월<br />크라우드 펀딩 예정</p>
          </div>
        </div>

        {/* Milestones */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-extralight text-gray-900 text-center mb-12">개발 로드맵</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">프로토타입 개발</h4>
                    <p className="text-gray-600 font-light mt-1">하드웨어 설계 및 제작</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">완료</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">소프트웨어 개발</h4>
                    <p className="text-gray-600 font-light mt-1">데스크톱 앱 & BLE 연동</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">진행중</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">크라우드 펀딩</h4>
                    <p className="text-gray-600 font-light mt-1">와디즈 런칭 예정</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">2025년 9월</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">양산 및 배송</h4>
                    <p className="text-gray-600 font-light mt-1">대량 생산 및 배송 시작</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">2026년 1월</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}