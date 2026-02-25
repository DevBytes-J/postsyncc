import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import FeatureGrid from "./components/FeatureGrid";
import SocialPosting from "./components/SocialPosting";
import AIEngine from "./components/AIEngine";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <SocialPosting />
      <FeatureGrid />
      <AIEngine />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
