
import { useState } from "react";
import { MessageSquareText, Send, X } from "lucide-react";

function CommentForm({
  onSubmit,
  replyTo = null,
  onCancel,
  compact = false,
}) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!author.trim()) {
      nextErrors.author = "نامت رو وارد کن.";
    }

    if (!content.trim()) {
      nextErrors.content = "متن نظرت رو بنویس.";
    } else if (content.trim().length < 5) {
      nextErrors.content = "نظر باید حداقل ۵ کاراکتر داشته باشه.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    onSubmit({
      author: author.trim(),
      content: content.trim(),
    });

    setAuthor("");
    setContent("");
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className={`w-full ${
        compact
          ? "rounded-xl border border-gray-100 bg-gray-50/80 p-4"
          : "rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#01CEC9]/10 text-[#009F9A]">
            <MessageSquareText size={20} />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              {replyTo
                ? `پاسخ به ${replyTo}`
                : "نظر خودت رو بنویس"}
            </h3>

            <p className="mt-1 text-xs leading-6 text-gray-500">
              تجربه و دیدگاهت رو با بقیه به اشتراک بذار.
            </p>
          </div>
        </div>

        {replyTo && (
          <button
            type="button"
            onClick={onCancel}
            aria-label="لغو پاسخ"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor={`comment-author-${compact ? "reply" : "main"}`}
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            نام و نام خانوادگی
          </label>

          <input
            id={`comment-author-${compact ? "reply" : "main"}`}
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="مثلاً علی رضایی"
            maxLength={60}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#01CEC9] focus:ring-4 focus:ring-[#01CEC9]/10"
          />

          {errors.author && (
            <p className="mt-2 text-xs text-red-500">
              {errors.author}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`comment-content-${compact ? "reply" : "main"}`}
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            متن {replyTo ? "پاسخ" : "نظر"}
          </label>

          <textarea
            id={`comment-content-${compact ? "reply" : "main"}`}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder={
              replyTo
                ? "پاسخت رو اینجا بنویس..."
                : "نظرت درباره این مقاله چیه؟"
            }
            rows={compact ? 3 : 5}
            maxLength={1500}
            className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-7 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#01CEC9] focus:ring-4 focus:ring-[#01CEC9]/10"
          />

          <div className="mt-2 flex items-center justify-between gap-3">
            {errors.content ? (
              <p className="text-xs text-red-500">{errors.content}</p>
            ) : (
              <span className="text-xs text-gray-400">
                محترمانه و مرتبط با موضوع بنویس.
              </span>
            )}

            <span className="shrink-0 text-xs tabular-nums text-gray-400">
              {content.length.toLocaleString("fa-IR")}/۱۵۰۰
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01BDB8] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#009F9A] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01CEC9] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={16} />
          <span>
            {replyTo ? "ثبت پاسخ" : "ارسال نظر"}
          </span>
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
