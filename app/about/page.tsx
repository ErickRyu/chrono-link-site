import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Progress from '@/components/Progress';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />

        <Features />
        <Testimonials />
        <Progress />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}