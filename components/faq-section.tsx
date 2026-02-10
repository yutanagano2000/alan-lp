"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "ALANとは何ですか？",
    answer:
      "ALANは建設業界に特化したAIプラットフォームです。工事写真の管理、書類作成の自動化、法令チェックなど、現場と事務所の業務効率化を支援します。個人事業主から大手ゼネコンまで、あらゆる規模の建設会社にご利用いただけます。",
  },
  {
    question: "AIによる書類作成はどのように動作しますか？",
    answer:
      "撮影した写真や入力した工事情報をもとに、AIが工事写真台帳、施工報告書、日報などを自動生成します。テンプレートは国土交通省の基準に準拠しており、そのまま提出可能な品質です。",
  },
  {
    question: "既存のシステムと連携できますか？",
    answer:
      "はい。主要な建設管理ソフトとのCSV/Excel連携に対応しています。また、APIを提供しており、自社システムとの直接連携も可能です。導入時には専任スタッフがサポートいたします。",
  },
  {
    question: "無料プランでは何ができますか？",
    answer:
      "無料プランでは、5案件まで管理可能で、写真1,000枚まで保存できます。基本的なAI書類作成機能とスマホアプリもご利用いただけます。まずは無料でお試しいただき、効果を実感してください。",
  },
  {
    question: "現場でオフラインでも使えますか？",
    answer:
      "はい。スマホアプリはオフライン対応しています。電波の届かない現場でも写真撮影や記録が可能で、電波が復旧次第自動で同期されます。",
  },
  {
    question: "データのセキュリティは大丈夫ですか？",
    answer:
      "万全のセキュリティ体制を整えています。全データはSSL/TLS暗号化で保護され、国内データセンターで管理しています。ISO 27001認証取得済みで、エンタープライズプランではオンプレミス導入も可能です。",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            よくある質問
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            ALANについてのご質問にお答えします
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
