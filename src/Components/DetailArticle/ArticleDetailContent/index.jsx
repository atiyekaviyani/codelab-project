import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
  Eye,
  Star,
  UserRound,
  CalendarDays,
  ArrowUpLeft,
  List,
} from "lucide-react";

function ArticleContent({ article }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!article) return null;

  const {
    title,
    author,
    publishedAt,
    readingTime,
    views,
    rating,
    ratingCount,
    cover,
    paragraphs = [],
    imageCaption,
    additionalParagraphs = [],
    tableOfContents = [],
    closingParagraph,
    sections = [],
  } = article;

  const hasContent =
    paragraphs.length > 0 ||
    additionalParagraphs.length > 0 ||
    sections.length > 0;

  const formattedViews =
    typeof views === "number" ? views.toLocaleString("fa-IR") : views;

  const metaItems = [
    author && {
      key: "author",
      icon: UserRound,
      content: author,
    },
    publishedAt && {
      key: "date",
      icon: CalendarDays,
      content: publishedAt,
    },
    readingTime && {
      key: "reading",
      icon: Clock3,
      content: `${readingTime} دقیقه مطالعه`,
    },
    views !== undefined && {
      key: "views",
      icon: Eye,
      content: `${formattedViews} بازدید`,
    },
  ].filter(Boolean);

  return (
    <article dir="rtl" className="w-full">
    
      <header className="relative overflow-hidden rounded-t-[28px] border border-slate-200/80 bg-white px-5 pb-7 pt-7 sm:px-8 sm:pb-9 sm:pt-9 lg:px-11 lg:pt-11">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-44 w-44 -translate-x-1/3 -translate-y-1/3 rounded-full bg-teal-100/50 blur-3xl"
        />

        <div className="relative">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#01BDB8]" />
            <span className="text-xs font-bold tracking-wide text-teal-700 sm:text-sm">
              مجله آموزشی 
            </span>
          </div>

          <h1 className="max-w-4xl text-2xl font-black leading-[1.9] tracking-tight text-slate-900 sm:text-3xl sm:leading-[1.8] lg:text-[2.5rem] lg:leading-[1.75]">
            {title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {metaItems.map(({ key, icon: Icon, content }) => (
              <div
                key={key}
                className="inline-flex items-center gap-2 text-xs text-slate-500 sm:text-sm"
              >
                <Icon size={16} className="shrink-0 text-teal-600" />
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {cover && (
        <figure className="group relative overflow-hidden border-x border-slate-200/80 bg-slate-50">
          <img
            src={cover.startsWith("/") ? cover : `/${cover}`}
            alt={title || "تصویر مقاله"}
            loading="lazy"
            className="block h-auto max-h-[620px] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          {imageCaption && (
            <figcaption className="border-t border-slate-200/70 bg-white px-5 py-3 text-sm leading-7 text-slate-500 sm:px-8">
              <span className="ml-2 font-bold text-teal-700">تصویر:</span>
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="rounded-b-[28px] border border-t-0 border-slate-200/80 bg-white px-5 pb-7 pt-7 sm:px-8 sm:pb-9 sm:pt-9 lg:px-11">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div
              className={`relative ${
                isExpanded ? "" : "max-h-[340px] overflow-hidden"
              }`}
            >
              <div className="space-y-6 text-justify text-[15px] leading-[2.35] text-slate-600 sm:text-base sm:leading-[2.4]">
                {paragraphs.map((paragraph, index) => (
                  <p key={`intro-${index}`}>{paragraph}</p>
                ))}
              </div>

              {!isExpanded && paragraphs.length > 0 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent"
                />
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="mt-9 space-y-10">
              {additionalParagraphs.length > 0 && (
                <div className="space-y-6 text-justify text-[15px] leading-[2.35] text-slate-600 sm:text-base sm:leading-[2.4]">
                  {additionalParagraphs.map((paragraph, index) => (
                    <p key={`additional-${index}`}>{paragraph}</p>
                  ))}
                </div>
              )}

              {tableOfContents.length > 0 && (
                <nav
                  aria-label="فهرست مطالب مقاله"
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 sm:p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                      <List size={19} />
                    </span>

                    <div>
                      <h2 className="font-extrabold text-slate-900">
                        در این مقاله می‌خوانید
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">
                        دسترسی سریع به بخش‌های مقاله
                      </p>
                    </div>
                  </div>

                  <ol className="space-y-1">
                    {tableOfContents.map((item, index) => (
                      <li key={`toc-${index}`}>
                        <a
                          href={`#article-section-${index + 1}`}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-7 text-slate-600 transition-colors hover:bg-white hover:text-teal-700"
                        >
                          <span className="mt-0.5 text-xs font-bold tabular-nums text-teal-600">
                            {(index + 1).toLocaleString("fa-IR")}.
                          </span>
                          <span>{item}</span>
                          <ArrowUpLeft
                            size={15}
                            className="mr-auto mt-1 shrink-0 opacity-0 transition-all group-hover:-translate-x-0.5 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {closingParagraph && (
                <p className="text-justify text-[15px] leading-[2.35] text-slate-600 sm:text-base sm:leading-[2.4]">
                  {closingParagraph}
                </p>
              )}

              {sections.map((section, index) => (
                <section
                  key={section.id ?? index}
                  id={`article-section-${index + 1}`}
                  className="scroll-mt-24 space-y-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-700">
                      {(index + 1).toLocaleString("fa-IR")}
                    </span>

                    <h2 className="pt-0.5 text-lg font-extrabold leading-9 text-slate-900 sm:text-xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5 border-r border-slate-200 pr-4 sm:pr-5">
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p
                        key={`section-${section.id ?? index}-${paragraphIndex}`}
                        className="text-justify text-[15px] leading-[2.35] text-slate-600 sm:text-base sm:leading-[2.4]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {rating !== undefined && (
            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-amber-50">
                  <Star size={19} className="fill-amber-400 text-amber-400" />
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-extrabold text-slate-900">
                      {rating.toLocaleString("fa-IR")}
                    </span>

                    {ratingCount !== undefined && (
                      <span className="text-xs text-slate-400">
                        از {ratingCount.toLocaleString("fa-IR")} رأی
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    امتیاز کاربران به این مقاله
                  </p>
                </div>
              </div>

              <span className="text-xs text-slate-400">
                تجربه یادگیری بهتر، با CodeLab
              </span>
            </div>
          )}

          {hasContent && (
            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded((previous) => !previous)}
                aria-expanded={isExpanded}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-200 hover:bg-teal-50/60 hover:text-teal-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp
                      size={18}
                      className="text-teal-700 transition-transform group-hover:-translate-y-0.5"
                    />
                    <span>نمایش کمتر</span>
                  </>
                ) : (
                  <>
                    <BookOpen
                      size={18}
                      className="text-teal-700 transition-transform group-hover:scale-110"
                    />
                    <span>ادامه مطالعه مقاله</span>
                    <ChevronDown
                      size={17}
                      className="text-[#E48900] transition-transform group-hover:translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleContent;
