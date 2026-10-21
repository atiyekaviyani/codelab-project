
import { useState } from "react";
import {
  Bookmark,
  UserRound,
  Wallet,
  ShoppingCart,
} from "lucide-react";

const DEFAULT_COURSE = {
  title: "دوره تخصصی و جامع React Js",
  description:
    "دوره 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت ReactJS، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید!",
  instructor: "مهدی اصغری",
  price: "۳,۲۴۰,۰۰۰",
  currency: "تومان",
};

export default function FeaturedCourseCard({
  course = {},
  courseDetailImage = "/course%20detail%20pic.png",
  onEnroll,
  href,
}) {
  const data = { ...DEFAULT_COURSE, ...course };

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll(data);
      return;
    }

    if (href) {
      window.location.assign(href);
      return;
    }

    console.log("ثبت‌نام در دوره:", data.title);
  };

  return (
    <section
      dir="rtl"
      className="w-full bg-[#FAFAFA] px-3 pt-4 pb-8 sm:px-5"
    >
      <div
        dir="ltr"
        className="
          mx-auto flex w-full max-w-[916px]
          flex-col gap-4
          md:flex-row md:items-stretch md:gap-5
        "
      >
        {/* کارت تصویر دوره - سمت چپ */}
        <div
          className="
            relative isolate order-1
            h-[290px] w-full min-w-0
            overflow-hidden rounded-[13px]
            border border-[#292929]
            bg-[#202020]
            shadow-[0_5px_16px_rgba(0,0,0,0.08)]
            md:w-[calc(50%-10px)]
            md:flex-none
            lg:w-[457px]
          "
        >
          <img
            src={courseDetailImage}
            alt="تصویر دوره تخصصی ReactJS"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* کارت اطلاعات دوره - سمت راست */}
        <article
          dir="rtl"
          className="
            order-2 flex min-h-[290px]
            w-full min-w-0 flex-col
            rounded-[13px]
            border border-[#EEEEEE]
            bg-white px-5 py-5
            shadow-[0_4px_15px_rgba(0,0,0,0.035)]
            sm:px-7
            md:w-[calc(50%-10px)]
            md:flex-none
            lg:w-[439px]
          "
        >
          {/* عنوان و ذخیره دوره */}
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                min-w-0 flex-1
                text-[17px] font-bold leading-7
                text-[#333333]
                sm:text-[20px]
              "
            >
              {data.title}
            </h3>

            <button
              type="button"
              aria-label={
                isBookmarked
                  ? "حذف از دوره‌های ذخیره‌شده"
                  : "ذخیره دوره"
              }
              aria-pressed={isBookmarked}
              onClick={() =>
                setIsBookmarked((previous) => !previous)
              }
              className="
                mt-1 flex h-7 w-7 shrink-0
                items-center justify-center
                rounded-md text-[#00BFC0]
                transition-colors duration-200
                hover:bg-[#00BFC0]/10
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#00BFC0]
              "
            >
              <Bookmark
                size={20}
                strokeWidth={1.8}
                fill={isBookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* توضیحات دوره */}
          <p
            className="
              mt-3 line-clamp-3
              text-justify text-[12px]
              leading-[20px] text-[#858585]
              sm:text-[13px]
            "
          >
            {data.description}
          </p>

          {/* اطلاعات مدرس و قیمت */}
          <div
            className="
              mt-auto flex flex-wrap
              items-center justify-between
              gap-x-3 gap-y-2 pt-5
            "
          >
            <div className="flex items-center gap-2 text-[#006D6D]">
              <UserRound
                size={17}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="whitespace-nowrap text-[13px] font-medium sm:text-[15px]">
                {data.instructor}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[#006D6D]">
              <Wallet
                size={19}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="text-[11px] sm:text-[12px]">
                {data.currency}
              </span>

              <span className="whitespace-nowrap text-[13px] font-bold sm:text-[15px]">
                {data.price}
              </span>
            </div>
          </div>

          {/* دکمه ثبت‌نام */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={handleEnroll}
              className="
                flex h-[41px] w-full max-w-[254px]
                shrink-0 items-center justify-center
                gap-2 rounded-[7px]
                bg-[#FF8800]
                px-4 text-[14px] font-bold
                text-white
                shadow-[0_3px_8px_rgba(255,136,0,0.15)]
                transition-all duration-200
                hover:bg-[#EA7900]
                active:scale-[0.98]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#FF8800]
                sm:text-[15px]
              "
            >
              <ShoppingCart
                size={19}
                strokeWidth={2}
                className="shrink-0"
              />

              <span>شرکت در دوره</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
