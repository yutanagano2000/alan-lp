import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { CartProvider } from '@/components/cart/cart-context'
import { DebugGrid } from '@/components/debug-grid'
import { isDevelopment } from '@/lib/constants'
import { V0Provider } from '@/lib/context'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import './globals.css'

const V0Setup = dynamic(() => import('@/components/v0-setup'))

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  title: 'ALAN | 建設業界特化AI',
  description: '書類作成・法令チェック・写真整理。平均残業時間80%削減を実現する建設業界特化AIソリューション。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="w-full">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  width: 100%;
  max-width: 100vw;
}
        `}</style>
      </head>
      <body className={cn(GeistSans.variable, GeistMono.variable, "antialiased min-h-screen w-full", { "is-v0": isV0 })} suppressHydrationWarning>
        <V0Provider isV0={isV0}>
          <CartProvider>
            <NuqsAdapter>
              <main data-vaul-drawer-wrapper="true">
                {children}
              </main>
              {isDevelopment && <DebugGrid />}
              <Toaster closeButton position="bottom-right" />
            </NuqsAdapter>
          </CartProvider>
          {isV0 && <V0Setup />}
        </V0Provider>
        <Analytics />
      </body>
    </html>
  )
}
