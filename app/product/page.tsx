import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Bluetooth, Battery, Cpu, Ruler, Package, Shield } from 'lucide-react';

export default function ProductPage() {
  const specs = [
    {
      category: '디스플레이',
      items: [
        { label: '타입', value: '아날로그 다이얼' },
        { label: '시간 설정', value: '1-120분' },
        { label: '눈금 단위', value: '1분' },
      ],
    },
    {
      category: '연결성',
      items: [
        { label: '무선 연결', value: 'Bluetooth 4.0 (BLE)' },
        { label: '연결 범위', value: '최대 10m' },
        { label: '동기화 속도', value: '< 0.1초' },
      ],
    },
    {
      category: '전원',
      items: [
        { label: '배터리 타입', value: 'CR2032 코인 배터리' },
        { label: '배터리 수명', value: '약 6개월' },
        { label: '저전력 모드', value: '지원' },
      ],
    },
    {
      category: '크기 및 무게',
      items: [
        { label: '직경', value: '80mm' },
        { label: '높이', value: '35mm' },
        { label: '무게', value: '120g' },
      ],
    },
    {
      category: '호환성',
      items: [
        { label: 'PC', value: 'Windows 10+, macOS 10.15+' },
        { label: '모바일', value: 'iOS 14+, Android 10+' },
        { label: '앱', value: 'ChronoLink 전용 앱' },
      ],
    },
    {
      category: '기타',
      items: [
        { label: '재질', value: '고급 ABS 플라스틱' },
        { label: '색상', value: '매트 블랙, 화이트' },
        { label: '인증', value: 'KC, CE, FCC' },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                    ChronoLink
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    물리적 타이머와 디지털 인사이트의 완벽한 조화
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Bluetooth className="w-5 h-5 text-blue-600" />
                      <span>BLE 4.0 무선 연결</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Battery className="w-5 h-5 text-green-600" />
                      <span>6개월 배터리 수명</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-purple-600" />
                      <span>5년 A/S 보장</span>
                    </div>
                  </div>
                  <Button size="lg">
                    지금 구매하기
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                  <img 
                    src="/timer-placeholder.svg" 
                    alt="ChronoLink Timer" 
                    className="w-64 h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                제품 특징
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bluetooth className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">스마트 연결</h3>
                  <p className="text-gray-600">
                    BLE 기술로 PC와 실시간 동기화
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">긴 배터리 수명</h3>
                  <p className="text-gray-600">
                    한 번 교체로 6개월 사용
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">독립 작동</h3>
                  <p className="text-gray-600">
                    앱 없이도 완벽하게 작동
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                상세 사양
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specs.map((spec, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {spec.category}
                    </h3>
                    <div className="space-y-3">
                      {spec.items.map((item, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's in the Box */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                구성품
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">ChronoLink 타이머 본체</h3>
                    <p className="text-gray-600">
                      정밀하게 제작된 물리 타이머
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">CR2032 배터리</h3>
                    <p className="text-gray-600">
                      6개월 사용 가능한 코인 배터리
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">퀵 스타트 가이드</h3>
                    <p className="text-gray-600">
                      쉽고 빠른 시작을 위한 설명서
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">PC 앱 라이선스</h3>
                    <p className="text-gray-600">
                      Windows/Mac 호환 전용 앱
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                왜 ChronoLink인가?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4">기능</th>
                      <th className="text-center py-4 px-4">ChronoLink</th>
                      <th className="text-center py-4 px-4">스마트폰 앱</th>
                      <th className="text-center py-4 px-4">일반 타이머</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">물리적 조작</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">데이터 분석</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">방해 요소 없음</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">PC 연동</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-gray-400">일부</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">화면 차단</td>
                      <td className="text-center py-4 px-4 text-green-600">✓</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                      <td className="text-center py-4 px-4 text-red-600">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              생산성의 새로운 기준
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              237명의 베타테스터가 검증한 ChronoLink를
              지금 특별 가격으로 만나보세요.
            </p>
            <Button size="xl" variant="secondary">
              지금 43% 할인받기
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}