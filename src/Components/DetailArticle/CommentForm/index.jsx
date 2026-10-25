
// import { useState } from "react";
// import { MessageSquareText, Send, X } from "lucide-react";

// function CommentForm({
//   onSubmit,
//   replyTo = null,
//   onCancel,
//   compact = false,
// }) {
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const nextErrors = {};

//     if (!author.trim()) {
//       nextErrors.author = "نامت رو وارد کن.";
//     }

//     if (!content.trim()) {
//       nextErrors.content = "متن نظرت رو بنویس.";
//     } else if (content.trim().length < 5) {
//       nextErrors.content = "نظر باید حداقل ۵ کاراکتر داشته باشه.";
//     }

//     setErrors(nextErrors);

//     if (Object.keys(nextErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);

//     onSubmit({
//       author: author.trim(),
//       content: content.trim(),
//     });

//     setAuthor("");
//     setContent("");
//     setErrors({});
//     setIsSubmitting(false);
//   };

//   return (
//     <form
//       dir="rtl"
//       onSubmit={handleSubmit}
//       className={`w-full ${
//         compact
//           ? "rounded-xl border border-gray-100 bg-gray-50/80 p-4"
//           : "rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
//       }`}
//     >
//       <div className="mb-5 flex items-start justify-between gap-3">
//         <div className="flex items-start gap-3">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#01CEC9]/10 text-[#009F9A]">
//             <MessageSquareText size={20} />
//           </div>

//           <div>
//             <h3 className="font-bold text-gray-900">
//               {replyTo
//                 ? `پاسخ به ${replyTo}`
//                 : "نظر خودت رو بنویس"}
//             </h3>

//             <p className="mt-1 text-xs leading-6 text-gray-500">
//               تجربه و دیدگاهت رو با بقیه به اشتراک بذار.
//             </p>
//           </div>
//         </div>

//         {replyTo && (
//           <button
//             type="button"
//             onClick={onCancel}
//             aria-label="لغو پاسخ"
//             className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
//           >
//             <X size={18} />
//           </button>
//         )}
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label
//             htmlFor={`comment-author-${compact ? "reply" : "main"}`}
//             className="mb-2 block text-sm font-semibold text-gray-700"
//           >
//             نام و نام خانوادگی
//           </label>

//           <input
//             id={`comment-author-${compact ? "reply" : "main"}`}
//             value={author}
//             onChange={(event) => setAuthor(event.target.value)}
//             placeholder="مثلاً علی رضایی"
//             maxLength={60}
//             className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#01CEC9] focus:ring-4 focus:ring-[#01CEC9]/10"
//           />

//           {errors.author && (
//             <p className="mt-2 text-xs text-red-500">
//               {errors.author}
//             </p>
//           )}
//         </div>

//         <div>
//           <label
//             htmlFor={`comment-content-${compact ? "reply" : "main"}`}
//             className="mb-2 block text-sm font-semibold text-gray-700"
//           >
//             متن {replyTo ? "پاسخ" : "نظر"}
//           </label>

//           <textarea
//             id={`comment-content-${compact ? "reply" : "main"}`}
//             value={content}
//             onChange={(event) => setContent(event.target.value)}
//             placeholder={
//               replyTo
//                 ? "پاسخت رو اینجا بنویس..."
//                 : "نظرت درباره این مقاله چیه؟"
//             }
//             rows={compact ? 3 : 5}
//             maxLength={1500}
//             className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-7 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#01CEC9] focus:ring-4 focus:ring-[#01CEC9]/10"
//           />

//           <div className="mt-2 flex items-center justify-between gap-3">
//             {errors.content ? (
//               <p className="text-xs text-red-500">{errors.content}</p>
//             ) : (
//               <span className="text-xs text-gray-400">
//                 محترمانه و مرتبط با موضوع بنویس.
//               </span>
//             )}

//             <span className="shrink-0 text-xs tabular-nums text-gray-400">
//               {content.length.toLocaleString("fa-IR")}/۱۵۰۰
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5 flex justify-end">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#01BDB8] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#009F9A] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01CEC9] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <Send size={16} />
//           <span>
//             {replyTo ? "ثبت پاسخ" : "ارسال نظر"}
//           </span>
//         </button>
//       </div>
//     </form>
//   );
// }

// export default CommentForm;


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  MessageSquareText,
  Send,
  X,
  UserRound,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

const commentValidationSchema = Yup.object({
  author: Yup.string()
    .trim()
    .required("نام و نام خانوادگی‌ات رو وارد کن.")
    .min(2, "نام باید حداقل ۲ کاراکتر داشته باشه.")
    .max(60, "نام نمی‌تونه بیشتر از ۶۰ کاراکتر باشه."),

  content: Yup.string()
    .trim()
    .required("متن نظرت رو بنویس.")
    .min(5, "نظر باید حداقل ۵ کاراکتر داشته باشه.")
    .max(1500, "نظر نمی‌تونه بیشتر از ۱۵۰۰ کاراکتر باشه."),
});

function CommentForm({
  onSubmit,
  replyTo = null,
  onCancel,
  compact = false,
}) {
  const authorId = compact ? "reply-author" : "main-comment-author";
  const contentId = compact ? "reply-content" : "main-comment-content";

  const initialValues = {
    author: "",
    content: "",
  };

  const handleSubmit = async (values, { resetForm, setStatus }) => {
    try {
      await onSubmit({
        author: values.author.trim(),
        content: values.content.trim(),
      });

      resetForm();
      setStatus(undefined);
    } catch {
      setStatus("ارسال نظر با مشکل مواجه شد. لطفاً دوباره تلاش کن.");
    }
  };

  const handleCancel = (resetForm) => {
    resetForm();
    onCancel?.();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={commentValidationSchema}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnChange={false}
    >
      {({
        isSubmitting,
        values,
        errors,
        touched,
        status,
        resetForm,
      }) => {
        const remainingCharacters = 1500 - values.content.length;

        return (
          <Form
            dir="rtl"
            noValidate
            className={`relative w-full overflow-hidden border transition-all duration-300 ${
              compact
                ? "rounded-2xl border-gray-200/80 bg-gray-50/80 p-4 sm:p-5"
                : "rounded-3xl border-gray-200/80 bg-white p-5 shadow-[0_8px_35px_rgba(15,23,42,0.045)] sm:p-7"
            }`}
          >
            {!compact && (
              <div className="pointer-events-none absolute -left-12 -top-16 h-40 w-40 rounded-full bg-teal-100/40 blur-3xl" />
            )}

            <div className="relative">
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 text-teal-700 ring-1 ring-teal-100">
                    <MessageSquareText size={21} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-extrabold leading-6 text-gray-900 sm:text-base">
                        {replyTo
                          ? `پاسخ به ${replyTo}`
                          : "دیدگاهت رو با ما به اشتراک بذار"}
                      </h3>

                      {!compact && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
                          <Sparkles size={11} />
                          گفت‌وگوی دوستانه
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-6 text-gray-500">
                      {replyTo
                        ? "پاسخت رو بنویس و به ادامه گفت‌وگو کمک کن."
                        : "تجربه و دیدگاهت رو درباره این مقاله با دیگران به اشتراک بذار."}
                    </p>
                  </div>
                </div>

                {replyTo && (
                  <button
                    type="button"
                    onClick={() => handleCancel(resetForm)}
                    disabled={isSubmitting}
                    aria-label="لغو پاسخ"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-rose-50 hover:text-rose-500 disabled:opacity-50"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Author */}
              <div className="mb-5">
                <label
                  htmlFor={authorId}
                  className="mb-2.5 flex items-center gap-2 text-xs font-bold text-gray-700"
                >
                  <UserRound size={15} className="text-teal-600" />
                  نام و نام خانوادگی
                  <span className="text-rose-500">*</span>
                </label>

                <Field
                  id={authorId}
                  name="author"
                  type="text"
                  autoComplete="name"
                  maxLength={60}
                  placeholder="مثلاً علی رضایی"
                  aria-invalid={Boolean(touched.author && errors.author)}
                  aria-describedby={
                    touched.author && errors.author
                      ? `${authorId}-error`
                      : undefined
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 ${
                    touched.author && errors.author
                      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                      : "border-gray-200 hover:border-gray-300 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />

                <ErrorMessage name="author">
                  {(message) => (
                    <p
                      id={`${authorId}-error`}
                      role="alert"
                      className="mt-2 text-xs font-medium text-rose-500"
                    >
                      {message}
                    </p>
                  )}
                </ErrorMessage>
              </div>

              {/* Comment content */}
              <div>
                <label
                  htmlFor={contentId}
                  className="mb-2.5 flex items-center gap-2 text-xs font-bold text-gray-700"
                >
                  <MessageSquareText size={15} className="text-teal-600" />
                  متن {replyTo ? "پاسخ" : "نظر"}
                  <span className="text-rose-500">*</span>
                </label>

                <Field
                  as="textarea"
                  id={contentId}
                  name="content"
                  rows={compact ? 3 : 5}
                  maxLength={1500}
                  placeholder={
                    replyTo
                      ? "پاسخت رو اینجا بنویس..."
                      : "نظرت درباره این مقاله چیه؟ چه نکته‌ای برات مفید بود؟"
                  }
                  aria-invalid={Boolean(touched.content && errors.content)}
                  aria-describedby={
                    touched.content && errors.content
                      ? `${contentId}-error`
                      : `${contentId}-hint`
                  }
                  className={`w-full resize-y rounded-xl border bg-white px-4 py-3.5 text-sm leading-8 text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 ${
                    touched.content && errors.content
                      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                      : "border-gray-200 hover:border-gray-300 focus:border-teal-400 focus:ring-teal-50"
                  }`}
                />

                <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <ErrorMessage name="content">
                      {(message) => (
                        <p
                          id={`${contentId}-error`}
                          role="alert"
                          className="text-xs font-medium text-rose-500"
                        >
                          {message}
                        </p>
                      )}
                    </ErrorMessage>

                    {!(touched.content && errors.content) && (
                      <p
                        id={`${contentId}-hint`}
                        className="text-[11px] leading-6 text-gray-400"
                      >
                        محترمانه، مفید و مرتبط با موضوع بنویس.
                      </p>
                    )}
                  </div>

                  <span
                    className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-medium tabular-nums ${
                      remainingCharacters < 100
                        ? "bg-orange-50 text-orange-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {values.content.length.toLocaleString("fa-IR")} از ۱۵۰۰
                  </span>
                </div>
              </div>

              {/* Submission error */}
              {status && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-xs leading-6 text-rose-600"
                >
                  {status}
                </p>
              )}

              {/* Footer */}
              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-6 text-gray-400">
                  دیدگاهت به بهتر شدن محتوای CodeLab کمک می‌کنه.
                </p>

                <div className="flex items-center justify-end gap-2">
                  {replyTo && (
                    <button
                      type="button"
                      onClick={() => handleCancel(resetForm)}
                      disabled={isSubmitting}
                      className="rounded-xl px-4 py-3 text-xs font-bold text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50"
                    >
                      انصراف
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !values.author.trim() ||
                      !values.content.trim()
                    }
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-teal-600 to-teal-500 px-5 py-3 text-xs font-extrabold text-white shadow-[0_5px_14px_rgba(13,148,136,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:from-teal-700 hover:to-teal-600 hover:shadow-[0_8px_20px_rgba(13,148,136,0.23)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <LoaderCircle size={16} className="animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}

                    <span>
                      {isSubmitting
                        ? "در حال ارسال..."
                        : replyTo
                          ? "ثبت پاسخ"
                          : "ارسال دیدگاه"}
                    </span>

                    {!isSubmitting && <CheckCircle2 size={15} />}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CommentForm;