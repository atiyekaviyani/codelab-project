// import { ChevronRight, ChevronLeft } from "lucide-react";

// export default function Pagination({ page, totalPages, onPageChange }) {
//   if (totalPages <= 1) return null;

//   return (
//     <nav
//       aria-label="صفحه‌بندی دوره‌ها"
//       className="mt-8 flex flex-wrap items-center justify-center gap-2"
//     >
//       <button
//         type="button"
//         aria-label="صفحه قبلی"
//         disabled={page <= 1}
//         onClick={() => onPageChange(page - 1)}
//         className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
//       >
//         <ChevronRight size={18} />
//       </button>

//       {Array.from({ length: totalPages }, (_, index) => {
//         const pageNumber = index + 1;
//         const isActive = pageNumber === page;

//         return (
//           <button
//             key={pageNumber}
//             type="button"
//             aria-current={isActive ? "page" : undefined}
//             onClick={() => onPageChange(pageNumber)}
//             className={`h-10 min-w-10 rounded-lg border px-3 text-sm transition ${
//               isActive
//                 ? "border-teal-600 bg-teal-600 text-white"
//                 : "border-gray-200 text-gray-700 hover:border-teal-500"
//             }`}
//           >
//             {pageNumber.toLocaleString("fa-IR")}
//           </button>
//         );
//       })}

//       <button
//         type="button"
//         aria-label="صفحه بعدی"
//         disabled={page >= totalPages}
//         onClick={() => onPageChange(page + 1)}
//         className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
//       >
//         <ChevronLeft size={18} />
//       </button>
//     </nav>
//   );
// }



import { ChevronRight, ChevronLeft, MoreHorizontal } from "lucide-react";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (page >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  const visiblePages = getVisiblePages();

  const buttonBase =
    "relative flex h-11 min-w-11 items-center justify-center rounded-2xl border text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/20";

  const inactiveButton =
    "border-white/80 bg-white/75 text-slate-600 shadow-sm shadow-slate-200/40 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md hover:shadow-teal-500/10";

  const arrowButton =
    "border-teal-100 bg-white/80 text-teal-700 shadow-sm hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md hover:shadow-teal-500/10";

  return (
    <nav
      aria-label="صفحه‌بندی دوره‌ها"
      className="relative mt-10 flex flex-col items-center gap-4"
      dir="rtl"
    >
      {/* هاله‌ی ظریف پشت صفحه‌بندی */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/10 blur-3xl"
      />

      <div className="relative flex max-w-full flex-wrap items-center justify-center gap-2 rounded-[24px] border border-white/80 bg-white/55 p-2 shadow-[0_12px_40px_-24px_rgba(13,148,136,0.28)] backdrop-blur-xl">
        {/* صفحه‌ی قبلی */}
        <button
          type="button"
          aria-label="صفحه قبلی"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={`${buttonBase} ${
            page <= 1
              ? "cursor-not-allowed border-slate-100 bg-slate-50/70 text-slate-300 opacity-60"
              : arrowButton
          }`}
        >
          <ChevronRight size={19} strokeWidth={2} />
        </button>

        {/* شماره صفحات */}
        {visiblePages.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                aria-hidden="true"
                className="flex h-11 min-w-7 items-center justify-center text-slate-400"
              >
                <MoreHorizontal size={19} />
              </span>
            );
          }

          const isActive = pageNumber === page;

          return (
            <button
              key={pageNumber}
              type="button"
              aria-label={`صفحه ${pageNumber.toLocaleString("fa-IR")}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(pageNumber)}
              className={`${buttonBase} ${
                isActive
                  ? "scale-105 border-teal-500 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-600/25 ring-4 ring-teal-500/10"
                  : inactiveButton
              }`}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-white/20"
                />
              )}

              <span className="relative">
                {pageNumber.toLocaleString("fa-IR")}
              </span>
            </button>
          );
        })}

        {/* صفحه‌ی بعدی */}
        <button
          type="button"
          aria-label="صفحه بعدی"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className={`${buttonBase} ${
            page >= totalPages
              ? "cursor-not-allowed border-slate-100 bg-slate-50/70 text-slate-300 opacity-60"
              : arrowButton
          }`}
        >
          <ChevronLeft size={19} strokeWidth={2} />
        </button>
      </div>

      {/* وضعیت صفحه‌ی فعلی */}
      <p className="text-xs font-medium text-slate-400">
        صفحه{" "}
        <span className="font-bold text-teal-700">
          {page.toLocaleString("fa-IR")}
        </span>{" "}
        از{" "}
        <span className="font-bold text-slate-600">
          {totalPages.toLocaleString("fa-IR")}
        </span>
      </p>
    </nav>
  );
}
