import {
  SlidersHorizontal,
  RotateCcw,
  Code2,
  CalendarDays,
  Star,
  GraduationCap,
  Wallet,
  ChevronDown,
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
    <section className="border-b border-gray-100 py-5 last:border-b-0">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-800">
        <Icon size={18} className="shrink-0 text-teal-600" />
        {title}
      </h3>

      {children}
    </section>
  );
}

function CheckOption({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-4 shrink-0 cursor-pointer accent-teal-600"
      />

      <span>{label}</span>
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

  return (
    <aside
      dir="rtl"
      className="h-fit w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-teal-50">
            <SlidersHorizontal size={20} className="text-teal-700" />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">فیلتر دوره‌ها</h2>

            <p className="mt-1 text-xs text-gray-400">
              دوره مناسب خودت رو پیدا کن
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-teal-700"
        >
          <RotateCcw size={14} />
          حذف فیلترها
        </button>
      </div>

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
              className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className={
                      index < rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200"
                    }
                  />
                ))}

                <span className="mr-1 text-xs text-gray-500">و بالاتر</span>
              </span>

              <input
                type="radio"
                name="course-rating"
                checked={minRating === rating}
                onChange={() => onFilterChange("minRating", rating)}
                className="size-4 cursor-pointer accent-teal-600"
              />
            </label>
          ))}

          <button
            type="button"
            onClick={() => onFilterChange("minRating", 0)}
            className={`w-full rounded-lg px-2 py-2 text-right text-xs transition ${
              minRating === 0
                ? "font-semibold text-teal-700"
                : "text-gray-500 hover:bg-gray-50"
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
          <span className="text-xs font-semibold text-gray-700">
            محدوده قیمت
          </span>

          <ChevronDown size={15} className="text-gray-400" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="course-min-price"
              className="mb-2 block text-xs text-gray-500"
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
              className="w-full min-w-0 rounded-lg border border-gray-200 bg-white px-2.5 py-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-50"
            />
          </div>

          <div>
            <label
              htmlFor="course-max-price"
              className="mb-2 block text-xs text-gray-500"
            >
              حداکثر (تومان)
            </label>

            <input
              id="course-max-price"
              type="number"
              min="0"
              step="1000"
              inputMode="numeric"
              placeholder="مثلاً ۵۰۰۰۰۰"
              value={maxPrice}
              onChange={(event) =>
                handlePriceChange("maxPrice", event.target.value)
              }
              className="w-full min-w-0 rounded-lg border border-gray-200 bg-white px-2.5 py-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-50"
            />
          </div>
        </div>

        {minPrice !== "" &&
          maxPrice !== "" &&
          Number(minPrice) > Number(maxPrice) && (
            <p className="mt-2 text-xs text-red-500">
              حداقل قیمت نباید بیشتر از حداکثر قیمت باشد.
            </p>
          )}
      </FilterSection>
    </aside>
  );
}
