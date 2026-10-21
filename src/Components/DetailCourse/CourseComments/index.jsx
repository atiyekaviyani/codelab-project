
import { useState } from "react";
import {
  MessageCircle,
  Reply,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
  UserRound,
  BadgeCheck,
  X,
  Send,
} from "lucide-react";

const INITIAL_COMMENTS = [
  {
    id: 1,
    userName: "کاربر",
    userEmail: "ali@gmail.com",
    userAvatar: "Ellipse 35.png",
    avatarBadge: false,
    date: "۱۴۰۴/۰۱/۲۵",
    text: "سلام، من خیلی دوست دارم این دوره رو بخرم ولی قیمتش خیلی بالاست. چه زمانی دوباره این دوره تخفیف می‌خوره؟",
    likes: 25,
    dislikes: 6,
    reply: {
      userName: "مهدی اصغری",
      userAvatar: "",
      date: "۱۴۰۴/۰۱/۲۶",
      text: "سلام عزیز،\nحدوداً ۱ روز کاری، برای این دوره تخفیف خواهیم داشت.\nبرای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفاً خود سایت و شبکه‌های اجتماعی را دنبال کنید. ❤️🔥",
      likes: 12,
      dislikes: 1,
    },
  },
  {
    id: 2,
    userName: "دانشجو",
    userEmail: "khalilpour4337",
    userAvatar: "",
    avatarBadge: true,
    date: "۱۴۰۴/۰۱/۲۵",
    text: "سلام وقت بخیر. ممنون بابت دوره خوبتون. آیا بعد از اتمام دوره می‌تونیم پروژه‌های واقعی رو با React پیاده‌سازی کنیم؟",
    likes: 18,
    dislikes: 2,
    reply: {
      userName: "مهدی اصغری",
      userAvatar: "",
      date: "۱۴۰۴/۰۱/۲۶",
      text: "سلام دوست عزیز، بله! آموزش‌ها به‌صورت پروژه‌محور طراحی شده‌اند تا بتوانید آموخته‌های خودتون رو در پروژه‌های واقعی به کار ببرید. موفق باشید. 🌱",
      likes: 9,
      dislikes: 0,
    },
  },
];

function UserAvatar({
  src,
  name,
  size = "h-9 w-9",
  badge = false,
  instructor = false,
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`relative shrink-0 ${size}`}>
      {src && !imageFailed ? (
        <img
          src={src}
          alt={`تصویر ${name}`}
          onError={() => setImageFailed(true)}
          className="h-full w-full rounded-full border border-[#E5E5E5] object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full border border-[#E5E5E5] bg-[#E9E9E9] text-[#999999]">
          <UserRound
            size={instructor ? 17 : 19}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>
      )}

      {badge && (
        <span
          aria-label="کاربر ویژه"
          className="absolute -bottom-0.5 -left-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white bg-[#FF8500] text-[8px] text-white"
        >
          ★
        </span>
      )}
    </div>
  );
}

function CommentActions({
  likes,
  dislikes,
  vote,
  onVote,
  onReply,
  compact = false,
}) {
  const iconSize = compact ? 14 : 15;
  const textSize = compact ? "text-[10px]" : "text-[11px]";

  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <button
        type="button"
        aria-label="پاسخ دادن"
        onClick={onReply}
        className="flex items-center justify-center rounded p-0.5 text-[#00AFA9] transition-colors hover:bg-[#00D5D0]/10"
      >
        <Reply size={iconSize} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="پسندیدن"
        aria-pressed={vote === "like"}
        onClick={() => onVote("like")}
        className={`flex items-center gap-1 rounded p-0.5 transition-colors ${
          vote === "like"
            ? "bg-orange-50 text-[#E87500]"
            : "text-[#FF8500] hover:bg-orange-50"
        }`}
      >
        <ThumbsUp
          size={iconSize}
          strokeWidth={1.8}
          fill={vote === "like" ? "currentColor" : "none"}
        />
        <span className={textSize}>{likes}</span>
      </button>

      <button
        type="button"
        aria-label="نپسندیدن"
        aria-pressed={vote === "dislike"}
        onClick={() => onVote("dislike")}
        className={`flex items-center gap-1 rounded p-0.5 transition-colors ${
          vote === "dislike"
            ? "bg-orange-50 text-[#E87500]"
            : "text-[#FF8500] hover:bg-orange-50"
        }`}
      >
        <ThumbsDown
          size={iconSize}
          strokeWidth={1.8}
          fill={vote === "dislike" ? "currentColor" : "none"}
        />
        <span className={textSize}>{dislikes}</span>
      </button>
    </div>
  );
}

function CommentForm({
  onSubmit,
  onCancel,
  replyTo = null,
}) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = text.trim();

    if (!value) return;

    onSubmit(value);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 rounded-lg border border-[#E5E5E5] bg-white p-3"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-[#00645F]">
          {replyTo
            ? `پاسخ به ${replyTo}`
            : "ثبت دیدگاه جدید"}
        </span>

        <button
          type="button"
          onClick={onCancel}
          aria-label="بستن فرم"
          className="rounded p-1 text-[#999999] hover:bg-gray-100"
        >
          <X size={15} />
        </button>
      </div>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={3}
        maxLength={1500}
        required
        placeholder={
          replyTo
            ? "پاسخ خود را بنویسید..."
            : "دیدگاه خود را درباره این دوره بنویسید..."
        }
        className="
          w-full resize-y rounded-md border border-[#E5E5E5]
          bg-[#FAFAFA] p-3 text-right text-xs leading-6
          text-[#444444] outline-none
          placeholder:text-[#AAAAAA]
          focus:border-[#00BFB9]
        "
      />

      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-[10px] text-[#999999]">
          {text.length}/۱۵۰۰
        </span>

        <button
          type="submit"
          className="
            inline-flex h-8 items-center justify-center gap-1.5
            rounded-md bg-[#00C9C3] px-3
            text-xs font-medium text-white
            transition-colors hover:bg-[#00B5AF]
            disabled:cursor-not-allowed disabled:opacity-50
          "
          disabled={!text.trim()}
        >
          <Send size={13} />
          ارسال
        </button>
      </div>
    </form>
  );
}

function InstructorReply({
  reply,
  commentId,
  onVote,
  onReply,
  replyVote,
  replyFormOpen,
  onSubmitReply,
  onCancelReply,
}) {
  return (
    <div className="mt-3 rounded-[9px] border-r-2 border-[#00BFB9] bg-[#EEEEEE] px-3 py-3 sm:px-3.5">
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <div className="flex min-w-0 items-center gap-2">
          <UserAvatar
            src={reply.userAvatar}
            name={reply.userName}
            size="h-8 w-8"
            instructor
          />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-[11px] font-semibold text-[#00645F]">
                {reply.userName}
              </span>

              <BadgeCheck
                size={13}
                fill="#00BFB9"
                color="#FFFFFF"
                aria-label="مدرس تأییدشده"
              />

              <span className="text-[9px] text-[#777777]">
                | مدرس
              </span>
            </div>

            <span className="mt-0.5 block text-[9px] text-[#999999]">
              {reply.date}
            </span>
          </div>
        </div>

        <CommentActions
          likes={reply.likes}
          dislikes={reply.dislikes}
          vote={replyVote?.type ?? null}
          onVote={(type) => onVote(commentId, type)}
          onReply={onReply}
          compact
        />
      </div>

      <div className="my-2.5 h-px bg-[#DEDEDE]" />

      <p className="whitespace-pre-line break-words text-right text-[11px] leading-[22px] text-[#666666]">
        {reply.text}
      </p>

      {replyFormOpen && (
        <CommentForm
          replyTo={reply.userName}
          onCancel={onCancelReply}
          onSubmit={onSubmitReply}
        />
      )}
    </div>
  );
}

function CommentCard({
  comment,
  vote,
  replyVote,
  onVote,
  onReply,
  activeForm,
  onSubmitReply,
  onCancelReply,
}) {
  const replyFormOpen =
    activeForm?.commentId === comment.id &&
    activeForm?.type === "reply";

  return (
    <article className="rounded-[8px] border border-[#E5E5E5] bg-[#FAFAFA] p-3 shadow-[0_2px_7px_rgba(0,0,0,0.025)] sm:p-3.5">
     
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <div className="flex min-w-0 items-center gap-2">
          <UserAvatar
            src={comment.userAvatar}
            name={comment.userName}
            badge={comment.avatarBadge}
          />

          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
              <span className="text-[11px] font-semibold text-[#00645F]">
                {comment.userName}
              </span>

              <span
                dir="ltr"
                className="max-w-full break-all text-[10px] text-[#888888]"
              >
                {comment.userEmail}
              </span>
            </div>

            <span className="mt-0.5 block text-[9px] text-[#999999]">
              {comment.date}
            </span>
          </div>
        </div>

        <CommentActions
          likes={comment.likes}
          dislikes={comment.dislikes}
          vote={vote?.type ?? null}
          onVote={(type) => onVote(comment.id, type)}
          onReply={() => onReply(comment.id, "reply")}
        />
      </div>

     
      <div className="my-3 h-px bg-[#EAEAEA]" />

     
      <div className="text-right">
        <span className="text-[11px] font-semibold text-[#00645F]">
          سلام
        </span>

        <p className="mt-1 break-words text-[11px] leading-[22px] text-[#666666]">
          {comment.text}
        </p>
      </div>

      
      {activeForm?.commentId === comment.id &&
        activeForm?.type === "reply" &&
        !comment.reply && (
          <CommentForm
            replyTo={comment.userName}
            onCancel={onCancelReply}
            onSubmit={onSubmitReply}
          />
        )}

     
      {comment.reply && (
        <InstructorReply
          reply={comment.reply}
          commentId={comment.id}
          replyVote={replyVote}
          onVote={(id, type) => onVote(id, type, true)}
          onReply={() => onReply(comment.id, "reply")}
          replyFormOpen={replyFormOpen}
          onCancelReply={onCancelReply}
          onSubmitReply={onSubmitReply}
        />
      )}

      
      {activeForm?.commentId === comment.id &&
        activeForm?.type === "reply" &&
        comment.reply && (
          <CommentForm
            replyTo={comment.userName}
            onCancel={onCancelReply}
            onSubmit={onSubmitReply}
          />
        )}
    </article>
  );
}

export default function CourseComments({
  initialComments = INITIAL_COMMENTS,
  title = "نظرات",
}) {
  const [comments, setComments] = useState(initialComments);
  const [showAll, setShowAll] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [votes, setVotes] = useState({});
  const [replyVotes, setReplyVotes] = useState({});

  const handleVote = (commentId, type, isReply = false) => {
    const setVoteState = isReply ? setReplyVotes : setVotes;

    setVoteState((previous) => {
      const key = commentId;
      const current = previous[key]?.type ?? null;
      const nextType = current === type ? null : type;

      return {
        ...previous,
        [key]: {
          type: nextType,
        },
      };
    });

    const updateCounts = (items) =>
      items.map((comment) => {
        if (comment.id !== commentId) return comment;

        if (isReply && comment.reply) {
          const current = replyVotes[commentId]?.type ?? null;
          const nextType = current === type ? null : type;

          return {
            ...comment,
            reply: {
              ...comment.reply,
              likes:
                comment.reply.likes +
                (nextType === "like" ? 1 : 0) -
                (current === "like" ? 1 : 0),
              dislikes:
                comment.reply.dislikes +
                (nextType === "dislike" ? 1 : 0) -
                (current === "dislike" ? 1 : 0),
            },
          };
        }

        const current = votes[commentId]?.type ?? null;
        const nextType = current === type ? null : type;

        return {
          ...comment,
          likes:
            comment.likes +
            (nextType === "like" ? 1 : 0) -
            (current === "like" ? 1 : 0),
          dislikes:
            comment.dislikes +
            (nextType === "dislike" ? 1 : 0) -
            (current === "dislike" ? 1 : 0),
        };
      });

    setComments(updateCounts);
  };

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      userName: "شما",
      userEmail: "کاربر جدید",
      userAvatar: "",
      avatarBadge: false,
      date: new Intl.DateTimeFormat("fa-IR").format(new Date()),
      text,
      likes: 0,
      dislikes: 0,
      reply: null,
    };

    setComments((previous) => [newComment, ...previous]);
    setShowAll(true);
    setActiveForm(null);
  };

  const handleAddReply = (text) => {
    if (!activeForm) return;

    const commentId = activeForm.commentId;

    setComments((previous) =>
      previous.map((comment) => {
        if (comment.id !== commentId) return comment;

        const newReply = {
          userName: "شما",
          userAvatar: "",
          date: new Intl.DateTimeFormat("fa-IR").format(new Date()),
          text,
          likes: 0,
          dislikes: 0,
        };

        return {
          ...comment,
          reply: newReply,
        };
      })
    );

    setActiveForm(null);
  };

  const visibleComments = showAll
    ? comments
    : comments.slice(0, 2);

  return (
    <section
      dir="ltr"
      className="relative isolate w-full overflow-hidden bg-[#FAFAFA] px-3 pt-0 pb-5 sm:px-5"
    >
     
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-16 -z-10 h-44 w-44 rounded-full border-2 border-dashed border-[#E9ECEB]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-[15%] -z-10 h-20 w-20 rounded-full border border-dashed border-[#E9ECEB]"
      />

      <div className="mx-auto w-full max-w-[920px]">
       
        <div className="w-full min-w-0 md:ml-0 md:w-[65%] md:mr-auto">
          <h2 className="mb-3 text-right text-[16px] font-bold text-[#00645F]">
            {title}
          </h2>

          <div className="rounded-[10px] border border-[#EEEEEE] bg-white p-3 shadow-[0_4px_16px_rgba(0,0,0,0.035)] sm:p-4">
           
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-[#999999]">
                {comments.length} دیدگاه
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveForm((previous) =>
                    previous?.type === "new"
                      ? null
                      : { type: "new", commentId: null }
                  )
                }
                className="
                  inline-flex h-8 shrink-0 items-center
                  justify-center gap-1.5 rounded-[6px]
                  bg-[#00D5D0] px-3
                  text-[10px] font-medium text-white
                  transition-colors hover:bg-[#00BEB9]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#00645F]
                  sm:h-8 sm:text-[11px]
                "
              >
                <MessageCircle size={14} />
                ارسال دیدگاه جدید
              </button>
            </div>

           
            {activeForm?.type === "new" && (
              <CommentForm
                onCancel={() => setActiveForm(null)}
                onSubmit={handleAddComment}
              />
            )}

         
            <div className="mt-4 flex flex-col gap-3">
              {visibleComments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  vote={votes[comment.id]}
                  replyVote={replyVotes[comment.id]}
                  onVote={handleVote}
                  onReply={(commentId, type) =>
                    setActiveForm((previous) =>
                      previous?.commentId === commentId &&
                      previous?.type === type
                        ? null
                        : { commentId, type }
                    )
                  }
                  activeForm={activeForm}
                  onSubmitReply={handleAddReply}
                  onCancelReply={() => setActiveForm(null)}
                />
              ))}
            </div>

            
            {comments.length > 2 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((previous) => !previous)}
                  className="
                    inline-flex h-[28px] items-center
                    justify-center gap-1 rounded-full
                    border border-[#FF8500] bg-white px-3
                    text-[10px] font-medium text-[#FF8500]
                    transition-colors hover:bg-orange-50
                  "
                >
                  {showAll ? "نمایش کمتر" : "مشاهده بیشتر"}

                  <ChevronDown
                    size={13}
                    className={showAll ? "rotate-180" : ""}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}