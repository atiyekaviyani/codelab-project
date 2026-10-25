import {
  MessageSquare,
  BriefcaseBusiness,
  BadgeCheck,
  MessagesSquare,
  ArrowLeft,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "مشاوره",
    description:
      "برای انتخاب مسیر یادگیری مناسب، از راهنمایی متخصصان ما کمک بگیرید.",
    icon: MessageSquare,
    theme: "orange",
    position: "lg:left-[74%] lg:top-[110px]",
  },
  {
    id: "02",
    title: "مدرک معتبر",
    description:
      "با گذراندن دوره‌ها و تکمیل مسیر یادگیری، مهارت‌های خود را تثبیت کنید.",
    icon: BadgeCheck,
    theme: "yellow",
    position: "lg:left-[49%] lg:top-[285px]",
  },
  {
    id: "03",
    title: "فرصت شغلی",
    description:
      "با یادگیری مهارت‌های کاربردی برای ورود به بازار کار آماده شوید.",
    icon: BriefcaseBusiness,
    theme: "blue",
    position: "lg:left-[25%] lg:top-[155px]",
  },
  {
    id: "04",
    title: "مشاوره",
    description:
      "در مسیر یادگیری، برای حل چالش‌ها از راهنمایی و پشتیبانی بهره‌مند شوید.",
    icon: MessagesSquare,
    theme: "teal",
    position: "lg:left-[2%] lg:top-[285px]",
  },
];

const themes = {
  orange: {
    card: "from-[#fffaf4] to-[#fff0df]",
    border: "border-[#fff9f0]",
    icon: "bg-gradient-to-br from-[#ffad35] via-[#ff8500] to-[#d96300]",
    halo: "bg-[#ff9a24]/15",
    text: "text-[#273746]",
    number: "bg-[#ff8b1a]/10 text-[#ed7800]",
    button: "bg-gradient-to-br from-[#ff9b20] to-[#ed7000]",
    line: "bg-[#ff8b16]",
    glow: "shadow-[0_22px_45px_-24px_rgba(235,122,0,0.45)]",
  },
  yellow: {
    card: "from-[#fffdf5] to-[#fff8df]",
    border: "border-white",
    icon: "bg-gradient-to-br from-[#ffdc50] via-[#f6b900] to-[#d99500]",
    halo: "bg-[#ffd63d]/20",
    text: "text-[#293848]",
    number: "bg-[#f5bf21]/15 text-[#c68d00]",
    button: "bg-gradient-to-br from-[#ffcf27] to-[#e8a400]",
    line: "bg-[#f3b900]",
    glow: "shadow-[0_22px_45px_-24px_rgba(224,171,0,0.4)]",
  },
  blue: {
    card: "from-[#f5fbff] to-[#e5f4ff]",
    border: "border-white",
    icon: "bg-gradient-to-br from-[#45c5ff] via-[#079beb] to-[#0873ca]",
    halo: "bg-[#2baaff]/15",
    text: "text-[#12465b]",
    number: "bg-[#079beb]/10 text-[#0789d8]",
    button: "bg-gradient-to-br from-[#16b5ff] to-[#087bdb]",
    line: "bg-[#079beb]",
    glow: "shadow-[0_22px_45px_-24px_rgba(0,139,223,0.4)]",
  },
  teal: {
    card: "from-[#f0fffd] to-[#ddf7f4]",
    border: "border-white",
    icon: "bg-gradient-to-br from-[#53e3d8] via-[#08bcb4] to-[#008c91]",
    halo: "bg-[#21cfc4]/15",
    text: "text-[#11545b]",
    number: "bg-[#00aaa5]/10 text-[#009c98]",
    button: "bg-gradient-to-br from-[#15c9bf] to-[#009b9c]",
    line: "bg-[#00aaa5]",
    glow: "shadow-[0_22px_45px_-24px_rgba(0,169,161,0.4)]",
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  const theme = themes[service.theme];

  return (
    <article
      className={`
    group relative flex min-h-[235px] w-full max-w-[300px]
    flex-col items-center rounded-[27px]
    border-[6px] ${theme.border}
    bg-gradient-to-br ${theme.card}
    px-5 pb-5 pt-[58px] text-center
    ${theme.glow}
    transition-all duration-500 ease-out
    hover:-translate-y-2 hover:shadow-2xl
    lg:absolute lg:h-[245px] lg:w-[265px]
    lg:min-h-0 lg:max-w-none lg:px-4 lg:pt-[58px]
    ${service.position}
  `}
      style={{
        transform: `rotate(${
          service.id === "01"
            ? "-2deg"
            : service.id === "02"
              ? "-1.5deg"
              : service.id === "03"
                ? "-3deg"
                : "-2deg"
        })`,
      }}
    >
      <div
        className={`
          absolute -top-[24px] left-1/2 z-10
          flex h-[86px] w-[86px] -translate-x-1/2
          items-center justify-center rounded-full
          border-[6px] border-white/80
          ${theme.icon}
          shadow-[0_12px_20px_-7px_rgba(0,0,0,0.32),inset_0_2px_5px_rgba(255,255,255,0.5)]
          transition-all duration-500
          group-hover:-translate-x-1/2 group-hover:-translate-y-2
          group-hover:rotate-3
        `}
      >
        <Icon
          size={35}
          strokeWidth={1.8}
          className="text-white drop-shadow-sm"
        />
      </div>

      <span
        className={`
          absolute right-5 top-5
          flex h-8 min-w-9 items-center justify-center
          rounded-xl px-2 text-sm font-extrabold
          ${theme.number}
        `}
      >
        {service.id}
      </span>

      <h3 className={`mt-1 text-xl font-extrabold ${theme.text}`}>
        {service.title}
      </h3>

      <p className="mt-4 max-w-[245px] text-sm leading-7 text-slate-500">
        {service.description}
      </p>

      <span
        className={`
          absolute bottom-3 left-3
          h-8 w-8 rounded-bl-[25px]
          border-b-[3px] border-l-[3px]
          border-transparent transition-all duration-300
          group-hover:h-10 group-hover:w-10
          ${theme.line.replace("bg-", "border-")}
        `}
      />

      <button
        type="button"
        aria-label={`اطلاعات بیشتر درباره ${service.title}`}
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent("codelab:service-click", {
              detail: service,
            }),
          )
        }
        className={`
          absolute bottom-4 right-4
          flex h-11 w-11 items-center justify-center
          rounded-full text-white
          shadow-lg transition-all duration-300
          hover:scale-110 hover:shadow-xl
          focus-visible:outline-none focus-visible:ring-4
          focus-visible:ring-black/10
          ${theme.button}
        `}
      >
        <ArrowLeft size={21} strokeWidth={2.2} />
      </button>
    </article>
  );
}

function DottedDecoration({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-5 gap-[7px] opacity-40 ${className}`}
    >
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={index}
          className="h-[6px] w-[6px] rounded-full bg-[#79d9d8]"
        />
      ))}
    </div>
  );
}

function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-24 -top-36 h-[330px] w-[480px] rotate-[-18deg] rounded-[42%] bg-gradient-to-br from-[#d5f5f3]/90 to-[#f0fbfa]/10 blur-[1px]" />

      <div className="absolute -bottom-52 -left-28 h-[370px] w-[540px] rotate-[15deg] rounded-[45%] bg-gradient-to-tr from-[#d8f7f4]/80 to-transparent" />

      <div className="absolute right-[5%] top-[12%] h-14 w-14 rounded-full bg-gradient-to-br from-[#d7f3f4] to-[#a8dfe5]/40 shadow-[0_12px_25px_rgba(65,171,185,0.12)]" />

      <div className="absolute bottom-[12%] right-[2%] h-20 w-20 rounded-full bg-[#a8eeea]/40 blur-2xl" />

      <div className="absolute left-[4%] top-[44%] h-12 w-12 rotate-45 rounded-xl bg-gradient-to-br from-[#a2efeb]/80 to-[#08aaa9]/20 shadow-lg blur-[2px]" />

      <div className="absolute bottom-[5%] left-[4%] h-12 w-12 rotate-45 rounded-xl border border-white/80 bg-gradient-to-br from-[#e5f9f8] to-[#a6dfe3]/40" />

      <DottedDecoration className="absolute left-[10%] top-[28%]" />
      <DottedDecoration className="absolute bottom-[12%] right-[12%]" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      dir="rtl"
      aria-labelledby="services-heading"
      className="relative isolate w-full overflow-hidden bg-[#f9fcfc] py-20 sm:py-24 lg:min-h-[850px] lg:py-16"
    >
      <FloatingShapes />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8">
        <header className="relative z-20 mx-auto text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#bcece9] bg-[#e8f9f8]/90 px-4 py-2 text-xs font-bold text-[#177780] shadow-[0_3px_12px_rgba(0,177,174,0.10)]">
            <GraduationCap size={16} />
            <span>خدمات ما</span>
            <Sparkles size={14} className="text-[#00aaa5]" />
          </div>

          <h2
            id="services-heading"
            className="mt-5 text-4xl font-black tracking-tight text-[#202331] sm:text-5xl lg:text-[58px] lg:leading-[1.5]"
          >
            خدمات{" "}
            <span className="bg-gradient-to-l from-[#00aaa5] to-[#28c9c0] bg-clip-text text-transparent">
              ما
            </span>
          </h2>

          <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base lg:text-lg">
            مجموعه‌ای از تمام آنچه شما نیاز دارید
          </p>

          <div className="mx-auto mt-6 h-[5px] w-28 rounded-full bg-gradient-to-l from-[#ff9b20] via-[#a7c99e] to-[#00aaa5]" />
        </header>

        <div className="relative mx-auto mt-20 flex max-w-[1000px] flex-col items-center gap-16 pb-8 lg:mt-0 lg:block lg:h-[620px] lg:max-w-[1200px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 620"
            preserveAspectRatio="none"
            fill="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <linearGradient
                id="servicePathGradient"
                x1="80"
                y1="300"
                x2="1120"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00aaa5" />
                <stop offset=".48" stopColor="#8bdedb" />
                <stop offset="1" stopColor="#b3e7e6" />
              </linearGradient>
            </defs>

            <path
              d="M65 390 C185 365 255 235 355 240 S510 405 600 400 S785 285 870 190 S1030 115 1120 145"
              stroke="url(#servicePathGradient)"
              strokeWidth="2.5"
              strokeDasharray="3 9"
              strokeLinecap="round"
            />

            <circle
              cx="355"
              cy="240"
              r="6"
              fill="#0a9fe5"
              stroke="#e9f8ff"
              strokeWidth="3"
            />
            <circle
              cx="600"
              cy="400"
              r="6"
              fill="#f2b600"
              stroke="#fff8df"
              strokeWidth="3"
            />
            <circle
              cx="1120"
              cy="145"
              r="6"
              fill="#ff900d"
              stroke="#fff1dd"
              strokeWidth="3"
            />
          </svg>

          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
