import { FileSearch } from "lucide-react";
import ArticleCard from "../ArticleCard";

export default function ArticlesList({ articles = [] }) {
  if (articles.length === 0) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <FileSearch size={26} aria-hidden="true" />
        </div>

        <h3 className="text-lg font-bold text-slate-800">مقاله‌ای پیدا نشد</h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          عبارت جست‌وجو یا دسته‌بندی انتخاب‌شده را تغییر بده و دوباره امتحان کن.
        </p>
      </div>
    );
  }

  return (
    <section
      aria-label="فهرست مقالات"
      className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:gap-6 xl:grid-cols-3"
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
