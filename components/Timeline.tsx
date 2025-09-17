'use client';

export default function Timeline() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
            Journey Timeline
          </h2>
          <p className="text-lg font-light text-gray-800">
            발견에서 창작까지, 마음챙김 생산성을 향한 10년간의 여정.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-20 text-right">
              <div className="text-sm font-light text-gray-700 tracking-wider uppercase">2014</div>
            </div>
            <div className="w-px h-16 bg-gray-200 mt-2"></div>
            <div className="flex-1">
              <h3 className="text-xl font-light text-gray-900 mb-2">Discovery</h3>
              <p className="text-sm font-light text-gray-800">Pomodoro 기법을 알게 되고 생산성 향상을 위한 다양한 방법들을 시도.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-20 text-right">
              <div className="text-sm font-light text-gray-700 tracking-wider uppercase">2018</div>
            </div>
            <div className="w-px h-16 bg-gray-200 mt-2"></div>
            <div className="flex-1">
              <h3 className="text-xl font-light text-gray-900 mb-2">Creation</h3>
              <p className="text-sm font-light text-gray-800">
                기존 앱들의 한계를 느끼고 직접{' '}
                <a
                  href="https://github.com/ErickRyu/Powerdoro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-900 transition-colors"
                >
                  Powerdoro 앱
                </a>
                을 개발하여 개인적 니즈 해결.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-20 text-right">
              <div className="text-sm font-light text-gray-700 tracking-wider uppercase">2025.09</div>
            </div>
            <div className="w-px h-16 bg-gray-900 mt-2"></div>
            <div className="flex-1">
              <h3 className="text-xl font-light text-gray-900 mb-2">Evolution</h3>
              <p className="text-sm font-light text-gray-800">물리적 타이머의 필요성을 깨닫고 ChronoLink 하드웨어 개발을 위한 펀딩 시작.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}