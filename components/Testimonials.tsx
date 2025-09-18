'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: '김민수',
      role: 'UX 디자이너, ADHD 진단 3년차',
      content: '스마트폰 앱만으로는 계속 실패했는데, 물리적 타이머가 있으니 확실히 다릅니다. 다이얼을 돌리는 행위 자체가 "이제 집중한다"는 의식이 되더라고요.',
      rating: 5,
      highlight: '다이얼을 돌리는 행위 자체가 집중 의식',
    },
    {
      name: '이서연',
      role: '프리랜서 개발자, ADHD 진단 2년차',
      content: 'ADHD로 과집중하면 멈추기 어려운데, ChronoLink는 타이머 종료 시 PC 화면을 자동 차단해줘서 강제로 휴식할 수 있어요. 다른 타이머는 무시하기 쉬웠는데, 이건 정말 확실합니다.',
      rating: 5,
      highlight: '화면 차단으로 강제 휴식 가능',
    },
    {
      name: '박준호',
      role: '대학원생, 논문 작성 중',
      content: '논문 쓸 때 시간 관리가 정말 중요한데, 물리 타이머 덕분에 휴대폰을 아예 다른 방에 둘 수 있게 됐어요. 집중력이 확실히 늘었습니다.',
      rating: 5,
      highlight: '휴대폰 없이도 완벽한 시간 관리',
    },
    {
      name: '최지원',
      role: '마케터, 재택근무 2년차',
      content: '재택근무하면서 시간 관리가 어려웠는데, ChronoLink로 업무 시간을 명확히 구분할 수 있게 됐어요. 데이터 분석 기능도 정말 유용합니다.',
      rating: 5,
      highlight: '재택근무 시간 관리의 해결책',
    },
    {
      name: '정현우',
      role: '스타트업 대표, 멀티태스킹 전문가',
      content: '여러 일을 동시에 하다 보니 집중이 분산되기 쉬운데, ChronoLink로 시간 블록을 만들어 일하니 효율이 2배는 올랐어요.',
      rating: 5,
      highlight: '시간 블록으로 효율 2배 상승',
    },
  ];

  const stats = [
    { value: '진행중', label: '베타 테스트' },
    { value: '4.8/5.0', label: '목표 만족도' },
    { value: '89%', label: '집중력 개선 목표' },
    { value: '2.3시간', label: '일일 집중력 목표' },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            사용자들의 이야기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ChronoLink와 함께하는 변화의 순간들
          </p>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 메인 후기 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* 별점 */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* 하이라이트 */}
            <div className="text-2xl font-bold text-gray-900 mb-6">
              &ldquo;{testimonials[activeIndex].highlight}&rdquo;
            </div>

            {/* 내용 */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {testimonials[activeIndex].content}
            </p>

            {/* 작성자 정보 */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[activeIndex].role}
                </div>
              </div>

              {/* 네비게이션 */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="이전 후기"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="다음 후기"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-black'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`후기 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 추가 후기 그리드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            당신도 시간의 주인이 될 수 있습니다
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            함께하기
          </button>
        </div>
      </div>
    </section>
  );
}