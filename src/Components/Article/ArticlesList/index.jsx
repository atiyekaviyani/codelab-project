import { FileSearch, Sparkles, ArrowLeft } from "lucide-react";
import ArticleCard from "../ArticleCard";

export default function ArticlesList({ articles = [] }) {
  if (articles.length === 0) {
    return (
      <section
        aria-label="فهرست مقالات"
        className="relative isolate flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#E6F1EE] bg-gradient-to-br from-white via-[#FAFDFC] to-[#EFFAF7] px-5 py-14 text-center sm:rounded-[32px] sm:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-[#CFF5EB]/50 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-12 size-48 rounded-full bg-[#E2F5FF]/60 blur-3xl"
        />

        <div className="relative flex size-[76px] items-center justify-center rounded-[25px] border border-white bg-white/90 text-[#20BCA6] shadow-[0_10px_30px_rgba(35,151,133,0.10)]">
          <FileSearch size={34} strokeWidth={1.6} />

          <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-[#FFF0D9] text-[#E88300]">
            <Sparkles size={13} />
          </span>
        </div>

        <h3 className="relative mt-6 text-lg font-extrabold text-[#203942] sm:text-xl">
          مقاله‌ای پیدا نشد!
        </h3>

        <p className="relative mt-3 max-w-[340px] text-sm leading-7 text-[#7B8D91]">
          با تغییر عبارت جست‌وجو یا انتخاب دسته‌بندی دیگری، محتوای موردنظرت رو
          پیدا کن.
        </p>

        <div className="relative mt-6 flex items-center gap-2 rounded-full border border-[#DDF2EC] bg-white/80 px-4 py-2.5 text-xs font-medium text-[#42978B]">
          <span className="size-1.5 rounded-full bg-[#2BC4AD]" />
          مطالب تازه همیشه در راه‌اند
        </div>
      </section>
    );
  }

  return (
    <section aria-label="فهرست مقالات" className="min-w-0">
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-5 w-1 rounded-full bg-[#24C4AE]"
            />

            <h2 className="text-base font-extrabold text-[#203942] sm:text-lg">
              آخرین مقالات
            </h2>
          </div>

          <p className="mt-2 pr-3 text-xs leading-6 text-[#879799] sm:text-sm">
            مطالبی برای یادگیری، پیشرفت و کشف ایده‌های تازه
          </p>
        </div>

        <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-[#DDF2EC] bg-[#F3FBF8] px-3 py-2 text-xs font-medium text-[#35998B] sm:flex">
          <Sparkles size={14} />
          <span>{articles.length} مقاله</span>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="min-w-0 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center sm:hidden">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E5F1ED] bg-white px-4 py-2 text-xs text-[#80918F]">
          <span className="size-1.5 rounded-full bg-[#28C5AE]" />
          {articles.length} مقاله برای مطالعه
        </span>
      </div>
    </section>
  );
}
