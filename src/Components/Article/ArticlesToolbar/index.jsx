
import { Search, SlidersHorizontal } from "lucide-react";


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
    <section className="mb-6 space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            اخبار و مقالات
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            تازه‌ترین مطالب آموزشی CodeLab را دنبال کن.
          </p>
        </div>

        <span className="text-sm text-slate-500">
          {resultCount.toLocaleString("fa-IR")} مقاله
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_200px_200px]">
        <label className="relative block min-w-0">
          <Search
            size={19}
            aria-hidden="true"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="جست‌وجو در مقالات..."
            aria-label="جست‌وجو در مقالات"
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pr-10 pl-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </label>

        <label className="relative block min-w-0">
          <span className="sr-only">فیلتر دسته‌بندی</span>

          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none focus:border-slate-400"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="relative flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3">
          <SlidersHorizontal
            size={17}
            aria-hidden="true"
            className="shrink-0 text-slate-500"
          />

          <span className="shrink-0 text-sm text-slate-500">
            مرتب‌سازی:
          </span>

          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="h-11 min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none"
          >
            <option value="latest">جدیدترین</option>
            <option value="popular">محبوب‌ترین</option>
            <option value="views">پربازدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
          </select>
        </label>
      </div>
    </section>
  );
}
