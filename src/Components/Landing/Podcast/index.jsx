import SectionReveal from "../../Animations/SectionReveal";
import {
  Clock3,
  Eye,
  Headphones,
  CalendarDays,
  Play,
  ArrowLeft,
  AudioLines,
} from "lucide-react";

const podcast = {
  title: "شروع یادگیری توسعه وب با ری اکت",
  description:
    "ری اکت (React) یک کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری پویا و تعاملی است. در این پادکست با مسیر یادگیری و مفاهیم اصلی آن آشنا می‌شوید.",
  date: "۱۴ آذرماه ۱۴۰۴",
  duration: "۰۰:۴۳:۳۲",
  views: "۱۴۳",
  episodes: "۵۸",
  image: "/Rectangle 36.png",
  href: "",
};

function PodcastMetadata() {
  const metadata = [
    { icon: Clock3, value: podcast.duration, label: "مدت زمان" },
    { icon: Eye, value: podcast.views, label: "بازدید" },
    { icon: Headphones, value: podcast.episodes, label: "قسمت‌ها" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {metadata.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 text-sm text-slate-600"
        >
          <Icon size={16} strokeWidth={1.7} className="text-teal-700" />
          <span className="font-medium">{value}</span>
          <span className="text-slate-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

function PodcastCover() {
  return (
    <div className="relative mx-auto w-full max-w-[245px] sm:max-w-none">
      <div className="absolute -inset-3 rounded-[28px] bg-white/50 blur-xl" />

      <div className="relative aspect-[4/4.5] overflow-hidden rounded-[22px] border border-white/70 bg-white/70 shadow-[0_16px_40px_rgba(37,75,72,0.13)]">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

        <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between">
          <span className="text-xs font-medium text-white/90">
            پادکست آموزشی
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal-800 shadow-lg transition-transform duration-300 hover:scale-110">
            <AudioLines size={20} />
          </span>
        </div>
      </div>

      <div className="absolute -left-4 top-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-teal-700 shadow-lg">
        <Headphones size={21} strokeWidth={1.6} />
      </div>
    </div>
  );
}

function PodcastCard() {
  return (
    <article
      dir="rtl"
      className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-[#e0f5ef] via-[#f1f8f3] to-[#fff0e5] p-5 shadow-[0_18px_55px_rgba(48,91,79,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(48,91,79,0.14)] sm:p-7 lg:p-9"
    >
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/3 h-52 w-52 rounded-full bg-orange-200/25 blur-3xl" />

      <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_245px] lg:gap-10">
        <div className="order-2 min-w-0 md:order-1">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-800/10 bg-white/65 px-3 py-1.5 text-xs font-medium text-teal-800">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              پادکست منتخب
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <CalendarDays size={14} />
              {podcast.date}
            </span>
          </div>

          <h3 className="max-w-lg text-xl font-extrabold leading-9 text-slate-800 transition-colors duration-300 group-hover:text-teal-800 sm:text-2xl sm:leading-10 lg:text-[27px]">
            {podcast.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-[15px]">
            {podcast.description}
          </p>

          <div className="my-6 h-px w-full max-w-md bg-gradient-to-l from-teal-900/15 via-slate-400/15 to-transparent" />

          <PodcastMetadata />

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={podcast.href}
              className="group/button inline-flex items-center justify-center gap-3 rounded-xl bg-[#147d76] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(20,125,118,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#106a64] hover:shadow-[0_12px_26px_rgba(20,125,118,0.25)]"
            >
              <Play size={16} fill="currentColor" />
              شنیدن پادکست
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover/button:-translate-x-1"
              />
            </a>

            <span className="text-xs text-slate-500">
              همراه شما در مسیر یادگیری
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <PodcastCover />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 hidden grid-cols-4 gap-2 opacity-40 sm:grid"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-teal-700" />
        ))}
      </div>
    </article>
  );
}

function BackgroundDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-32 top-12 h-72 w-72 rounded-full border border-teal-900/[0.06]" />
      <div className="absolute -right-20 top-24 h-48 w-48 rounded-full border border-teal-900/[0.07]" />
      <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#e3f4ed]/70 blur-3xl" />

      <svg
        className="absolute right-[5%] top-20 hidden h-36 w-36 text-teal-800/[0.12] sm:block"
        viewBox="0 0 120 120"
        fill="none"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <circle
            key={index}
            cx="60"
            cy="60"
            r={18 + index * 9}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="absolute bottom-20 left-[8%] grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-teal-800" />
        ))}
      </div>
    </div>
  );
}

export default function PodcastSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate min-h-[530px] overflow-hidden bg-[#fafbf9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <BackgroundDecorations />

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <header className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-block text-xs font-bold tracking-[0.18em] text-teal-700">
              LISTEN & LEARN
            </span>

            <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
              پادکست‌ها
            </h2>

            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-orange-400" />
              <span className="h-1 w-3 rounded-full bg-teal-600" />
            </div>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              مجموعه‌ای از تمام آنچه شما برای یادگیری و رشد نیاز دارید
            </p>
          </header>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto max-w-5xl">
            <PodcastCard />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
