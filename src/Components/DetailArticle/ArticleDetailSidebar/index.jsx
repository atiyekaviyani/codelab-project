import { BookOpen, GraduationCap, ArrowUpLeft, Sparkles } from "lucide-react";

function SidebarSection({ title, icon: Icon, children, accent = "teal" }) {
  const accentStyles = {
    teal: {
      icon: "bg-teal-50 text-teal-600",
      line: "bg-teal-500",
      badge: "bg-teal-50 text-teal-700",
    },
    orange: {
      icon: "bg-orange-50 text-orange-600",
      line: "bg-orange-500",
      badge: "bg-orange-50 text-orange-700",
    },
  };

  const styles = accentStyles[accent] || accentStyles.teal;

  return (
    <section className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-teal-200/80 hover:shadow-[0_10px_30px_rgba(13,148,136,0.07)]">
      <div className="relative flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
          >
            <Icon size={19} strokeWidth={1.8} />
          </span>

          <div className="min-w-0">
            <h2 className="text-sm font-extrabold text-gray-800">{title}</h2>
            <p className="mt-1 text-[10px] font-medium text-gray-400">
              محتوای منتخب برای یادگیری بیشتر
            </p>
          </div>
        </div>

        <Sparkles
          size={16}
          className="shrink-0 text-gray-300 transition-colors duration-300 group-hover:text-teal-500"
        />

        <span
          className={`absolute bottom-0 right-4 h-[2px] w-10 rounded-full ${styles.line}`}
        />
      </div>

      <div className="space-y-1.5 p-3">{children}</div>
    </section>
  );
}

function SidebarItem({ item, showPrice = false }) {
  return (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      className="group/item flex min-w-0 items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-300 hover:border-teal-100 hover:bg-teal-50/40"
    >
      <div className="relative h-[68px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={item.image}
          alt={item.title || ""}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-gray-950/15 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-xs font-bold leading-6 text-gray-700 transition-colors duration-300 group-hover/item:text-teal-700">
          {item.title}
        </h3>

        {showPrice ? (
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <span className="truncate text-[11px] font-bold text-teal-700">
              {item.price}
            </span>
            <ArrowUpLeft
              size={14}
              className="shrink-0 text-gray-300 transition-all duration-300 group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-teal-600"
            />
          </div>
        ) : (
          <span className="mt-1.5 inline-block max-w-full truncate rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-500 transition-colors group-hover/item:bg-teal-100/70 group-hover/item:text-teal-700">
            {item.category}
          </span>
        )}
      </div>
    </a>
  );
}

function ArticleSidebar({ articles = [], courses = [] }) {
  return (
    <aside className="space-y-5" dir="rtl">
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-gray-50 shadow-sm">
        <img
          src="/img article.png"
          alt="مسیر یادگیری در CodeLab"
          className="block h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/10 via-transparent to-transparent" />
      </div>

      <SidebarSection title="دوره‌های مرتبط" icon={BookOpen} accent="teal">
        {articles.length > 0 ? (
          articles.map((item) => <SidebarItem key={item.id} item={item} />)
        ) : (
          <p className="px-2 py-5 text-center text-xs leading-6 text-gray-400">
            هنوز محتوای مرتبطی برای نمایش وجود ندارد.
          </p>
        )}
      </SidebarSection>

      <SidebarSection
        title="مطالب پیشنهادی"
        icon={GraduationCap}
        accent="orange"
      >
        {courses.length > 0 ? (
          courses.map((item) => (
            <SidebarItem key={item.id} item={item} showPrice />
          ))
        ) : (
          <p className="px-2 py-5 text-center text-xs leading-6 text-gray-400">
            در حال حاضر پیشنهادی برای نمایش نداریم.
          </p>
        )}
      </SidebarSection>
    </aside>
  );
}

export default ArticleSidebar;
