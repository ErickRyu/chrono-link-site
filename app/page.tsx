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
        <div id="design">
          <BalmudaDesign />
        </div>
        <div id="experience">
          <BalmudaExperience />
        </div>
        
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