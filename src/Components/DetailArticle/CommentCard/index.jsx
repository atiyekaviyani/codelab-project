import { useState } from "react";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  CornerDownLeft,
} from "lucide-react";
import CommentForm from "../../../Components/DetailArticle/CommentForm";

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function CommentCard({ comment, onLike, onReply, depth = 0 }) {
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(true);

  const replies = comment.replies ?? [];

  const handleReply = (formData) => {
    onReply(comment.id, formData);
    setIsReplying(false);
    setShowReplies(true);
  };

  return (
    <article className="min-w-0">
      <div className="group rounded-2xl border border-gray-100 bg-white p-4 transition duration-200 hover:border-[#01CEC9]/40 hover:shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#01CEC9]/20 to-[#01CEC9]/5 text-sm font-extrabold text-[#009F9A] ring-1 ring-[#01CEC9]/15">
            {comment.avatar || getInitials(comment.author)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="text-sm font-extrabold text-gray-900">
                {comment.author}
              </h3>

              {comment.role && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-500">
                  {comment.role}
                </span>
              )}
            </div>

            <p className="mt-1 text-xs text-gray-400">{comment.date}</p>

            <p className="mt-4 whitespace-pre-wrap break-words text-justify text-sm leading-8 text-gray-600">
              {comment.content}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onLike(comment.id)}
                aria-pressed={Boolean(comment.liked)}
                aria-label={comment.liked ? "برداشتن پسند" : "پسندیدن نظر"}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  comment.liked
                    ? "bg-rose-50 text-rose-600"
                    : "bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                <Heart
                  size={15}
                  className={comment.liked ? "fill-current" : ""}
                />
                <span>{comment.likes.toLocaleString("fa-IR")}</span>
                <span>{comment.liked ? "پسندیدی" : "پسندیدن"}</span>
              </button>

              {depth < 3 && (
                <button
                  type="button"
                  onClick={() => setIsReplying((previous) => !previous)}
                  aria-expanded={isReplying}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    isReplying
                      ? "bg-[#01CEC9]/10 text-[#009F9A]"
                      : "bg-gray-50 text-gray-500 hover:bg-[#01CEC9]/10 hover:text-[#009F9A]"
                  }`}
                >
                  <MessageCircle size={15} />
                  پاسخ دادن
                </button>
              )}

              {replies.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowReplies((previous) => !previous)}
                  className="mr-auto inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-gray-400 transition hover:text-gray-700"
                >
                  <CornerDownLeft size={14} />
                  {showReplies ? "بستن پاسخ‌ها" : "دیدن پاسخ‌ها"}
                  <span>({replies.length.toLocaleString("fa-IR")})</span>
                </button>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="گزینه‌های نظر"
            title="نظر کاربر"
            className="hidden rounded-lg p-2 text-gray-300 transition hover:bg-gray-100 hover:text-gray-600 sm:block"
          >
            <MoreHorizontal size={19} />
          </button>
        </div>
      </div>

      {isReplying && (
        <div className="mt-3 sm:mr-12">
          <CommentForm
            compact
            replyTo={comment.author}
            onSubmit={handleReply}
            onCancel={() => setIsReplying(false)}
          />
        </div>
      )}

      {showReplies && replies.length > 0 && (
        <div className="relative mr-4 mt-3 space-y-3 border-r-2 border-[#01CEC9]/20 pr-3 sm:mr-8 sm:pr-5">
          {replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              onLike={onLike}
              onReply={onReply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </article>
  );
}

export default CommentCard;
