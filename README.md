# ChronoLink Official Website

물리적 타이머와 디지털 인사이트의 완벽한 조화, ChronoLink의 공식 웹사이트입니다.

## 🚀 프로젝트 개요

ChronoLink는 BLE 연결로 PC와 동기화되는 혁신적인 물리 타이머입니다. ADHD 친화적 설계로 생산성과 집중력을 극대화하는 제품의 공식 웹사이트를 Next.js 15와 Tailwind CSS v4로 구축했습니다.

### 주요 특징
- 🎨 **두 가지 디자인 시스템**: 기본 스타일과 Balmuda 프리미엄 스타일
- 📱 **완전 반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- ⚡ **최신 기술 스택**: Next.js 15.5.2, Tailwind CSS v4, TypeScript
- 🎯 **마케팅 최적화**: 실시간 카운터, 긴급성 배너, 소셜 프루프

## 📁 프로젝트 구조

```
chrono-link-site/
├── app/
│   ├── page.tsx              # 메인 홈페이지
│   ├── about/page.tsx        # 회사 소개
│   ├── product/page.tsx      # 제품 상세
│   ├── balmuda/page.tsx      # Balmuda 스타일 페이지
│   ├── globals.css           # 기본 스타일
│   └── balmuda-globals.css   # Balmuda 스타일
├── components/
│   ├── Hero.tsx              # 히어로 섹션
│   ├── Features.tsx          # 기능 소개
│   ├── Pricing.tsx           # 가격 플랜
│   ├── BalmudaHero.tsx       # Balmuda 스타일 컴포넌트들
│   └── ...
├── lib/
│   └── utils.ts              # 유틸리티 함수
└── public/
    └── timer-placeholder.svg # 제품 이미지 플레이스홀더
```

## 🎨 디자인 시스템

### 1. 기본 스타일 (TRMNL 영감)
- 깔끔한 그리드 레이아웃
- 활기찬 색상과 그라디언트
- 인터랙티브한 컴포넌트
- 마케팅 중심 디자인

### 2. Balmuda 프리미엄 스타일
- 극도의 미니멀리즘
- 모노크롬 색상 팔레트
- 철학적 스토리텔링
- 느리고 우아한 애니메이션

## 🛠️ 기술 스택

- **Framework**: Next.js 15.5.2 (Turbopack)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.17 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install
```

### 개발 서버 실행
```bash
# Turbopack으로 개발 서버 시작
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 빌드
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📄 페이지 구성

### 메인 페이지 (`/`)
- Hero: 제품 소개 및 긴급성 표시
- Problem: 문제 정의 및 통계
- Features: 주요 기능 소개
- HowItWorks: 4단계 사용법
- Testimonials: 237명 베타테스터 후기
- Pricing: 펀딩 티어 및 가격
- FAQ: 자주 묻는 질문

### 회사 소개 (`/about`)
- 미션 및 비전
- 핵심 가치
- 팀 소개
- 창업 스토리

### 제품 상세 (`/product`)
- 상세 사양
- 기술 스펙
- 구성품
- 경쟁 제품 비교

### Balmuda 스타일 (`/balmuda`)
- 철학적 제품 소개
- 미니멀한 디자인 강조
- 프리미엄 브랜드 경험

## 🔍 주요 기능

### 마케팅 요소
- 실시간 대기자 카운터
- 슈퍼 얼리버드 재고 표시
- 48시간 한정 긴급성 배너
- 베타테스터 소셜 프루프

### 인터랙티브 요소
- 스크롤 트리거 애니메이션
- 호버 효과
- 탭 네비게이션
- 모달 다이얼로그

### 성능 최적화
- Next.js Turbopack 사용
- 이미지 최적화
- 컴포넌트 레이지 로딩
- Tailwind CSS v4 최적화

## 📊 분석 문서

- `WEBSITE_ANALYSIS_REPORT.md`: 펀딩 페이지 분석
- `TRMNL_ANALYSIS_FOR_CHRONOLINK.md`: TRMNL 디자인 분석
- `BALMUDA_BRANDING_ANALYSIS.md`: Balmuda 브랜딩 분석

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 비공개 소유입니다. 무단 복제 및 배포를 금지합니다.

## 📧 연락처

- Email: rkggmdii+chronolink@gmail.com
- Website: https://chronolink.co.kr (예정)

---

Built with ❤️ for productivity enthusiasts and ADHD community