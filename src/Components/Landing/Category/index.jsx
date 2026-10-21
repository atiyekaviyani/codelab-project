import { Monitor, ChartPie, Gamepad2, ShieldCheck } from "lucide-react";

import { NavLink } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "طراحی صفحات وب",
    icon: Monitor,
    href: "/",
  },
  {
    id: 2,
    title: "تحلیل داده",
    icon: ChartPie,
    href: "/",
  },
  {
    id: 3,
    title: "بازی سازی",
    icon: Gamepad2,
    href: "/",
  },
  {
    id: 4,
    title: "امنیت شبکه",
    icon: ShieldCheck,
    href: "/",
  },
];

function CategoryCard({ title, icon: Icon, href }) {
  return (
    <NavLink
      to={href}
      className="group relative flex aspect-square w-full max-w-[150px]
        items-center justify-center rounded-[18px] bg-white
        shadow-[0_3px_8px_rgba(0,0,0,0.23)]
        transition duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-[#00c9c5]
        sm:max-w-[165px] lg:max-w-[175px]"
    >
      <div
        className="absolute inset-0 rounded-[18px] border border-[#ededed]
          transition-colors group-hover:border-[#00c9c5]"
      />

      <div
        className="relative z-10 flex w-full flex-col items-center
          justify-center gap-4 px-2 text-center"
      >
        <h3
          className="min-h-[42px] max-w-[125px] text-sm font-bold
            leading-6 text-[#00615f] transition-colors
            group-hover:text-[#00aaa6] sm:text-base"
        >
          {title}
        </h3>

        <Icon
          size={42}
          strokeWidth={1.9}
          className="text-[#005956] transition duration-300
            group-hover:scale-110 group-hover:text-[#00aaa6]"
        />
      </div>
    </NavLink>
  );
}

export default function CategorySection() {
  return (
    <section
      dir="rtl"
      id="categories"
      className="relative isolate overflow-hidden bg-[#f8f8f8] py-10 sm:py-12"
    >
      <header className="relative z-10 mx-auto mb-8 px-4 text-center sm:mb-12">
        <h2
          className="flex items-center justify-center gap-2 text-xl
          font-extrabold text-[#171717] sm:text-2xl"
        >
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00c9c5]" />
          <span>محبوب ترین دسته بندی ها</span>
        </h2>

        <p className="mt-3 text-xs leading-6 text-[#aaa] sm:text-sm">
          گستره وسیعی از محبوب ترین دوره ها
        </p>
      </header>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[125px] bottom-[30px]
          bg-[#a9e9e7]"
        style={{
          clipPath:
            "polygon(0 0, 45% 4%, 50% 0, 55% 4%, 100% 0, 100% 100%, 55% 96%, 50% 100%, 45% 96%, 0 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[38%] top-[190px]
          h-52 w-52 rounded-full border-[5px] border-[#8ddbd8]/20
          blur-[2px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[61%] top-[350px]
          h-12 w-12 rounded-full border-[5px] border-[#8ddbd8]/30
          blur-[1px]"
      />

      <div
        className="relative z-10 mx-auto flex min-h-[250px] max-w-[1150px]
          flex-wrap items-center justify-center gap-x-6 gap-y-8
          px-5 py-12 sm:gap-x-8 sm:py-16 lg:flex-nowrap lg:gap-x-10
          lg:px-8"
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
