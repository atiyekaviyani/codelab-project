import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
  Eye,
  Star,
  UserRound,
} from "lucide-react";

function ArticleContent({ article }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!article) {
    return null;
  }

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

  return (
    <article
      dir="rtl"
      className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8"
    >
      <header className="mb-6">
        <h1 className="mb-5 text-xl font-extrabold leading-9 text-gray-900 sm:text-2xl sm:leading-10 lg:text-3xl lg:leading-[1.8]">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-gray-100 pb-5 text-sm text-gray-500">
          {author && (
            <div className="flex items-center gap-2">
              <UserRound size={17} className="text-[#01BDB8]" />
              <span>{author}</span>
            </div>
          )}

          {publishedAt && <span className="text-gray-400">{publishedAt}</span>}

          {readingTime && (
            <div className="flex items-center gap-2">
              <Clock3 size={17} className="text-[#01BDB8]" />
              <span>{readingTime} دقیقه مطالعه</span>
            </div>
          )}

          {views !== undefined && (
            <div className="flex items-center gap-2">
              <Eye size={17} className="text-[#01BDB8]" />
              <span>{views.toLocaleString("fa-IR")} بازدید</span>
            </div>
          )}
        </div>
      </header>

      <div className="relative">
        <div
          className={`relative ${
            isExpanded ? "" : "max-h-[340px] overflow-hidden"
          }`}
        >
          <div className="space-y-5 text-justify text-sm leading-9 text-gray-600 sm:text-base sm:leading-10">
            {paragraphs.map((paragraph, index) => (
              <p key={`intro-${index}`}>{paragraph}</p>
            ))}
          </div>

          {!isExpanded && paragraphs.length > 0 && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent"
            />
          )}
        </div>
      </div>

      {cover && (
        <figure className="my-7">
          <div className="overflow-hidden rounded-xl bg-gray-50">
            <img
              src={cover.startsWith("/") ? cover : `/${cover}`}
              alt={title || "تصویر مقاله"}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>

          {imageCaption && (
            <figcaption className="mt-4 rounded-xl border-r-4 border-[#01CEC9] bg-gray-50 px-4 py-3 text-justify text-sm leading-8 text-gray-600">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {isExpanded && (
        <div className="mt-7 space-y-7">
          {additionalParagraphs.length > 0 && (
            <div className="space-y-5 text-justify text-sm leading-9 text-gray-600 sm:text-base sm:leading-10">
              {additionalParagraphs.map((paragraph, index) => (
                <p key={`additional-${index}`}>{paragraph}</p>
              ))}
            </div>
          )}

          {tableOfContents.length > 0 && (
            <nav
              aria-label="فهرست مطالب مقاله"
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6"
            >
              <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 sm:text-lg">
                <span className="h-6 w-1 rounded-full bg-[#01CEC9]" />
                فهرست مطالب
              </h2>

              <ol className="space-y-3">
                {tableOfContents.map((item, index) => (
                  <li key={`toc-${index}`}>
                    <a
                      href={`#article-section-${index + 1}`}
                      className="group flex items-start gap-3 text-sm leading-7 text-gray-600 transition-colors hover:text-[#009F9A]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-[#009F9A] shadow-sm transition-colors group-hover:bg-[#01CEC9]/10">
                        {String(index + 1).toLocaleString("fa-IR")}
                      </span>

                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {closingParagraph && (
            <p className="text-justify text-sm leading-9 text-gray-600 sm:text-base sm:leading-10">
              {closingParagraph}
            </p>
          )}

          {sections.map((section, index) => (
            <section
              key={section.id ?? index}
              id={`article-section-${index + 1}`}
              className="scroll-mt-24 space-y-5"
            >
              <h2 className="border-r-4 border-[#01CEC9] pr-3 text-lg font-extrabold leading-9 text-gray-900 sm:text-xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p
                  key={`section-${section.id ?? index}-${paragraphIndex}`}
                  className="text-justify text-sm leading-9 text-gray-600 sm:text-base sm:leading-10"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      )}

      {rating !== undefined && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star size={19} className="fill-amber-400 text-amber-400" />
            <span className="font-bold text-gray-900">
              {rating.toLocaleString("fa-IR")}
            </span>
            {ratingCount !== undefined && (
              <span>از {ratingCount.toLocaleString("fa-IR")} رأی</span>
            )}
          </div>

          <span className="text-xs text-gray-400">
            امتیاز کاربران به این مقاله
          </span>
        </div>
      )}

      {(paragraphs.length > 0 ||
        additionalParagraphs.length > 0 ||
        sections.length > 0) && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((previous) => !previous)}
            aria-expanded={isExpanded}
            className="
              group inline-flex min-h-12 items-center justify-center gap-2.5
              rounded-full border border-[#01CEC9]/40 bg-white
              px-6 py-3 text-sm font-bold text-gray-700
              shadow-[0_4px_16px_rgba(1,206,201,0.10)]
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-[#01CEC9]
              hover:bg-[#01CEC9]/5
              hover:shadow-[0_8px_24px_rgba(1,206,201,0.16)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#01CEC9] focus-visible:ring-offset-2
              active:translate-y-0
            "
          >
            {isExpanded ? (
              <>
                <ChevronUp
                  size={18}
                  className="text-[#009F9A] transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>بستن ادامه مطلب</span>
              </>
            ) : (
              <>
                <BookOpen
                  size={18}
                  className="text-[#009F9A] transition-transform duration-300 group-hover:scale-110"
                />
                <span>ادامه مطالعه مقاله</span>
                <ChevronDown
                  size={17}
                  className="text-[#E48900] transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>
      )}
    </article>
  );
}

export default ArticleContent;
