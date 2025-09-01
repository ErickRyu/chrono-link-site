import BalmudaHero from '@/components/BalmudaHero';
import Story from '@/components/Story';
import BalmudaPhilosophy from '@/components/BalmudaPhilosophy';
import BalmudaDesign from '@/components/BalmudaDesign';
import BalmudaExperience from '@/components/BalmudaExperience';
import BalmudaFooter from '@/components/BalmudaFooter';
import './balmuda-globals.css';

export default function Home() {
  return (
    <div className="font-['Helvetica_Neue'] bg-[#FAFAFA]">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-sm font-light tracking-[0.2em] uppercase">
            ChronoLink
          </div>
          <div className="flex gap-12">
            <a href="/" className="text-sm font-light text-gray-900 border-b border-gray-900">
              About
            </a>
            <a href="/funding" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              Funding
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <BalmudaHero />
        <Story />
        <div id="philosophy">
          <BalmudaPhilosophy />
        </div>

        {/* Timeline */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
                Journey Timeline
              </h2>
              <p className="text-lg font-light text-gray-600">
                발견에서 창작까지, 마음챙김 생산성을 향한 10년간의 여정.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-20 text-right">
                  <div className="text-sm font-light text-gray-500 tracking-wider uppercase">2014</div>
                </div>
                <div className="w-px h-16 bg-gray-200 mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2">Discovery</h3>
                  <p className="text-sm font-light text-gray-600">Pomodoro 기법을 알게 되고 생산성 향상을 위한 다양한 방법들을 시도.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-20 text-right">
                  <div className="text-sm font-light text-gray-500 tracking-wider uppercase">2018</div>
                </div>
                <div className="w-px h-16 bg-gray-200 mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2">Creation</h3>
                  <p className="text-sm font-light text-gray-600">기존 앱들의 한계를 느끼고 직접 Powerdoro 앱을 개발하여 개인적 니즈 해결.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-20 text-right">
                  <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Aug 2025</div>
                </div>
                <div className="w-px h-16 bg-gray-900 mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2">Evolution</h3>
                  <p className="text-sm font-light text-gray-600">물리적 타이머의 필요성을 깨닫고 ChronoLink 하드웨어 개발을 위한 펀딩 시작.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Minimal Purchase Section */}
        <section className="py-40 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-8">
              Own Your Time
            </h2>
            <p className="text-xl font-light text-gray-600 mb-16">
              Limited Edition. Crafted with Purpose.
            </p>
            <div className="space-y-4">
              <div className="text-4xl font-extralight text-gray-900">
                ₩69,000
              </div>
              <div className="text-sm font-light text-gray-500 tracking-wider uppercase">
                Early Bird Special: ₩39,000
              </div>
              <button className="mt-8 px-12 py-4 bg-black text-white border border-black font-light tracking-wider text-sm uppercase transition-all duration-800 hover:bg-transparent hover:text-black">
                Purchase
              </button>
            </div>
          </div>
        </section>

        <BalmudaFooter />
      </main>
    </div>
  );
}