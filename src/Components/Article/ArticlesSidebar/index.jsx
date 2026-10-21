
import {
  ArrowLeft,
  BookOpen,
  Headphones,
  Newspaper,
  Users,
} from "lucide-react";

function SidebarSection({ title, icon: Icon, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4">
        <Icon size={19} className="text-slate-600" aria-hidden="true" />

        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>

      {children}
    </section>
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
      className="grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-1"
    >
      <SidebarSection title="مطالب پیشنهادی" icon={Newspaper}>
        <div className="space-y-4">
          {recommendedArticles.map((article) => (
            <a
              key={article.id}
              href={`/articles/${article.id}`}
              className="group flex min-w-0 items-start gap-3"
            >
              <img
                src={article.image}
                alt=""
                loading="lazy"
                className="size-[68px] shrink-0 rounded-xl object-cover"
              />

              <div className="min-w-0">
                <span className="mb-1 block text-xs text-slate-400">
                  {article.category}
                </span>

                <h4 className="line-clamp-2 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-slate-500">
                  {article.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="پادکست‌ها" icon={Headphones}>
        <div className="space-y-4">
          {podcasts.map((podcast) => (
            <a
              key={podcast.id}
              href={`/podcasts/${podcast.id}`}
              className="group flex items-start gap-3"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Headphones size={19} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold leading-6 text-slate-800 group-hover:text-slate-500">
                  {podcast.title}
                </h4>

                <span className="mt-1 block text-xs text-slate-400">
                  {podcast.duration}
                </span>
              </div>
            </a>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="دوره‌های محبوب" icon={BookOpen}>
        <div className="space-y-4">
          {popularCourses.map((course) => (
            <a
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex items-start gap-3"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Users size={19} aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold leading-6 text-slate-800 group-hover:text-slate-500">
                  {course.title}
                </h4>

                <span className="mt-1 block text-xs text-slate-400">
                  {course.students}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="/courses"
          className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
        >
          مشاهده همه دوره‌ها
          <ArrowLeft size={17} aria-hidden="true" />
        </a>
      </SidebarSection>
    </aside>
  );
}
