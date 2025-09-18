'use client';

export default function Competition() {
  const competitors = [
    {
      name: '모바일 앱',
      pros: '접근성 높음',
      cons: '방해 요소가 됨',
      chronolink: false
    },
    {
      name: '소프트웨어 차단기',
      pros: '차단 기능 강력',
      cons: '물리적 트리거 없음',
      chronolink: false
    },
    {
      name: '물리 타이머',
      pros: '단순 직관적',
      cons: 'PC와 단절',
      chronolink: false
    },
    {
      name: 'ChronoLink',
      pros: '물리 + 디지털 + 확장성',
      cons: '-',
      chronolink: true
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            경쟁사 비교
          </h2>
          <p className="text-xl font-light text-gray-700">
            기존 솔루션의 한계를 넘어선 통합 경험
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-light text-gray-700 border-b-2 border-gray-200">구분</th>
                <th className="text-left py-4 px-6 font-light text-gray-700 border-b-2 border-gray-200">장점</th>
                <th className="text-left py-4 px-6 font-light text-gray-700 border-b-2 border-gray-200">단점</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((item, index) => (
                <tr key={index} className={item.chronolink ? 'bg-gray-50' : ''}>
                  <td className={`py-6 px-6 ${item.chronolink ? 'font-medium' : 'font-light'} text-gray-900 border-b border-gray-100`}>
                    {item.name}
                  </td>
                  <td className={`py-6 px-6 font-light ${item.chronolink ? 'text-green-700' : 'text-gray-700'} border-b border-gray-100`}>
                    {item.pros}
                  </td>
                  <td className={`py-6 px-6 font-light ${item.chronolink ? 'text-gray-500' : 'text-red-700'} border-b border-gray-100`}>
                    {item.cons}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-light text-gray-900 mb-4">ChronoLink만의 차별점</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="font-light text-gray-800">물리적 인터페이스와 디지털 분석의 결합</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="font-light text-gray-800">PC 화면 차단으로 과몰입 강제 중단</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="font-light text-gray-800">API 연동으로 무한한 확장 가능성</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✓</span>
              <span className="font-light text-gray-800">ADHD 당사자가 직접 설계한 UX</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}