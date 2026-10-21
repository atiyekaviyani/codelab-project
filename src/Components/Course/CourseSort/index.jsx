
import { ArrowDownWideNarrow } from "lucide-react";

const SORT_OPTIONS = [
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "popular", label: "محبوب‌ترین" },
  { value: "rating", label: "بالاترین امتیاز" },
];

export default function CourseSort({
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex items-center gap-3">
      <ArrowDownWideNarrow
        size={19}
        className="shrink-0 text-gray-500"
      />

      <label
        htmlFor="course-sort"
        className="shrink-0 text-sm text-gray-600"
      >
        مرتب‌سازی:
      </label>

      <select
        id="course-sort"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
        className="min-w-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}