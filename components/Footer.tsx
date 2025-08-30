import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* 브랜드 섹션 */}
          <div className="md:col-span-1">
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

          {/* 제품 */}
          <div>
            <h3 className="font-semibold mb-4">제품</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ChronoLink 소개
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  주요 기능
                </Link>
              </li>
              <li>
                <Link href="/specs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  기술 사양
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">
                  앱 연동
                </Link>
              </li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h3 className="font-semibold mb-4">지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/manual" className="text-gray-400 hover:text-white transition-colors text-sm">
                  사용 설명서
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors text-sm">
                  보증 정책
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  rkggmdii+chronolink@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  평일 10:00 - 18:00
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  서울특별시
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
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                이용약관
              </Link>
            </div>
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