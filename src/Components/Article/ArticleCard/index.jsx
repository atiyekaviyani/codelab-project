// import { ArrowUpLeft, Clock3, Eye } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("fa-IR", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }).format(new Date(`${date}T12:00:00`));

// export default function ArticleCard({ article }) {
//   if (!article) return null;

//   return (
//     <article
//       className="
//         group relative mt-8 flex h-full flex-col
//         overflow-visible rounded-tr-full rounded-tl-full
//         border border-slate-200/80 bg-white
//         transition-all duration-300
//         hover:border-slate-300
//       "
//     >
//       <NavLink
//         to={"/DetailArticle"}
//         aria-label={`مطالعه مقاله ${article.title}`}
//         className="
//           relative z-10 mx-5 -mt-8 block
//           overflow-hidden rounded-xl
//           shadow-[0_16px_30px_-12px_rgba(15,23,42,0.35)]
//           transition-all duration-500
//           group-hover:-translate-y-2
//           group-hover:shadow-[0_24px_35px_-12px_rgba(15,23,42,0.4)]
//         "
//       >
//         <img
//           src={article.image}
//           alt=""
//           loading="lazy"
//           className="
//             aspect-[16/9] w-full object-cover
//             transition-transform duration-500
//             group-hover:scale-105
//           "
//         />
//       </NavLink>

//       <div className="flex flex-1 flex-col p-4 pt-5">
//         <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
//           <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
//             {article.category}
//           </span>

//           <span className="text-xs text-slate-400">
//             {formatDate(article.date)}
//           </span>
//         </div>

//         <h3 className="mb-2 line-clamp-2 min-h-[3.5rem] text-base font-bold leading-7 text-slate-800">
//           <NavLink to={"/DetailArticle"}>
//             {article.title}
//           </NavLink>
//         </h3>

//         <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-500">
//           {article.excerpt}
//         </p>

//         <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
//           <div className="flex items-center gap-3 text-xs text-slate-500">
//             <span className="inline-flex items-center gap-1.5">
//               <Clock3 size={14} aria-hidden="true" />
//               {article.readTime} دقیقه
//             </span>

//             <span className="inline-flex items-center gap-1.5">
//               <Eye size={14} aria-hidden="true" />
//               {article.views.toLocaleString("fa-IR")}
//             </span>
//           </div>

//           <NavLink
//             to={"/DetailArticle"}
//             aria-label={`مطالعه مقاله ${article.title}`}
//             className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-400"
//           >
//             مطالعه مقاله
//             <ArrowUpLeft size={16} aria-hidden="true" />
//           </NavLink>
//         </div>
//       </div>
//     </article>
//   );
// }



import {
  ArrowUpLeft,
  Clock3,
  Eye,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(`${date}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
};

export default function ArticleCard({ article }) {
  if (!article) return null;

  const detailPath = "/DetailArticle";

  return (
    <article
      className="
        group relative mt-8 flex h-full min-w-0 flex-col
        overflow-visible rounded-[25px]
        border border-[#E7F0ED] bg-white
        shadow-[0_5px_24px_rgba(34,91,79,0.035)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-[#CDEBE2]
        hover:shadow-[0_18px_38px_rgba(34,116,99,0.10)]
      "
    >
      {/* Article image */}
      <NavLink
        to={detailPath}
        aria-label={`مطالعه مقاله ${article.title}`}
        className="
          relative z-10 mx-4 -mt-8 block
          overflow-hidden rounded-[18px]
          bg-[#EDF8F4]
          shadow-[0_12px_25px_-10px_rgba(28,87,75,0.28)]
          transition-all duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_18px_30px_-10px_rgba(28,87,75,0.32)]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#25BDA7]
        "
      >
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="
            aspect-[16/9] w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* Subtle image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-[#173C35]/20 via-transparent to-white/5
            opacity-70 transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        <span
          className="
            absolute bottom-3 right-3 inline-flex items-center gap-1.5
            rounded-full border border-white/60
            bg-white/90 px-2.5 py-1.5
            text-[10px] font-bold text-[#268F80]
            shadow-sm backdrop-blur-md
          "
        >
          <Sparkles size={12} aria-hidden="true" />
          مطلب آموزشی
        </span>
      </NavLink>

      {/* Article content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
        {/* Category and date */}
        <div className="mb-3 flex min-w-0 flex-wrap items-center justify-between gap-2">
          <span
            className="
              inline-flex max-w-full items-center gap-1.5
              rounded-full border border-[#DDF2EB]
              bg-[#F1FAF6] px-3 py-1.5
              text-[10px] font-bold text-[#319887]
              sm:text-[11px]
            "
          >
            <span className="size-1.5 shrink-0 rounded-full bg-[#28C3AB]" />
            <span className="truncate">{article.category}</span>
          </span>

          <time
            dateTime={article.date || undefined}
            className="text-[10px] text-[#95A3A1] sm:text-[11px]"
          >
            {formatDate(article.date)}
          </time>
        </div>

        {/* Title */}
        <h3
          className="
            mb-2 line-clamp-2 min-h-[3.5rem]
            text-[14px] font-extrabold leading-7
            text-[#293E46]
            transition-colors duration-300
            group-hover:text-[#189F8C]
            sm:text-[15px]
          "
        >
          <NavLink
            to={detailPath}
            className="
              rounded-sm
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#25BDA7]
            "
          >
            {article.title}
          </NavLink>
        </h3>

        {/* Excerpt */}
        <p className="mb-5 line-clamp-2 text-[12px] leading-7 text-[#82918F] sm:text-[13px]">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto border-t border-[#EDF2F0] pt-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-[#879693] sm:gap-x-4 sm:text-[11px]">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#F0F8F5] text-[#36A994]">
                  <Clock3 size={14} aria-hidden="true" />
                </span>

                {article.readTime} دقیقه
              </span>

              <span className="inline-flex items-center gap-1.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#F3F0FF] text-[#8B75D9]">
                  <Eye size={14} aria-hidden="true" />
                </span>

                {Number(article.views || 0).toLocaleString("fa-IR")}
              </span>
            </div>

            <NavLink
              to={detailPath}
              aria-label={`مطالعه مقاله ${article.title}`}
              className="
                group/link inline-flex shrink-0 items-center gap-1.5
                rounded-full bg-[#F0FAF6] px-3 py-2
                text-[11px] font-bold text-[#299887]
                transition-all duration-300
                hover:bg-[#20BBA4] hover:text-white
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#25BDA7]
              "
            >
              مطالعه مقاله

              <ArrowUpLeft
                size={15}
                className="transition-transform duration-300 group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5"
                aria-hidden="true"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </article>
  );
}
