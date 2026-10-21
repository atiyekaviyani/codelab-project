import { Star, Users, Clock } from "lucide-react";

export default function CourseCard({ course }) {
  const {
    title,
    image,
    instructor,
    price,
    oldPrice,
    rating,
    students,
    duration,
    level,
  } = course;

  const hasDiscount = oldPrice > price;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {hasDiscount && (
          <span className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold text-white">
            تخفیف
          </span>
        )}
      </div>

      {/* Course Information */}
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-md bg-teal-50 px-2 py-1 text-xs text-teal-700">
            {level}
          </span>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        <h3 className="line-clamp-2 min-h-14 text-base font-bold leading-7 text-gray-800 transition-colors group-hover:text-teal-600">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">مدرس: {instructor}</p>

        <div className="my-4 flex items-center gap-4 border-b border-gray-100 pb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Users size={15} />
            <span>{students} دانشجو</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={15} />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-col gap-1">
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                {oldPrice.toLocaleString("fa-IR")} تومان
              </span>
            )}

            <span className="text-base font-extrabold text-gray-900">
              {price === 0
                ? "رایگان"
                : `${price.toLocaleString("fa-IR")} تومان`}
            </span>
          </div>

          <button
            type="button"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            onClick={() => {
              window.location.href = `/courses/${course.id}`;
            }}
          >
            مشاهده دوره
          </button>
        </div>
      </div>
    </article>
  );
}
