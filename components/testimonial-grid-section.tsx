import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  company: string
  avatar: string
  type: string
  role?: string
  employees?: string
  industry?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "導入前は毎日2時間以上かけていた写真整理が、今では15分で終わります。現場から直接アップロードできるので、事務所に戻ってからの作業がほぼゼロになりました。",
    name: "田中 健一",
    company: "田中建設株式会社",
    avatar: "/images/avatars/annette-black.png",
    type: "large-teal",
    role: "代表取締役",
    employees: "従業員25名",
    industry: "総合建設",
  },
  {
    quote:
      "書類作成のAI機能が本当に便利。工事写真台帳が自動で作成されるので、月末の事務作業が激減しました。",
    name: "佐藤 美咲",
    company: "佐藤電気工事",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
    role: "事務担当",
    employees: "従業員8名",
    industry: "電気工事",
  },
  {
    quote:
      "法令チェック機能のおかげで、コンプライアンス違反のリスクが減りました。若手社員でも安心して作業を任せられます。",
    name: "山田 太郎",
    company: "山田土木株式会社",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
    role: "工事部長",
    employees: "従業員50名",
    industry: "土木工事",
  },
  {
    quote:
      "スマホアプリが直感的で使いやすい。ITが苦手なベテラン職人も、すぐに使いこなせるようになりました。",
    name: "鈴木 一郎",
    company: "鈴木塗装",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
    role: "現場監督",
    employees: "従業員12名",
    industry: "塗装工事",
  },
  {
    quote:
      "複数現場の進捗が一目で把握できるダッシュボードが秀逸。経営判断のスピードが格段に上がりました。",
    name: "高橋 誠",
    company: "高橋建設工業",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
    role: "専務取締役",
    employees: "従業員80名",
    industry: "総合建設",
  },
  {
    quote:
      "元請けへの報告書作成が楽になりました。テンプレートが充実していて、そのまま提出できる品質です。",
    name: "伊藤 花子",
    company: "伊藤設備",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
    role: "経理・総務",
    employees: "従業員15名",
    industry: "設備工事",
  },
  {
    quote:
      "残業時間が月平均20時間も減りました。社員のワークライフバランスが改善され、採用にも良い影響が出ています。働き方改革の強い味方です。",
    name: "渡辺 修",
    company: "渡辺組",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
    role: "代表取締役",
    employees: "従業員120名",
    industry: "総合建設",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type, role, employees, industry }: Testimonial) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full max-w-[320px] sm:max-w-[350px] md:max-w-[320px] lg:max-w-[350px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-xl font-medium leading-7"
    nameClasses += " text-primary-foreground text-sm font-normal leading-5"
    companyClasses += " text-primary-foreground/60 text-sm font-normal leading-5"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-xl font-medium leading-7"
    nameClasses += " text-foreground text-sm font-normal leading-5"
    companyClasses += " text-muted-foreground text-sm font-normal leading-5"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[14px] font-normal leading-5"
    nameClasses += " text-foreground text-xs font-normal leading-[18px]"
    companyClasses += " text-muted-foreground text-xs font-normal leading-[18px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`${avatarSize === 48 ? 'w-12 h-12' : 'w-9 h-9'} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
          {role && (
            <div className="text-xs text-muted-foreground/70">{role}</div>
          )}
          <div className="flex gap-2 text-xs text-muted-foreground/60 flex-wrap">
            {employees && <span className="bg-muted px-1.5 py-0.5 rounded">{employees}</span>}
            {industry && <span className="bg-muted px-1.5 py-0.5 rounded">{industry}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="w-full max-w-7xl mx-auto py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            導入企業の声
          </h2>
          <p className="text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed max-w-2xl">
            全国500社以上の建設会社がALANを導入しています
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto pt-0.5 pb-4 md:pb-6 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full max-w-[320px]">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full max-w-[320px]">
            <TestimonialCard {...testimonials[2]} />
            <TestimonialCard {...testimonials[3]} />
            <TestimonialCard {...testimonials[4]} />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full max-w-[320px]">
            <TestimonialCard {...testimonials[5]} />
            <TestimonialCard {...testimonials[6]} />
          </div>
        </div>
      </div>
    </section>
  )
}
