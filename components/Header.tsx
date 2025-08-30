'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/product', label: '제품' },
    { href: '/features', label: '기능' },
    { href: '/about', label: '소개' },
    { href: '/ecosystem', label: '연동' },
    { href: '/pricing', label: '구매' },
  ];

  return (
    <>
      {/* 긴급성 배너 */}
      <div className="bg-black text-white py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            슈퍼 얼리버드 한정 특가
          </span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="hidden sm:inline">무료 배송 & 30일 환불 보장</span>
        </div>
      </div>

      {/* 메인 헤더 */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">ChronoLink</span>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA 버튼 */}
            <div className="hidden md:block">
              <Link
                href="/pricing"
                className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                지금 구매하기
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 모바일 메뉴 */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/pricing"
                  className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  지금 구매하기
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}