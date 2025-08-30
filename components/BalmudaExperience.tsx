'use client';

import { useState } from 'react';

export default function BalmudaExperience() {
  const [activeStep, setActiveStep] = useState(0);

  const experiences = [
    {
      number: '01',
      title: '연결',
      description: '블루투스를 통한 무선 연결.\n복잡한 설정 없이,\n자연스럽게 시작됩니다.',
    },
    {
      number: '02',
      title: '설정',
      description: '다이얼을 돌립니다.\n촉각적 피드백이\n의도를 확실하게 만듭니다.',
    },
    {
      number: '03',
      title: '집중',
      description: '시간이 흐릅니다.\n방해 없는 몰입,\n순수한 집중의 경험.',
    },
    {
      number: '04',
      title: '완료',
      description: '시간이 끝납니다.\n화면이 차단되고,\n휴식이 시작됩니다.',
    },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section title */}
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide">
            Experience
          </h2>
        </div>

        {/* Experience flow */}
        <div className="grid md:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-800 ${
                activeStep === index ? 'opacity-100' : 'opacity-40'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="mb-8">
                <div className="text-5xl font-extralight text-gray-400 mb-4">
                  {exp.number}
                </div>
                <div className="w-full h-[1px] bg-gray-200">
                  <div 
                    className={`h-full bg-gray-900 transition-all duration-800 ${
                      activeStep === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                {exp.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-600 whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience quote */}
        <div className="mt-32 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-extralight leading-loose text-gray-800">
            &ldquo;사용할 때마다 느끼는
            <br />
            작은 만족감이
            <br />
            일상을 바꿉니다&rdquo;
          </p>
          <p className="mt-8 text-sm font-light text-gray-500 tracking-wider uppercase">
            Beta Tester Review
          </p>
        </div>
      </div>
    </section>
  );
}