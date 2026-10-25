import { useCallback, useState } from "react";
import { ArrowDownLeft, Sparkles } from "lucide-react";

import CourseSlide from "../../Landing/PopularCoursesSlider/CourseSlide";
import SliderControls from "../../Landing/PopularCoursesSlider/SliderControls";
import SliderPagination from "../../Landing/PopularCoursesSlider/SliderPagination";
import CourseFeatures from "../../Landing/PopularCoursesSlider/CourseFeatures";
import FloatingDecorations from "../../Landing/PopularCoursesSlider/FloatingDecorations";
import popularCoursesData from "../../Landing/PopularCoursesSlider/popularCoursesData";

export default function PopularCoursesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = popularCoursesData.length;

  const goToSlide = useCallback(
    (index) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > Math.floor(total / 2)) {
      position -= total;
    }

    if (position < -Math.floor(total / 2)) {
      position += total;
    }

    return position;
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#F0FBF9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      dir="rtl"
      aria-labelledby="popular-courses-title"
    >
      <FloatingDecorations />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-bold text-teal-700 shadow-sm sm:text-sm">
            <Sparkles size={16} />
            مسیر یادگیری تو از اینجا شروع می‌شه
          </div>

          <h2
            id="popular-courses-title"
            className="text-2xl font-black leading-relaxed tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            محبوب‌ترین دوره‌های{" "}
            <span className="relative whitespace-nowrap text-teal-700">
              آموزشی
              <span className="absolute -bottom-1 right-0 h-1 w-full rounded-full bg-teal-200/80" />
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            با دوره‌های کاربردی و مدرسین متخصص، مهارت‌های جدید یاد بگیر و قدم
            بعدی مسیر حرفه‌ای خودت رو بردار.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto h-[450px] w-full max-w-5xl sm:h-[480px] lg:h-[500px]"
          aria-roledescription="carousel"
          aria-label="دوره‌های محبوب آموزشی"
        >
          {/* Soft glow behind the center card */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/35 blur-3xl sm:h-80 sm:w-80" />

          {popularCoursesData.map((course, index) => {
            const position = getPosition(index);

            if (Math.abs(position) > 1) return null;

            return (
              <CourseSlide
                key={course.id}
                course={course}
                position={position}
                onClick={() => goToSlide(index)}
              />
            );
          })}

          {/* Side navigation buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="رفتن به دوره قبلی"
            className="absolute left-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 text-teal-800 shadow-lg transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:left-[8%] sm:h-12 sm:w-12 lg:left-[15%]"
          >
            <ArrowDownLeft className="rotate-45" size={21} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="رفتن به دوره بعدی"
            className="absolute right-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 text-teal-800 shadow-lg transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:right-[8%] sm:h-12 sm:w-12 lg:right-[15%]"
          >
            <ArrowDownLeft className="-rotate-[135deg]" size={21} />
          </button>
        </div>

        {/* Pagination and controls */}
        <div className="relative z-40 mt-1 flex flex-col items-center gap-5">
          <SliderPagination
            total={total}
            activeIndex={activeIndex}
            onChange={goToSlide}
          />

          <SliderControls onPrev={handlePrev} onNext={handleNext} />
        </div>

        {/* Features */}
        <div className="relative z-10 mt-12 sm:mt-16">
          <CourseFeatures />
        </div>

        {/* Bottom caption */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs leading-6 text-gray-500 sm:text-sm">
          <Sparkles size={15} className="shrink-0 text-teal-600" />
          <span>یادگیری مستمر، سرمایه‌گذاری روی آینده‌ی توست.</span>
        </div>
      </div>
    </section>
  );
}