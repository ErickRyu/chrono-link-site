import BalmudaHero from '@/components/BalmudaHero';
import Story from '@/components/Story';
import PersonalStory from '@/components/PersonalStory';
import ProductShowcase from '@/components/ProductShowcase';
import Solution from '@/components/Solution';
import Competition from '@/components/Competition';
import Progress from '@/components/Progress';
import Timeline from '@/components/Timeline';
import BalmudaPhilosophy from '@/components/BalmudaPhilosophy';
import BalmudaFooter from '@/components/BalmudaFooter';
import '../balmuda-globals.css';

export default function BalmudaPage() {
  return (
    <div className="font-['Helvetica_Neue'] bg-[#FAFAFA]">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-sm font-light tracking-[0.2em] uppercase">
            ChronoLink
          </div>
          <div className="flex gap-12">
            <a href="#philosophy" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              Philosophy
            </a>
            <a href="#design" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              Design
            </a>
            <a href="#experience" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              Experience
            </a>
          </div>
          <button className="text-sm font-light tracking-wider uppercase px-6 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-500">
            Order
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <BalmudaHero />
        <Story />
        <PersonalStory />
        <ProductShowcase />
        <Solution />
        <Competition />
        <Timeline />
        <div id="philosophy">
          <BalmudaPhilosophy />
        </div>
        <Progress />

        <BalmudaFooter />
      </main>
    </div>
  );
}