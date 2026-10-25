import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Search,
  BookOpen,
  Rocket,
  Tag,
  Bookmark,
  Lightbulb,
  FileText,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

const DEFAULT_HERO_IMAGE = "/articles-hero.png";

const INITIAL_VALUES = {
  search: "",
};

const FEATURES = [
  {
    title: "مقالات کاربردی",
    description: "مطالب مفید و به‌روز",
    icon: Rocket,
    color: "emerald",
  },
  {
    title: "دسته‌بندی متنوع",
    description: "از برنامه‌نویسی تا طراحی",
    icon: Tag,
    color: "violet",
  },
  {
    title: "مطالب منتخب",
    description: "پرطرفدارترین محتواها",
    icon: Bookmark,
    color: "orange",
  },
  {
    title: "یادگیری مداوم",
    description: "همیشه یک قدم جلوتر",
    icon: Lightbulb,
    color: "blue",
  },
];

const validateSearch = (values) => {
  const errors = {};

  if (!values.search.trim()) {
    errors.search = "لطفاً عبارت موردنظرت رو وارد کن.";
  }

  return errors;
};

function HeroDecorations() {
  const id = useId().replace(/:/g, "");
  const gradientId = `hero-bg-${id}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-[#B8F1E5]/35 blur-3xl" />

      <div className="absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-[#D8F7F1]/80 blur-3xl" />

      <svg
        viewBox="0 0 500 350"
        fill="none"
        className="absolute -left-8 top-0 h-full w-[48%] opacity-70"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="30"
            y1="20"
            x2="420"
            y2="330"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B9F1E8" />
            <stop offset="0.55" stopColor="#D9F6E5" />
            <stop offset="1" stopColor="#E8F5C7" />
          </linearGradient>
        </defs>

        <path
          d="M75 135C95 48 185 13 278 29C375 45 452 109 439 188C426 264 356 321 264 321C173 321 105 281 67 226C43 191 51 166 75 135Z"
          fill={`url(#${gradientId})`}
        />

        <path
          d="M34 92C75 55 125 77 151 117C182 164 228 210 295 202C355 195 383 161 420 126"
          stroke="#38CFC0"
          strokeWidth="2"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />

        <circle cx="75" cy="83" r="5" fill="#29C6B4" />
        <circle cx="414" cy="126" r="6" fill="#F7B84B" />
        <circle cx="107" cy="265" r="8" fill="#8ADFCB" />
      </svg>

      <div className="absolute bottom-8 right-8 hidden grid-cols-5 gap-3 opacity-50 sm:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#50D6C7]" />
        ))}
      </div>

      <div className="absolute right-[42%] top-10 h-3 w-3 rounded-full bg-[#9DEADF]/80" />
      <div className="absolute bottom-16 left-[42%] h-2 w-2 rounded-full bg-[#F7C66B]/80" />
    </div>
  );
}

function FloatingIllustration({ image }) {
  return (
    <div
      aria-hidden="true"
      className="
        relative z-10 hidden min-w-0 items-center justify-center
        sm:flex sm:min-h-[280px]
        lg:min-h-[340px]
      "
    >
      <div className="absolute left-[8%] top-[15%] h-16 w-16 animate-[float_5s_ease-in-out_infinite] rounded-[23px] border border-white/80 bg-white/75 p-3 shadow-[0_12px_35px_rgba(36,155,139,0.12)] backdrop-blur-md">
        <div className="flex h-full w-full items-center justify-center rounded-[16px] bg-gradient-to-br from-[#39D2B5] to-[#13A98D] text-white">
          <BookOpen size={28} strokeWidth={1.8} />
        </div>
      </div>

      <div className="absolute right-[7%] top-[23%] flex h-14 w-14 animate-[float_6s_ease-in-out_infinite] items-center justify-center rounded-[19px] border border-white/80 bg-white/80 text-[#F2A62C] shadow-[0_12px_35px_rgba(36,155,139,0.12)] backdrop-blur-md">
        <FileText size={27} strokeWidth={1.8} />
      </div>

      <div className="absolute bottom-[22%] left-[5%] flex h-12 w-12 animate-[float_5.5s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-[#13A98D] shadow-lg">
        <Sparkles size={24} strokeWidth={1.8} />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={image}
          alt=""
          draggable="false"
          className="
            relative z-10 max-h-[330px] w-full max-w-[410px]
            object-contain drop-shadow-[0_22px_24px_rgba(20,105,92,0.12)]
            transition-transform duration-700
            hover:scale-[1.035]
            lg:max-h-[380px] lg:max-w-[460px]
          "
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <div className="absolute bottom-[14%] right-[12%] h-14 w-14 animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/80 p-3 text-[#F0A32B] shadow-lg backdrop-blur-md">
        <div className="flex h-full items-center justify-center">
          <Rocket size={26} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}

function SearchForm({ onSearch }) {
  const id = useId();
  const inputId = `${id}-search`;
  const errorId = `${id}-error`;

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
          <Form role="search" noValidate className="w-full">
            <div
              className={`
                group flex min-h-[60px] w-full flex-row-reverse items-center
                gap-3 rounded-full border bg-white/90 p-1.5 pl-2.5 pr-4
                shadow-[0_10px_35px_rgba(32,111,99,0.07)]
                backdrop-blur-xl transition-all duration-300
                hover:shadow-[0_14px_40px_rgba(32,111,99,0.11)]
                focus-within:border-[#8BDDD2]
                focus-within:shadow-[0_0_0_4px_rgba(56,207,192,0.10)]
                ${hasError ? "border-red-400" : "border-white"}
              `}
            >
              <button
                type="submit"
                aria-label="جست‌وجوی مقالات"
                disabled={isSubmitting}
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full bg-gradient-to-br from-[#FF9A35] to-[#F47700]
                  text-white shadow-[0_5px_14px_rgba(232,131,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(232,131,0,0.3)]
                  active:scale-95
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#E88300]
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                <Search size={21} strokeWidth={2.2} aria-hidden="true" />
              </button>

              <label htmlFor={inputId} className="sr-only">
                عبارت موردنظر برای جست‌وجو
              </label>

              <Field
                id={inputId}
                name="search"
                type="search"
                autoComplete="off"
                placeholder="چی میخوای یاد بگیری؟..."
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className="
                  min-w-0 flex-1 border-none bg-transparent py-3
                  text-sm text-[#233B46] outline-none
                  placeholder:text-[#A1AFB5]
                  focus:outline-none sm:text-[13px] lg:text-sm
                "
              />

              <ArrowLeft
                size={17}
                className="shrink-0 text-[#A9BDBA] transition-transform duration-300 group-focus-within:-translate-x-1"
                aria-hidden="true"
              />
            </div>

            <ErrorMessage name="search">
              {(message) => (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-2 px-5 text-xs text-red-600"
                >
                  {message}
                </p>
              )}
            </ErrorMessage>

            {status && (
              <p role="alert" className="mt-2 px-5 text-xs text-red-600">
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

function FeatureItem({ feature }) {
  const Icon = feature.icon;

  const colorStyles = {
    emerald: {
      icon: "bg-[#D9F9EF] text-[#13B994]",
      dot: "bg-[#31C8A9]",
    },
    violet: {
      icon: "bg-[#EEE7FF] text-[#8A63F6]",
      dot: "bg-[#A28AF8]",
    },
    orange: {
      icon: "bg-[#FFF0D4] text-[#F49A14]",
      dot: "bg-[#F8B74C]",
    },
    blue: {
      icon: "bg-[#DDF3FF] text-[#2199D6]",
      dot: "bg-[#6CC6EF]",
    },
  };

  const colors = colorStyles[feature.color];

  return (
    <div
      className="
        group flex min-w-0 items-center gap-3 rounded-full
        border border-white/80 bg-white/45 px-3 py-3
        transition-all duration-300
        hover:-translate-y-1 hover:border-white
        hover:bg-white/85 hover:shadow-[0_12px_28px_rgba(36,155,139,0.08)]
        sm:px-3.5 lg:gap-3.5 lg:px-4
      "
    >
      <div
        className={`
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-full transition-transform duration-300
          group-hover:rotate-[-8deg] group-hover:scale-105
          ${colors.icon}
        `}
      >
        <Icon size={23} strokeWidth={1.9} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-extrabold text-[#243C46] sm:text-xs">
          {feature.title}
        </p>
        <p className="mt-1 truncate text-[10px] leading-5 text-[#80918F] sm:text-[11px]">
          {feature.description}
        </p>
      </div>

      <span
        className={`hidden h-1.5 w-1.5 shrink-0 rounded-full sm:block ${colors.dot}`}
      />
    </div>
  );
}

export default function ArticlesHero({
  onSearch = async () => {},
  image = DEFAULT_HERO_IMAGE,
  as: Heading = "h1",
}) {
  const titleId = useId();

  return (
    <section
      dir="rtl"
      aria-labelledby={titleId}
      className="
        relative isolate w-full overflow-hidden bg-[#F8FCFB]
        px-4 pb-10 pt-7 font-yekan
        sm:px-6 sm:pb-12 sm:pt-9
        lg:px-8 lg:pb-14 lg:pt-10
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(185,244,232,0.28),transparent_42%),radial-gradient(ellipse_at_10%_90%,rgba(211,248,236,0.36),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-[1240px]">
        <div
          className="
            relative isolate overflow-hidden rounded-[28px]
            border border-[#E8F4F0]
            bg-gradient-to-br from-[#F2FBF8] via-[#F8FCFB] to-[#EAF9F6]
            shadow-[0_18px_60px_rgba(37,114,100,0.055)]
            sm:rounded-[36px] lg:rounded-[42px]
          "
        >
          <HeroDecorations />

          <div
            className="
              relative z-10 grid grid-cols-1 items-center gap-2
              px-5 pb-5 pt-7
              sm:px-7 sm:pb-6 sm:pt-8
              md:grid-cols-[0.92fr_1.08fr] md:gap-5 md:px-8
              lg:gap-8 lg:px-12 lg:pb-7 lg:pt-10
              xl:px-14
            "
          >
            <FloatingIllustration image={image} />

            <div className="relative z-20 min-w-0">
              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-[#CDEFE8] bg-white/65
                  px-3.5 py-2 text-[11px] font-bold text-[#2C6963]
                  shadow-[0_3px_12px_rgba(43,151,134,0.04)]
                  backdrop-blur-sm sm:text-xs
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#25C5AF] shadow-[0_0_0_4px_rgba(37,197,175,0.10)]" />
                دنیای یادگیری CodeLab
              </div>

              <Heading
                id={titleId}
                className="
                  mt-5 text-[25px] font-black leading-[1.8]
                  tracking-tight text-[#1D3440]
                  sm:mt-6 sm:text-[30px] sm:leading-[1.85]
                  lg:mt-7 lg:text-[35px] xl:text-[39px]
                "
              >
                اخبار و مقالات
                <span className="relative mr-2 inline-block whitespace-nowrap text-[#16BBA5]">
                  آموزشی
                  <span className="absolute -bottom-1 right-0 h-[5px] w-[78%] rounded-full bg-[#B8F0E5]/80" />
                </span>
                <span className="block text-[#263D48]">
                  برای رشد مهارت‌های شما
                </span>
              </Heading>

              <p
                className="
                  mt-3 max-w-[510px] text-[12px] leading-7
                  text-[#72858D] sm:mt-4 sm:text-[13px] sm:leading-8
                  lg:text-sm
                "
              >
                جدیدترین مقالات، آموزش‌ها و اخبار دنیای فناوری رو دنبال کن و هر
                روز یک قدم به هدف‌هات نزدیک‌تر شو.
              </p>

              <div className="mt-5 max-w-[560px] sm:mt-6 lg:mt-7">
                <SearchForm onSearch={onSearch} />
              </div>

              <p className="mt-3 flex items-center gap-1.5 px-2 text-[10px] text-[#90A19F] sm:text-[11px]">
                <Sparkles size={13} className="text-[#25BDA9]" />
                ایده‌های تازه، مهارت‌های بیشتر و مسیر یادگیری بهتر
              </p>
            </div>
          </div>

          <div
            className="
              relative z-10 grid grid-cols-1 gap-2.5 px-5 pb-6
              sm:grid-cols-2 sm:px-7 sm:pb-7
              md:grid-cols-4 md:gap-2.5 md:px-7
              lg:gap-3 lg:px-10 lg:pb-9
              xl:px-12
            "
          >
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-[#1FC8AF] via-[#B7EEE0] to-transparent opacity-70"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[float_5s_ease-in-out_infinite\\],
          .animate-\\[float_6s_ease-in-out_infinite\\],
          .animate-\\[float_5\\.5s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
