import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function ArticlesPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = new Set([
      1,
      totalPages,
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ]);

    return [...pages]
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);
  };

  const pages = getPageNumbers();

  const buttonBase =
    "relative flex size-10 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 sm:size-11";

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <nav
      aria-label="صفحه‌بندی مقالات"
      className="mt-12 flex flex-col items-center gap-4 sm:mt-16"
      dir="rtl"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
        {/* صفحه قبلی */}
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="صفحه قبلی"
          className={`${buttonBase} border-slate-200/80 bg-white text-slate-600 shadow-sm hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md`}
        >
          <ChevronRight size={19} aria-hidden="true" />
        </button>

        {pages.map((page, index) => {
          const previousPage = pages[index - 1];
          const hasGap = previousPage && page - previousPage > 1;
          const isActive = currentPage === page;

          return (
            <div key={page} className="flex items-center gap-2">
              {hasGap && (
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center text-slate-400"
                >
                  <MoreHorizontal size={18} />
                </span>
              )}

              <button
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`صفحه ${page.toLocaleString("fa-IR")}`}
                aria-current={isActive ? "page" : undefined}
                className={`${buttonBase} ${
                  isActive
                    ? "border-teal-600 bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-[0_6px_18px_-6px_rgba(13,148,136,0.65)]"
                    : "border-slate-200/80 bg-white text-slate-600 shadow-sm hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md"
                }`}
              >
                {page.toLocaleString("fa-IR")}
              </button>
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="صفحه بعدی"
          className={`${buttonBase} border-slate-200/80 bg-white text-slate-600 shadow-sm hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md`}
        >
          <ChevronLeft size={19} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
        <span className="size-1.5 rounded-full bg-teal-500" />
        <span>
          صفحه{" "}
          <span className="font-semibold text-slate-600">
            {currentPage.toLocaleString("fa-IR")}
          </span>{" "}
          از{" "}
          <span className="font-semibold text-slate-600">
            {totalPages.toLocaleString("fa-IR")}
          </span>
        </span>
      </div>
    </nav>
  );
}
