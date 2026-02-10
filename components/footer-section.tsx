"use client"

import { Twitter, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">ALAN</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">建設業界に、AIの力を。</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Product, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">製品</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              機能
            </a>
            <a href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              料金プラン
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Web版
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              モバイルアプリ
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              API連携
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">会社情報</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              会社概要
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              チーム
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              採用情報
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              ニュース
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">サポート</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              利用規約
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              プライバシーポリシー
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              ヘルプセンター
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              導入事例
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              よくある質問
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
