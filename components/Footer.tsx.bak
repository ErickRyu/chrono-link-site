import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 브랜드 섹션 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">ChronoLink</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              물리적 타이머와 디지털 인사이트의 완벽한 조화로 당신의 집중력을 극대화합니다.
            </p>
          </div>

          {/* 페이지 */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Funding
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  rkggmdii+chronolink@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Seoul, South Korea
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ChronoLink. All rights reserved.
            </p>
          </div>
        </div>

        {/* 신뢰 배지 */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-xs">
            <span>🔒 SSL 보안 결제</span>
            <span>📦 무료 배송</span>
            <span>↩️ 30일 환불 보장</span>
            <span>🛡️ 5년 A/S 보증</span>
            <span>🏆 237명 베타테스터 검증</span>
          </div>
        </div>
      </div>
    </footer>
  );
}