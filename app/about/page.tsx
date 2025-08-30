import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                우리의 이야기
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ChronoLink는 단순한 타이머가 아닙니다.
                <br />
                당신의 시간을 되찾고, 삶의 질을 높이는 동반자입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">우리의 미션</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    디지털 시대, 우리는 편리함을 얻었지만 집중력을 잃었습니다.
                    스마트폰은 생산성 도구가 아닌 방해 요소가 되었고,
                    우리의 시간은 알림과 유혹에 의해 조각났습니다.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    ChronoLink는 이 문제를 해결하기 위해 탄생했습니다.
                    물리적 타이머의 단순함과 디지털 기술의 편리함을 결합하여,
                    진정한 집중과 생산성을 되찾도록 돕습니다.
                  </p>
                  <div className="bg-black text-white p-6 rounded-xl">
                    <p className="text-lg font-semibold">
                      "모든 사람이 자신의 시간을 온전히 소유할 권리가 있습니다"
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                  <Target className="w-32 h-32 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">핵심 가치</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">사용자 중심</h3>
                  <p className="text-gray-600">
                    ADHD를 가진 분들을 포함한 모든 사용자의 니즈를 최우선으로 생각합니다.
                    237명의 베타테스터와 함께 만든 제품입니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">혁신</h3>
                  <p className="text-gray-600">
                    물리와 디지털의 경계를 허물고,
                    새로운 방식의 시간 관리 솔루션을 제시합니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">커뮤니티</h3>
                  <p className="text-gray-600">
                    사용자들과 함께 성장하고,
                    피드백을 적극 반영하여 더 나은 제품을 만들어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">시작 이야기</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-gray-300">2023</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">문제 인식</h3>
                    <p className="text-gray-600">
                      팀원 중 한 명이 ADHD 진단을 받고, 기존 생산성 도구들의 한계를 경험했습니다.
                      스마트폰 앱은 오히려 방해가 되었고, 단순한 타이머는 데이터 추적이 불가능했습니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-gray-300">2024.01</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">프로토타입 개발</h3>
                    <p className="text-gray-600">
                      물리적 다이얼과 BLE 연결을 결합한 첫 프로토타입을 제작했습니다.
                      팀원들이 직접 사용하며 가능성을 확인했습니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-gray-300">2024.06</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">베타 테스트</h3>
                    <p className="text-gray-600">
                      237명의 베타테스터와 6개월간의 테스트를 진행했습니다.
                      평균 만족도 4.8/5.0, 재구매 의향 89%라는 놀라운 결과를 얻었습니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-gray-300">2025</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Kickstarter 런칭</h3>
                    <p className="text-gray-600">
                      드디어 ChronoLink를 세상에 선보입니다.
                      더 많은 사람들이 시간의 주인이 되도록 돕겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">팀 소개</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">팀원 {i}</h3>
                    <p className="text-gray-600 mb-2">역할</p>
                    <p className="text-sm text-gray-500">
                      열정적인 메이커, 시간 관리에 진심인 사람
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              함께 만들어가는 ChronoLink
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              우리는 단순히 제품을 판매하는 것이 아니라,
              더 나은 삶의 방식을 제안합니다.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              지금 동참하기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}