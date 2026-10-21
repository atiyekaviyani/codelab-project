import { useMemo, useState } from "react";
import {
  MessageSquareText,
  MessagesSquare,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import { initialComments } from "../../../Components/DetailArticle/articleData";
import CommentCard from "../../../Components/DetailArticle/CommentCard";
import CommentForm from "../../../Components/DetailArticle/CommentForm";

function updateCommentTree(comments, targetId, updater) {
  return comments.map((comment) => {
    if (comment.id === targetId) {
      return updater(comment);
    }

    if (comment.replies?.length) {
      return {
        ...comment,
        replies: updateCommentTree(comment.replies, targetId, updater),
      };
    }

    return comment;
  });
}

function countComments(comments) {
  return comments.reduce(
    (total, comment) => total + 1 + countComments(comment.replies ?? []),
    0,
  );
}

function ArticleComments() {
  const [comments, setComments] = useState(initialComments);
  const [sortBy, setSortBy] = useState("newest");
  const [notice, setNotice] = useState("");

  const totalComments = useMemo(() => countComments(comments), [comments]);

  const sortedComments = useMemo(() => {
    const result = [...comments];

    if (sortBy === "newest") {
      result.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortBy === "oldest") {
      result.sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.likes - a.likes);
    }

    return result;
  }, [comments, sortBy]);

  const handleAddComment = ({ author, content }) => {
    const newComment = {
      id: Date.now(),
      author,
      avatar: author
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join(""),
      role: "عضو CodeLab",
      date: new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
      timestamp: Date.now(),
      content,
      likes: 0,
      liked: false,
      replies: [],
    };

    setComments((previous) => [newComment, ...previous]);
    setSortBy("newest");
    setNotice("نظرت با موفقیت ثبت شد.");
  };

  const handleReply = (parentId, { author, content }) => {
    const newReply = {
      id: Date.now(),
      author,
      avatar: author
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join(""),
      role: "عضو CodeLab",
      date: new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
      timestamp: Date.now(),
      content,
      likes: 0,
      liked: false,
      replies: [],
    };

    setComments((previous) =>
      updateCommentTree(previous, parentId, (comment) => ({
        ...comment,
        replies: [...(comment.replies ?? []), newReply],
      })),
    );

    setNotice("پاسخت با موفقیت ثبت شد.");
  };

  const handleLike = (targetId) => {
    setComments((previous) =>
      updateCommentTree(previous, targetId, (comment) => {
        const liked = !comment.liked;

        return {
          ...comment,
          liked,
          likes: Math.max(0, comment.likes + (liked ? 1 : -1)),
        };
      }),
    );
  };

  return (
    <section
      dir="rtl"
      className="mt-10 space-y-7"
      aria-labelledby="article-comments-title"
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-12 h-36 w-36 rounded-full bg-[#01CEC9]/10 blur-3xl"
        />

        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#01CEC9]/10 text-[#009F9A]">
              <MessagesSquare size={24} />
            </div>

            <div>
              <h2
                id="article-comments-title"
                className="text-xl font-extrabold text-gray-900"
              >
                گفت‌وگو و نظرات
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                تجربه‌ات رو به اشتراک بذار و با بقیه گفت‌وگو کن.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#01CEC9]/20 bg-[#01CEC9]/5 px-3 py-2.5">
            <MessageSquareText size={17} className="text-[#009F9A]" />
            <span className="text-sm font-bold text-gray-700">
              {totalComments.toLocaleString("fa-IR")} نظر و پاسخ
            </span>
          </div>
        </div>
      </div>

      <CommentForm onSubmit={handleAddComment} />

      {notice && (
        <div
          role="status"
          className="flex items-center justify-between gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          <span>{notice}</span>
          <button
            type="button"
            onClick={() => setNotice("")}
            className="font-semibold hover:text-emerald-900"
          >
            بستن
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <h3 className="font-bold text-gray-900">نظرات کاربران</h3>
          <p className="mt-1 text-xs text-gray-400">
            دیدگاه‌ها و پاسخ‌های این مقاله
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 transition focus-within:border-[#01CEC9]">
          <SlidersHorizontal size={16} className="text-[#009F9A]" />

          <span className="sr-only">مرتب‌سازی نظرات</span>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="max-w-[150px] cursor-pointer bg-transparent text-sm font-medium outline-none"
          >
            <option value="newest">جدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
            <option value="popular">محبوب‌ترین</option>
          </select>
        </label>
      </div>

      {sortedComments.length > 0 ? (
        <div className="space-y-5">
          {sortedComments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onLike={handleLike}
              onReply={handleReply}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-5 py-12 text-center">
          <Sparkles size={30} className="mx-auto mb-3 text-[#01BDB8]" />
          <h3 className="font-bold text-gray-800">
            اولین نفری باش که نظر می‌ده!
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            نظرت می‌تونه به بقیه هم کمک کنه.
          </p>
        </div>
      )}
    </section>
  );
}

export default ArticleComments;
