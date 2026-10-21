import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="صفحه‌بندی دوره‌ها"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        aria-label="صفحه قبلی"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === page;

        return (
          <button
            key={pageNumber}
            type="button"
            aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(pageNumber)}
            className={`h-10 min-w-10 rounded-lg border px-3 text-sm transition ${
              isActive
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-gray-200 text-gray-700 hover:border-teal-500"
            }`}
          >
            {pageNumber.toLocaleString("fa-IR")}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="صفحه بعدی"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>
    </nav>
  );
}
