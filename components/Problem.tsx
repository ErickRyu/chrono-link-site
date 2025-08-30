export default function Problem() {
  const stats = [
    { value: '96회', label: '하루 평균 스마트폰 확인', source: 'Asurion Research, 2024' },
    { value: '23분', label: '방해 후 집중력 회복 시간', source: 'UC Irvine Study' },
    { value: '47분', label: 'ADHD 성인 평균 집중 시간', source: 'Journal of Attention Disorders' },
    { value: '43%', label: '물리적 인터페이스 작업 완료율 증가', source: 'MIT Media Lab' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            왜 물리 타이머가 필요할까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            스마트폰 앱만으로는 충분하지 않습니다. 
            디지털 기기의 역설에서 벗어나 진정한 집중을 경험하세요.
          </p>
        </div>

        {/* 문제 정의 카드 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">디지털 기기의 역설</h3>
            <p className="text-gray-600">
              생산성 앱을 확인하러 스마트폰을 켜는 순간, 
              우리는 이미 수많은 알림과 유혹에 노출됩니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">촉각의 힘</h3>
            <p className="text-gray-600">
              손으로 다이얼을 돌리는 물리적 행위는 
              뇌에 &lsquo;집중 모드&rsquo; 신호를 보내 작업 완료율을 높입니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">이중 채널 강화</h3>
            <p className="text-gray-600">
              물리적 타이머(촉각/시각)와 디지털 앱(데이터/분석)을 
              결합하면 2.3배 높은 습관 형성률을 달성합니다.
            </p>
          </div>
        </div>

        {/* 통계 */}
        <div className="bg-black text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">연구가 증명하는 사실</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 솔루션 브릿지 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">ChronoLink는 이 문제를 해결합니다</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            스마트폰을 멀리 두고도 완벽한 시간 관리. 
            물리적 앵커와 디지털 두뇌의 완벽한 조합.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              ✅ 방해 요소 차단
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              ✅ 즉각적인 피드백
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              ✅ 데이터 기반 개선
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}