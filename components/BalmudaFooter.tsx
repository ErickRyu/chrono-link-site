export default function BalmudaFooter() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              ChronoLink
            </h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              시간을 만지는 경험
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-6 text-gray-900">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Manual
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-6 text-gray-900">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Care Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-light tracking-wider uppercase mb-6 text-gray-900">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-500">
                  News
                </a>
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
            <div className="flex gap-8">
              <a href="#" className="text-xs font-light text-gray-500 hover:text-gray-900 transition-colors duration-500">
                Privacy
              </a>
              <a href="#" className="text-xs font-light text-gray-500 hover:text-gray-900 transition-colors duration-500">
                Terms
              </a>
            </div>
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