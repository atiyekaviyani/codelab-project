
import {
  ArrowUpLeft,
  BookOpen,
  Clock3,
  Star,
  UsersRound,
} from "lucide-react";

export default function CourseSlide({ course, position, onClick }) {
  const isActive = position === 0;

  if (Math.abs(position) > 1) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`نمایش دوره ${course.title}`}
      aria-current={isActive ? "true" : undefined}
      className={`
        absolute left-1/2 top-1/2
        w-[min(76vw,310px)] sm:w-[300px] lg:w-[330px]
        -translate-x-1/2 -translate-y-1/2
        rounded-[26px] text-right
        outline-none
        transition-[transform,opacity,box-shadow]
        duration-500 ease-in-out
        focus-visible:ring-2 focus-visible:ring-teal-600
        focus-visible:ring-offset-4

        ${
          isActive
            ? "z-30 scale-100 opacity-100"
            : position < 0
              ? "z-20 -translate-x-[78%] scale-[0.86] opacity-75"
              : "z-20 translate-x-[-22%] scale-[0.86] opacity-75"
        }
      `}
    >
      <article
        className={`
          overflow-hidden rounded-[26px] border bg-white
          transition-shadow duration-500
          ${
            isActive
              ? "border-white shadow-[0_24px_65px_-22px_rgba(15,118,110,0.30)]"
              : "border-white/70 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.24)]"
          }
        `}
      >
        {/* تصویر و پس‌زمینه کارت */}
        <div
          className={`
            relative h-[178px] overflow-hidden
            bg-gradient-to-br ${course.color}
          `}
        >
          <div className="absolute -right-9 -top-12 h-40 w-40 rounded-full bg-teal-200/40 blur-2xl" />

          <div className="absolute -bottom-10 left-4 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />

          <span className="absolute right-4 top-4 z-10 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur">
            {course.category}
          </span>

          <div className="absolute inset-0 flex items-center justify-center p-5">
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              className="h-[112px] w-[150px] object-contain drop-shadow-xl"
              onError={(event) => {
                event.currentTarget.classList.add("hidden");
                event.currentTarget.nextElementSibling?.classList.remove(
                  "hidden",
                );
              }}
            />

            <div
              className={`
                hidden h-24 w-24 items-center justify-center
                rounded-[28px] border border-white/70
                bg-white/80 text-4xl font-black text-teal-700
                shadow-lg backdrop-blur-sm
                ${
                  course.icon === "react"
                    ? "text-cyan-600"
                    : course.icon === "figma"
                      ? "text-violet-600"
                      : course.icon === "javascript"
                        ? "text-amber-500"
                        : course.icon === "tailwind"
                          ? "text-sky-600"
                          : "text-orange-600"
                }
              `}
              aria-hidden="true"
            >
              {course.icon === "react"
                ? "⚛"
                : course.icon === "figma"
                  ? "F"
                  : course.icon === "javascript"
                    ? "JS"
                    : course.icon === "tailwind"
                      ? "T"
                      : "HTML"}
            </div>
          </div>

          {isActive && (
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-teal-700 shadow-sm">
              دوره پیشنهادی
            </span>
          )}
        </div>

        {/* اطلاعات دوره */}
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="truncate text-xs text-gray-500">
              مدرس: {course.instructor}
            </span>

            <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-amber-500">
              <Star size={14} fill="currentColor" />
              {course.rating}
            </span>
          </div>

          <h3 className="min-h-[52px] text-base font-extrabold leading-7 text-gray-800 sm:text-lg">
            {course.title}
          </h3>

          <p className="mt-1 min-h-6 text-xs leading-6 text-gray-500">
            {course.subtitle}
          </p>

          {/* ویژگی‌های دوره */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-y border-gray-100 py-3">
            <div className="flex flex-col items-center gap-1 text-gray-500">
              <Clock3 size={16} />
              <span className="text-[11px]">{course.duration}</span>
            </div>

            <div className="flex flex-col items-center gap-1 text-gray-500">
              <BookOpen size={16} />
              <span className="text-[11px]">{course.lessons} جلسه</span>
            </div>

            <div className="flex flex-col items-center gap-1 text-gray-500">
              <UsersRound size={16} />
              <span className="text-[11px]">{course.students} نفر</span>
            </div>
          </div>

          {/* قیمت و لینک نمایشی */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] text-gray-400 line-through">
                {course.oldPrice} تومان
              </p>

              <p className="mt-1 whitespace-nowrap text-sm font-extrabold text-gray-800">
                {course.price}
                <span className="mr-1 text-[10px] font-normal text-gray-500">
                  تومان
                </span>
              </p>
            </div>

            <span
              className={`
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl text-white transition-transform duration-300
                ${isActive ? "bg-teal-700 group-hover:-translate-x-1" : "bg-gray-500"}
              `}
            >
              <ArrowUpLeft size={20} />
            </span>
          </div>
        </div>
      </article>
    </button>
  );
}
