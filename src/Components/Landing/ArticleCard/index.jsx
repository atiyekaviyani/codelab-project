import SectionReveal from "../../Animations/SectionReveal";
import {
  ArrowLeft,
  Newspaper,
  ChartNoAxesColumnIncreasing,
  Megaphone,
  ShoppingBag,
  Users,
  MessageCircle,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "دنیای آنلاین را برای افزایش فروش",
    image: "/Rectangle 42 (4).png",
    gridClass: "article-one",
    icon: ChartNoAxesColumnIncreasing,
    tilt: "-1.5deg",
  },
  {
    id: 2,
    title: "بازاریابی حسی برای کسب درآمد بیشتر",
    image: "/Rectangle 43 (1).png",
    gridClass: "article-two",
    icon: Megaphone,
    tilt: "1.2deg",
  },
  {
    id: 3,
    title: "از کجا مشتری پیدا کنیم؟ راه‌های پیدا کردن مشتری",
    image: "/Rectangle 40.png",
    gridClass: "article-three",
    icon: ShoppingBag,
    tilt: "-0.8deg",
  },
  {
    id: 4,
    title: "ترازهای مشتری را بشناسید تا درآمدتان بیشتر شود",
    image: "/Rectangle 41 (2).png",
    gridClass: "article-four",
    icon: Users,
    tilt: "1.2deg",
  },
  {
    id: 5,
    title: "ورود به دنیای آنلاین برای افزایش فروش",
    image: "/Rectangle 38 (3).png",
    gridClass: "article-five",
    icon: ChartNoAxesColumnIncreasing,
    tilt: "-1deg",
  },
  {
    id: 6,
    title: "جذب مشتری با تحقیقات درباره دهان به دهان",
    image: "/Rectangle 37.png",
    gridClass: "article-six",
    icon: MessageCircle,
    tilt: "1.5deg",
  },
];

function BackgroundDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="
          absolute -top-32 -left-28
          h-[360px] w-[540px]
          -rotate-[17deg] rounded-[44%]
          bg-gradient-to-br from-[#d9f7f5]
          via-[#e6f9f8]/75 to-transparent
        "
      />

      <div
        className="
          absolute -bottom-32 -right-24
          h-[330px] w-[510px]
          rotate-[15deg] rounded-[45%]
          bg-gradient-to-tl from-[#d8f7f4]/90
          via-[#e8faf9]/65 to-transparent
        "
      />

      <div
        className="
          absolute -bottom-44 -left-20
          h-[310px] w-[430px]
          rotate-[12deg] rounded-[45%]
          bg-gradient-to-tr from-[#d8f7f4]/70 to-transparent
        "
      />

      <div
        className="
          absolute right-[5%] top-[9%]
          h-[72px] w-[72px] rounded-full
          bg-gradient-to-br from-[#d7f3f4] to-[#b7e5e9]/30
          shadow-[0_12px_30px_rgba(55,174,184,0.12)]
        "
      />

      <div
        className="
          absolute left-[5%] top-[36%]
          h-12 w-12 rotate-[35deg] rounded-lg
          bg-gradient-to-br from-[#b8f3ef]
          via-[#64d9d5] to-[#00aaa5]/30
          shadow-[0_8px_25px_rgba(0,180,175,0.15)]
          blur-[1px]
        "
      />

      <div
        className="
          absolute bottom-[7%] right-[5%]
          h-14 w-14 rotate-[35deg] rounded-xl
          bg-gradient-to-br from-[#c4f4f1]
          via-[#6ddbd7] to-[#00aaa5]/30
          shadow-[0_8px_25px_rgba(0,180,175,0.15)]
          blur-[1px]
        "
      />

      <div className="absolute left-[10%] top-[23%] grid grid-cols-5 gap-[7px] opacity-50">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-[6px] w-[6px] rounded-full bg-[#8ededa]"
          />
        ))}
      </div>

      <div className="absolute bottom-[11%] right-[12%] grid grid-cols-5 gap-[7px] opacity-45">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-[6px] w-[6px] rounded-full bg-[#8ededa]"
          />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ article, wide = false }) {
  const Icon = article.icon;

  return (
    <article
      className={`
        group relative isolate h-[220px] min-w-0
        overflow-hidden rounded-[27px]
        border-[6px] border-white
        bg-gradient-to-b from-white to-[#effbfa]
        shadow-[0_15px_30px_-17px_rgba(16,112,119,0.34)]
        transition-[box-shadow,filter] duration-500 ease-out
        hover:shadow-[0_23px_38px_-18px_rgba(0,171,166,0.32)]
        motion-reduce:transition-none
        sm:h-[235px]
        lg:h-[265px]
        ${wide ? "lg:h-[285px]" : ""}
      `}
      style={{
        "--article-tilt": article.tilt,
      }}
    >
      <div
        className="
          absolute inset-x-0 top-0 h-[57%]
          overflow-hidden bg-[#e4f7f5]
        "
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-[1.06]
            motion-reduce:transition-none
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t from-[#164c50]/10
            via-transparent to-white/10
          "
        />
      </div>

      <div
        className="
          absolute right-4 top-4 z-10
          flex h-9 w-9 items-center justify-center
          rounded-full border border-white/80
          bg-white/90 text-[#00a7a2]
          shadow-[0_4px_14px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <div
        className="
          absolute inset-x-0 bottom-0 z-10
          flex h-[47%] items-center justify-center
          bg-gradient-to-b from-white/95 to-[#f0fbfa]
          px-4 pb-3 pt-2 text-center
        "
      >
        <h3
          className="
            line-clamp-2 max-w-full
            text-[12px] font-bold leading-6
            text-[#203446]
            transition-colors duration-300
            group-hover:text-[#008f8b]
            sm:text-[13px]
          "
        >
          {article.title}
        </h3>
      </div>

      <span
        aria-hidden="true"
        className="
          absolute bottom-2 left-2 z-20
          h-8 w-8 rounded-bl-[28px]
          border-b-[3px] border-l-[3px]
          border-[#00b9b2]
          transition-all duration-300
          group-hover:h-10 group-hover:w-10
        "
      />

      <a
        href={`/articles/${article.id}`}
        aria-label={`مطالعه مطلب: ${article.title}`}
        className="
          absolute bottom-3 right-3 z-20
          flex h-8 w-8 items-center justify-center
          rounded-full
          bg-gradient-to-br from-[#20c9c1] to-[#009c99]
          text-white
          shadow-[0_4px_10px_rgba(0,169,164,0.25)]
          transition-all duration-300
          hover:scale-110
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#00aaa5]
          focus-visible:ring-offset-2
        "
      >
        <ArrowLeft size={17} strokeWidth={2} />
      </a>
    </article>
  );
}

export default function ArticlesSection() {
  return (
    <SectionReveal>
      <section
        dir="rtl"
        aria-labelledby="articles-heading"
        className="
          relative isolate w-full overflow-hidden
          bg-[#f8fcfc] px-4 py-16
          sm:px-6 sm:py-20
          lg:px-10 lg:py-16
        "
      >
        <BackgroundDecorations />

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="none"
          className="
            pointer-events-none absolute inset-0
            -z-10 h-full w-full
          "
        >
          <path
            d="M175 230 C160 100 345 125 465 190 S610 330 700 250"
            stroke="#a4e4e1"
            strokeWidth="2"
            strokeDasharray="4 9"
            strokeLinecap="round"
          />

          <path
            d="M960 260 C1080 160 1240 135 1320 220 S1340 335 1270 375"
            stroke="#a4e4e1"
            strokeWidth="2"
            strokeDasharray="4 9"
            strokeLinecap="round"
          />

          <circle
            cx="194"
            cy="210"
            r="5"
            fill="#16b9b4"
            stroke="#e8fbfa"
            strokeWidth="3"
          />

          <circle
            cx="1320"
            cy="320"
            r="5"
            fill="#f2a318"
            stroke="#fff8e9"
            strokeWidth="3"
          />
        </svg>

        <header className="relative z-10 mb-10 text-center sm:mb-12">
          <div
            className="
              mx-auto inline-flex items-center gap-2
              rounded-full border border-[#c8f0ed]
              bg-[#e8f9f8]/95 px-4 py-2
              text-xs font-bold text-[#167c80]
              shadow-[0_4px_14px_rgba(0,174,168,0.09)]
            "
          >
            <Newspaper size={16} />
            <span>اخبار و مقالات</span>
          </div>

          <h2
            id="articles-heading"
            className="
              mt-4 text-3xl font-black tracking-tight
              text-[#20212c]
              sm:text-4xl lg:text-[50px]
            "
          >
            <span className="bg-gradient-to-l from-[#00a8a4] to-[#25c6be] bg-clip-text text-transparent">
              اخبار و مقالات
            </span>
          </h2>

          <p className="mt-3 text-sm font-medium text-[#929ca6] sm:text-base">
            خودت رو با خبر کن!
          </p>

          <div className="mx-auto mt-5 h-[5px] w-[124px] rounded-full bg-gradient-to-l from-[#ff9d20] via-[#a6c9a6] to-[#00aaa5]" />
        </header>

        <div
          className="
            relative z-10 mx-auto grid max-w-[1100px]
            grid-cols-2 gap-3
            sm:gap-4
            md:grid-cols-4 md:gap-[14px]
          "
        >
          {articles.map((article) => {
            const wide = article.id === 3 || article.id === 4;

            return (
              <div
                key={article.id}
                className={`
                  min-w-0
                  ${article.id === 3 ? "col-span-2 md:col-span-2 md:col-start-3 md:row-start-1" : ""}
                  ${article.id === 4 ? "col-span-2 md:col-span-2 md:col-start-1 md:row-start-2" : ""}
                  ${article.id === 1 ? "md:col-start-1 md:row-start-1" : ""}
                  ${article.id === 2 ? "md:col-start-2 md:row-start-1" : ""}
                  ${article.id === 5 ? "md:col-start-3 md:row-start-2" : ""}
                  ${article.id === 6 ? "md:col-start-4 md:row-start-2" : ""}
                `}
              >
                <div
                  className="
                    h-full transition-transform duration-500
                    motion-reduce:transition-none
                  "
                  style={{
                    transform: `rotate(${article.tilt})`,
                  }}
                >
                  <ArticleCard article={article} wide={wide} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-9 flex justify-center sm:mt-11">
          <a
            href="/articles"
            className="
              group inline-flex items-center gap-3
              rounded-full px-4 py-2
              text-sm font-semibold text-[#00a8a4]
              transition-colors duration-300
              hover:text-[#007e7b]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#00bcb7]
              focus-visible:ring-offset-4
            "
          >
            <span
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full bg-[#dff7f5]
                transition-transform duration-300
                group-hover:-translate-x-1
              "
            >
              <ArrowLeft size={19} />
            </span>

            <span>مشاهده بیشتر</span>
          </a>
        </div>
      </section>
    </SectionReveal>
  );
}
