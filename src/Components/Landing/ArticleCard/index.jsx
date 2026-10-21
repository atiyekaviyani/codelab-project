const articles = [
  {
    id: 1,
    title: "دنیای آنلاین را برای افزایش فروش",
    image: "/Rectangle 42 (4).png",
    gridClass: "md:col-start-1 md:row-start-1",
  },
  {
    id: 2,
    title: "بازاریابی حسی برای کسب درآمد بیشتر",
    image: "/Rectangle 43 (1).png",
    gridClass: "md:col-start-2 md:row-start-1",
  },
  {
    id: 3,
    title: "از کجا مشتری پیدا کنیم؟ راه‌های پیدا کردن مشتری",
    image: "/Rectangle 40.png",
    gridClass: "col-span-2 md:col-span-2 md:col-start-3 md:row-start-1",
  },
  {
    id: 4,
    title: "ترازهای مشتری را بشناسید تا درآمدتان بیشتر شود",
    image: "/Rectangle 41 (2).png",
    gridClass: "col-span-2 md:col-span-2 md:col-start-1 md:row-start-2",
  },
  {
    id: 5,
    title: "ورود به دنیای آنلاین برای افزایش فروش",
    image: "/Rectangle 38 (3).png",
    gridClass: "md:col-start-3 md:row-start-2",
  },
  {
    id: 6,
    title: "جذب مشتری با تحقیقات درباره دهان به دهان",
    image: "/Rectangle 37.png",
    gridClass: "md:col-start-4 md:row-start-2",
  },
];

function ArticleCard({ article }) {
  return (
    <article
      className="
        group relative isolate h-[180px] min-w-0
        overflow-hidden rounded-xl bg-[#d8f4f1]
        shadow-[0_3px_6px_rgba(0,0,0,0.12)]
        transition-shadow duration-300
        hover:shadow-[0_8px_20px_rgba(0,190,185,0.20)]
        motion-reduce:transition-none
      "
    >
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="
          absolute inset-0 z-0 h-full w-full object-cover
          transition-[opacity,transform] duration-500 ease-in-out
          group-hover:scale-105 group-hover:opacity-20
          motion-reduce:transition-none
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          bg-gradient-to-t from-[#00d8d0]/95
          via-[#4bd8d3]/30 to-transparent
          transition-opacity duration-300
          group-hover:opacity-50
          motion-reduce:transition-none
        "
      />

      <div
        className="
          absolute inset-x-0 bottom-0 z-20
          flex flex-col items-center gap-2
          bg-gradient-to-t from-[#00d8d0]/90 to-transparent
          px-3 pb-3 pt-8 text-center
          transition-all duration-300
          group-hover:bottom-1/2
          group-hover:translate-y-1/2
          group-hover:bg-transparent
          group-focus-within:bottom-1/2
          group-focus-within:translate-y-1/2
          group-focus-within:bg-transparent
          motion-reduce:transition-none
        "
      >
        <h3 className="text-[11px] font-medium leading-6 text-[#073f42]">
          {article.title}
        </h3>

        <a
          href={`/articles/${article.id}`}
          aria-label={`مطالعه مطلب: ${article.title}`}
          className="
            invisible translate-y-2 opacity-0
            rounded-full bg-white px-5 py-2
            text-xs font-bold text-[#009e99] shadow-md
            transition-[opacity,transform,background-color,color]
            duration-300
            group-hover:visible group-hover:translate-y-0
            group-hover:opacity-100
            group-focus-within:visible
            group-focus-within:translate-y-0
            group-focus-within:opacity-100
            hover:bg-[#008f8a] hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#00aaa5]
            motion-reduce:transition-none
          "
        >
          مطالعه مطالب
        </a>
      </div>
    </article>
  );
}

export default function ArticlesSection() {
  return (
    <section
      dir="rtl"
      aria-labelledby="articles-heading"
      className="
        relative isolate overflow-hidden
        bg-[#fafafa] px-4 py-14
        sm:px-6 lg:px-10 lg:py-16
      "
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 700"
        fill="none"
        preserveAspectRatio="none"
        className="
          pointer-events-none absolute inset-0
          -z-10 h-full w-full opacity-[0.15]
        "
      >
        <path
          d="M420 80 C650 20 790 170 850 310 S1000 500 1200 430"
          stroke="#b9b9b9"
          strokeWidth="1.5"
          strokeDasharray="2 4"
        />
        <circle
          cx="480"
          cy="75"
          r="33"
          stroke="#b9b9b9"
          strokeWidth="1.5"
          strokeDasharray="2 4"
        />
        <circle
          cx="1110"
          cy="540"
          r="30"
          stroke="#b9b9b9"
          strokeWidth="1.5"
          strokeDasharray="2 4"
        />
      </svg>

      <header className="relative mb-10 text-center">
        <h2
          id="articles-heading"
          className="
            flex items-center justify-center gap-2
            text-xl font-extrabold text-[#151515]
            sm:text-2xl
          "
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-[#00c8c5]"
          />
          اخبار و مقالات
        </h2>

        <p className="mt-3 text-sm text-[#b3b3b3]">خودت رو با خبر کن!</p>
      </header>

      <div
        className="
          mx-auto grid max-w-[758px]
          grid-cols-2 gap-3
          md:grid-cols-4 md:gap-[14px]
        "
      >
        {articles.map((article) => (
          <div key={article.id} className={`min-w-0 ${article.gridClass}`}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <a
          href="/articles"
          className="
            inline-flex items-center gap-2
            text-sm text-[#aaa]
            transition-colors duration-200
            hover:text-[#00bcb7]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#00bcb7]
            focus-visible:ring-offset-4
          "
        >
          <span>مشاهده بیشتر</span>
          <span aria-hidden="true">‹</span>
        </a>
      </div>
    </section>
  );
}
