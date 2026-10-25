import {
  SlidersHorizontal,
  RotateCcw,
  Code2,
  CalendarDays,
  Star,
  GraduationCap,
  Wallet,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";

const TECHNOLOGIES = [
  { value: "bootstrap", label: "Bootstrap" },
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "dotnet", label: ".NET Core" },
  { value: "tailwind", label: "Tailwind CSS" },
];

const STATUSES = [
  { value: "not-started", label: "شروع نشده" },
  { value: "ongoing", label: "در حال برگزاری" },
  { value: "completed", label: "تمام شده" },
];

const LEVELS = [
  { value: "beginner", label: "مقدماتی" },
  { value: "intermediate", label: "متوسط" },
  { value: "advanced", label: "پیشرفته" },
];

const RATINGS = [5, 4, 3, 2, 1];

const DEFAULT_FILTERS = {
  technologies: [],
  statuses: [],
  minRating: 0,
  levels: [],
  priceTypes: [],
  minPrice: "",
  maxPrice: "",
};

function FilterSection({ title, icon: Icon, children }) {
  return (
    <section className="relative border-b border-slate-100/80 py-5 last:border-b-0">
      <h3 className="mb-4 flex items-center gap-2.5 text-sm font-extrabold text-slate-800">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-teal-100/80 bg-gradient-to-br from-teal-50 via-white to-cyan-50 text-teal-700 shadow-sm shadow-teal-900/5">
          <Icon size={17} strokeWidth={1.8} />
        </span>
        {title}
      </h3>

      {children}
    </section>
  );
}

function CheckOption({ label, checked, onChange }) {
  return (
    <label
      className={`group/option flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all duration-300 ${
        checked
          ? "border-teal-200 bg-gradient-to-l from-teal-50/90 to-cyan-50/50 text-teal-800 shadow-sm shadow-teal-900/5"
          : "border-transparent text-slate-600 hover:border-slate-100 hover:bg-slate-50/80 hover:text-slate-900"
      }`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={`flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[5px] border transition-all duration-200 ${
            checked
              ? "border-teal-600 bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm"
              : "border-slate-300 bg-white group-hover/option:border-teal-400"
          }`}
        >
          {checked && <Check size={11} strokeWidth={3} />}
        </span>

        <span className="truncate text-[13px] font-medium">{label}</span>
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
          checked ? "scale-100 bg-teal-500" : "scale-0 bg-transparent"
        }`}
      />
    </label>
  );
}

function toggleOption(currentValues, value) {
  return currentValues.includes(value)
    ? currentValues.filter((item) => item !== value)
    : [...currentValues, value];
}

export default function CourseFilter({
  filters = DEFAULT_FILTERS,
  onFilterChange = () => {},
  onReset = () => {},
}) {
  const selectedTechnologies = filters?.technologies ?? [];
  const selectedStatuses = filters?.statuses ?? [];
  const selectedLevels = filters?.levels ?? [];
  const selectedPriceTypes = filters?.priceTypes ?? [];
  const minRating = Number(filters?.minRating ?? 0);
  const minPrice = filters?.minPrice ?? "";
  const maxPrice = filters?.maxPrice ?? "";

  const handleMultiSelect = (name, value, currentValues) => {
    onFilterChange(name, toggleOption(currentValues, value));
  };

  const handlePriceChange = (name, value) => {
    if (value === "") {
      onFilterChange(name, "");
      return;
    }

    const numericValue = Number(value);

    if (Number.isFinite(numericValue) && numericValue >= 0) {
      onFilterChange(name, numericValue);
    }
  };

  const activeFiltersCount =
    selectedTechnologies.length +
    selectedStatuses.length +
    selectedLevels.length +
    selectedPriceTypes.length +
    (minRating > 0 ? 1 : 0) +
    (minPrice !== "" ? 1 : 0) +
    (maxPrice !== "" ? 1 : 0);

  return (
    <aside
      dir="rtl"
      className="group/filter relative isolate h-fit w-full overflow-hidden rounded-[26px] border border-white/80 bg-white/85 p-4 shadow-[0_12px_45px_rgba(15,118,110,0.07)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_18px_55px_rgba(15,118,110,0.11)] sm:p-5"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-teal-300/15 blur-3xl transition-all duration-500 group-hover/filter:bg-teal-300/25" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-3 border-b border-slate-100/90 pb-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-600/20">
            <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/20 blur-md" />
            <SlidersHorizontal size={21} strokeWidth={1.8} />
            <Sparkles
              size={10}
              className="absolute bottom-2 left-2 text-teal-100"
            />
          </div>

          <div className="min-w-0">
            <h2 className="text-[15px] font-black text-slate-900">
              فیلتر دوره‌ها
            </h2>

            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              مسیر یادگیری خودت رو پیدا کن
            </p>
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 px-2 text-xs font-extrabold text-teal-700">
            {activeFiltersCount.toLocaleString("fa-IR")}
          </span>
        )}
      </div>

      {/* Reset */}
      <button
        type="button"
        onClick={onReset}
        className="group/reset mt-4 flex w-full items-center justify-between rounded-xl border border-slate-100 bg-white/70 px-3.5 py-3 text-xs font-semibold text-slate-500 transition-all duration-300 hover:border-rose-100 hover:bg-rose-50/70 hover:text-rose-600"
      >
        <span className="flex items-center gap-2">
          <RotateCcw
            size={15}
            className="transition-transform duration-500 group-hover/reset:-rotate-45"
          />
          حذف همه فیلترها
        </span>

        <span className="text-[10px] text-slate-400 transition-colors group-hover/reset:text-rose-400">
          بازنشانی
        </span>
      </button>

      {/* Technology */}
      <FilterSection title="تکنولوژی" icon={Code2}>
        <div className="space-y-1">
          {TECHNOLOGIES.map((technology) => (
            <CheckOption
              key={technology.value}
              label={technology.label}
              checked={selectedTechnologies.includes(technology.value)}
              onChange={() =>
                handleMultiSelect(
                  "technologies",
                  technology.value,
                  selectedTechnologies,
                )
              }
            />
          ))}
        </div>
      </FilterSection>

      {/* Status */}
      <FilterSection title="وضعیت دوره" icon={CalendarDays}>
        <div className="space-y-1">
          {STATUSES.map((status) => (
            <CheckOption
              key={status.value}
              label={status.label}
              checked={selectedStatuses.includes(status.value)}
              onChange={() =>
                handleMultiSelect("statuses", status.value, selectedStatuses)
              }
            />
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="امتیاز کاربران" icon={Star}>
        <div className="space-y-1">
          {RATINGS.map((rating) => (
            <label
              key={rating}
              className={`flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                minRating === rating
                  ? "border-amber-200 bg-amber-50/80"
                  : "border-transparent hover:bg-slate-50/80"
              }`}
            >
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className={
                      index < rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}

                <span className="mr-1 text-[11px] text-slate-500">
                  و بالاتر
                </span>
              </span>

              <input
                type="radio"
                name="course-rating"
                checked={minRating === rating}
                onChange={() => onFilterChange("minRating", rating)}
                className="h-4 w-4 cursor-pointer accent-amber-500"
              />
            </label>
          ))}

          <button
            type="button"
            onClick={() => onFilterChange("minRating", 0)}
            className={`mt-1 w-full rounded-xl px-3 py-2.5 text-right text-xs transition-all ${
              minRating === 0
                ? "bg-teal-50 font-bold text-teal-700"
                : "text-slate-500 hover:bg-slate-50 hover:text-teal-700"
            }`}
          >
            همه امتیازها
          </button>
        </div>
      </FilterSection>

      {/* Level */}
      <FilterSection title="سطح دوره" icon={GraduationCap}>
        <div className="space-y-1">
          {LEVELS.map((level) => (
            <CheckOption
              key={level.value}
              label={level.label}
              checked={selectedLevels.includes(level.value)}
              onChange={() =>
                handleMultiSelect("levels", level.value, selectedLevels)
              }
            />
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection title="قیمت دوره" icon={Wallet}>
        <div className="mb-5 space-y-1">
          <CheckOption
            label="رایگان"
            checked={selectedPriceTypes.includes("free")}
            onChange={() =>
              handleMultiSelect("priceTypes", "free", selectedPriceTypes)
            }
          />

          <CheckOption
            label="غیررایگان"
            checked={selectedPriceTypes.includes("paid")}
            onChange={() =>
              handleMultiSelect("priceTypes", "paid", selectedPriceTypes)
            }
          />
        </div>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-700">
            محدوده قیمت
          </span>

          <ChevronDown size={15} className="text-slate-400" />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="min-w-0">
            <label
              htmlFor="course-min-price"
              className="mb-2 block text-[11px] font-medium text-slate-500"
            >
              حداقل (تومان)
            </label>

            <input
              id="course-min-price"
              type="number"
              min="0"
              step="1000"
              inputMode="numeric"
              placeholder="۰"
              value={minPrice}
              onChange={(event) =>
                handlePriceChange("minPrice", event.target.value)
              }
              className="w-full min-w-0 rounded-xl border border-slate-200/90 bg-white/80 px-2.5 py-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="course-max-price"
              className="mb-2 block text-[11px] font-medium text-slate-500"
            >
              حداکثر (تومان)
            </label>

            <input
              id="course-max-price"
              type="number"
              min="0"
              step="1000"
              inputMode="numeric"
              placeholder="۵۰۰۰۰۰"
              value={maxPrice}
              onChange={(event) =>
                handlePriceChange("maxPrice", event.target.value)
              }
              className="w-full min-w-0 rounded-xl border border-slate-200/90 bg-white/80 px-2.5 py-3 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-300 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
            />
          </div>
        </div>

        {minPrice !== "" &&
          maxPrice !== "" &&
          Number(minPrice) > Number(maxPrice) && (
            <p className="mt-2 rounded-lg bg-rose-50 px-3 py-2 text-[11px] leading-5 text-rose-600">
              حداقل قیمت نباید بیشتر از حداکثر قیمت باشد.
            </p>
          )}
      </FilterSection>

      {/* Footer */}
      <div className="mt-2 flex items-start gap-2 rounded-2xl border border-cyan-100/70 bg-gradient-to-l from-cyan-50/80 via-white/70 to-teal-50/80 p-3.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
          <Sparkles size={15} />
        </span>

        <div>
          <p className="text-xs font-bold text-slate-700">
            یادگیری رو هوشمندانه شروع کن
          </p>

          <p className="mt-1 text-[10px] leading-5 text-slate-500">
            با انتخاب فیلترها، دوره مناسب سطح و بودجه‌ات رو پیدا کن.
          </p>
        </div>
      </div>
    </aside>
  );
}
