
const podcast = {
  title: "شروع یادگیری توسعه وب با ری اکت",
  description:
    "ری اکت (React) یک کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری پویا و تعاملی است. یکی از مهم‌ترین ابزارهای توسعه وب شناخته می‌شود.",
  date: "۱۴ آذرماه ۱۴۰۴",
  duration: "۰۰:۴۳:۳۲",
  views: "۱۴۳",
  episodes: "۵۸",
  image: "Rectangle 36.png",
  href: "/podcasts/react-development",
};

function PodcastMetadata({ duration, views, episodes }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#a9aaa6]">
      <span className="inline-flex items-center gap-1.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 7.5V12L15 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{duration}</span>
      </span>

      <span className="inline-flex items-center gap-1.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5"
        >
          <path
            d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span>{views}</span>
      </span>

      <span className="inline-flex items-center gap-1.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5"
        >
          <path
            d="M5 10v4m4-7v10m6-13v16m4-12v8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span>{episodes}</span>
      </span>
    </div>
  );
}

function PodcastCard({ podcast }) {
  return (
    <article
      dir="rtl"
      className="
        group relative mx-auto w-full max-w-[850px]
         rounded-tl-full rounded-[30px] bg-gradient-to-l
        from-[#a5efea] via-[#c9eee1] to-[#f4ddb8]
        shadow-[0_12px_35px_rgba(0,0,0,0.10)]
        transition-shadow duration-300
        hover:shadow-[0_16px_40px_rgba(0,170,165,0.18)]
        motion-reduce:transition-none
      "
    >
      <div className="flex min-h-[196px] items-center gap-4 p-4 sm:gap-5 sm:p-6">
        <a
          href={podcast.href}
          aria-label={`مشاهده پادکست ${podcast.title}`}
          className="
            relative z-10 order-2 block w-[108px] shrink-0
            overflow-hidden rounded-[20px] bg-[#191919]
            shadow-[0_5px_12px_rgba(0,0,0,0.18)]
            outline-none transition-transform duration-300
            group-hover:scale-[1.03]
            focus-visible:ring-2 focus-visible:ring-[#00aaa5]
            focus-visible:ring-offset-4
            sm:w-[138px]
            motion-reduce:transition-none
            motion-reduce:group-hover:scale-100
          "
        >
          <img
            src={podcast.image}
            alt="کاور پادکست React"
            loading="lazy"
            decoding="async"
            className="aspect-square h-full w-full object-cover"
          />
        </a>

        <div className="order-1 min-w-0 flex-1">
          <p className="mb-3 text-[9px] text-[#a6a99d] sm:text-[10px]">
            {podcast.date}
          </p>

          <h3 className="text-sm font-extrabold leading-7 text-[#007f7d] sm:text-base">
            {podcast.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[10px] leading-5 text-[#879d99] sm:text-[11px]">
            {podcast.description}
          </p>

          <div className="mt-4">
            <PodcastMetadata
              duration={podcast.duration}
              views={podcast.views}
              episodes={podcast.episodes}
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="
            absolute bottom-8 left-4 z-10
            flex flex-col items-center gap-1
            sm:left-5
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-4 w-1.5 rounded-full bg-[#00c8c5]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </article>
  );
}

export default function PodcastSection() {
  return (
    <section
      dir="rtl"
      aria-labelledby="podcast-heading"
      className="
        relative isolate overflow-hidden
        bg-[#fafafa] px-4 py-12
        sm:px-6 sm:py-14
        lg:min-h-[532px] lg:px-10 lg:py-8
      "
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 532"
        fill="none"
        preserveAspectRatio="none"
        className="
          pointer-events-none absolute inset-0 -z-10
          h-full w-full opacity-40
        "
      >
        <path
          d="M35 125 C100 210 155 180 210 130 S335 55 400 105 S500 190 550 130"
          stroke="#d9d9d9"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />

        <path
          d="M1120 100 C1170 140 1200 65 1250 85 S1320 125 1380 80"
          stroke="#d9d9d9"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />

        <circle
          cx="1250"
          cy="72"
          r="22"
          stroke="#d9d9d9"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />

        <circle
          cx="350"
          cy="115"
          r="58"
          stroke="#e2e2e2"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />
      </svg>

      <header className="relative mb-10 text-center lg:mb-12">
        <h2
          id="podcast-heading"
          className="
            flex items-center justify-center gap-2
            text-xl font-extrabold text-[#151515]
            sm:text-2xl
          "
        >
          پادکست ها
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#00c8c5]"
          />
        </h2>

        <p className="mt-3 text-xs text-[#b3b3b3] sm:text-sm">
          مجموعه‌ای از تمام آنچه شما نیاز دارید
        </p>
      </header>

      <div className="relative mx-auto max-w-[1440px]">
        <PodcastCard podcast={podcast} />
      </div>
    </section>
  );
}
