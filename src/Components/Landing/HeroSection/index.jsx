import {
  GraduationCap,
  Play,
  Search,
  UsersRound,
  Presentation,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      id="home"
      className="relative isolate overflow-hidden bg-[#f8f8f8] text-[#424242]"
    >
      <div className="mx-auto grid min-h-[445px] max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:gap-10 lg:grid-cols-2 lg:gap-8 lg:px-[5%] lg:py-10 xl:px-[7%]">
        <div className="relative z-10 order-1 flex flex-col items-center text-center lg:items-start lg:text-right">
          <span className="mb-3 text-sm font-medium text-[#00c9c5]">
            مسیر یادگیری تو از اینجا شروع می‌شود
          </span>

          <h1 className="text-3xl font-extrabold leading-[1.7] tracking-tight sm:text-4xl lg:text-[40px]">
            عنوان <span className="text-[#00c9c5]">آموزشگاه</span>
          </h1>

          <p className="mt-3 max-w-[440px] text-sm leading-8 text-[#666] sm:text-base">
            مرجع آموزش زنده و تعاملی برنامه‌نویسی حوزه وب
            <br className="hidden sm:block" />
            با دسترسی به بیش از هزاران ویدیوی آموزشی به زبان فارسی
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            role="search"
            className="mt-6 flex h-[52px] w-full max-w-[300px] items-center
              rounded-full border border-[#e5e5e5] bg-white p-1.5
              shadow-[0_2px_8px_rgba(0,0,0,0.04)]
              transition focus-within:border-[#00c9c5]
              sm:max-w-[340px]"
          >
            <input
              type="search"
              placeholder="دنبال چی می‌گردی؟..."
              aria-label="جست‌وجوی دوره‌های آموزشی"
              className="min-w-0 flex-1 bg-transparent px-3 text-right
                text-xs text-[#444] outline-none placeholder:text-[#aaa]
                sm:text-sm"
            />

            <button
              type="submit"
              aria-label="جست‌وجو"
              className="flex h-9 w-9 shrink-0 items-center justify-center
                rounded-full bg-[#e78300] text-white
                transition hover:bg-[#cf7100] focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-[#e78300]"
            >
              <Search size={18} strokeWidth={2} />
            </button>
          </form>
        </div>

        <div className="relative order-2 mx-auto w-full max-w-[480px] lg:order-1 lg:max-w-[490px]">
          <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[420px]">
            <div className="absolute left-[12%] top-[8%] h-[78%] w-[76%] rounded-[24px] bg-gradient-to-br from-[#bcefed] via-[#d8f0e9] to-[#f0e6d4]" />

            <svg
              viewBox="0 0 440 380"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M 10 185 C 18 130, 75 130, 95 165 S 25 245, 80 265 S 180 205, 250 245 S 395 330, 430 245"
                stroke="#00c9c5"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="1 8"
              />
              <path
                d="M 5 95 C 35 155, 75 155, 105 125"
                stroke="#d8d8d8"
                strokeWidth="1.4"
                strokeDasharray="2 4"
              />
              <path
                d="M 325 100 C 350 45, 405 45, 420 75 S 390 110, 365 88"
                stroke="#d8d8d8"
                strokeWidth="1.4"
                strokeDasharray="2 4"
              />
              <circle
                cx="363"
                cy="62"
                r="21"
                stroke="#d8d8d8"
                strokeDasharray="2 3"
              />
            </svg>
            <img
              src="hero section pic.png"
              alt="دانشجو    "
              className="absolute inset-0 z-[1] h-full w-full object-contain"
              fetchPriority="high"
            />

            <div className="absolute left-[82%] top-[22%] z-10 text-[#424242]">
              <GraduationCap
                size={62}
                strokeWidth={2.5}
                className="-rotate-[15deg]"
              />
            </div>

            <button
              type="button"
              aria-label="مشاهده ویدیوی معرفی"
              className="absolute left-[76%] top-[35%] z-20 flex h-10 w-10
                items-center justify-center rounded-full bg-[#00c9c5]
                text-white shadow-md transition hover:scale-110"
            >
              <Play size={21} fill="white" className="mr-0.5" />
            </button>

            <div
              className="absolute left-0 top-[7%] z-20 flex min-w-[143px]
                items-center gap-2 rounded-lg border border-[#e9e9e9]
                bg-white px-3 py-4 shadow-[0_2px_7px_rgba(0,0,0,0.09)]"
            >
              <span
                className="absolute -top-6 left-1/2 flex h-12 w-12
                -translate-x-1/2 items-center justify-center rounded-full
                bg-[#ffb600] text-white shadow-md"
              >
                <GraduationCap size={27} />
              </span>

              <UsersRound size={19} className="mt-3 text-[#888]" />

              <span className="mt-3 whitespace-nowrap text-sm font-semibold">
                ۱۰۰۰+ دانشجو
              </span>
            </div>

            <div
              className="absolute bottom-[-1%] left-[65%] z-20 flex
                min-w-[145px] items-center gap-2 rounded-lg border
                border-[#e9e9e9] bg-white px-3 py-4
                shadow-[0_2px_7px_rgba(0,0,0,0.09)]"
            >
              <span
                className="absolute -top-6 left-1/2 flex h-12 w-12
                -translate-x-1/2 items-center justify-center rounded-full
                bg-[#f39800] text-white shadow-md"
              >
                <Presentation size={26} />
              </span>

              <UsersRound size={19} className="mt-3 text-[#888]" />

              <span className="mt-3 whitespace-nowrap text-sm font-semibold">
                ۵۰+ مدرس
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
