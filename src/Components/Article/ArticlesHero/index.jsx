import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Search } from "lucide-react";

// عکس داخل پوشه public هست؛ فایل رو به این اسم تغییر بده: public/articles-hero.png
const DEFAULT_HERO_IMAGE = "/articles-hero.png";

const INITIAL_VALUES = {
  search: "",
};

const validateSearch = (values) => {
  const errors = {};

  if (!values.search.trim()) {
    errors.search = "لطفاً عبارت موردنظرت رو وارد کن.";
  }

  return errors;
};

/* =========================
   Hero Decorations
========================= */

function HeroDecoration() {
  // کولن‌های useId داخل url(#...) مشکل‌ساز می‌شن، پس پاکشون می‌کنیم
  const gradientId = `hero-gradient-${useId().replace(/:/g, "")}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
    >
      <svg
        viewBox="0 0 340 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="
          absolute -left-5 -top-1
          h-[210px] w-[230px]
          sm:-left-3 sm:h-[245px] sm:w-[200px]
          lg:h-[310px] lg:w-[350px]
        "
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="60"
            y1="25"
            x2="245"
            y2="280"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8DEBE3" />
            <stop offset="0.48" stopColor="#BDEDD1" />
            <stop offset="1" stopColor="#E8EDB5" />
          </linearGradient>
        </defs>

        <path
          d="
            M 28 116
            C 34 64, 88 28, 153 14
            C 221 -1, 284 23, 291 73
            C 299 121, 252 163, 230 208
            C 210 250, 190 290, 153 289
            C 114 288, 87 250, 64 211
            C 41 172, 19 147, 28 116 Z
          "
          fill={`url(#${gradientId})`}
          fillOpacity="0.85"
        />
      </svg>

      {/* Turquoise Dotted Path */}
      <svg
        viewBox="0 0 460 180"
        fill="none"
        preserveAspectRatio="none"
        className="
          absolute -left-1 top-[72px]
          hidden h-[130px] w-[300px]
          sm:top-[55px] sm:block
          sm:h-[145px] sm:w-[350px]
          lg:top-[75px] lg:h-[170px] lg:w-[450px]
        "
      >
        <path
          d="
            M 15 40
            C -10 10, 38 8, 90 26
            C 153 50, 181 116, 254 132
            C 329 151, 399 153, 424 117
            C 447 83, 393 61, 357 39
          "
          stroke="#38CFC0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.1 8"
        />
      </svg>
    </div>
  );
}

/* =========================
   Hero Illustration
========================= */

function HeroIllustration({ image = DEFAULT_HERO_IMAGE }) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none relative z-10
        hidden items-end justify-center

        sm:absolute sm:left-[-32px] sm:top-0
        sm:flex sm:h-[220px] sm:w-[40%]

        lg:-left-12 lg:h-[265px] lg:w-[37%]
      "
    >
      <img
        src={image}
        alt=""
        draggable="false"
        className="
          block h-full w-[230px] max-w-full
          object-contain object-bottom
          sm:w-full
        "
      />
    </div>
  );
}

/* =========================
   Search Form
========================= */

function SearchForm({ onSearch }) {
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
          <Form
            role="search"
            noValidate
            className="mt-5 w-full max-w-[400px] lg:mt-6"
          >
            <div
              className={`
                flex h-[49px] w-full flex-row-reverse items-center gap-2
                rounded-full border bg-[#FAFAFA]
                py-1 pl-[5px] pr-3
                shadow-[0_1px_1px_rgba(0,0,0,0.08)]
                transition-colors duration-200

                ${
                  hasError
                    ? "border-red-400"
                    : "border-[#E9E9E9] focus-within:border-[#C7E9E4]"
                }
              `}
            >
              <button
                type="submit"
                aria-label="جست‌وجوی مقالات"
                disabled={isSubmitting}
                className="
                  flex h-[36px] w-[36px] shrink-0
                  items-center justify-center
                  rounded-full bg-[#E88300]
                  text-white
                  transition-colors duration-200
                  enabled:hover:bg-[#D67500]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#E88300]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <Search size={18} strokeWidth={2} aria-hidden="true" />
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
                  min-w-0 flex-1
                  border-none bg-transparent
                  text-base text-[#333333]
                  outline-none
                  placeholder:text-[#6E6E6E]
                  placeholder:opacity-100
                  focus:outline-none
                  sm:text-[12px]
                "
              />
            </div>

            <ErrorMessage name="search">
              {(message) => (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-2 px-3 text-xs text-red-600"
                >
                  {message}
                </p>
              )}
            </ErrorMessage>

            {status && (
              <p role="alert" className="mt-2 px-3 text-xs text-red-600">
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

/* =========================
   Articles Hero
========================= */

export default function ArticlesHero({
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
        relative isolate w-full
        overflow-x-clip
        bg-[#F8F8F8]
        px-5 pb-12 pt-[26px]
        font-yekan
        sm:px-9 sm:pb-14
        lg:px-8 lg:pb-16
      "
    >
      <div className="relative mx-auto w-full max-w-[900px]">
        <div
          className="
            relative isolate
            min-h-[195px] w-full
            rounded-[30px]
            border border-[#EDF0EF]
            bg-[#F1F9F8]
            shadow-[0_1px_1px_rgba(0,0,0,0.08)]

            sm:rounded-bl-[80px]
            sm:rounded-br-[10px]
            sm:rounded-tl-[10px]
            sm:rounded-tr-[80px]
          "
        >
          <HeroDecoration />

          <HeroIllustration image={image} />

          {/* Text and Search Content (در RTL خودش سمت راست می‌شینه) */}
          <div
            className="
              relative z-20
              flex w-full flex-col items-start
              px-5 py-4

              sm:w-[55%]
              sm:py-6 sm:pl-6 sm:pr-4

              lg:pr-5
              xl:py-8 xl:pr-6
            "
          >
            <div className="flex items-center gap-[9px]">
              <span
                aria-hidden="true"
                className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#26C8BC]"
              />

              <Heading
                id={titleId}
                className="
                  text-[18px] font-extrabold leading-8 text-[#111111]
                  sm:text-[19px] lg:text-[20px] xl:text-[21px]
                "
              >
                اخبار و مقالات
              </Heading>
            </div>

            <p
              className="
                mt-1 text-[12px] font-normal leading-6 text-[#6E6E6E]
                sm:text-[13px]
              "
            >
              با ما خودت رو به روز کن
            </p>

            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>
    </section>
  );
}
