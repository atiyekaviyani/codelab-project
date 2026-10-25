import { createPortal } from "react-dom";
import { useEffect } from "react";
import {
  X,
  Link,
  GraduationCap,
  BookOpen,
  FileText,
  Sparkles,
  ArrowUpLeft,
} from "lucide-react";

export default function InstructorModal({ instructor, onClose }) {
  useEffect(() => {
    if (!instructor) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [instructor, onClose]);

  if (!instructor) return null;

  const stats = [
    {
      label: "دوره آموزشی",
      value: instructor.coursesCount ?? 0,
      icon: BookOpen,
    },
    {
      label: "مقاله آموزشی",
      value: instructor.articlesCount ?? 0,
      icon: FileText,
    },
    {
      label: "سال تجربه",
      value: instructor.experience ?? 0,
      icon: GraduationCap,
    },
  ];

  return createPortal(
    <div
      className="
        instructor-modal-backdrop
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-x-hidden overflow-y-auto
        overscroll-contain
        bg-[#061C1C]/65
        p-3 backdrop-blur-md
        sm:p-6
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="instructor-modal-title"
        dir="rtl"
        className="
          instructor-modal-panel
          relative isolate my-auto
          w-full max-w-[760px] shrink-0
          overflow-hidden rounded-[26px]
          border border-white/15
          bg-[#102B2B]
          shadow-[0_30px_100px_rgba(0,0,0,0.38)]
          sm:rounded-[32px]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            -z-10 overflow-hidden
          "
        >
          <div
            className="
              instructor-modal-orb instructor-modal-orb-one
              absolute -right-24 -top-24
              h-72 w-72 rounded-full
              bg-teal-400/20 blur-[75px]
            "
          />

          <div
            className="
              instructor-modal-orb instructor-modal-orb-two
              absolute -bottom-28 -left-20
              h-72 w-72 rounded-full
              bg-emerald-400/15 blur-[80px]
            "
          />

          <div
            className="
              instructor-modal-glass
              absolute right-[42%] top-10
              h-16 w-16 rounded-full
              border border-white/10
              bg-white/[0.035]
              shadow-[inset_0_0_18px_rgba(255,255,255,0.05)]
            "
          />

          <div
            className="
              instructor-modal-glass-delayed
              absolute bottom-24 left-[12%]
              h-10 w-10 rounded-full
              border border-teal-200/15
              bg-teal-100/[0.04]
            "
          />

          <div
            className="
              absolute right-[16%] top-[38%]
              h-1.5 w-1.5 rounded-full
              bg-teal-300/60
              shadow-[0_0_14px_rgba(94,234,212,0.6)]
            "
          />

          <div
            className="
              absolute bottom-[26%] right-[56%]
              h-1 w-1 rounded-full
              bg-emerald-200/60
              shadow-[0_0_12px_rgba(167,243,208,0.5)]
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-bl
              from-white/[0.035] via-transparent
              to-teal-300/[0.035]
            "
          />
        </div>

        <div
          aria-hidden="true"
          className="
            absolute inset-x-0 top-0 h-px
            bg-gradient-to-l
            from-transparent via-teal-300/80 to-transparent
          "
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="بستن پنجره"
          className="
            absolute left-4 top-4 z-20
            flex size-10 items-center justify-center
            rounded-xl border border-white/10
            bg-white/[0.07] text-white/80
            backdrop-blur-md
            transition-all duration-300
            hover:rotate-90 hover:border-white/20
            hover:bg-white/15 hover:text-white
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-teal-300
            sm:left-5 sm:top-5
          "
        >
          <X size={19} />
        </button>

        <div
          className="
            instructor-modal-content
            relative z-10
            grid grid-cols-1 gap-7
            px-5 pb-7 pt-16
            sm:gap-8 sm:px-9 sm:pb-9
            md:grid-cols-[minmax(0,1fr)_245px]
            md:items-center md:gap-10
            md:px-10 md:py-10
          "
        >
          <div className="order-2 min-w-0 md:order-1">
            <div className="mb-4 flex items-center gap-2">
              <span
                className="
                  flex size-8 items-center justify-center
                  rounded-xl border border-teal-300/15
                  bg-teal-300/10 text-teal-200
                "
              >
                <Sparkles size={15} />
              </span>

              <span className="text-xs font-semibold tracking-wide text-teal-200/90">
                آشنایی با مدرس
              </span>
            </div>

            <h2
              id="instructor-modal-title"
              className="
                text-2xl font-extrabold
                leading-relaxed tracking-tight text-white
                sm:text-3xl
              "
            >
              {instructor.name}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-7 text-white/65">
              {instructor.bio || "همراه شما در مسیر یادگیری و توسعه مهارت‌ها"}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="
                    rounded-2xl border border-white/[0.09]
                    bg-white/[0.045] px-2 py-3
                    text-center backdrop-blur-sm
                    transition-all duration-300
                    hover:border-teal-300/25
                    hover:bg-teal-300/[0.07]
                    sm:px-3 sm:py-4
                  "
                >
                  <Icon
                    size={17}
                    className="mx-auto mb-2 text-teal-200"
                    strokeWidth={1.8}
                  />

                  <span className="block text-lg font-extrabold text-white sm:text-xl">
                    {value}
                  </span>

                  <span className="mt-1 block text-[10px] leading-5 text-white/55 sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {(instructor.socialLinks?.linkedin ||
              instructor.socialLinks?.instagram) && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-medium text-white/55">
                  راه‌های ارتباطی
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {instructor.socialLinks?.linkedin && (
                    <a
                      href={instructor.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex min-h-10 items-center gap-2
                        rounded-xl border border-teal-300/20
                        bg-teal-300/[0.08] px-3.5 py-2
                        text-xs font-semibold text-teal-100
                        transition-all duration-300
                        hover:border-teal-200/50
                        hover:bg-teal-300/[0.16]
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-teal-300
                      "
                    >
                      <Link size={14} />
                      لینکدین
                      <ArrowUpLeft size={13} />
                    </a>
                  )}

                  {instructor.socialLinks?.instagram && (
                    <a
                      href={instructor.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex min-h-10 items-center gap-2
                        rounded-xl border border-white/10
                        bg-white/[0.045] px-3.5 py-2
                        text-xs font-semibold text-white/80
                        transition-all duration-300
                        hover:border-white/20 hover:bg-white/10
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-teal-300
                      "
                    >
                      اینستاگرام
                      <ArrowUpLeft size={13} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="order-1 mx-auto w-full max-w-[220px] md:order-2 md:max-w-none">
            <div
              className="
                instructor-modal-image-frame
                relative rounded-[25px]
                border border-white/15
                bg-white/[0.045] p-2.5
                shadow-[0_20px_55px_rgba(0,0,0,0.22)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute -inset-3 -z-10
                  rounded-[30px] bg-teal-300/10 blur-2xl
                "
              />

              <div className="overflow-hidden rounded-[19px] bg-white/5">
                <img
                  src={instructor.image}
                  alt={`تصویر ${instructor.name}`}
                  className="
                    aspect-[4/4.7] w-full object-cover
                    transition-transform duration-700
                    hover:scale-[1.035]
                  "
                />
              </div>

              {instructor.featured && (
                <div
                  className="
                    absolute -bottom-3 left-1/2
                    flex -translate-x-1/2 items-center gap-1.5
                    whitespace-nowrap rounded-full
                    border border-teal-100/20
                    bg-[#174544] px-3.5 py-2
                    text-[11px] font-semibold text-teal-100
                    shadow-lg
                  "
                >
                  <Sparkles size={13} className="text-amber-300" />
                  استاد منتخب
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/45 md:mt-6">
              <GraduationCap size={16} className="text-teal-200/80" />
              <span>همراه شما در مسیر یادگیری</span>
            </div>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}
