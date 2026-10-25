import { useState } from "react";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  CornerDownLeft,
  Copy,
  Flag,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  ShieldCheck,
} from "lucide-react";
import CommentForm from "../../../Components/DetailArticle/CommentForm";

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function CommentCard({ comment, onLike, onReply, depth = 0 }) {
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reported, setReported] = useState(false);

  const replies = comment.replies ?? [];
  const isLiked = Boolean(comment.liked);
  const canReply = depth < 3;

 

  const handleReply = async (formData) => {
  await onReply(comment.id, formData);
  setIsReplying(false);
  setShowReplies(true);
};

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(comment.content || "");
      setCopied(true);
      setShowMenu(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowMenu(false);
    }
  };

  const handleReport = () => {
    setReported(true);
    setShowMenu(false);
  };

  return (
    <article className="min-w-0" dir="rtl">
      <div
        className={`group/comment relative rounded-2xl border bg-white p-4 transition-all duration-300 sm:p-5 ${
          isLiked
            ? "border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.035)]"
            : "border-gray-200/80 hover:border-teal-200 hover:shadow-[0_8px_28px_rgba(15,23,42,0.045)]"
        }`}
      >
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 via-teal-50 to-orange-50 text-sm font-extrabold text-teal-700 ring-1 ring-teal-100/80 sm:h-12 sm:w-12">
            {comment.avatar || getInitials(comment.author)}

            {comment.verified && (
              <span
                className="absolute -bottom-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-teal-500 text-white"
                title="کاربر تأییدشده"
              >
                <ShieldCheck size={11} />
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-sm font-extrabold leading-6 text-gray-900">
                    {comment.author}
                  </h3>

                  {comment.role && (
                    <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-semibold text-teal-700">
                      {comment.role}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[11px] font-medium text-gray-400">
                  {comment.date}
                </p>
              </div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setShowMenu((previous) => !previous)}
                  aria-label="گزینه‌های نظر"
                  aria-expanded={showMenu}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <MoreHorizontal size={19} />
                </button>

                {showMenu && (
                  <>
                    <button
                      type="button"
                      aria-label="بستن منوی نظر"
                      className="fixed inset-0 z-10 cursor-default"
                      onClick={() => setShowMenu(false)}
                    />

                    <div className="absolute left-0 top-9 z-20 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl shadow-gray-200/60">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
                      >
                        {copied ? <Check size={15} /> : <Copy size={15} />}
                        {copied ? "متن کپی شد" : "کپی متن نظر"}
                      </button>

                      <button
                        type="button"
                        onClick={handleReport}
                        disabled={reported}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-600 transition hover:bg-rose-50 hover:text-rose-600 disabled:cursor-default disabled:opacity-60"
                      >
                        <Flag size={15} />
                        {reported ? "گزارش ثبت شد" : "گزارش این نظر"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <p className="mt-4 whitespace-pre-wrap break-words text-justify text-sm leading-8 text-gray-600">
              {comment.content}
            </p>

            {reported && (
              <p className="mt-3 text-[11px] text-gray-400">
                این نظر برای بررسی علامت‌گذاری شد.
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100/80 pt-3">
              <button
                type="button"
                onClick={() => onLike(comment.id)}
                aria-pressed={isLiked}
                aria-label={isLiked ? "برداشتن پسند" : "پسندیدن نظر"}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                  isLiked
                    ? "bg-rose-50 text-rose-600"
                    : "bg-gray-50 text-gray-500 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                <Heart
                  size={15}
                  className={`transition-transform duration-200 ${
                    isLiked ? "scale-110 fill-current" : ""
                  }`}
                />
                <span>{(comment.likes ?? 0).toLocaleString("fa-IR")}</span>
                <span>{isLiked ? "پسندیدی" : "پسندیدن"}</span>
              </button>

              {canReply && (
                <button
                  type="button"
                  onClick={() => setIsReplying((previous) => !previous)}
                  aria-expanded={isReplying}
                  className={`inline-flex min-h-9 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                    isReplying
                      ? "bg-teal-50 text-teal-700"
                      : "bg-gray-50 text-gray-500 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {isReplying ? <X size={15} /> : <MessageCircle size={15} />}
                  {isReplying ? "انصراف از پاسخ" : "پاسخ دادن"}
                </button>
              )}

              {replies.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowReplies((previous) => !previous)}
                  aria-expanded={showReplies}
                  className="mr-auto inline-flex min-h-9 items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-teal-700"
                >
                  <CornerDownLeft size={14} />
                  <span>{showReplies ? "بستن پاسخ‌ها" : "دیدن پاسخ‌ها"}</span>
                  <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
                    {replies.length.toLocaleString("fa-IR")}
                  </span>
                  {showReplies ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>
              )}
            </div>
          </div>
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
        <div className="relative mr-3 mt-3 space-y-3 border-r-2 border-teal-100 pr-3 sm:mr-8 sm:pr-5">
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
