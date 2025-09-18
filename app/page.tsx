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
import Link from 'next/link';
import './balmuda-globals.css';

export default function Home() {
  return (
    <div className="font-['Helvetica_Neue'] bg-[#FAFAFA]">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div className="text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase">
            ChronoLink
          </div>
          <div className="flex gap-6 sm:gap-8 lg:gap-12">
            <Link href="/" className="text-xs sm:text-sm font-light text-gray-900 border-b border-gray-900">
              About
            </Link>
            <Link href="/funding" className="text-xs sm:text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              Funding
            </Link>
          </div>
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

        {/* Contact Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extralight mb-4 sm:mb-6 lg:mb-8">Contact</h2>
            <p className="text-lg sm:text-xl font-light mb-3 sm:mb-4">성진 류 · Founder</p>
            <p className="text-gray-400 font-light text-sm sm:text-base">
              Email: rkggmdii@gmail.com<br />
              Location: Seoul, Korea
            </p>
          </div>
        </section>

        <BalmudaFooter />
      </main>
    </div>
  );
}