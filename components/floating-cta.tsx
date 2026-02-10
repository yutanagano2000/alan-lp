"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past the hero section (about 400px)
      setIsVisible(window.scrollY > 400)
    }

    // Check initial scroll position on mount
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in-scale"
      style={{ animationDuration: "0.3s" }}
    >
      <Link href="#pricing-section">
        <Button
          className="bg-[#D4C4B7] text-[#2C1810] hover:bg-[#C4B3A6] px-6 py-2.5 rounded-full font-medium text-sm shadow-xl ring-1 ring-[#B4A396]/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
        >
          <span>無料で始める</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </Link>
    </div>
  )
}
