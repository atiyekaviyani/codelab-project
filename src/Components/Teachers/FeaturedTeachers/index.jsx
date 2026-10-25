
// import { useCallback, useMemo, useState } from "react";
// import { ListFilter, ChevronDown, ChevronUp } from "lucide-react";
// import InstructorModal from "../../Teachers/InstructorModal/InstructorModal";
// import SectionReveal from "../../Animations/SectionReveal";
// const instructorsData = [
//   {
//     id: 1,
//     name: "یلدا معصومی",
//     experience: 5,
//     image: "/Rectangle 138 (2).png",
//     coursesCount: 12,
//     articlesCount: 8,
//     bio: "مدرس طراحی رابط کاربری و توسعه فرانت‌اند",
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/",
//       instagram: "https://www.instagram.com/",
//     },
//   },
//   {
//     id: 2,
//     name: "حامد نظری",
//     experience: 8,
//     image: "/Rectangle 138 (5).png",
//     coursesCount: 18,
//     articlesCount: 14,
//     bio: "مدرس برنامه‌نویسی و توسعه وب",
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/",
//       instagram: "https://www.instagram.com/",
//     },
//   },
//   {
//     id: 3,
//     name: "نیلوفر احمدی",
//     experience: 6,
//     image: "/Rectangle 138 (4).png",
//     coursesCount: 10,
//     articlesCount: 16,
//     bio: "مدرس طراحی وب و تجربه کاربری",
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/",
//       instagram: "https://www.instagram.com/",
//     },
//   },
//   {
//     id: 4,
//     name: "مهدی اصغری",
//     experience: 10,
//     image: "/Rectangle 138 (3).png",
//     coursesCount: 24,
//     articlesCount: 20,
//     bio: "مدرس ارشد توسعه نرم‌افزار و React",
//     featured: true,
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/",
//       instagram: "https://www.instagram.com/",
//     },
//   },
// ];

// const INITIAL_VISIBLE_COUNT = 4;

// const sortOptions = [
//   { value: "experience", label: "با سابقه‌ترین" },
//   { value: "newest", label: "جدیدترین اساتید" },
//   { value: "name", label: "بر اساس نام" },
// ];

// function InstructorCard({ instructor, onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onClick(instructor)}
//       aria-label={`مشاهده مشخصات ${instructor.name}`}
//       className={`group block w-full min-w-0 overflow-hidden rounded-2xl text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087B77] ${
//         instructor.featured
//           ? "border border-gray-200 shadow-md"
//           : "border border-transparent"
//       }`}
//     >
//       <div className="relative mx-1 mt-1 overflow-hidden rounded-xl sm:mx-1.5 sm:mt-1.5">
//         <img
//           src={instructor.image}
//           alt=""
//           loading="lazy"
//           className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         {instructor.featured && (
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#003F3E]/90 to-transparent" />
//         )}
//       </div>

//       <div className="flex min-h-10 items-center justify-center px-1 py-2">
//         <h3 className="truncate text-center text-xs font-semibold text-[#064B4B] sm:text-sm">
//           {instructor.name}
//         </h3>
//       </div>
//     </button>
//   );
// }

// export default function Instructors() {
//   const [sortBy, setSortBy] = useState("experience");
//   const [visibleCount, setVisibleCount] = useState(
//     INITIAL_VISIBLE_COUNT
//   );
//   const [isSortOpen, setIsSortOpen] = useState(false);
//   const [selectedInstructor, setSelectedInstructor] = useState(null);

//   const handleCloseModal = useCallback(() => {
//     setSelectedInstructor(null);
//   }, []);

//   const instructors = useMemo(() => {
//     const sorted = [...instructorsData];

//     if (sortBy === "experience") {
//       sorted.sort((a, b) => b.experience - a.experience);
//     } else if (sortBy === "newest") {
//       sorted.sort((a, b) => b.id - a.id);
//     } else if (sortBy === "name") {
//       sorted.sort((a, b) => a.name.localeCompare(b.name, "fa"));
//     }

//     return sorted;
//   }, [sortBy]);

//   const visibleInstructors = instructors.slice(0, visibleCount);

//   const selectedOption =
//     sortOptions.find((option) => option.value === sortBy)?.label ??
//     "با سابقه‌ترین";

//   return (
//     <SectionReveal>
//       <section
//       dir="rtl"
//       aria-labelledby="instructors-title"
//       className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-[7.5%] lg:py-12"
//     >
//       <div className="mx-auto max-w-[1200px]">
//         <header className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-8">
//           <h2
//             id="instructors-title"
//             className="text-base font-bold text-[#075451] sm:text-lg"
//           >
//             اساتید ما
//           </h2>

//           <div className="relative">
//             <button
//               type="button"
//               onClick={() => setIsSortOpen((prev) => !prev)}
//               aria-expanded={isSortOpen}
//               aria-haspopup="listbox"
//               className="flex min-h-9 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm transition-colors hover:border-[#0B7773] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7773] sm:gap-3 sm:px-4"
//             >
//               <ChevronDown
//                 size={15}
//                 className={`shrink-0 transition-transform ${
//                   isSortOpen ? "rotate-180" : ""
//                 }`}
//               />

//               <span>{selectedOption}</span>

//               <ListFilter size={16} className="text-[#087B77]" />
//             </button>

//             {isSortOpen && (
//               <div
//                 role="listbox"
//                 aria-label="مرتب‌سازی اساتید"
//                 className="absolute left-0 top-full z-20 mt-2 min-w-40 overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-lg"
//               >
//                 {sortOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     type="button"
//                     role="option"
//                     aria-selected={sortBy === option.value}
//                     onClick={() => {
//                       setSortBy(option.value);
//                       setIsSortOpen(false);
//                     }}
//                     className={`block w-full rounded-lg px-3 py-2.5 text-right text-xs transition-colors ${
//                       sortBy === option.value
//                         ? "bg-[#EAF5F4] font-semibold text-[#075451]"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {option.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </header>

//         <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-7 md:grid-cols-4 md:gap-x-7 lg:gap-x-10 lg:gap-y-7">
//           {visibleInstructors.map((instructor) => (
//             <InstructorCard
//               key={instructor.id}
//               instructor={instructor}
//               onClick={setSelectedInstructor}
//             />
//           ))}
//         </div>

//         {visibleCount < instructors.length ? (
//           <div className="mt-7 flex justify-center sm:mt-8">
//             <button
//               type="button"
//               onClick={() =>
//                 setVisibleCount((prev) =>
//                   Math.min(prev + 4, instructors.length)
//                 )
//               }
//               className="group flex flex-col items-center gap-1.5 py-1 text-sm text-gray-500 transition-colors hover:text-[#075451]"
//             >
//               <span>مشاهده بیشتر</span>
//               <ChevronDown
//                 size={17}
//                 className="transition-transform group-hover:translate-y-0.5"
//               />
//             </button>
//           </div>
//         ) : instructors.length > INITIAL_VISIBLE_COUNT ? (
//           <div className="mt-7 flex justify-center sm:mt-8">
//             <button
//               type="button"
//               onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
//               className="group flex flex-col items-center gap-1.5 py-1 text-sm text-gray-500 transition-colors hover:text-[#075451]"
//             >
//               <span>مشاهده کمتر</span>
//               <ChevronUp size={17} />
//             </button>
//           </div>
//         ) : null}

//         <InstructorModal
//           instructor={selectedInstructor}
//           onClose={handleCloseModal}
//         />
//       </div>
//     </section>
//     </SectionReveal>
     
   
//   );
// }



import { useCallback, useMemo, useState } from "react";
import {
  ListFilter,
  ChevronDown,
  ChevronUp,
  ArrowUpLeft,
  GraduationCap,
  BookOpen,
  FileText,
  Sparkles,
  UsersRound,
} from "lucide-react";

import InstructorModal from "../../Teachers/InstructorModal/InstructorModal";
import SectionReveal from "../../Animations/SectionReveal";

const instructorsData = [
  {
    id: 1,
    name: "یلدا معصومی",
    experience: 5,
    image: "/Rectangle 138 (2).png",
    coursesCount: 12,
    articlesCount: 8,
    bio: "مدرس طراحی رابط کاربری و توسعه فرانت‌اند",
    socialLinks: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 2,
    name: "حامد نظری",
    experience: 8,
    image: "/Rectangle 138 (5).png",
    coursesCount: 18,
    articlesCount: 14,
    bio: "مدرس برنامه‌نویسی و توسعه وب",
    socialLinks: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 3,
    name: "نیلوفر احمدی",
    experience: 6,
    image: "/Rectangle 138 (4).png",
    coursesCount: 10,
    articlesCount: 16,
    bio: "مدرس طراحی وب و تجربه کاربری",
    socialLinks: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 4,
    name: "مهدی اصغری",
    experience: 10,
    image: "/Rectangle 138 (3).png",
    coursesCount: 24,
    articlesCount: 20,
    bio: "مدرس ارشد توسعه نرم‌افزار و React",
    featured: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const INITIAL_VISIBLE_COUNT = 4;

const sortOptions = [
  { value: "experience", label: "با سابقه‌ترین" },
  { value: "newest", label: "جدیدترین اساتید" },
  { value: "name", label: "بر اساس نام" },
];

function InstructorCard({ instructor, onClick }) {
  return (
    <article
      className={`
        group relative min-w-0 rounded-[22px] border bg-white p-2
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:border-teal-200
        hover:shadow-[0_18px_40px_rgba(15,118,110,0.11)]
        sm:rounded-[26px] sm:p-2.5
        ${
          instructor.featured
            ? "border-teal-200 shadow-[0_8px_28px_rgba(15,118,110,0.08)]"
            : "border-gray-100 shadow-[0_5px_22px_rgba(15,23,42,0.035)]"
        }
      `}
    >
      {/* تصویر استاد */}
      <button
        type="button"
        onClick={() => onClick(instructor)}
        aria-label={`مشاهده مشخصات ${instructor.name}`}
        className="
          relative block w-full overflow-hidden rounded-[17px]
          bg-gradient-to-br from-teal-50 to-gray-100
          text-right focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-teal-600
          sm:rounded-[20px]
        "
      >
        <img
          src={instructor.image}
          alt={`تصویر ${instructor.name}`}
          loading="lazy"
          className="
            aspect-[4/4.4] w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* گرادیان روی پایین تصویر */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 bottom-0 h-1/3
            bg-gradient-to-t from-[#092F2D]/30 to-transparent
            opacity-60 transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {instructor.featured && (
          <span
            className="
              absolute right-2.5 top-2.5 inline-flex items-center
              gap-1.5 rounded-full border border-white/70
              bg-white/90 px-2.5 py-1.5
              text-[10px] font-bold text-teal-800
              shadow-sm backdrop-blur-md sm:right-3 sm:top-3
              sm:text-[11px]
            "
          >
            <Sparkles size={12} className="text-amber-500" />
            استاد منتخب
          </span>
        )}

        {/* سابقه تدریس */}
        <span
          className="
            absolute bottom-2.5 right-2.5 inline-flex items-center
            gap-1.5 rounded-full border border-white/50
            bg-white/90 px-2.5 py-1.5
            text-[10px] font-medium text-gray-700
            shadow-sm backdrop-blur-md sm:bottom-3 sm:right-3
          "
        >
          <GraduationCap size={13} className="text-teal-700" />
          {instructor.experience} سال تجربه
        </span>
      </button>

      {/* اطلاعات استاد */}
      <div className="px-1 pb-1 pt-3 sm:px-1.5 sm:pt-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3
              className="
                truncate text-sm font-extrabold leading-6
                text-gray-900 transition-colors duration-300
                group-hover:text-teal-800 sm:text-base
              "
            >
              {instructor.name}
            </h3>

            <p className="mt-1 min-h-10 text-[11px] leading-5 text-gray-500 sm:text-xs sm:leading-6">
              {instructor.bio}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="
              mt-0.5 flex h-8 w-8 shrink-0 items-center
              justify-center rounded-xl bg-teal-50
              text-teal-700 transition-all duration-300
              group-hover:bg-teal-600 group-hover:text-white
              sm:h-9 sm:w-9
            "
          >
            <GraduationCap size={17} strokeWidth={1.8} />
          </span>
        </div>

        {/* آمار آموزشی */}
        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
          <div className="flex min-w-0 items-center gap-1.5 text-gray-500">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-teal-700">
              <BookOpen size={14} />
            </span>

            <span className="min-w-0">
              <span className="block text-xs font-bold text-gray-800">
                {instructor.coursesCount}
              </span>
              <span className="mt-0.5 block text-[10px] text-gray-400">
                دوره آموزشی
              </span>
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-1.5 text-gray-500">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-teal-700">
              <FileText size={14} />
            </span>

            <span className="min-w-0">
              <span className="block text-xs font-bold text-gray-800">
                {instructor.articlesCount}
              </span>
              <span className="mt-0.5 block text-[10px] text-gray-400">
                مقاله آموزشی
              </span>
            </span>
          </div>
        </div>

        {/* مشاهده پروفایل */}
        <button
          type="button"
          onClick={() => onClick(instructor)}
          className="
            mt-3 flex w-full items-center justify-between
            rounded-xl border border-teal-100
            bg-teal-50/60 px-3 py-2.5
            text-xs font-semibold text-teal-800
            transition-all duration-300
            hover:border-teal-600 hover:bg-teal-600
            hover:text-white
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-teal-600
          "
        >
          <span>مشاهده پروفایل</span>
          <ArrowUpLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </article>
  );
}

export default function Instructors() {
  const [sortBy, setSortBy] = useState("experience");
  const [visibleCount, setVisibleCount] = useState(
    INITIAL_VISIBLE_COUNT
  );
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleCloseModal = useCallback(() => {
    setSelectedInstructor(null);
  }, []);

  const instructors = useMemo(() => {
    const sorted = [...instructorsData];

    if (sortBy === "experience") {
      sorted.sort((a, b) => b.experience - a.experience);
    } else if (sortBy === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, "fa"));
    }

    return sorted;
  }, [sortBy]);

  const visibleInstructors = instructors.slice(0, visibleCount);

  const selectedOption =
    sortOptions.find((option) => option.value === sortBy)?.label ??
    "با سابقه‌ترین";

  return (
    <SectionReveal>
      <section
        dir="rtl"
        aria-labelledby="instructors-title"
        className="
          relative w-full overflow-hidden bg-white
          px-4 py-10 font-yekan
          sm:px-6 sm:py-14
          lg:px-[7.5%] lg:py-16
        "
      >
        {/* هاله‌ی پس‌زمینه */}
     
{/* پس‌زمینه شناور و تزئینی */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 overflow-hidden"
>
  {/* هاله فیروزه‌ای سمت چپ */}
  <div
    className="
      instructor-orb instructor-orb-one
      absolute -left-32 top-16
      h-72 w-72 rounded-full
      bg-teal-200/35 blur-3xl
    "
  />

  {/* هاله سبز نعنایی سمت راست */}
  <div
    className="
      instructor-orb instructor-orb-two
      absolute -right-28 top-[38%]
      h-64 w-64 rounded-full
      bg-emerald-200/30 blur-3xl
    "
  />

  {/* حباب شیشه‌ای بالا */}
  <div
    className="
      instructor-glass instructor-glass-one
      absolute right-[12%] top-10
      h-16 w-16 rounded-full
      border border-teal-200/60
      bg-gradient-to-br from-white/80 to-teal-100/30
      shadow-[inset_0_0_18px_rgba(255,255,255,0.8)]
      backdrop-blur-sm
    "
  />

  {/* حباب شیشه‌ای پایین */}
  <div
    className="
      instructor-glass instructor-glass-two
      absolute bottom-16 left-[22%]
      h-11 w-11 rounded-full
      border border-emerald-200/60
      bg-white/50
      shadow-[0_8px_25px_rgba(13,148,136,0.08)]
      backdrop-blur-md
    "
  />

  {/* نقطه‌های هندسی ظریف */}
  <div
    className="
      absolute right-[7%] top-[44%]
      h-2 w-2 rounded-full bg-teal-400/40
      shadow-[0_0_20px_rgba(45,212,191,0.35)]
    "
  />

  <div
    className="
      absolute bottom-24 right-[32%]
      h-1.5 w-1.5 rounded-full bg-emerald-400/50
    "
  />
</div>


        <div className="relative mx-auto max-w-[1200px]">
          {/* عنوان و مرتب‌سازی */}
          <header className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
            <div>
              <div className="mb-2.5 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-teal-500" />
                <span className="text-[11px] font-semibold text-teal-700 sm:text-xs">
                  همراهان مسیر یادگیری
                </span>
              </div>

              <h2
                id="instructors-title"
                className="
                  text-xl font-extrabold tracking-tight text-gray-900
                  sm:text-2xl lg:text-[28px]
                "
              >
                با اساتید ما آشنا شو
                <span className="mr-2 text-teal-600">.</span>
              </h2>

              <p className="mt-2 max-w-lg text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                متخصصانی که در مسیر یادگیری و رشد مهارت‌ها همراهت هستند.
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                aria-expanded={isSortOpen}
                aria-haspopup="listbox"
                className="
                  flex min-h-10 items-center gap-2.5
                  rounded-xl border border-gray-200
                  bg-white px-3.5 py-2.5 text-xs
                  text-gray-600 shadow-sm
                  transition-all duration-200
                  hover:border-teal-300 hover:shadow-md
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-teal-600
                  sm:gap-3 sm:px-4
                "
              >
                <ListFilter size={16} className="text-teal-700" />
                <span>{selectedOption}</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSortOpen && (
                <>
                  <button
                    type="button"
                    aria-label="بستن فهرست مرتب‌سازی"
                    className="fixed inset-0 z-20 cursor-default"
                    onClick={() => setIsSortOpen(false)}
                  />

                  <div
                    role="listbox"
                    aria-label="مرتب‌سازی اساتید"
                    className="
                      absolute left-0 top-full z-30 mt-2
                      min-w-44 overflow-hidden rounded-2xl
                      border border-gray-100 bg-white p-1.5
                      shadow-[0_15px_45px_rgba(15,23,42,0.12)]
                    "
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        role="option"
                        aria-selected={sortBy === option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`
                          flex w-full items-center justify-between
                          rounded-xl px-3 py-3 text-right
                          text-xs transition-colors duration-200
                          ${
                            sortBy === option.value
                              ? "bg-teal-50 font-bold text-teal-800"
                              : "text-gray-600 hover:bg-gray-50"
                          }
                        `}
                      >
                        <span>{option.label}</span>
                        {sortBy === option.value && (
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* تعداد نتایج */}
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <UsersRound size={15} className="text-teal-700" />
              <span>
                {instructors.length} استاد در این مجموعه
              </span>
            </div>

            <span className="text-[10px] text-gray-400 sm:text-xs">
              نمایش {visibleInstructors.length} از {instructors.length}
            </span>
          </div>

          {/* گرید اساتید */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {visibleInstructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                onClick={setSelectedInstructor}
              />
            ))}
          </div>

          {/* نمایش بیشتر / کمتر */}
          {instructors.length > INITIAL_VISIBLE_COUNT && (
            <div className="mt-9 flex justify-center sm:mt-11">
              {visibleCount < instructors.length ? (
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + 4, instructors.length)
                    )
                  }
                  className="
                    group inline-flex items-center gap-2.5
                    rounded-xl border border-gray-200
                    bg-white px-5 py-3 text-xs font-semibold
                    text-gray-600 shadow-sm
                    transition-all duration-300
                    hover:border-teal-300 hover:bg-teal-50
                    hover:text-teal-800 hover:shadow-md
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-teal-600
                  "
                >
                  <span>مشاهده اساتید بیشتر</span>
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                  className="
                    group inline-flex items-center gap-2.5
                    rounded-xl border border-gray-200
                    bg-white px-5 py-3 text-xs font-semibold
                    text-gray-600 shadow-sm
                    transition-all duration-300
                    hover:border-teal-300 hover:bg-teal-50
                    hover:text-teal-800
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-teal-600
                  "
                >
                  <span>نمایش کمتر</span>
                  <ChevronUp
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </button>
              )}
            </div>
          )}

          <InstructorModal
            instructor={selectedInstructor}
            onClose={handleCloseModal}
          />
        </div>
      </section>
    </SectionReveal>
  );
}
