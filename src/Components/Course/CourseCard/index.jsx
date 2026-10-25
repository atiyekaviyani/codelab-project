import { Star, Users, Clock, ArrowLeft, Heart, Sparkles } from "lucide-react";
export default function CourseCard({ course }) {
  const {
    id,
    title,
    image,
    instructor,
    price = 0,
    oldPrice,
    rating,
    students,
    duration,
    level,
    isFeatured,
  } = course;

  const hasDiscount = typeof oldPrice === "number" && oldPrice > price;

  return (
    <article
      dir="rtl"
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[24px] border border-white/80 bg-white/75 p-2.5 shadow-[0_8px_35px_rgba(15,118,110,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/95 hover:shadow-[0_20px_45px_rgba(13,148,136,0.16)]"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-36 w-36 rounded-full bg-teal-300/15 blur-3xl transition-all duration-500 group-hover:bg-teal-300/30" />

      <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-cyan-50 via-slate-100 to-teal-100">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/5" />

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {isFeatured && (
          <span className="absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-[11px] font-bold text-teal-800 shadow-lg backdrop-blur-md">
            <Sparkles size={13} className="text-amber-500" />
            دوره پیشنهادی
          </span>
        )}

        {hasDiscount && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-gradient-to-l from-rose-500 to-orange-400 px-3 py-1.5 text-[11px] font-extrabold text-white shadow-lg shadow-rose-500/20">
            تخفیف ویژه
          </span>
        )}

        <span className="absolute bottom-3 right-3 z-20 rounded-full border border-white/40 bg-slate-950/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {level}
        </span>

        <button
          type="button"
          aria-label="افزودن به علاقه‌مندی‌ها"
          onClick={() => {}}
          className="absolute bottom-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/80 text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-rose-500"
        >
          <Heart size={17} />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium text-teal-700">
            مسیر یادگیری برنامه‌نویسی
          </span>

          <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-bold text-slate-700">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="line-clamp-2 min-h-[52px] text-[15px] font-extrabold leading-7 text-slate-800 transition-colors duration-300 group-hover:text-teal-700">
          {title}
        </h3>

        <p className="mt-1.5 truncate text-xs text-slate-500">
          مدرس: <span className="font-medium text-slate-700">{instructor}</span>
        </p>

        <div className="my-4 grid grid-cols-2 gap-2 border-y border-slate-100/90 py-3 text-[11px] text-slate-500">
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
              <Users size={14} />
            </span>
            <span className="truncate">
              {Number(students || 0).toLocaleString("fa-IR")} دانشجو
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-1.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
              <Clock size={14} />
            </span>
            <span className="truncate">{duration}</span>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <div className="flex min-w-0 flex-col gap-1.5">
            {hasDiscount && (
              <span className="text-[11px] text-slate-400 line-through">
                {oldPrice.toLocaleString("fa-IR")} تومان
              </span>
            )}

            <span className="whitespace-nowrap text-sm font-black text-slate-800">
              {price === 0
                ? "رایگان"
                : `${price.toLocaleString("fa-IR")} تومان`}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = `/courses/${id}`;
            }}
            className="group/button inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-l from-teal-600 to-cyan-600 px-3 py-2.5 text-xs font-bold text-white shadow-md shadow-teal-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-teal-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            مشاهده دوره
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover/button:-translate-x-1"
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 transition-all duration-500 group-hover:w-2/3" />
    </article>
  );
}
