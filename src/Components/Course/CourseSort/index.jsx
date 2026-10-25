
// import { ArrowDownWideNarrow } from "lucide-react";

// const SORT_OPTIONS = [
//   { value: "newest", label: "جدیدترین" },
//   { value: "price-asc", label: "ارزان‌ترین" },
//   { value: "price-desc", label: "گران‌ترین" },
//   { value: "popular", label: "محبوب‌ترین" },
//   { value: "rating", label: "بالاترین امتیاز" },
// ];

// export default function CourseSort({
//   sortBy,
//   onSortChange,
// }) {
//   return (
//     <div className="flex items-center gap-3">
//       <ArrowDownWideNarrow
//         size={19}
//         className="shrink-0 text-gray-500"
//       />

//       <label
//         htmlFor="course-sort"
//         className="shrink-0 text-sm text-gray-600"
//       >
//         مرتب‌سازی:
//       </label>

//       <select
//         id="course-sort"
//         value={sortBy}
//         onChange={(event) => onSortChange(event.target.value)}
//         className="min-w-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
//       >
//         {SORT_OPTIONS.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }



import { ArrowDownWideNarrow, ChevronDown, Sparkles } from "lucide-react";

const SORT_OPTIONS = [
  { value: "newest", label: "جدیدترین", description: "دوره‌های جدیدتر" },
  { value: "price-asc", label: "ارزان‌ترین", description: "از قیمت کمتر به بیشتر" },
  { value: "price-desc", label: "گران‌ترین", description: "از قیمت بیشتر به کمتر" },
  { value: "popular", label: "محبوب‌ترین", description: "بر اساس تعداد دانشجو" },
  { value: "rating", label: "بالاترین امتیاز", description: "دوره‌های با امتیاز بالاتر" },
];

export default function CourseSort({ sortBy, onSortChange }) {
  const selectedOption =
    SORT_OPTIONS.find((option) => option.value === sortBy) ||
    SORT_OPTIONS[0];

  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_10px_35px_-22px_rgba(13,148,136,0.3)] backdrop-blur-xl sm:p-5">
      {/* نورهای تزئینی پس‌زمینه */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-teal-300/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-1/3 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* عنوان و توضیحات */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-700 shadow-sm shadow-teal-500/5">
            <ArrowDownWideNarrow size={21} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-bold text-slate-800 sm:text-base">
                مرتب‌سازی دوره‌ها
              </h2>

              <span className="inline-flex items-center gap-1 rounded-full border border-teal-100 bg-teal-50/80 px-2 py-1 text-[10px] font-medium text-teal-700">
                <Sparkles size={11} />
                انتخاب هوشمند
              </span>
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              دوره‌ها رو بر اساس اولویت دلخواهت مرتب کن.
            </p>
          </div>
        </div>

        {/* انتخابگر مرتب‌سازی */}
        <div className="flex min-w-0 flex-col gap-2 sm:w-64 sm:shrink-0">
          <label
            htmlFor="course-sort"
            className="text-xs font-semibold text-slate-500"
          >
            ترتیب نمایش
          </label>

          <div className="group relative">
            <select
              id="course-sort"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200/80 bg-white/90 py-3 pl-10 pr-4 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-300 hover:border-teal-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 transition-transform duration-300 group-focus-within:rotate-180"
            />
          </div>
        </div>
      </div>

      {/* نمایش انتخاب فعلی */}
      <div className="relative mt-4 flex items-center gap-2 border-t border-slate-100/80 pt-3">
        <span className="text-xs text-slate-400">مرتب‌شده بر اساس:</span>

        <span className="inline-flex items-center rounded-lg bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">
          {selectedOption.label}
        </span>
      </div>
    </div>
  );
}
