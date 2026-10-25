import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Search,
  ArrowLeft,
  Sparkles,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const DEFAULT_HERO_IMAGE = "/teacher 1.png";

const INITIAL_VALUES = {
  search: "",
};

const validateSearch = (values) => {
  const errors = {};

  if (!values.search.trim()) {
    errors.search = "لطفاً نام استاد یا تخصص موردنظرت رو وارد کن.";
  }

  return errors;
};

function HeroDecoration() {
  const id = useId().replace(/:/g, "");
  const gradientId = `teacher-gradient-${id}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {/* هاله‌های پس‌زمینه */}
      <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="absolute -bottom-28 left-[24%] h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />

      {/* شکل ارگانیک پشت تصویر */}
      <svg
        viewBox="0 0 340 300"
        fill="none"
        className="absolute -left-8 top-0 h-full w-[44%] min-w-[220px] max-w-[370px] opacity-90 sm:-left-5"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="35"
            y1="15"
            x2="285"
            y2="290"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#DFFFF6" />
            <stop offset="0.5" stopColor="#91E6D7" />
            <stop offset="1" stopColor="#DDF2BC" />
          </linearGradient>
        </defs>

        <path
          d="M28 116 C34 64 88 28 153 14 C221 -1 284 23 291 73 C299 121 252 163 230 208 C210 250 190 290 153 289 C114 288 87 250 64 211 C41 172 19 147 28 116Z"
          fill={`url(#${gradientId})`}
        />

        <path
          d="M47 95 C63 49 111 22 166 17"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        <circle cx="274" cy="77" r="4" fill="#159B8D" opacity="0.5" />
        <circle cx="65" cy="218" r="3" fill="#159B8D" opacity="0.45" />
      </svg>

      {/* خطوط نقطه‌ای تزئینی */}
      <svg
        viewBox="0 0 520 210"
        fill="none"
        className="absolute -left-16 bottom-0 h-36 w-[70%] opacity-50 sm:h-44"
      >
        <path
          d="M8 65 C45 15 95 30 145 65 C205 105 260 155 340 145 C420 135 455 100 490 155"
          stroke="#159B8D"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 10"
        />
      </svg>

      {/* بافت نقطه‌ای در گوشه */}
      <div className="absolute right-7 top-7 h-16 w-16 opacity-30 sm:right-12 sm:top-10">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-teal-600" />
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingBadge({ icon: Icon, title, subtitle, className = "" }) {
  return (
    <div
      className={`
        absolute z-30 flex items-center gap-2.5
        rounded-2xl border border-white/80
        bg-white/90 px-3 py-2.5
        shadow-[0_12px_35px_rgba(25,100,90,0.10)]
        backdrop-blur-xl
        ${className}
      `}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon size={19} strokeWidth={1.8} />
      </span>

      <span className="flex flex-col gap-0.5">
        <span className="whitespace-nowrap text-xs font-bold text-gray-800">
          {title}
        </span>
        <span className="whitespace-nowrap text-[10px] text-gray-500">
          {subtitle}
        </span>
      </span>
    </div>
  );
}

function HeroIllustration({ image = DEFAULT_HERO_IMAGE }) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-x-0 bottom-0 z-10
        flex h-[180px] items-end justify-start
        sm:left-0 sm:right-auto sm:h-full sm:w-[43%]
        lg:w-[42%]
      "
    >
      <img
        src={image}
        alt=""
        draggable="false"
        className="
          relative z-10 block h-full w-[58%] max-w-[240px]
          object-contain object-bottom
          sm:w-full sm:max-w-none
        "
      />

      <FloatingBadge
        icon={GraduationCap}
        title="یادگیری حرفه‌ای"
        subtitle="در کنار متخصصان"
        className="bottom-8 left-2 animate-[float_5s_ease-in-out_infinite] scale-[0.82] origin-bottom-left sm:bottom-12 sm:left-0 sm:scale-100"
      />

      <FloatingBadge
        icon={BookOpen}
        title="مسیر رشد تو"
        subtitle="با راهنمایی استاد"
        className="bottom-[105px] left-[27%] animate-[float_6s_ease-in-out_infinite] scale-[0.78] origin-bottom-left sm:bottom-[115px] sm:left-[48%] sm:scale-100"
      />
    </div>
  );
}

function TeacherSearchForm({ onSearch }) {
  const id = useId();
  const inputId = `${id}-search`;
  const errorId = `${id}-search-error`;

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateSearch}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values, { setStatus }) => {
        setStatus(undefined);

        try {
          await onSearch(values.search.trim());
        } catch {
          setStatus("جست‌وجو با خطا مواجه شد. لطفاً دوباره تلاش کن.");
        }
      }}
    >
      {({ isSubmitting, errors, touched, status }) => {
        const hasError = Boolean(errors.search && touched.search);

        return (
          <Form role="search" noValidate className="mt-6 w-full max-w-[440px]">
            <div
              className={`
                group flex min-h-[58px] w-full flex-row-reverse
                items-center gap-2 rounded-2xl border bg-white
                p-1.5 pl-2
                shadow-[0_8px_30px_rgba(22,75,68,0.07)]
                transition-all duration-300
                focus-within:shadow-[0_10px_35px_rgba(20,157,140,0.13)]
                ${
                  hasError
                    ? "border-red-400"
                    : "border-gray-200 hover:border-teal-200 focus-within:border-teal-400"
                }
              `}
            >
              <button
                type="submit"
                aria-label="جست‌وجوی اساتید"
                disabled={isSubmitting}
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl bg-[#159B8D] text-white
                  shadow-[0_4px_12px_rgba(21,155,141,0.22)]
                  transition-all duration-300
                  hover:bg-[#117F74] hover:shadow-lg
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-teal-600
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                <Search size={19} strokeWidth={2} aria-hidden="true" />
              </button>

              <label htmlFor={inputId} className="sr-only">
                نام استاد یا تخصص موردنظر
              </label>

              <Field
                id={inputId}
                name="search"
                type="search"
                autoComplete="off"
                placeholder="نام استاد یا تخصص موردنظرت رو جست‌وجو کن..."
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className="
                  min-w-0 flex-1 border-none bg-transparent px-3
                  text-sm text-gray-800 outline-none
                  placeholder:text-gray-400
                  focus:outline-none
                "
              />
            </div>

            <ErrorMessage name="search">
              {(message) => (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-2 px-2 text-xs text-red-600"
                >
                  {message}
                </p>
              )}
            </ErrorMessage>

            {status && (
              <p role="alert" className="mt-2 px-2 text-xs text-red-600">
                {status}
              </p>
            )}

            <span className="sr-only" role="status" aria-live="polite">
              {isSubmitting ? "در حال جست‌وجو..." : ""}
            </span>
          </Form>
        );
      }}
    </Formik>
  );
}

export default function TeachersHero({
  onSearch = async () => {},
  image,
  as: Heading = "h1",
}) {
  const titleId = useId();

  return (
    <section
      dir="rtl"
      aria-labelledby={titleId}
      className="
        relative isolate w-full overflow-hidden
        px-4 pb-10 pt-7 font-yekan
        sm:px-7 sm:pb-14 sm:pt-9
        lg:px-8 lg:pb-16 lg:pt-10
      "
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <div
          className="
            relative isolate min-h-[360px] overflow-hidden
            rounded-[28px] border border-[#E6F1EE]
            bg-gradient-to-br from-white via-[#FBFEFD] to-[#F0FAF7]
            shadow-[0_16px_55px_rgba(28,92,81,0.06)]
            sm:min-h-[330px] sm:rounded-[34px]
            lg:min-h-[365px]
          "
        >
          <HeroDecoration />
          <HeroIllustration image={image} />

          {/* محتوای اصلی */}
          <div
            className="
              relative z-20 flex min-h-[360px] flex-col
              items-start justify-start px-5 pb-[170px] pt-7
              sm:min-h-[330px] sm:w-[62%] sm:justify-center
              sm:px-7 sm:py-9
              lg:min-h-[365px] lg:w-[61%] lg:px-12
              xl:px-14
            "
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3 py-1.5 shadow-sm">
              <Sparkles size={14} className="text-teal-600" />
              <span className="text-[11px] font-medium text-teal-800 sm:text-xs">
                جامعه‌ی آموزشی CodeLab
              </span>
            </div>

            <Heading
              id={titleId}
              className="
                max-w-[560px] text-[25px] font-extrabold
                leading-[1.8] tracking-tight text-gray-900
                sm:text-[30px] sm:leading-[1.7]
                lg:text-[38px] lg:leading-[1.65]
              "
            >
              با راهنمایی بهترین اساتید،
              <span className="relative mr-2 inline-block whitespace-nowrap text-[#159B8D]">
                حرفه‌ای‌تر یاد بگیر
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 right-0 h-1.5 w-full rounded-full bg-teal-100/80"
                />
              </span>
            </Heading>

            <p className="mt-3 max-w-[470px] text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
              متخصص موردنظرت رو پیدا کن، با تجربه‌ها آشنا شو و مسیر یادگیری خودت
              رو با اطمینان بیشتری ادامه بده.
            </p>

            <TeacherSearchForm onSearch={onSearch} />

            <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-400 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              جست‌وجو بر اساس نام استاد یا حوزه‌ی تخصصی
            </div>
          </div>

          {/* خط تزئینی پایین بنر */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 z-20 h-1 w-full bg-gradient-to-l from-teal-500 via-emerald-300 to-transparent sm:w-[62%]"
          />
        </div>
      </div>
    </section>
  );
}
