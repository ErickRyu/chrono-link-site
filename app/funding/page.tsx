'use client';

import '../balmuda-globals.css';
import Link from 'next/link';
import { useFundingStats } from '@/hooks/useFundingStats';
import { useState } from 'react';
import FundingModal from '@/components/FundingModal';

export default function Funding() {
  const stats = useFundingStats();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({ name: '', price: '' });

  const handleSelectTier = (packageName: string, packagePrice: string) => {
    setSelectedPackage({ name: packageName, price: packagePrice });
    setModalOpen(true);
  };

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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 tracking-wide mb-8">
            Fund the Future
          </h1>
          <p className="text-xl font-light text-gray-800 max-w-2xl mx-auto leading-relaxed">
            깊이 있는 디자인과 의미 있는 기술로 집중력과 생산성을 재정의하는 ChronoLink의 여정을 함께해 주세요.
          </p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-5xl font-extralight text-gray-900 mb-4">
              {stats.total_backers}명 후원
            </div>
            <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
              <div className="bg-gray-900 h-1 rounded-full" style={{ width: `${Math.min((stats.total_backers / 500) * 100, 100)}%` }}></div>
            </div>
            <div className="flex justify-between text-sm font-light text-gray-800">
              <span>목표: 500명</span>
              <span>{Math.round((stats.total_backers / 500) * 100)}% 달성</span>
              <span>18일 남음</span>
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
            <p className="text-lg font-light text-gray-800">
              모든 후원이 ChronoLink 출시에 한 걸음 더 가까이 가져다 줍니다.
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
              <div className="text-sm font-light text-gray-700 tracking-wider uppercase mb-2">한정 시간</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">슈퍼 얼리버드</div>
              <div className="text-4xl font-extralight text-gray-900 mb-2">₩39,000</div>
              <div className="text-sm font-light text-gray-700 line-through mb-8">₩69,000</div>
              <div className="text-xs font-light text-gray-700 mb-6">
                한정: 50개 중 {stats.super_early_bird_remaining}개 남음
              </div>
              <button 
                onClick={() => handleSelectTier('슈퍼 얼리버드', '₩39,000')}
                className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                선택하기
              </button>
            </div>

            {/* Early Bird */}
            <div className="bg-gray-900 text-white p-12 text-center group relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gray-900 text-white px-4 py-1 text-xs font-light tracking-wider uppercase">
                  가장 인기
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white text-gray-900 px-3 py-1 text-xs font-light tracking-wider uppercase">
                  -29%
                </span>
              </div>
              <div className="text-2xl font-extralight mb-4">얼리버드</div>
              <div className="text-4xl font-extralight mb-2">₩49,000</div>
              <div className="text-sm font-light text-gray-400 line-through mb-8">₩69,000</div>
              <button 
                onClick={() => handleSelectTier('얼리버드', '₩49,000')}
                className="w-full py-3 bg-white text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-100 transition-all duration-500">
                선택하기
              </button>
            </div>

            {/* Standard */}
            <div className="bg-[#FAFAFA] p-12 text-center group hover:bg-gray-50 transition-all duration-500">
              <div className="text-sm font-light text-gray-700 tracking-wider uppercase mb-2">정가</div>
              <div className="text-2xl font-extralight text-gray-900 mb-4">스탠다드</div>
              <div className="text-4xl font-extralight text-gray-900 mb-8">₩69,000</div>
              <button 
                onClick={() => handleSelectTier('스탠다드', '₩69,000')}
                className="w-full py-3 border border-gray-900 text-gray-900 font-light tracking-wider text-sm uppercase hover:bg-gray-900 hover:text-white transition-all duration-500">
                선택하기
              </button>
            </div>
          </div>
        </div>
      </section>




      {/* Minimal Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-light tracking-[0.2em] uppercase text-gray-700">
              ChronoLink © 2024
            </div>
          </div>
        </div>
      </footer>

      {/* Funding Modal */}
      <FundingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageType={selectedPackage.name}
        price={selectedPackage.price}
      />
    </div>
  );
}