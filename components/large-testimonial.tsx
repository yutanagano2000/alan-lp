import Image from "next/image"

export function LargeTestimonial() {
  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
              <div className="w-full max-w-[1024px] text-center text-foreground">
                <div className="leading-tight md:leading-tight lg:leading-[64px] font-bold text-base md:text-2xl lg:text-5xl mb-4 whitespace-nowrap">
                  「現場の未来を、共に創る」
                </div>
                <div className="leading-6 md:leading-8 lg:leading-10 font-normal text-base md:text-xl lg:text-2xl text-muted-foreground">
                  私たちは建設業界の課題を深く理解しています。ALANは、現場で働く皆さんの声から生まれました。<br /><strong>テクノロジーで、すべての建設会社に働き方改革を。</strong>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
                {/* 飯塚稜介 CEO */}
                <div className="flex justify-center items-center gap-4">
                  <Image
                    src="/images/avatars/robert-fox.png"
                    alt="飯塚稜介 avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 relative rounded-full"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
                  />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-foreground text-base font-medium leading-6">飯塚稜介</div>
                    <div className="text-muted-foreground text-sm font-normal leading-6">CEO</div>
                  </div>
                </div>
                
                {/* 増成健太 CEO */}
                <div className="flex justify-center items-center gap-4">
                  <Image
                    src="/images/avatars/cameron-williamson.png"
                    alt="増成健太 avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 relative rounded-full"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
                  />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-foreground text-base font-medium leading-6">増成健太</div>
                    <div className="text-muted-foreground text-sm font-normal leading-6">CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
