import { Nav } from "@/widgets/nav";
import { Hero } from "@/widgets/hero";
import { WorkSection } from "@/widgets/work-section";
import { MethodSection } from "@/widgets/method-section";
import { PricingSection } from "@/widgets/pricing-section";
import { AboutSection } from "@/widgets/about-section";
import { SiteFooter } from "@/widgets/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <MethodSection />
        <PricingSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
