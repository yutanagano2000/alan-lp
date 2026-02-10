import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl my-6 py-0 px-4
         w-full h-[400px] md:h-[600px] lg:h-[810px] md:px-0"
    >
      {/* Optimized CSS Background with enhanced glow effects */}
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        {/* CSS Grid Pattern with radial mask for center focus */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(212, 196, 183, 0.08) 0px,
                rgba(212, 196, 183, 0.08) 1px,
                transparent 1px,
                transparent 40px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(212, 196, 183, 0.08) 0px,
                rgba(212, 196, 183, 0.08) 1px,
                transparent 1px,
                transparent 40px
              )
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 80%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          }}
        />

        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7E7CE]/15 via-transparent to-[#D4C4B7]/10" />

        {/* Main glow - top right (larger, brighter, animated) */}
        <div
          className="absolute -top-[30%] -right-[20%] w-[90%] h-[90%] rounded-full animate-glow-drift-1"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(247, 231, 206, 0.7) 0%, rgba(230, 215, 195, 0.4) 30%, rgba(212, 196, 183, 0.15) 55%, transparent 75%)',
            filter: 'blur(80px) brightness(1.3)',
          }}
        />

        {/* Secondary glow - bottom left (animated) */}
        <div
          className="absolute top-[20%] -left-[25%] w-[70%] h-[70%] rounded-full animate-glow-drift-2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(230, 215, 195, 0.6) 0%, rgba(212, 196, 183, 0.3) 35%, transparent 65%)',
            filter: 'blur(70px) brightness(1.2)',
          }}
        />

        {/* Center highlight glow - subtle pulse */}
        <div
          className="absolute top-[5%] left-[15%] w-[70%] h-[60%] rounded-full animate-glow-pulse"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(247, 231, 206, 0.35) 0%, rgba(230, 215, 195, 0.15) 45%, transparent 75%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Additional accent glow - top center for AI feel */}
        <div
          className="absolute -top-[10%] left-[30%] w-[40%] h-[40%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 245, 230, 0.5) 0%, rgba(247, 231, 206, 0.2) 50%, transparent 80%)',
            filter: 'blur(40px) brightness(1.4)',
          }}
        />

        {/* Border with inner/outer glow */}
        <div
          className="absolute inset-0 rounded-2xl border border-[#D4C4B7]/10"
          style={{
            boxShadow: '0 0 60px rgba(247, 231, 206, 0.15), inset 0 0 30px rgba(247, 231, 206, 0.05)',
          }}
        />
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-4 md:mb-5 lg:mb-6 max-w-md md:max-w-[500px] lg:max-w-[640px] mt-16 md:mt-[120px] lg:mt-[140px] px-4">
        <p className="text-primary text-sm md:text-base font-medium tracking-wider">建設業界特化AI</p>
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
          もう、誰も残業しない。
        </h1>
        <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-lg mx-auto">
          書類作成・法令チェック・写真整理<br />
          <span className="text-foreground/90">平均残業時間80%削減</span>を実現
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
        <Link href="#pricing-section">
          <Button className="bg-[#D4C4B7] text-[#2C1810] hover:bg-[#C4B3A6] px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-[#B4A396]/20 transition-all duration-300 hover:shadow-xl hover:scale-105">
            30秒で無料登録
          </Button>
        </Link>
        <Link href="#features-section">
          <Button variant="outline" className="border-[#D4C4B7]/40 text-foreground/80 hover:bg-[#D4C4B7]/10 hover:border-[#D4C4B7]/60 px-6 py-3 rounded-full font-medium text-base transition-all duration-300">
            機能を見る
          </Button>
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground/70">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          <span>導入企業<span className="text-foreground font-semibold">500社</span>以上</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span>初期費用<span className="text-foreground font-semibold">0円</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span>ISO27001<span className="text-foreground font-semibold">認証</span></span>
        </div>
      </div>
    </section>
  )
}
