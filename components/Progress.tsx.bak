'use client';

import Image from 'next/image';
import { Rocket, Users, Heart } from 'lucide-react';

export default function Progress() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-purple-100 text-purple-800 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            <span>함께 만들어가는 여정</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide mb-6">
            직접 만들기 시작한<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              우리들의 이야기
            </span>
          </h2>
          <p className="text-xl font-light text-gray-700 max-w-2xl mx-auto">
            &ldquo;시간 관리가 어려운 건 나만이 아니었구나&rdquo;<br />
            사용자들과 함께 만들어가는 여정
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="mb-6 relative h-48 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/chronolink-device.jpg"
                alt="ChronoLink 하드웨어 프로토타입"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">시제품 완성</h3>
            <p className="text-gray-700 font-light">ESP32-S3 기반<br />하드웨어 프로토타입</p>
          </div>
          <div className="text-center">
            <div className="mb-6 relative h-48 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/synarae-app.png"
                alt="Synarae 데스크톱 앱"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">앱 알파 버전</h3>
            <p className="text-gray-700 font-light">Windows/macOS<br />데스크톱 앱 개발 중</p>
          </div>
          <div className="text-center">
            <div className="mb-6 relative h-48 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/working-sign.png"
                alt="작업중 사인"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">화면 차단 모드</h3>
            <p className="text-gray-700 font-light">화면 차단으로<br />과몰입 강제 중단</p>
          </div>
        </div>

        {/* Milestones */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-extralight text-gray-900 text-center mb-12">개발 로드맵</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">프로토타입 개발</h4>
                    <p className="text-gray-700 font-light mt-1">하드웨어 설계 및 제작</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">완료</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">소프트웨어 개발</h4>
                    <p className="text-gray-700 font-light mt-1">데스크톱 앱 & BLE 연동</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">진행중</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">크라우드 펀딩</h4>
                    <p className="text-gray-700 font-light mt-1">와디즈 런칭 예정</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">2025년 9월</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">양산 및 배송</h4>
                    <p className="text-gray-700 font-light mt-1">대량 생산 및 배송 시작</p>
                  </div>
                  <span className="text-sm text-gray-500 font-light">2026년 1월</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}