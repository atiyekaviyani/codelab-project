
// import {
//   ArrowLeft,
//   BookOpen,
//   Headphones,
//   Newspaper,
//   Users,
// } from "lucide-react";

// function SidebarSection({ title, icon: Icon, children }) {
//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
//       <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4">
//         <Icon size={19} className="text-slate-600" aria-hidden="true" />

//         <h3 className="font-bold text-slate-900">{title}</h3>
//       </div>

//       {children}
//     </section>
//   );
// }

// export default function ArticlesSidebar({
//   recommendedArticles = [],
//   podcasts = [],
//   popularCourses = [],
// }) {
//   return (
//     <aside
//       aria-label="مطالب پیشنهادی و محتوای محبوب"
//       className="grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-1"
//     >
//       <SidebarSection title="مطالب پیشنهادی" icon={Newspaper}>
//         <div className="space-y-4">
//           {recommendedArticles.map((article) => (
//             <a
//               key={article.id}
//               href={`/articles/${article.id}`}
//               className="group flex min-w-0 items-start gap-3"
//             >
//               <img
//                 src={article.image}
//                 alt=""
//                 loading="lazy"
//                 className="size-[68px] shrink-0 rounded-xl object-cover"
//               />

//               <div className="min-w-0">
//                 <span className="mb-1 block text-xs text-slate-400">
//                   {article.category}
//                 </span>

//                 <h4 className="line-clamp-2 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-slate-500">
//                   {article.title}
//                 </h4>
//               </div>
//             </a>
//           ))}
//         </div>
//       </SidebarSection>

//       <SidebarSection title="پادکست‌ها" icon={Headphones}>
//         <div className="space-y-4">
//           {podcasts.map((podcast) => (
//             <a
//               key={podcast.id}
//               href={`/podcasts/${podcast.id}`}
//               className="group flex items-start gap-3"
//             >
//               <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
//                 <Headphones size={19} aria-hidden="true" />
//               </div>

//               <div className="min-w-0 flex-1">
//                 <h4 className="text-sm font-semibold leading-6 text-slate-800 group-hover:text-slate-500">
//                   {podcast.title}
//                 </h4>

//                 <span className="mt-1 block text-xs text-slate-400">
//                   {podcast.duration}
//                 </span>
//               </div>
//             </a>
//           ))}
//         </div>
//       </SidebarSection>

//       <SidebarSection title="دوره‌های محبوب" icon={BookOpen}>
//         <div className="space-y-4">
//           {popularCourses.map((course) => (
//             <a
//               key={course.id}
//               href={`/courses/${course.id}`}
//               className="group flex items-start gap-3"
//             >
//               <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
//                 <Users size={19} aria-hidden="true" />
//               </div>

//               <div className="min-w-0 flex-1">
//                 <h4 className="text-sm font-semibold leading-6 text-slate-800 group-hover:text-slate-500">
//                   {course.title}
//                 </h4>

//                 <span className="mt-1 block text-xs text-slate-400">
//                   {course.students}
//                 </span>
//               </div>
//             </a>
//           ))}
//         </div>

//         <a
//           href="/courses"
//           className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
//         >
//           مشاهده همه دوره‌ها
//           <ArrowLeft size={17} aria-hidden="true" />
//         </a>
//       </SidebarSection>
//     </aside>
//   );
// }


import {
  ArrowLeft,
  BookOpen,
  Headphones,
  Newspaper,
  Users,
  Sparkles,
  Clock3,
  GraduationCap,
} from "lucide-react";

function SidebarSection({
  title,
  icon: Icon,
  children,
  accent = "mint",
  count,
}) {
  const accents = {
    mint: {
      icon: "bg-[#DDF8F0] text-[#19B69B]",
      line: "from-[#26C5AC] to-[#BDEFE2]",
    },
    orange: {
      icon: "bg-[#FFF0D8] text-[#E99118]",
      line: "from-[#F4AD43] to-[#FFE8C1]",
    },
    violet: {
      icon: "bg-[#EEE8FF] text-[#8B6AF2]",
      line: "from-[#9A7CF4] to-[#E3D9FF]",
    },
  };

  const colors = accents[accent] ?? accents.mint;

  return (
    <section
      className="
        relative min-w-0 overflow-hidden rounded-[24px]
        border border-[#E7F0ED] bg-white p-4
        shadow-[0_5px_24px_rgba(34,91,79,0.035)]
        transition-all duration-300
        hover:border-[#D5EDE6]
        sm:rounded-[26px] sm:p-5
      "
    >
      <div
        aria-hidden="true"
        className={`absolute right-0 top-7 h-9 w-[3px] rounded-l-full bg-gradient-to-b ${colors.line}`}
      />

      <div className="mb-5 flex items-center justify-between gap-2 border-b border-[#EEF3F1] pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-[14px] ${colors.icon}`}
          >
            <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-extrabold text-[#263D45] sm:text-[15px]">
              {title}
            </h3>

            <p className="mt-1 text-[10px] text-[#91A09F]">
              محتوای منتخب CodeLab
            </p>
          </div>
        </div>

        {typeof count === "number" && (
          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-[#F0FAF7] px-2 text-[11px] font-bold text-[#299D8C]">
            {count}
          </span>
        )}
      </div>

      {children}
    </section>
  );
}

function EmptySidebar({ children }) {
  return (
    <p className="rounded-xl bg-[#F8FBFA] px-3 py-4 text-center text-xs leading-6 text-[#8A9A99]">
      {children}
    </p>
  );
}

function SidebarArticle({ article }) {
  return (
    <a
      href={`/articles/${article.id}`}
      className="
        group flex min-w-0 items-center gap-3 rounded-2xl
        transition-colors duration-200
        hover:bg-[#F6FBF9]
      "
    >
      <div className="relative size-[68px] shrink-0 overflow-hidden rounded-[15px] bg-[#EDF7F3]">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        <div className="pointer-events-none absolute inset-0 rounded-[15px] ring-1 ring-inset ring-black/[0.04]" />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <span className="mb-1.5 block truncate text-[10px] font-medium text-[#27A995]">
          {article.category}
        </span>

        <h4 className="line-clamp-2 text-[12px] font-bold leading-[1.9] text-[#35484D] transition-colors group-hover:text-[#159F8B] sm:text-[13px]">
          {article.title}
        </h4>
      </div>

      <ArrowLeft
        size={15}
        className="mr-auto shrink-0 text-[#C0D0CC] transition-all duration-200 group-hover:-translate-x-1 group-hover:text-[#24B8A2]"
        aria-hidden="true"
      />
    </a>
  );
}

function SidebarPodcast({ podcast }) {
  return (
    <a
      href={`/podcasts/${podcast.id}`}
      className="
        group flex min-w-0 items-center gap-3 rounded-2xl
        transition-colors duration-200 hover:bg-[#FFFAF2]
      "
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-[15px] bg-[#FFF1D9] text-[#E89A26] transition-transform duration-300 group-hover:scale-105">
        <Headphones size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <h4 className="line-clamp-2 text-[12px] font-bold leading-6 text-[#35484D] transition-colors group-hover:text-[#D88816] sm:text-[13px]">
          {podcast.title}
        </h4>

        <span className="mt-1 flex items-center gap-1.5 text-[10px] text-[#91A09F]">
          <Clock3 size={12} aria-hidden="true" />
          {podcast.duration}
        </span>
      </div>

      <ArrowLeft
        size={15}
        className="shrink-0 text-[#D6C9B3] transition-transform duration-200 group-hover:-translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

function SidebarCourse({ course }) {
  return (
    <a
      href={`/courses/${course.id}`}
      className="
        group flex min-w-0 items-center gap-3 rounded-2xl
        transition-colors duration-200 hover:bg-[#F6FBF9]
      "
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-[15px] bg-[#E5F5FF] text-[#2696D0] transition-transform duration-300 group-hover:scale-105">
        <GraduationCap size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <h4 className="line-clamp-2 text-[12px] font-bold leading-6 text-[#35484D] transition-colors group-hover:text-[#208BC0] sm:text-[13px]">
          {course.title}
        </h4>

        <span className="mt-1 flex items-center gap-1.5 text-[10px] text-[#91A09F]">
          <Users size={12} aria-hidden="true" />
          {course.students}
        </span>
      </div>

      <ArrowLeft
        size={15}
        className="shrink-0 text-[#C1D7E1] transition-transform duration-200 group-hover:-translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export default function ArticlesSidebar({
  recommendedArticles = [],
  podcasts = [],
  popularCourses = [],
}) {
  return (
    <aside
      aria-label="مطالب پیشنهادی و محتوای محبوب"
      className="
        grid min-w-0 grid-cols-1 items-start gap-5
        sm:grid-cols-2
        lg:grid-cols-1 lg:gap-5
      "
    >
      <SidebarSection
        title="مطالب پیشنهادی"
        icon={Newspaper}
        accent="mint"
        count={recommendedArticles.length}
      >
        {recommendedArticles.length > 0 ? (
          <div className="space-y-4">
            {recommendedArticles.map((article) => (
              <SidebarArticle key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <EmptySidebar>
            در حال حاضر مطلب پیشنهادی برای نمایش وجود ندارد.
          </EmptySidebar>
        )}
      </SidebarSection>

      <SidebarSection
        title="پادکست‌ها"
        icon={Headphones}
        accent="orange"
        count={podcasts.length}
      >
        {podcasts.length > 0 ? (
          <div className="space-y-4">
            {podcasts.map((podcast) => (
              <SidebarPodcast key={podcast.id} podcast={podcast} />
            ))}
          </div>
        ) : (
          <EmptySidebar>
            به‌زودی پادکست‌های جذاب اینجا قرار می‌گیرند.
          </EmptySidebar>
        )}
      </SidebarSection>

      <SidebarSection
        title="دوره‌های محبوب"
        icon={BookOpen}
        accent="violet"
        count={popularCourses.length}
      >
        {popularCourses.length > 0 ? (
          <div className="space-y-4">
            {popularCourses.map((course) => (
              <SidebarCourse key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptySidebar>
            هنوز دوره‌ای برای نمایش انتخاب نشده است.
          </EmptySidebar>
        )}

        <a
          href="/courses"
          className="
            group mt-5 flex items-center justify-between gap-2
            rounded-xl border border-[#E5F1ED] bg-[#F5FBF8]
            px-3.5 py-3 text-xs font-bold text-[#329788]
            transition-all duration-300
            hover:border-[#CDECE2] hover:bg-[#EAF8F3]
          "
        >
          <span className="flex items-center gap-2">
            <Sparkles size={15} aria-hidden="true" />
            مشاهده همه دوره‌ها
          </span>

          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </a>
      </SidebarSection>
    </aside>
  );
}
