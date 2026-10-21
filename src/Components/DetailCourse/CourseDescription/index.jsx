import { useState } from "react";
import {
  UsersRound,
  Star,
  PanelTop,
  BookOpen,
  PanelsTopLeft,
  ChartNoAxesColumnIncreasing,
  Clock3,
  ChevronDown,
} from "lucide-react";

const DEFAULT_DESCRIPTION = `قبل از آموزش ری اکت ReactJS ابتدایی کار به شما بگیم که تکنولوژی ری اکت یک برنامه نویسان در دنیای امروز هست. اما اغراقی نکردیم، به قول به تمام معنا و دنیایی بی انتها از پروژه هایی که میشه با اون نوشت، نشون هم خیلی سریع و راحت تکنولوژی به وب رو درک کنیم و دستچین شرکت فیسبوک هست که اینستاگرام رو هم با اون طراحی کرده!

کامپوننت محور بودن ری اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در بخش های مختلف پروژه از اون استفاده کنید. شما میتونید هر پروژه های بسازید که بدون نیاز به رفرش، هر دیتا و بخش از صفحه رو تغییر بدید و این هم سرعت توسعه رو بالا میبره و هم زمان کدنویسی رو به تمام پروژه رو خیلی کوتاه‌تر از قبل کرده!

خلاصه به شما تبریک میگیم که خیلی دقیق مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان برای یادگیری تکنولوژی ری اکت هست، پس از این بابت اطمینان داشته باشید.

شما با دوره آموزش ری اکت سبزلرن، نه تنها به این تکنولوژی به تسلط ۱۰۰ درصدی می‌رسید؛ بلکه طوری آموزش عملی می‌بینید و راهنمایی می‌گیرید که یک راست وارد بازار کار بشید. بی‌حرف و حدیث، پس نترسید!

اگه به برنامه‌نویسی وب، طراحی رابط کاربری (UI) و به طور کلی پروژه‌های تعاملی مدرن و سریع علاقه دارید، یادگیری ری اکت یک انتخاب مناسب برای شما است.`;

const DEFAULT_INFO = {
  studentCount: "۲۱۶",
  rating: "۴.۷",
  completionPercent: 87,
  category: "فرانت اند",
  prerequisites: "HTML , CSS , JS",
  trainingType: "حضوری و غیر حضوری",
  courseStatus: "درحال برگزاری",
  startDate: "۱۴۰۳/۰۲/۱۱",
  endDate: "۱۴۰۳/۰۲/۱۱",
};

const INFO_ITEMS = [
  {
    key: "category",
    label: "دسته بندی",
    icon: PanelTop,
  },
  {
    key: "prerequisites",
    label: "پیش نیاز ها",
    icon: BookOpen,
  },
  {
    key: "trainingType",
    label: "نوع آموزش",
    icon: PanelsTopLeft,
  },
  {
    key: "courseStatus",
    label: "وضعیت دوره",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    key: "startDate",
    label: "تاریخ شروع دوره",
    icon: Clock3,
  },
  {
    key: "endDate",
    label: "تاریخ پایان دوره",
    icon: Clock3,
  },
];

function InfoItem({ label, value, icon: Icon }) {
  return (
    <div
      className="
        flex min-h-[69px] w-full min-w-0
        items-center justify-between gap-2
        rounded-[10px] border border-[#E5E5E5]
        bg-[#F6F6F6] px-3 py-3
        shadow-[0_2px_5px_rgba(0,0,0,0.025)]
      "
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-[10px] leading-4 text-[#999999]">{label}</span>

        <span className="break-words text-[13px] font-medium leading-5 text-[#006D6D] sm:text-[14px]">
          {value}
        </span>
      </div>

      <Icon
        size={20}
        strokeWidth={1.8}
        aria-hidden="true"
        className="shrink-0 text-[#006D6D]"
      />
    </div>
  );
}

function CourseInfoSidebar({ info }) {
  const completion = Math.min(
    100,
    Math.max(0, Number(info.completionPercent) || 0),
  );

  return (
    <aside
      aria-label="اطلاعات تکمیلی دوره"
      className="
        relative h-fit w-full min-w-0
        overflow-hidden border-l-[3px] border-[#00C9C3]
        bg-white px-3 py-4
        shadow-[0_3px_12px_rgba(0,0,0,0.035)]
        sm:px-4
        md:w-[32%] md:flex-none
        lg:w-[286px]
      "
    >
      <div className="grid grid-cols-2 gap-2">
        <div
          className="
            flex min-h-[60px] min-w-0 flex-col
            items-center justify-center gap-1
            rounded-[10px] border border-[#E5E5E5]
            bg-[#F6F6F6] py-2
            shadow-[0_2px_5px_rgba(0,0,0,0.025)]
          "
        >
          <div className="flex items-center justify-center gap-1.5">
            <UsersRound
              size={19}
              strokeWidth={1.8}
              className="shrink-0 text-[#006D6D]"
            />

            <span className="text-[13px] font-bold text-[#333333]">
              {info.studentCount}
            </span>
          </div>

          <span className="text-[10px] text-[#999999]">دانشجو</span>
        </div>

        <div
          className="
            flex min-h-[60px] min-w-0 flex-col
            items-center justify-center gap-1
            rounded-[10px] border border-[#E5E5E5]
            bg-[#F6F6F6] py-2
            shadow-[0_2px_5px_rgba(0,0,0,0.025)]
          "
        >
          <div className="flex items-center justify-center gap-1.5">
            <Star size={21} strokeWidth={1.6} fill="#FFBE00" color="#FFBE00" />

            <span className="text-[13px] font-bold text-[#333333]">
              {info.rating}
            </span>
          </div>

          <span className="text-[10px] text-[#999999]">رضایت</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[10px] text-[#777777]">درصد تکمیل دوره</span>

          <span className="text-[10px] font-bold text-[#006D6D]">
            ٪{new Intl.NumberFormat("fa-IR").format(completion)}
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="درصد تکمیل دوره"
          aria-valuenow={completion}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-[6px] w-full overflow-hidden rounded-full bg-[#E5E5E5]"
        >
          <div
            className="h-full rounded-full bg-[#00C9C3] transition-[width] duration-300"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      <div className="my-[14px] h-px w-full bg-[#EEEEEE]" />

      <div className="flex flex-col gap-[14px]">
        {INFO_ITEMS.map((item) => (
          <InfoItem
            key={item.key}
            label={item.label}
            value={info[item.key]}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
}

function DescriptionPanel({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full min-w-0 md:flex-1">
      <h2 className="mb-3 text-right text-[16px] font-bold leading-7 text-[#006D6D]">
        توضیحات
      </h2>

      <article
        className="
          flex min-h-[419px] min-w-0 flex-col
          rounded-[12px] border border-[#EEEEEE]
          bg-white px-4 py-5
          shadow-[0_4px_15px_rgba(0,0,0,0.035)]
          sm:px-6 sm:py-5
        "
      >
        <div
          className={`
            relative min-w-0
            ${isExpanded ? "" : "max-h-[320px] overflow-hidden"}
          `}
        >
          <div
            className="
              whitespace-pre-line break-words
              text-justify text-[13px]
              font-normal leading-[22px]
              text-[#929292]
            "
          >
            {description}
          </div>

          {!isExpanded && (
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-0 bottom-0 h-20
                bg-gradient-to-t
                from-white via-white/80 to-transparent
              "
            />
          )}
        </div>

        <div
          className={`
            relative z-10 flex justify-center
            ${isExpanded ? "mt-5" : "mt-auto pt-3"}
          `}
        >
          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((previous) => !previous)}
            className="
              inline-flex h-[34px] w-[130px]
              items-center justify-center gap-1.5
              rounded-full border border-[#006D6D]/20
              bg-white px-3
              text-[12px] font-medium text-[#006D6D]
              shadow-[0_2px_6px_rgba(0,109,109,0.04)]
              transition-colors duration-200
              hover:bg-[#006D6D]/5
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#006D6D]
            "
          >
            <span>{isExpanded ? "مطالعه کمتر" : "مطالعه بیشتر"}</span>

            <ChevronDown
              size={15}
              strokeWidth={1.8}
              className={`transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </article>
    </div>
  );
}

export default function CourseDescription({
  studentCount = DEFAULT_INFO.studentCount,
  rating = DEFAULT_INFO.rating,
  completionPercent = DEFAULT_INFO.completionPercent,
  category = DEFAULT_INFO.category,
  prerequisites = DEFAULT_INFO.prerequisites,
  trainingType = DEFAULT_INFO.trainingType,
  courseStatus = DEFAULT_INFO.courseStatus,
  startDate = DEFAULT_INFO.startDate,
  endDate = DEFAULT_INFO.endDate,
  description = DEFAULT_DESCRIPTION,
}) {
  const info = {
    studentCount,
    rating,
    completionPercent,
    category,
    prerequisites,
    trainingType,
    courseStatus,
    startDate,
    endDate,
  };

  return (
    <section
      dir="rtl"
      className="relative isolate w-full overflow-hidden bg-[#FAFAFA] px-3 pt-5 pb-0 sm:px-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 520"
        preserveAspectRatio="none"
        className="
          pointer-events-none absolute inset-0
          -z-10 h-full w-full
        "
        fill="none"
      >
        <path
          d="M-80 115 C150 30 220 205 430 115 S760 50 940 150 S1120 220 1280 100"
          stroke="#E9ECEB"
          strokeWidth="2"
          strokeDasharray="3 8"
        />

        <path
          d="M-60 410 C160 320 300 490 510 390 S820 310 1000 410 S1140 455 1270 365"
          stroke="#E9ECEB"
          strokeWidth="2"
          strokeDasharray="3 8"
        />
      </svg>

      <div
        className="
          relative mx-auto flex w-full max-w-[920px]
          flex-col gap-5
          md:flex-row
          md:items-start
        "
      >
        <CourseInfoSidebar info={info} />

        <div className="order-first w-full min-w-0 md:order-none md:flex-1">
          <DescriptionPanel description={description} />
        </div>
      </div>
    </section>
  );
}
