import { ShopLinks } from "../shop-links"
import type { Collection } from "@/lib/shopify/types"

interface HomeSidebarProps {
  collections: Collection[]
}

export function HomeSidebar({ collections }: HomeSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-sides pt-top-spacing flex flex-col justify-between">
      <div>
        <p className="italic tracking-tighter text-base">もう悩まない。あなたのMOOD</p>
        <div className="mt-5 text-base leading-tight">
          <p>あなたに合うのはどの香水でしょうか？</p>
          <p>MOODは女性人気の高い香水だけを扱います。</p>
          <p>それは、あなたの魅力を最大にする香水です。</p>
        </div>
      </div>
      <ShopLinks collections={collections} />
    </aside>
  )
}
