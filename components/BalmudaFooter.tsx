export default function BalmudaFooter() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              ChronoLink
            </h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              시간을 만지는 경험
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-6 text-gray-900">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  About
                </a>
              </li>
              <li>
                <a href="/funding" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Funding
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-6 text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm font-light text-gray-600">
                  rkggmdii+chronolink@gmail.com
                </span>
              </li>
              <li>
                <span className="text-sm font-light text-gray-600">
                  Seoul, South Korea
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-xs font-light text-gray-500 tracking-wider">
              © 2024 ChronoLink. All rights reserved.
            </p>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="mt-20 text-center">
          <p className="text-xs font-light text-gray-400 tracking-[0.3em] uppercase">
            Designed in Seoul · Crafted with Purpose
          </p>
        </div>
      </div>
    </footer>
  );
}