

import { Search } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// اعتبارسنجی فرم جست‌وجو
const courseSearchSchema = Yup.object({
  course: Yup.string()
    .trim()
    .required("لطفاً نام دوره موردنظر را وارد کنید.")
    .max(100, "عبارت جست‌وجو نباید بیشتر از ۱۰۰ کاراکتر باشد."),
});

export default function AcademyCourse({ image = "/img course.png", onSearch }) {
  const handleSubmit = (values) => {
    const query = values.course.trim();

    if (!query) return;

    if (onSearch) {
      onSearch(query);
    } else {
      console.log("جست‌وجوی دوره:", query);
    }
  };

  return (
    <section
      dir="rtl"
      className="
        min-h-[280px] bg-[#FAFAFA]
        px-3 pt-[44px] pb-16
        sm:px-5
      "
    >
      <div
        className="
          academy-course-card
          relative isolate mx-auto
          h-[200px] w-full max-w-[824px]
          rounded-[12px]
          border border-[#E7F0ED]
          bg-[#F1F9F8]
          shadow-[0_5px_18px_rgba(24,60,53,0.06)]
          overflow-visible
        "
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 430 300"
          fill="none"
          className="
            pointer-events-none absolute
            -left-[45px] -top-[30px]
            z-0 h-[300px] w-[430px]
            overflow-visible
          "
        >
          <defs>
            <linearGradient
              id="academyMintGradient"
              x1="0"
              y1="0"
              x2="390"
              y2="280"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A5D8B2" />
              <stop offset=".52" stopColor="#13C9C2" />
              <stop offset="1" stopColor="#A5D8B2" />
            </linearGradient>
          </defs>

          <path
            d="
              M -28 112
              C 20 35, 104 17, 155 65
              C 192 100, 150 153, 130 186
              C 102 231, 128 271, 193 270
              C 258 269, 331 247, 380 213
              C 406 195, 420 175, 439 168
            "
            stroke="url(#academyMintGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />

          <path
            d="
              M -20 244
              C 42 264, 92 285, 156 291
              C 221 298, 292 287, 350 265
            "
            stroke="#D9DEDC"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeDasharray="2 6"
          />
        </svg>

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-[18px] top-[10px] z-10
            h-[290px] w-[250px]
            rotate-[-4deg]
            rounded-[16px]
            bg-gradient-to-br
            from-[#F8E7B2] via-[#E0EFD4] to-[#BCEEE8]
            shadow-[0_8px_22px_rgba(66,111,95,0.07)]
          "
        />

        <img
          src={image}
          alt="دانشجو در حال یادگیری دوره‌های آموزشی"
          draggable="false"
          className="
            pointer-events-none absolute
            left-[4px] top-[-25px] z-20
            h-[330px] w-[300px]
            max-w-none
            object-contain object-center
          "
        />

        <div
          className="
            absolute right-[24px] top-[20px] z-30
            w-[410px] max-w-[calc(100%-340px)]
            text-right
          "
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                h-[9px] w-[9px] shrink-0
                rounded-full bg-[#00C9C3]
              "
            />

            <h2
              className="
                whitespace-nowrap
                text-[22px] leading-[1.5]
                font-bold text-[#111111]
              "
            >
              دوره های آموزشی
            </h2>
          </div>

          <p
            className="
              mt-[7px]
              whitespace-nowrap
              text-[13px] leading-[1.8]
              font-normal text-[#A6A6A6]
            "
          >
            به روز ترین دوره هایی که میتوانید پیدا کنید
          </p>

          <Formik
            initialValues={{ course: "" }}
            validationSchema={courseSearchSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form
                role="search"
                className="
                  mt-[17px] flex h-[50px] w-full
                  items-center gap-2
                  rounded-full
                  border border-[#E8ECEA]
                  bg-[#FCFCFC]
                  py-[6px] pr-[16px] pl-[6px]
                  shadow-[inset_0_2px_5px_rgba(0,0,0,0.025),0_2px_5px_rgba(0,0,0,0.025)]
                  transition-shadow duration-200
                  focus-within:border-[#B5E7E0]
                  focus-within:shadow-[0_0_0_3px_rgba(19,201,194,0.08)]
                "
              >
                <Field
                  type="search"
                  name="course"
                  dir="rtl"
                  autoComplete="off"
                  placeholder="چی میخوای یاد بگیری؟..."
                  aria-label="جست‌وجوی دوره‌های آموزشی"
                  className="
                    min-w-0 flex-1
                    border-0 bg-transparent
                    text-right text-[12px]
                    text-[#333333]
                    outline-none
                    placeholder:text-[#B5B5B5]
                    placeholder:opacity-100
                    focus:outline-none
                    focus:ring-0
                  "
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="جست‌وجوی دوره"
                  className="
                    flex h-[36px] w-[36px] shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#E98300]
                    text-white
                    shadow-[0_2px_5px_rgba(233,131,0,0.16)]
                    transition-all duration-200
                    hover:bg-[#D97800]
                    active:scale-95
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#E98300]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <Search size={17} strokeWidth={2.2} />
                </button>

                <ErrorMessage
                  name="course"
                  component="span"
                  className="sr-only"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
