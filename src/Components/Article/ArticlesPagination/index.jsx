
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <nav
      aria-label="صفحه‌بندی مقالات"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="صفحه قبلی"
        className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={19} aria-hidden="true" />
      </button>

      {pages.map((page, index) => {
        const previousPage = pages[index - 1];
        const hasGap = previousPage && page - previousPage > 1;

        return (
          <div key={page} className="flex items-center gap-2">
            {hasGap && (
              <span
                aria-hidden="true"
                className="px-1 text-slate-400"
              >
                ...
              </span>
            )}

            <button
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`صفحه ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex size-10 items-center justify-center rounded-xl border text-sm font-semibold transition ${
                currentPage === page
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page.toLocaleString("fa-IR")}
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="صفحه بعدی"
        className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={19} aria-hidden="true" />
      </button>
    </nav>
  );
}
