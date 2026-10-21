import { ArrowUpLeft, Clock3, Eye } from "lucide-react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));

export default function ArticleCard({ article }) {
  if (!article) return null;

  return (
    // <article>
    //   <a
    //     href={`/articles/${article.id}`}
    //     aria-label={`مطالعه مقاله ${article.title}`}
    //     className="block overflow-hidden"
    //   >
    //     <img
    //       src={article.image}
    //       alt=""
    //       loading="lazy"
    //       className="aspect-[16/9] rounded-2xl w-full object-cover transition duration-500 group-hover:scale-[1.03]"
    //     />
    //   </a>

    //   <div className="flex h-full flex-col overflow-hidden rounded-xl">
    //     <div className="mb-3 flex flex-wrap items-center gap-2">
    //       <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
    //         {article.category}
    //       </span>

    //       <span className="text-xs text-slate-400">
    //         {formatDate(article.date)}
    //       </span>
    //     </div>

    //     <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7">
    //       <a href={`/articles/${article.id}`}>{article.title}</a>
    //     </h3>

    //     <p className="mb-5 line-clamp-2 text-sm leading-7 text-slate-500">
    //       {article.excerpt}
    //     </p>

    //     <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
    //       <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
    //         <span className="inline-flex items-center gap-1.5">
    //           <Clock3 size={15} aria-hidden="true" />
    //           {article.readTime} دقیقه
    //         </span>

    //         <span className="inline-flex items-center gap-1.5">
    //           <Eye size={15} aria-hidden="true" />
    //           {article.views.toLocaleString("fa-IR")}
    //         </span>
    //       </div>

    //       <a
    //         href={`/articles/${article.id}`}
    //         className="inline-flex items-center gap-1 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-500"
    //       >
    //         مطالعه مقاله
    //         <ArrowUpLeft size={17} aria-hidden="true" />
    //       </a>
    //     </div>
    //   </div>
    // </article>
  
<article
  className="
    group relative mt-8 flex h-full flex-col
    overflow-visible rounded-tr-full rounded-tl-full
    border border-slate-200/80 bg-white
    transition-all duration-300
    hover:border-slate-300
  "
>
  {/* تصویر شناور سه‌بعدی */}
  <a
    href={`/articles/${article.id}`}
    aria-label={`مطالعه مقاله ${article.title}`}
   className="
  relative z-10 mx-5 -mt-8 block
  overflow-hidden rounded-xl
  shadow-[0_16px_30px_-12px_rgba(15,23,42,0.35)]
  transition-all duration-500
  group-hover:-translate-y-2
  group-hover:shadow-[0_24px_35px_-12px_rgba(15,23,42,0.4)]
"
  >
    <img
      src={article.image}
      alt=""
      loading="lazy"
      className="
        aspect-[16/9] w-full object-cover
        transition-transform duration-500
        group-hover:scale-105
      "
    />
  </a>

  {/* محتوای کارت */}
  <div className="flex flex-1 flex-col p-4 pt-5">

    {/* دسته‌بندی و تاریخ */}
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
        {article.category}
      </span>

      <span className="text-xs text-slate-400">
        {formatDate(article.date)}
      </span>
    </div>

    {/* عنوان */}
    <h3 className="mb-2 line-clamp-2 min-h-[3.5rem] text-base font-bold leading-7 text-slate-800">
      <a href={`/articles/${article.id}`}>
        {article.title}
      </a>
    </h3>

    {/* توضیحات */}
    <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-500">
      {article.excerpt}
    </p>

    {/* اطلاعات مقاله */}
    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 size={14} aria-hidden="true" />
          {article.readTime} دقیقه
        </span>

        <span className="inline-flex items-center gap-1.5">
          <Eye size={14} aria-hidden="true" />
          {article.views.toLocaleString("fa-IR")}
        </span>
      </div>

      <a
        href={`/articles/${article.id}`}
        aria-label={`مطالعه مقاله ${article.title}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-400"
      >
        مطالعه مقاله
        <ArrowUpLeft size={16} aria-hidden="true" />
      </a>
    </div>
  </div>
</article>

  
  );
}
