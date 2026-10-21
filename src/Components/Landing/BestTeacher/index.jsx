import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "برترین استاد",
    highlight: " رو همینجا پیدا می‌کنید!!",
    description:
      "برجسته‌ترین اساتید برترین مجموعه برنامه‌نویسی استان مازندران رو بهتر بشناسیم!",
    image: "",
  },
  {
    id: 2,
    name: "اساتید حرفه‌ای",
    highlight: "مسیر موفقیت با بهترین‌ها",
    description:
      "با همراهی اساتید باتجربه، مهارت‌های خودتون رو ارتقا بدید و حرفه‌ای بشید.",
    image: "",
  },
  {
    id: 3,
    name: "آموزش تخصصی",
    highlight: "یادگیری رو اصولی شروع کنید",
    description:
      "با دوره‌های کاربردی و آموزش‌های تخصصی، برای آینده شغلی خودتون آماده بشید.",
    image: "",
  },
];

export default function BestTeacher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTeacher = teachers[activeIndex];
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teachers.length);
  };
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  return (
    <section
      dir="rtl"
      className="w-full overflow-hidden bg-[#f8f8f8] py-8 sm:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[420px] lg:h-[467px] lg:min-h-0">
          <div className="absolute inset-0 -z-20 bg-[#f8f8f8]" />

          <svg
            className="absolute inset-0 -z-10 h-full w-full"
            viewBox="0 0 1440 467"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M0 44
                L250 60
                L510 70
                L620 78
                L690 65
                Q730 45 770 65
                L830 82
                L1050 73
                L1220 62
                L1440 44
                L1440 424
                L1200 410
                L980 416
                L800 407
                L650 420
                L470 414
                L250 426
                L0 414
                Z
              "
              fill="#a8e9e7"
            />
          </svg>

          <div className="pointer-events-none absolute left-[61%] top-[8%] -z-10 h-16 w-16 rounded-full border border-dashed border-gray-300/60" />

          <div className="pointer-events-none absolute bottom-[4%] left-[39%] -z-10 h-14 w-14 rounded-full border border-dashed border-gray-300/60" />

          <div className="pointer-events-none absolute left-[56%] top-[25%] -z-10 h-64 w-64 rounded-full border border-dotted border-gray-300/40" />

          <div className="grid h-full min-h-[390px] grid-cols-1 items-center gap-8 py-10 sm:min-h-[420px] lg:grid-cols-2 lg:gap-4 lg:py-0">
            <div className="relative flex min-h-[245px] items-center justify-center sm:min-h-[280px] lg:order-2 lg:min-h-0">
              <div className="relative h-[230px] w-[190px] sm:h-[280px] sm:w-[230px] lg:h-[260px] lg:w-[190px]">
                <div className="absolute left-[-25px] top-[20px] h-full w-full rotate-[-12deg] rounded-[20px] border border-gray-400/40 bg-gray-300 shadow-md" />

                <div className="absolute left-[-15px] top-[12px] h-full w-full rotate-[-7deg] rounded-[20px] border border-gray-400/30 bg-gray-100 shadow-md" />

                <div className="absolute left-[-7px] top-[5px] h-full w-full rotate-[-3deg] rounded-[20px] border border-gray-300/40 bg-white shadow-lg" />
                <div
                  key={activeTeacher.id}
                  className="absolute inset-0 overflow-hidden rounded-[20px] bg-gray-200 shadow-xl"
                >
                  <img
                    src={activeTeacher.image}
                    alt={activeTeacher.name}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />

                  <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-100">
                    <span className="text-sm text-gray-500">تصویر استاد</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 text-center lg:order-1 lg:items-start lg:pr-12 lg:text-right">
              <h2 className="text-xl font-extrabold leading-9 text-[#152f32] sm:text-2xl lg:text-[25px]">
                {activeTeacher.name}{" "}
                <span className="relative inline-block">
                  {activeTeacher.highlight}
                  <span className="absolute -bottom-1 right-0 h-[3px] w-10 rounded-full bg-orange-500" />
                </span>
              </h2>

              <p className="mt-5 max-w-[430px] text-sm leading-8 text-gray-500 sm:text-[15px]">
                {activeTeacher.description}
              </p>
            </div>
          </div>

          <div className="absolute bottom-1/2 left-5 z-10 flex translate-y-1/2 flex-col items-center gap-1.5 sm:left-8 lg:left-[14%]">
            {teachers.map((teacher, index) => (
              <button
                key={teacher.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`اسلاید ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "h-7 w-1.5 bg-[#08b9b5]"
                    : "h-1.5 w-1.5 bg-white hover:bg-[#08b9b5]"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-4 left-4 z-10 flex gap-2 lg:bottom-6 lg:left-8">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="اسلاید قبلی"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/80 text-gray-700 shadow-sm transition hover:bg-white"
            >
              <ChevronRight size={19} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="اسلاید بعدی"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/80 text-gray-700 shadow-sm transition hover:bg-white"
            >
              <ChevronLeft size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
