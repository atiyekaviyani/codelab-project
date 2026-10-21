// import React from 'react'
// import ArticlesHero from "../../Components/Article/ArticlesHero";
// import ArticlesSidebar from "../../Components/Article/ArticlesSidebar";
// import ArticleCard from "../../Components/Article/ArticleCard";

// import ArticlesLayout from "../../Components/Article/ArticlesLayout";

// import ArticlesList from "../../Components/Article/ArticlesList";

// import ArticlesPagination from "../../Components/Article/ArticlesPagination";

// import ArticlesToolbar from "../../Components/Article/ArticlesToolbar";


// const index = () => {
//   return (
//     <div>
//       <ArticlesHero/>
//       <ArticlesSidebar/>
//       <ArticleCard/>
//       <ArticlesLayout/>
//       <ArticlesList/>
//       <ArticlesPagination/>
//       <ArticlesToolbar/>



//     </div>
//   )
// }

// export default index





import { useMemo, useState } from "react";

import ArticlesHero from "../../Components/Article/ArticlesHero";
import ArticlesSidebar from "../../Components/Article/ArticlesSidebar";
import ArticlesLayout from "../../Components/Article/ArticlesLayout";
import ArticlesList from "../../Components/Article/ArticlesList";
import ArticlesPagination from "../../Components/Article/ArticlesPagination";
import ArticlesToolbar from "../../Components/Article/ArticlesToolbar";

import {
  articles,
  articleCategories,
  recommendedArticles,
  podcasts,
  popularCourses,
} from "../../Screens/data/articles.data";

const PAGE_SIZE = 6;

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه دسته‌بندی‌ها");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("fa-IR");

    return articles
      .filter((article) => {
        const matchesCategory =
          category === "همه دسته‌بندی‌ها" ||
          article.category === category;

        const searchableText = [
          article.title,
          article.excerpt,
          article.category,
          article.author,
        ]
          .join(" ")
          .toLocaleLowerCase("fa-IR");

        return matchesCategory && searchableText.includes(query);
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "oldest":
            return a.date.localeCompare(b.date);

          case "popular":
          case "views":
            return b.views - a.views;

          default:
            return b.date.localeCompare(a.date);
        }
      });
  }, [search, category, sortBy]);

  const totalPages = Math.ceil(
    filteredArticles.length / PAGE_SIZE
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const visibleArticles = filteredArticles.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    document
      .getElementById("articles-content")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main dir="rtl" className="min-h-screen">
      <ArticlesHero />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <ArticlesToolbar
          search={search}
          onSearchChange={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
          category={category}
          onCategoryChange={(value) => {
            setCategory(value);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortChange={(value) => {
            setSortBy(value);
            setCurrentPage(1);
          }}
          categories={articleCategories}
          resultCount={filteredArticles.length}
        />

        <div id="articles-content" className="scroll-mt-6">
          <ArticlesLayout>
            <div className="min-w-0">
              <ArticlesList articles={visibleArticles} />

              <ArticlesPagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>

            <ArticlesSidebar
              recommendedArticles={recommendedArticles}
              podcasts={podcasts}
              popularCourses={popularCourses}
            />
          </ArticlesLayout>
        </div>
      </div>
    </main>
  );
}
