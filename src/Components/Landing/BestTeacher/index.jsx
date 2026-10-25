import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  GraduationCap,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import SectionReveal from "../../Animations/SectionReveal";

const teachers = [
  {
    id: 1,
    name: "برترین استاد",
    highlight: "رو همینجا پیدا می‌کنید!!",
    description:
      "برجسته‌ترین اساتید برترین مجموعه برنامه‌نویسی استان مازندران رو بهتر بشناسیم!",
    teacherName: "استاد محمدرضا احمدی",
    specialty: "توسعه‌دهنده فول استک",
    experience: "۸ سال تجربه",
    students: "۲٬۴۰۰+",
    rating: "۴.۹",
    initials: "م‌ا",
    image: "",
    color: "from-teal-800 via-teal-700 to-emerald-500",
  },
  {
    id: 2,
    name: "اساتید حرفه‌ای",
    highlight: "مسیر موفقیت با بهترین‌ها",
    description:
      "با همراهی اساتید باتجربه، مهارت‌های خودتون رو ارتقا بدید و حرفه‌ای بشید.",
    teacherName: "استاد سارا احمدی",
    specialty: "طراح رابط کاربری",
    experience: "۶ سال تجربه",
    students: "۱٬۸۰۰+",
    rating: "۴.۸",
    initials: "س‌ا",
    image: "",
    color: "from-orange-800 via-orange-600 to-amber-400",
  },
  {
    id: 3,
    name: "آموزش تخصصی",
    highlight: "یادگیری رو اصولی شروع کنید",
    description:
      "با دوره‌های کاربردی و آموزش‌های تخصصی، برای آینده شغلی خودتون آماده بشید.",
    teacherName: "استاد علی رضایی",
    specialty: "متخصص JavaScript",
    experience: "۷ سال تجربه",
    students: "۲٬۱۰۰+",
    rating: "۴.۹",
    initials: "ع‌ر",
    image: "",
    color: "from-cyan-900 via-cyan-700 to-sky-400",
  },
];

function TeacherPortrait({ teacher }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${teacher.color}`}
    >
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
        <Code2 size={21} />
      </div>

      {teacher.image ? (
        <img
          src={teacher.image}
          alt={teacher.teacherName}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.classList.add("hidden");
            event.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
      ) : null}

      <div
        className={`absolute inset-0 flex items-center justify-center ${
          teacher.image ? "hidden" : ""
        }`}
      >
        <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/25 bg-white/10 text-5xl font-black text-white shadow-2xl backdrop-blur-sm sm:h-52 sm:w-52 sm:text-6xl">
          {teacher.initials}
        </div>
      </div>

      <div className="absolute bottom-3 right-3 left-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur-xl sm:bottom-4 sm:right-4 sm:left-4 sm:p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <GraduationCap size={24} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xs font-extrabold text-gray-900 sm:text-sm">
            {teacher.teacherName}
          </h3>
          <p className="mt-1 truncate text-[10px] text-gray-500 sm:text-xs">
            {teacher.specialty}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-bold text-amber-600">
          <Star size={13} fill="currentColor" />
          {teacher.rating}
        </div>
      </div>
    </div>
  );
}

export default function BestTeacher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTeacher = teachers[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % teachers.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + teachers.length) % teachers.length,
    );
  };

  return (
    <SectionReveal>
      <section
        dir="rtl"
        aria-label="معرفی اساتید برتر"
        className="relative isolate overflow-hidden bg-[#F8FBFA] py-12 sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl sm:h-[420px] sm:w-[420px]" />
          <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
          <div className="absolute right-[12%] top-16 hidden h-16 w-16 rounded-full border border-dashed border-teal-300/70 lg:block" />
          <div className="absolute bottom-20 left-[38%] hidden h-20 w-20 rounded-full border border-dashed border-cyan-300/70 lg:block" />
        </div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center lg:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-bold text-teal-800 shadow-sm sm:text-sm">
              <GraduationCap size={17} />
              همراهان مسیر یادگیری
            </span>

            <h2 className="mt-4 text-2xl font-black leading-relaxed text-gray-900 sm:text-3xl lg:text-4xl">
              با بهترین{" "}
              <span className="relative inline-block text-teal-700">
                اساتید
                <span className="absolute -bottom-1 right-0 h-1 w-full rounded-full bg-orange-400" />
              </span>{" "}
              یاد بگیر
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              تجربه، تخصص و آموزش کاربردی؛ همه در کنار هم برای ساختن آینده
              حرفه‌ای تو.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/70 shadow-[0_24px_80px_-45px_rgba(15,118,110,0.35)] backdrop-blur-sm sm:rounded-[36px]">
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] bg-gradient-to-l from-teal-100/80 via-teal-50/60 to-transparent lg:block" />

            <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-right">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3.5 py-2 text-xs font-bold text-teal-800 sm:text-sm">
                  <Sparkles size={15} />
                  {activeTeacher.name}
                </span>

                <h3
                  key={activeTeacher.id}
                  className="mt-5 text-2xl font-black leading-[1.8] tracking-tight text-gray-900 sm:text-3xl lg:text-[38px]"
                >
                  <span className="block">{activeTeacher.name}</span>

                  <span className="relative mt-1 inline-block text-teal-700">
                    {activeTeacher.highlight}
                    <span className="absolute -bottom-1 right-0 h-1 w-20 rounded-full bg-orange-400 sm:w-28" />
                  </span>
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
                  {activeTeacher.description}
                </p>

                <div className="mt-6 grid w-full max-w-lg grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/80 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <UsersRound size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-extrabold text-gray-800 sm:text-sm">
                        {activeTeacher.students}
                      </p>
                      <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                        جامعه دانشجویان
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/80 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <Star size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-extrabold text-gray-800 sm:text-sm">
                        {activeTeacher.experience}
                      </p>
                      <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                        تجربه آموزشی
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex w-full max-w-lg items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="استاد قبلی"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition duration-300 hover:-translate-x-0.5 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="استاد بعدی"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white shadow-md shadow-teal-700/20 transition duration-300 hover:translate-x-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {teachers.map((teacher, index) => (
                      <button
                        key={teacher.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`نمایش اسلاید ${index + 1}`}
                        aria-current={
                          activeIndex === index ? "true" : undefined
                        }
                        className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                          activeIndex === index
                            ? "w-8 bg-teal-700"
                            : "w-2 bg-teal-200 hover:bg-teal-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 flex min-h-[340px] items-center justify-center sm:min-h-[430px] lg:order-2 lg:min-h-[460px]">
                <div className="relative h-[330px] w-full max-w-[420px] sm:h-[410px]">
                  <div className="absolute left-[12%] top-[10%] h-[76%] w-[68%] rotate-[12deg] overflow-hidden rounded-[26px] border-[5px] border-white/80 bg-gradient-to-br from-orange-100 to-gray-200 opacity-50 shadow-xl sm:rounded-[32px] sm:border-[7px]">
                    <div className="flex h-full items-center justify-center text-5xl font-black text-orange-700">
                      س‌ا
                    </div>
                  </div>

                  <div className="absolute left-[7%] top-[7%] h-[78%] w-[68%] -rotate-[10deg] overflow-hidden rounded-[26px] border-[5px] border-white/90 bg-gradient-to-br from-cyan-100 to-gray-200 opacity-70 shadow-xl sm:rounded-[32px] sm:border-[7px]">
                    <div className="flex h-full items-center justify-center text-5xl font-black text-cyan-800">
                      ع‌ر
                    </div>
                  </div>

                  <div
                    key={activeTeacher.id}
                    className="absolute left-1/2 top-1/2 h-[90%] w-[76%] -translate-x-1/2 -translate-y-1/2 rotate-[2deg] overflow-hidden rounded-[26px] border-[5px] border-white bg-white shadow-[0_28px_70px_-25px_rgba(15,118,110,0.45)] transition-all duration-500 sm:rounded-[34px] sm:border-[7px]"
                  >
                    <TeacherPortrait teacher={activeTeacher} />
                  </div>

                  <div className="absolute right-0 top-[13%] z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-lg sm:right-1 sm:px-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                      <Star size={18} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">
                        {activeTeacher.rating}
                      </p>
                      <p className="mt-0.5 text-[10px] text-gray-500">
                        رضایت دانشجویان
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-[13%] left-0 z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-lg sm:left-1 sm:px-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <GraduationCap size={19} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">
                        آموزش کاربردی
                      </p>
                      <p className="mt-0.5 text-[10px] text-gray-500">
                        برای مسیر حرفه‌ای تو
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs leading-6 text-gray-500 sm:mt-9 sm:text-sm">
            <Sparkles size={16} className="shrink-0 text-teal-600" />
            <span>
              با راهنمایی اساتید متخصص، قدم بعدی مسیر یادگیری خودت رو بردار.
            </span>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
