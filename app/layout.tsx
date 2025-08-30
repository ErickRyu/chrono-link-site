import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChronoLink - 물리적 타이머와 디지털 인사이트의 완벽한 조화",
  description: "BLE 연결로 PC와 동기화되는 혁신적인 물리 타이머. ADHD 친화적 설계로 생산성과 집중력을 극대화하세요.",
  keywords: "ChronoLink, 물리 타이머, 생산성, ADHD, 집중력, BLE, 시간 관리, 뽀모도로",
  authors: [{ name: "ChronoLink" }],
  openGraph: {
    title: "ChronoLink - Focus at your fingertips",
    description: "물리적 타이머와 디지털 인사이트가 만나는 곳",
    url: "https://chronolink.co.kr",
    siteName: "ChronoLink",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
