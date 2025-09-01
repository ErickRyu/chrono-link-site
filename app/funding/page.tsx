import '../balmuda-globals.css';
import Link from 'next/link';

export default function Funding() {
  return (
    <div className="font-['Helvetica_Neue'] bg-[#FAFAFA] min-h-screen">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-sm font-light tracking-[0.2em] uppercase">
            <Link href="/" className="hover:text-gray-600 transition-colors duration-500">
              ChronoLink
            </Link>
          </div>
          <div className="flex gap-12">
            <Link href="/" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
              About
            </Link>
            <Link href="/funding" className="text-sm font-light text-gray-900 border-b border-gray-900">
              Funding
            </Link>
          </div>
          <button className="text-sm font-light tracking-wider uppercase px-6 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-500">
            Back
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 tracking-wide mb-8">
            Fund the Future
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Support ChronoLink&apos;s journey to redefine focus and productivity through thoughtful design and meaningful technology.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-5xl font-extralight text-gray-900 mb-4">
              ₩24,680,000
            </div>
            <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-8">
              Raised of ₩50,000,000 Goal
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
              <div className="bg-gray-900 h-1 rounded-full" style={{ width: '49.4%' }}></div>
            </div>
            <div className="flex justify-between text-sm font-light text-gray-600">
              <span>237 Backers</span>
              <span>49% Complete</span>
              <span>18 Days Left</span>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Tiers */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Choose Your Support
            </h2>
            <p className="text-lg font-light text-gray-600">
              Every contribution brings us closer to launching ChronoLink.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Super Early Bird */}
            <div className="bg-[#FAFAFA] p-12 text-center group hover:bg-gray-50 transition-all duration-500 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-gray-900 text-white px-3 py-1 text-xs font-light tracking-wider uppercase">
                  -43%
                </span>
              </div>
              <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-2">Limited Time</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">Super Early Bird</div>
              <div className="text-4xl font-extralight text-gray-900 mb-2">₩39,000</div>
              <div className="text-sm font-light text-gray-500 line-through mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-600 mb-12">
                <div>• ChronoLink 물리 타이머 1개</div>
                <div>• PC 연동 앱 라이선스</div>
                <div>• BLE 무선 연결</div>
                <div>• &apos;ChronoLink Pioneer&apos; 베타 테스터 자격</div>
                <div>• 신기능 개발 우선 투표권</div>
              </div>
              <div className="text-xs font-light text-gray-500 mb-6">
                Limited: 3 of 50 remaining
              </div>
              <button className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                Select Tier
              </button>
            </div>

            {/* Early Bird */}
            <div className="bg-gray-900 text-white p-12 text-center group relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gray-900 text-white px-4 py-1 text-xs font-light tracking-wider uppercase">
                  Most Popular
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white text-gray-900 px-3 py-1 text-xs font-light tracking-wider uppercase">
                  -29%
                </span>
              </div>
              <div className="text-2xl font-extralight mb-4">Early Bird</div>
              <div className="text-4xl font-extralight mb-2">₩49,000</div>
              <div className="text-sm font-light text-gray-400 line-through mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-300 mb-12">
                <div>• ChronoLink 물리 타이머 1개</div>
                <div>• PC 연동 앱 라이선스</div>
                <div>• BLE 무선 연결</div>
                <div>• &apos;ChronoLink Pioneer&apos; 베타 테스터 자격</div>
                <div>• 신기능 개발 우선 투표권</div>
              </div>
              <div className="text-xs font-light text-gray-400 mb-6">
                Estimated Delivery: March 2025
              </div>
              <button className="w-full py-3 bg-white text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-100 transition-all duration-500">
                Select Tier
              </button>
            </div>

            {/* Standard */}
            <div className="bg-[#FAFAFA] p-12 text-center group hover:bg-gray-50 transition-all duration-500">
              <div className="text-sm font-light text-gray-500 tracking-wider uppercase mb-2">Regular Price</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">Standard</div>
              <div className="text-4xl font-extralight text-gray-900 mb-8">₩69,000</div>
              <div className="space-y-3 text-sm font-light text-gray-600 mb-12">
                <div>• ChronoLink Device</div>
                <div>• Standard Gift Box</div>
                <div>• Digital Manual</div>
                <div>• Mobile App Access</div>
                <div>• 1-Year Warranty</div>
                <div>• Standard Support</div>
              </div>
              <div className="text-xs font-light text-gray-500 mb-6">
                Estimated Delivery: April 2025
              </div>
              <button className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                Select Tier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Story */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Our Mission
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="text-center">
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                In an age of constant distraction, we believe focus should be intentional, not accidental. 
                ChronoLink represents more than technology—it&apos;s a philosophy of mindful productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-extralight text-gray-900 mb-6">Why We Need Your Support</h3>
                <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                  Creating hardware that embodies our vision requires precision manufacturing, 
                  quality materials, and extensive testing. Your backing enables us to:
                </p>
                <ul className="space-y-3 text-sm font-light text-gray-600">
                  <li>• Finalize industrial design and tooling</li>
                  <li>• Source premium materials responsibly</li>
                  <li>• Conduct extensive quality assurance</li>
                  <li>• Build sustainable manufacturing partnerships</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-extralight text-gray-300 mb-4">237</div>
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">
                  Early Believers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide mb-6">
              Journey Timeline
            </h2>
            <p className="text-lg font-light text-gray-600">
              Our path from concept to your desk.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Dec 2024</div>
              </div>
              <div className="w-px h-16 bg-gray-200 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Campaign Launch</h3>
                <p className="text-sm font-light text-gray-600">Community funding begins with early bird pricing.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Jan 2025</div>
              </div>
              <div className="w-px h-16 bg-gray-200 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Production Setup</h3>
                <p className="text-sm font-light text-gray-600">Finalizing manufacturing partnerships and quality protocols.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Feb 2025</div>
              </div>
              <div className="w-px h-16 bg-gray-200 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">First Delivery</h3>
                <p className="text-sm font-light text-gray-600">Premium tier backers receive their ChronoLink devices.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="w-20 text-right">
                <div className="text-sm font-light text-gray-500 tracking-wider uppercase">Mar 2025</div>
              </div>
              <div className="w-px h-16 bg-gray-900 mt-2"></div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-gray-900 mb-2">Full Launch</h3>
                <p className="text-sm font-light text-gray-600">All backers receive their devices. Public sales begin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-8">
            Join the Movement
          </h2>
          <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto">
            Be part of redefining how we approach focus, productivity, and intentional living.
          </p>
          <button className="px-16 py-4 bg-black text-white border border-black font-light tracking-wider text-sm uppercase transition-all duration-800 hover:bg-transparent hover:text-black">
            Support ChronoLink
          </button>
          <div className="mt-8 text-sm font-light text-gray-500">
            30-day money back guarantee • Secure payment • Free shipping
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-light tracking-[0.2em] uppercase text-gray-500">
              ChronoLink © 2024
            </div>
            <div className="flex gap-8 text-sm font-light text-gray-500">
              <Link href="/privacy" className="hover:text-gray-900 transition-colors duration-500">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors duration-500">Terms</Link>
              <Link href="/contact" className="hover:text-gray-900 transition-colors duration-500">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}