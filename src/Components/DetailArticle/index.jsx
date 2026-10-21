
import ArticleDetailLayout from "../../Components/DetailArticle/ArticleDetailLayout";
import ArticleDetailContent from "../../Components/DetailArticle/ArticleDetailContent";
import ArticleDetailSidebar from "../../Components/DetailArticle/ArticleDetailSidebar";
import DetailComments from "../../Components/DetailArticle/DetailComments";

import {
  articleData,
  relatedArticles,
  relatedCourses,
  initialComments
} from "../../Components/DetailArticle/articleData";

function DetailArticle() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <ArticleDetailLayout
        content={
          <>
            <ArticleDetailContent article={articleData} />

            <DetailComments initialComments={initialComments} />
          </>
        }
        sidebar={
          <ArticleDetailSidebar
            articles={relatedArticles}
            courses={relatedCourses}
          />
        }
      />
    </div>
  );
}

export default DetailArticle;
