// import { Monitor, ChartPie, Gamepad2, ShieldCheck } from "lucide-react";

// import { NavLink } from "react-router-dom";

// const categories = [
//   {
//     id: 1,
//     title: "طراحی صفحات وب",
//     icon: Monitor,
//     href: "/",
//   },
//   {
//     id: 2,
//     title: "تحلیل داده",
//     icon: ChartPie,
//     href: "/",
//   },
//   {
//     id: 3,
//     title: "بازی سازی",
//     icon: Gamepad2,
//     href: "/",
//   },
//   {
//     id: 4,
//     title: "امنیت شبکه",
//     icon: ShieldCheck,
//     href: "/",
//   },
// ];

// function CategoryCard({ title, icon: Icon, href }) {
//   return (
//     <NavLink
//       to={href}
//       className="group relative flex aspect-square w-full max-w-[150px]
//         items-center justify-center rounded-[18px] bg-white
//         shadow-[0_3px_8px_rgba(0,0,0,0.23)]
//         transition duration-300 ease-out
//         hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]
//         focus-visible:outline focus-visible:outline-2
//         focus-visible:outline-offset-4 focus-visible:outline-[#00c9c5]
//         sm:max-w-[165px] lg:max-w-[175px]"
//     >
//       <div
//         className="absolute inset-0 rounded-[18px] border border-[#ededed]
//           transition-colors group-hover:border-[#00c9c5]"
//       />

//       <div
//         className="relative z-10 flex w-full flex-col items-center
//           justify-center gap-4 px-2 text-center"
//       >
//         <h3
//           className="min-h-[42px] max-w-[125px] text-sm font-bold
//             leading-6 text-[#00615f] transition-colors
//             group-hover:text-[#00aaa6] sm:text-base"
//         >
//           {title}
//         </h3>

//         <Icon
//           size={42}
//           strokeWidth={1.9}
//           className="text-[#005956] transition duration-300
//             group-hover:scale-110 group-hover:text-[#00aaa6]"
//         />
//       </div>
//     </NavLink>
//   );
// }

// export default function CategorySection() {
//   return (
//     <section
//       dir="rtl"
//       id="categories"
//       className="relative isolate overflow-hidden bg-[#f8f8f8] py-10 sm:py-12"
//     >
//       <header className="relative z-10 mx-auto mb-8 px-4 text-center sm:mb-12">
//         <h2
//           className="flex items-center justify-center gap-2 text-xl
//           font-extrabold text-[#171717] sm:text-2xl"
//         >
//           <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00c9c5]" />
//           <span>محبوب ترین دسته بندی ها</span>
//         </h2>

//         <p className="mt-3 text-xs leading-6 text-[#aaa] sm:text-sm">
//           گستره وسیعی از محبوب ترین دوره ها
//         </p>
//       </header>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[125px] bottom-[30px]
//           bg-[#a9e9e7]"
//         style={{
//           clipPath:
//             "polygon(0 0, 45% 4%, 50% 0, 55% 4%, 100% 0, 100% 100%, 55% 96%, 50% 100%, 45% 96%, 0 100%)",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[38%] top-[190px]
//           h-52 w-52 rounded-full border-[5px] border-[#8ddbd8]/20
//           blur-[2px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[61%] top-[350px]
//           h-12 w-12 rounded-full border-[5px] border-[#8ddbd8]/30
//           blur-[1px]"
//       />

//       <div
//         className="relative z-10 mx-auto flex min-h-[250px] max-w-[1150px]
//           flex-wrap items-center justify-center gap-x-6 gap-y-8
//           px-5 py-12 sm:gap-x-8 sm:py-16 lg:flex-nowrap lg:gap-x-10
//           lg:px-8"
//       >
//         {categories.map((category) => (
//           <CategoryCard key={category.id} {...category} />
//         ))}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import {
  Monitor,
  ChartPie,
  Gamepad2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "طراحی صفحات وب",
    description: "از ایده تا اجرا، با جدیدترین تکنولوژی‌های وب",
    icon: Monitor,
    href: "/Course",
    color: "teal",
    count: "01",
  },
  {
    id: 2,
    title: "تحلیل داده",
    description: "داده‌ها را به فرصت تبدیل کن",
    icon: ChartPie,
    href: "/Course",
    color: "violet",
    count: "02",
  },
  {
    id: 3,
    title: "بازی سازی",
    description: "دنیای خلاقیت و سرگرمی را تجربه کن",
    icon: Gamepad2,
    href: "/Course",
    color: "orange",
    count: "03",
  },
  {
    id: 4,
    title: "امنیت شبکه",
    description: "از دنیای دیجیتال هوشمندانه محافظت کن",
    icon: ShieldCheck,
    href: "/Course",
    color: "blue",
    count: "04",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const colorStyles = {
  teal: {
    icon: "bg-[#d9f8f3] text-[#00a99f]",
    glow: "bg-[#00c9b7]/10",
    border: "hover:border-[#00c9b7]/40",
    arrow: "bg-[#00b7a8] shadow-[#00b7a8]/20",
    number: "text-[#00a99f]",
  },
  violet: {
    icon: "bg-[#eeebff] text-[#6960e8]",
    glow: "bg-[#8175ff]/10",
    border: "hover:border-[#8175ff]/40",
    arrow: "bg-[#6960e8] shadow-[#6960e8]/20",
    number: "text-[#6960e8]",
  },
  orange: {
    icon: "bg-[#fff0e5] text-[#f47a26]",
    glow: "bg-[#ff9d53]/10",
    border: "hover:border-[#ff9d53]/40",
    arrow: "bg-[#f47a26] shadow-[#f47a26]/20",
    number: "text-[#f47a26]",
  },
  blue: {
    icon: "bg-[#e3f3ff] text-[#168bd5]",
    glow: "bg-[#168bd5]/10",
    border: "hover:border-[#168bd5]/40",
    arrow: "bg-[#168bd5] shadow-[#168bd5]/20",
    number: "text-[#168bd5]",
  },
};

function CategoryCard({ category }) {
  const Icon = category.icon;
  const styles = colorStyles[category.color];

  return (
    <motion.div variants={cardVariants} className="h-full">
      <NavLink
        to={category.href}
        className={`group relative flex h-full min-h-[265px] flex-col
          overflow-hidden rounded-[24px] border border-white
          bg-white/85 p-5 shadow-[0_8px_35px_rgba(20,50,60,0.055)]
          backdrop-blur-sm transition-[border-color,box-shadow]
          duration-500 hover:shadow-[0_20px_50px_rgba(20,50,60,0.12)]
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4 focus-visible:outline-[#00c9c5]
          sm:min-h-[290px] sm:p-6 ${styles.border}`}
      >
        {/* نور پس‌زمینه کارت */}
        <div
          className={`pointer-events-none absolute -right-12 -top-12
            h-36 w-36 rounded-full blur-3xl transition-transform
            duration-700 group-hover:scale-150 ${styles.glow}`}
        />

        {/* شماره دسته‌بندی */}
        <div className="relative flex items-center justify-between">
          <span
            className={`text-xs font-bold tracking-[0.2em] ${styles.number}`}
          >
            {category.count}
          </span>

          <span
            className="flex h-8 w-8 items-center justify-center rounded-full
              bg-[#f6f8f8] text-[#a0a8aa] transition-all duration-300
              group-hover:bg-[#f0f5f4] group-hover:text-[#252e30]"
          >
            <Sparkles size={15} strokeWidth={1.7} />
          </span>
        </div>

        {/* آیکون اصلی */}
        <div className="relative mt-5 flex justify-center">
          <div
            className={`absolute inset-0 mx-auto h-20 w-20 rounded-[24px]
              opacity-0 blur-xl transition-opacity duration-500
              group-hover:opacity-100 ${styles.glow}`}
          />

          <div
            className={`relative flex h-[76px] w-[76px] items-center
              justify-center rounded-[23px] transition-transform
              duration-500 ease-out group-hover:-translate-y-1
              group-hover:rotate-[-4deg] sm:h-[82px] sm:w-[82px]
              ${styles.icon}`}
          >
            <Icon
              size={37}
              strokeWidth={1.7}
              className="transition-transform duration-500
                group-hover:scale-110"
            />
          </div>
        </div>

        {/* عنوان و توضیحات */}
        <div className="relative mt-5 text-center">
          <h3
            className="text-base font-extrabold text-[#17282d]
              transition-colors duration-300 group-hover:text-[#008f89]
              sm:text-lg"
          >
            {category.title}
          </h3>

          <p className="mx-auto mt-3 max-w-[220px] text-xs leading-7 text-[#849194] sm:text-sm">
            {category.description}
          </p>
        </div>

        {/* فلش پایانی */}
        <div className="relative mt-auto flex justify-center pt-5">
          <span
            className={`flex h-10 w-10 items-center justify-center
              rounded-full text-white shadow-lg transition-all
              duration-500 group-hover:scale-110 group-hover:shadow-xl
              ${styles.arrow}`}
          >
            <ArrowLeft
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300
                group-hover:-translate-x-1"
            />
          </span>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default function CategorySection() {
  return (
    <motion.section
      id="categories"
      dir="rtl"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="relative isolate overflow-hidden bg-[#f8fbfb]
        py-16 sm:py-20 lg:py-24"
    >
      {/* پس‌زمینه تزئینی */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10
          h-72 w-72 rounded-full bg-[#c8f5ed]/50 blur-[85px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0
          h-80 w-80 rounded-full bg-[#dceeff]/60 blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* سربرگ سکشن */}
        <motion.header
          variants={cardVariants}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full
              border border-[#00b9ad]/15 bg-white/80 px-4 py-2
              text-xs font-bold text-[#009b92] shadow-sm sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#00c9b5]" />
            مسیر یادگیری تو از اینجا شروع می‌شه
          </div>

          <h2
            className="text-2xl font-black leading-[1.8] tracking-tight
              text-[#17282d] sm:text-3xl lg:text-4xl"
          >
            محبوب‌ترین
            <span className="mx-2 text-[#00a99f]">
              دسته‌بندی‌های
            </span>
            آموزشی
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#899597] sm:mt-4 sm:text-base">
            حوزه مورد علاقه‌ات رو انتخاب کن و قدم بعدی مسیر حرفه‌ای خودت رو بردار.
          </p>

          <div
            className="mx-auto mt-6 h-1 w-14 rounded-full
              bg-gradient-to-l from-[#00c9b5] to-[#85e9d9]"
          />
        </motion.header>

        {/* کارت‌های دسته‌بندی */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2
            sm:gap-6 lg:grid-cols-4 lg:gap-5"
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>

        {/* متن پایانی */}
        <motion.p
          variants={cardVariants}
          className="mt-9 text-center text-xs leading-7 text-[#929d9f] sm:mt-12 sm:text-sm"
        >
          هنوز مطمئن نیستی؟{" "}
          <NavLink
            to="/Course"
            className="font-bold text-[#009b92] underline
              decoration-[#009b92]/30 underline-offset-4
              transition-colors hover:text-[#007a73]"
          >
            همه دوره‌ها رو ببین
          </NavLink>
        </motion.p>
      </div>
    </motion.section>
  );
}
