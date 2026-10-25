
// import { Search, SlidersHorizontal } from "lucide-react";


// export default function ArticlesToolbar({
//   search = "",
//   onSearchChange = () => {},
//   category = "همه دسته‌بندی‌ها",
//   onCategoryChange = () => {},
//   sortBy = "latest",
//   onSortChange = () => {},
//   categories = [],
//   resultCount = 0,
// }) {
//   return (
//     <section className="mb-6 space-y-5">
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
//             اخبار و مقالات
//           </h2>

//           <p className="mt-2 text-sm leading-6 text-slate-500">
//             تازه‌ترین مطالب آموزشی CodeLab را دنبال کن.
//           </p>
//         </div>

//         <span className="text-sm text-slate-500">
//           {resultCount.toLocaleString("fa-IR")} مقاله
//         </span>
//       </div>

//       <div className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_200px_200px]">
//         <label className="relative block min-w-0">
//           <Search
//             size={19}
//             aria-hidden="true"
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//           />

//           <input
//             type="search"
//             value={search}
//             onChange={(event) => onSearchChange(event.target.value)}
//             placeholder="جست‌وجو در مقالات..."
//             aria-label="جست‌وجو در مقالات"
//             className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pr-10 pl-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
//           />
//         </label>

//         <label className="relative block min-w-0">
//           <span className="sr-only">فیلتر دسته‌بندی</span>

//           <select
//             value={category}
//             onChange={(event) => onCategoryChange(event.target.value)}
//             className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none focus:border-slate-400"
//           >
//             {categories.map((item) => (
//               <option key={item} value={item}>
//                 {item}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label className="relative flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3">
//           <SlidersHorizontal
//             size={17}
//             aria-hidden="true"
//             className="shrink-0 text-slate-500"
//           />

//           <span className="shrink-0 text-sm text-slate-500">
//             مرتب‌سازی:
//           </span>

//           <select
//             value={sortBy}
//             onChange={(event) => onSortChange(event.target.value)}
//             className="h-11 min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none"
//           >
//             <option value="latest">جدیدترین</option>
//             <option value="popular">محبوب‌ترین</option>
//             <option value="views">پربازدیدترین</option>
//             <option value="oldest">قدیمی‌ترین</option>
//           </select>
//         </label>
//       </div>
//     </section>
//   );
// }


import { Search, SlidersHorizontal, Sparkles, ChevronDown } from "lucide-react";

export default function ArticlesToolbar({
  search = "",
  onSearchChange = () => {},
  category = "همه دسته‌بندی‌ها",
  onCategoryChange = () => {},
  sortBy = "latest",
  onSortChange = () => {},
  categories = [],
  resultCount = 0,
}) {
  return (
    <section
      dir="rtl"
      aria-label="جست‌وجو و فیلتر مقالات"
      className="mb-7 min-w-0 space-y-5"
    >
      {/* Section heading */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-5 w-1 rounded-full bg-[#24C4AE]" />

            <span className="text-[11px] font-bold text-[#2AA895]">
              کتابخانه محتوای CodeLab
            </span>

            <Sparkles
              size={14}
              className="text-[#E9A13A]"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-xl font-black tracking-tight text-[#243B44] sm:text-2xl">
            مقالات و مطالب آموزشی
          </h2>

          <p className="mt-2 text-xs leading-7 text-[#81918F] sm:text-sm">
            موضوع موردعلاقه‌ات رو پیدا کن و با هر مطالعه یک قدم جلوتر برو.
          </p>
        </div>

        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DCEFE8] bg-white px-3.5 py-2.5 shadow-[0_3px_12px_rgba(37,114,100,0.035)]">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#E7F8F1] text-[#20AE97]">
            <Search size={15} aria-hidden="true" />
          </span>

          <span className="text-xs text-[#81918F]">
            <strong className="font-extrabold text-[#2B9182]">
              {resultCount.toLocaleString("fa-IR")}
            </strong>{" "}
            مقاله
          </span>
        </div>
      </div>

      {/* Search and filters */}
      <div className="relative rounded-[24px] border border-[#E5F0EC] bg-white p-3 shadow-[0_6px_28px_rgba(34,91,79,0.035)] sm:rounded-[28px] sm:p-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-l from-transparent via-[#C6ECE1] to-transparent"
        />

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(180px,220px)_minmax(190px,230px)]">
          {/* Search */}
          <label className="group relative block min-w-0">
            <span className="sr-only">جست‌وجو در مقالات</span>

            <Search
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8BA19B] transition-colors duration-200 group-focus-within:text-[#22B9A3]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="جست‌وجو در مقالات..."
              aria-label="جست‌وجو در مقالات"
              className="
                h-[50px] w-full min-w-0 rounded-[16px]
                border border-[#E8EFEC] bg-[#F8FBF9]
                py-3 pl-4 pr-11 text-sm text-[#30464B]
                outline-none transition-all duration-200
                placeholder:text-[#A1AFAB]
                hover:border-[#D6EAE3]
                focus:border-[#8BDDD0] focus:bg-white
                focus:shadow-[0_0_0_4px_rgba(36,196,174,0.08)]
              "
            />
          </label>

          {/* Category */}
          <label className="group relative block min-w-0">
            <span className="sr-only">فیلتر دسته‌بندی</span>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-[#8B9B98]">
              دسته‌بندی
            </span>

            <select
              value={category}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="
                h-[50px] w-full min-w-0 appearance-none
                rounded-[16px] border border-[#E8EFEC]
                bg-[#F8FBF9] py-3 pl-10 pr-[88px]
                text-xs font-semibold text-[#40565A]
                outline-none transition-all duration-200
                hover:border-[#D6EAE3]
                focus:border-[#8BDDD0] focus:bg-white
                focus:shadow-[0_0_0_4px_rgba(36,196,174,0.08)]
              "
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA19B] transition-transform group-focus-within:rotate-180"
            />
          </label>

          {/* Sorting */}
          <label className="group relative flex min-w-0 items-center gap-2 rounded-[16px] border border-[#E8EFEC] bg-[#F8FBF9] px-3 transition-all duration-200 hover:border-[#D6EAE3] focus-within:border-[#8BDDD0] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(36,196,174,0.08)]">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-[11px] bg-[#E8F7F1] text-[#27A992]">
              <SlidersHorizontal size={16} aria-hidden="true" />
            </span>

            <span className="shrink-0 text-[11px] text-[#8B9B98]">
              مرتب‌سازی
            </span>

            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              aria-label="مرتب‌سازی مقالات"
              className="h-[48px] min-w-0 flex-1 appearance-none bg-transparent text-xs font-bold text-[#40565A] outline-none"
            >
              <option value="latest">جدیدترین</option>
              <option value="popular">محبوب‌ترین</option>
              <option value="views">پربازدیدترین</option>
              <option value="oldest">قدیمی‌ترین</option>
            </select>

            <ChevronDown
              size={15}
              aria-hidden="true"
              className="shrink-0 text-[#8BA19B] transition-transform group-focus-within:rotate-180"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
