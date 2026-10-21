import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import {
  UserRound,
  Clock3,
  GraduationCap,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";

const courses = [
  {
    id: 1,
    title: "دوره پیشرفته دیزاین",
    teacher: "حامد نظری",
    duration: "۷:۳۴",
    students: 250,
    price: 1450000,
    rating: 4.5,
  },
  {
    id: 2,
    title: "دوره پیشرفته دیزاین",
    teacher: "حامد نظری",
    duration: "۷:۳۴",
    students: 180,
    price: 1250000,
    rating: 4.5,
  },
  {
    id: 3,
    title: "دوره پیشرفته دیزاین",
    teacher: "حامد نظری",
    duration: "۷:۳۴",
    students: 320,
    price: 1450000,
    rating: 4.5,
  },
  {
    id: 4,
    title: "دوره پیشرفته دیزاین",
    teacher: "حامد نظری",
    duration: "۷:۳۴",
    students: 210,
    price: 1450000,
    rating: 4.5,
  },
  {
    id: 5,
    title: "آموزش طراحی رابط کاربری",
    teacher: "حامد نظری",
    duration: "۵:۲۰",
    students: 190,
    price: 980000,
    rating: 5,
  },
  {
    id: 6,
    title: "آموزش حرفه‌ای فیگما",
    teacher: "حامد نظری",
    duration: "۶:۱۵",
    students: 150,
    price: 1100000,
    rating: 4.5,
  },
];

const formatPrice = (price) => new Intl.NumberFormat("fa-IR").format(price);

function CourseCard({ course }) {
  return (
    <article
      dir="rtl"
      className="group relative mt-3 h-full rounded-xl bg-white p-2.5 pb-3
      shadow-[0_1px_2px_rgba(0,0,0,0.12)]
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative -mt-3 mb-3">
  <div className="overflow-hidden rounded-xl">
    <img
      src="/ImgCourse.png"
      alt="تصویر دوره"
      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</div>

      <h3 className="mb-3 truncate text-[13px] font-bold text-gray-800">
        {course.title}
      </h3>

      <div className="mb-2 flex items-center justify-between gap-2 text-[10px] text-gray-400">
        <span className="flex min-w-0 items-center gap-1">
          <UserRound size={12} />
          <span className="truncate">{course.teacher}</span>
        </span>

        <span className="flex shrink-0 items-center gap-1">
          <GraduationCap size={12} />
          <span>{formatPrice(course.students)}</span>
        </span>
      </div>

   <div
  className="flex items-center gap-1.5"
  aria-label={`امتیاز ${course.rating} از ۵`}
>
  <span className="text-xs font-medium text-gray-500">
    {course.rating}
  </span>

  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, index) => {
      const fill = Math.max(0, Math.min(1, course.rating - index));

      return (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`star-${course.id}-${index}`}>
              <stop offset={`${fill * 100}%`} stopColor="#fbbf24" />
              <stop offset={`${fill * 100}%`} stopColor="#d1d5db" />
            </linearGradient>
          </defs>

          <path
            d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z"
            fill={`url(#star-${course.id}-${index})`}
          />
        </svg>
      );
    })}
  </div>
</div>

      <div className="mb-2 h-px bg-gray-100" />

      <div className="flex items-center justify-between gap-2">
        <span className="whitespace-nowrap text-[11px] font-bold text-teal-600">
          {formatPrice(course.price)}
          <span className="mr-1 text-[9px] font-normal">تومان</span>
        </span>

        <button
          type="button"
          aria-label={`افزودن ${course.title} به سبد خرید`}
          onClick={() => {
            console.log("Add course to cart:", course.id);
          }}
          className="flex h-7 w-7 shrink-0 items-center
          justify-center rounded-md text-teal-500
          transition-all hover:bg-teal-50 hover:text-teal-700"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </article>
  );
}

export default function CoursesSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const paginationCount = Math.max(
    1,
    courses.length - Math.floor(slidesPerView) + 1,
  );

  const updateSlidesPerView = (swiper) => {
    const value = swiper.params.slidesPerView;

    setSlidesPerView(typeof value === "number" ? value : 1);
  };

  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#f8f8f8] py-12"
    >
      <div
        className="pointer-events-none absolute right-14 top-80 border-gray-300
        -z-10 h-48 w-48 rounded-full border border-dashed
       0"
      />

      <div
        className="pointer-events-none absolute left-20 top-28
        -z-10 h-12 w-12 rounded-full border border-dashed
        border-gray-300/70"
      />

      <div className="mx-auto w-full">
        <div className="mb-8 px-5 text-center">
          <h2 className="flex items-center justify-center gap-2.5 text-xl font-extrabold text-gray-950 sm:text-2xl">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
            دوره های آموزشی
          </h2>

          <p className="mt-3 text-xs text-gray-400 sm:text-sm">
            به روز ترین دوره هایی که میتونید پیدا کنید
          </p>
        </div>

        <div className="mx-auto w-[90%] max-w-[1200px] sm:w-[85%] lg:w-[80%]">
          <div className="mb-4 flex items-center justify-start px-1 sm:px-2">
            <button
              type="button"
              onClick={() => {
                console.log("View all courses");
              }}
              className="rounded-full border border-teal-500/30 px-5 py-2 text-xs font-medium text-teal-600 transition hover:bg-teal-500 hover:text-white"
            >
              مشاهده همه دوره ها
            </button>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl">
            <div
              dir="rtl"
              className="relative overflow-hidden rounded-2xl py-2 pr-4 pl-2 sm:pr-8 sm:pl-4 lg:pr-12"
            >
          <div className="pointer-events-none absolute right-6 top-2 -z-0 hidden h-[300px] w-[220px] rounded-[24px] bg-gradient-to-br from-teal-200 via-teal-100 to-orange-200 md:block" />

              <Swiper
                modules={[A11y]}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  updateSlidesPerView(swiper);
                }}
                onBreakpoint={updateSlidesPerView}
                onResize={updateSlidesPerView}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                }}
                slidesPerView={1}
                spaceBetween={16}
                speed={500}
                watchOverflow
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="!overflow-hidden"
              >
                {courses.map((course) => (
                  <SwiperSlide key={course.id} className="!h-auto !pb-2">
                    <CourseCard course={course} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-5 flex items-center justify-center gap-1.5">
                {Array.from({ length: paginationCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`رفتن به اسلاید ${index + 1}`}
                    onClick={() => {
                      swiperInstance?.slideTo(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-5 bg-orange-400"
                        : "w-2.5 bg-teal-300 hover:bg-teal-400"
                    }`}
                  />
                ))}
              </div>

              <div
                dir="ltr"
                className="mt-5 flex items-center justify-start gap-2"
              >
                <button
                  type="button"
                  aria-label="دوره قبلی"
                  onClick={() => swiperInstance?.slidePrev()}
                  disabled={!swiperInstance || activeIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-teal-400 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={20} />
                </button>

                <button
                  type="button"
                  aria-label="دوره بعدی"
                  onClick={() => swiperInstance?.slideNext()}
                  disabled={!swiperInstance || swiperInstance.isEnd}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-teal-400 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
