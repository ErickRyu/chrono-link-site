'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '왜 스마트폰 앱만으로는 부족한가요?',
      answer: '스마트폰을 켜는 순간 우리는 수많은 알림과 유혹에 노출됩니다. MIT 연구에 따르면, 물리적 인터페이스는 디지털보다 43% 더 높은 작업 완료율을 보입니다. ChronoLink는 스마트폰 없이도 타이머를 설정할 수 있어, 진정한 디지털 디톡스가 가능합니다.',
    },
    {
      question: 'PC 앱 없이도 사용할 수 있나요?',
      answer: '네, 완전히 독립적으로 작동합니다! 물리 타이머만으로도 모든 기본 기능(타이머, 알람, 뽀모도로)을 사용할 수 있습니다. PC 앱은 통계 분석, 목표 설정, 클라우드 백업 등의 추가 기능을 제공합니다.',
    },
    {
      question: 'ADHD가 없어도 유용한가요?',
      answer: '물론입니다! ChronoLink는 모든 지식 노동자, 학생, 창작자를 위해 설계되었습니다. 특히 재택근무, 논문 작성, 코딩, 디자인 작업 등 깊은 집중이 필요한 모든 활동에 효과적입니다.',
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
      question: '킥스타터 펀딩 후 언제 받을 수 있나요?',
      answer: '펀딩 종료 후 약 3-4개월 내 배송을 목표로 하고 있습니다. 정확한 일정은 펀딩 달성률과 제작 상황에 따라 조정될 수 있으며, 슈퍼 얼리버드 후원자분들께 우선 배송됩니다.',
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600">
              구매 전 궁금한 점을 확인하세요
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
            <h3 className="text-xl font-semibold mb-3">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              언제든지 문의해주세요. 24시간 내에 답변드립니다.
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