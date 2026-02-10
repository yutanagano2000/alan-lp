import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingCTA } from "@/components/floating-cta"

// Dynamic imports for below-the-fold components
const DashboardPreview = dynamic(() => import("@/components/dashboard-preview").then(mod => ({ default: mod.DashboardPreview })), {
  ssr: true,
})

const BentoSection = dynamic(() => import("@/components/bento-section").then(mod => ({ default: mod.BentoSection })), {
  ssr: true,
})

const LargeTestimonial = dynamic(() => import("@/components/large-testimonial").then(mod => ({ default: mod.LargeTestimonial })), {
  ssr: true,
})

const PricingSection = dynamic(() => import("@/components/pricing-section").then(mod => ({ default: mod.PricingSection })), {
  ssr: true,
})

const TestimonialGridSection = dynamic(() => import("@/components/testimonial-grid-section").then(mod => ({ default: mod.TestimonialGridSection })), {
  ssr: true,
})

const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  ssr: true,
})

const CTASection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })), {
  ssr: true,
})

const FooterSection = dynamic(() => import("@/components/footer-section").then(mod => ({ default: mod.FooterSection })), {
  ssr: true,
})

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative pb-0">
      <FloatingCTA />
      <div className="relative z-10">
        <main className="w-full px-4 sm:px-6 lg:px-8 relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-200px] md:bottom-[-500px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection id="features-section" className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-96 md:mt-[30rem]" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
