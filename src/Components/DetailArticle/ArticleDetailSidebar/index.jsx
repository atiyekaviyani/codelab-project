
import { BookOpen, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";

function SidebarSection({ title, icon: Icon, children }) {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <h2 className="flex items-center gap-2 border-b border-gray-100 px-3 py-3 text-sm font-bold text-gray-700">
        <Icon size={16} className="text-teal-600" />
        {title}
      </h2>

      <div className="space-y-2 p-3">{children}</div>
    </section>
  );
}

function SidebarItem({ item, showPrice = false }) {
  return (
    <NavLink to={"#"}
     
      onClick={(event) => event.preventDefault()}
      className="flex min-w-0 items-center gap-3 rounded-lg  p-2 transition hover:border-teal-200 hover:bg-gray-50"
    >
      <img
        src={item.image}
        alt=""
        className="h-14 w-16 shrink-0 rounded-md bg-gray-100 object-cover"
        loading="lazy"
      />

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-xs font-medium leading-6 text-gray-700">
          {item.title}
        </h3>

        {showPrice ? (
          <p className="mt-1 text-[10px] text-teal-700">
            {item.price}
          </p>
        ) : (
          <span className="mt-1 block text-[10px] text-teal-600">
            {item.category}
          </span>
        )}
      </div>
    </NavLink>
  );
}

function ArticleSidebar({
  articles = [],
  courses = []
}) {
  return (
    <aside className="space-y-4" dir="rtl">
      <div className="overflow-hidden rounded-xl">
        <img
          src="Rectangle 100 (1).png"
          alt="مسیر یادگیری در CodeLab"
          className="block h-auto w-full object-cover"
        />
      </div>

      <SidebarSection title="دوره های مرتبط" icon={BookOpen}>
        {articles.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </SidebarSection>

      <SidebarSection title="مطالب پیشنهادی" icon={GraduationCap}>
        {courses.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            showPrice
          />
        ))}
      </SidebarSection>
    </aside>
  );
}

export default ArticleSidebar;
