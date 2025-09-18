'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '🤔 "또 안 쓰게 되는 거 아닐까요?"',
      answer: '저도 그랬어요. 타임타이머, 큐브 타이머, 뽀모도로 앱... 다 써봤지만 결국 서랍 속에 처박히게 됐죠. ChronoLink가 다른 점은, 단순한 알람이 아니라 "좋은 몰입을 설계해주는 구조"라는 것입니다. 다이얼을 돌리는 촉각적 경험이 뇌에 시작 신호를 보내고, PC 화면 차단으로 휴식을 강제합니다.',
    },
    {
      question: '📱 "스마트폰 앱이나 타이머랑 뭐가 다른가요?"',
      answer: '스마트폰을 켜는 순간, 카톡 알림, 인스타 DM, 유튜브 추천... 주의 분산의 파티가 시작됩니다. 물리적 타이머는 폰에서 단절되어 있지만 데이터 추적이 안 돼죠. ChronoLink는 둘의 장점만 가져왔습니다 - 스마트폰 없이 사용 가능, PC와 연동해 데이터 추적.',
    },
    {
      question: '🧠 "ADHD가 없어도 필요한가요?"',
      answer: '일을 시작하려 하면 막막하거나, 몰입하다 보면 몇 시간이 훌쫜 지나가는 경험, 누구나 있죠? 재택근무하면서 시간 관리가 어려운 분, 논문이나 보고서 마감에 쫓기는 분, 코딩하다 보면 시간 가는 줄 모르는 분... ChronoLink는 "시간 관리가 어려운" 모든 분들을 위한 제품입니다.',
    },
    {
      question: '배터리는 얼마나 가나요?',
      answer: 'CR2032 코인 배터리로 약 6개월 사용 가능합니다. BLE 4.0 저전력 기술을 사용하여 배터리 수명을 극대화했습니다. 배터리 교체도 매우 간단합니다.',
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer: '30일 무조건 환불 보장입니다. 제품을 받고 30일 이내라면 어떤 이유든 100% 환불해드립니다. 반품 배송비도 저희가 부담합니다. 여러분의 만족이 최우선입니다.',
    },
    {
      question: '📦 "언제 받을 수 있나요?"',
      answer: '펀딩 종료 후 약 3-4개월 내 배송 예정입니다. 직접 만들기 시작한 프로젝트인 만큼, 품질에 조금도 타협하지 않겠습니다. Early Bird 참여자분들께는 우선 배송드립니다.',
    },
    {
      question: '다른 타이머 앱과 연동되나요?',
      answer: '현재는 전용 ChronoLink 앱과만 연동됩니다. 하지만 오픈 API를 준비 중이며, Notion, Todoist, Toggle 등 인기 생산성 앱과의 연동을 계획하고 있습니다.',
    },
    {
      question: 'A/S는 어떻게 받나요?',
      answer: '슈퍼 얼리버드는 5년, 얼리버드는 3년, 일반은 1년 무상 A/S를 제공합니다. 국내 A/S 센터를 운영하며, 택배를 통한 간편한 서비스를 제공합니다.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>여러분도 궁금하셨죠?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              저도 처음엔<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                이런 것들이 궁금했어요
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              &ldquo;정말 효과가 있을까?&rdquo; &ldquo;또 안 쓰게 되는 거 아닐까?&rdquo;
            </p>
          </div>

          {/* FAQ 아코디언 */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 py-4 border-t'
                      : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 추가 문의 */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5" />
              <h3 className="text-xl font-semibold">
                &ldquo;이것도 궁금해요!&rdquo;
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              무엇이든 편하게 물어보세요.<br />
              저도 처음엔 모든 게 궁금했거든요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rkggmdii+chronolink@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                이메일 문의하기
              </a>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-white transition-colors">
                실시간 채팅 상담
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}