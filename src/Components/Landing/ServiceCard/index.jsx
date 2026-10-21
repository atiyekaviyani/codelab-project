import {
  MessageSquare,
  BriefcaseBusiness,
  BadgeCheck,
  MessagesSquare,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "مشاوره",
    description:
      "متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک ایجاد شده است.",
    icon: MessageSquare,
    color: "#e58b00",
    bg: "#eae0d0",
    position: "lg:top-[105px] lg:right-[7%]",
  },
  {
    id: 2,
    title: "مدرک معتبر",
    description:
      "متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک ایجاد شده است.",
    icon: BadgeCheck,
    color: "#c4b400",
    bg: "#f0eee0",
    position: "lg:top-[205px] lg:right-[27%]",
  },
  {
    id: 3,
    title: "فرصت شغلی",
    description:
      "متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک ایجاد شده است.",
    icon: BriefcaseBusiness,
    color: "#0789d0",
    bg: "#dceef5",
    position: "lg:top-[125px] lg:left-[32%]",
  },
  {
    id: 4,
    title: "مشاوره",
    description:
      "متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک ایجاد شده است.",
    icon: MessagesSquare,
    color: "#00bcb5",
    bg: "#dff1f0",
    position: "lg:top-[205px] lg:left-[7%]",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className={`
        relative flex h-[155px] w-full max-w-[220px]
        flex-col items-center justify-center
        rounded-xl border border-white/70
        px-4 pt-7 text-center
        shadow-[0_-2px_3px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-lg
        lg:absolute lg:h-[122px] lg:w-[150px]
        lg:max-w-none lg:rounded-xl lg:px-3 lg:pt-6
        ${service.position}
      `}
      style={{ backgroundColor: service.bg }}
    >
      <div
        className="
          absolute -top-8 left-1/2 z-10
          flex h-[58px] w-[58px] -translate-x-1/2
          items-center justify-center rounded-full
          border-[3px] border-white shadow-md
          transition-transform duration-300
          hover:scale-110
        "
        style={{ backgroundColor: service.color }}
      >
        <Icon size={27} strokeWidth={1.8} color="#ffffff" />
      </div>

      <h3
        className="mt-1 text-[15px] font-bold"
        style={{ color: service.color }}
      >
        {service.title}
      </h3>

      <p className="mt-3 text-[9px] leading-[1.8] text-gray-400">
        {service.description}
      </p>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-[#f8f8f8] py-16 sm:py-20"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="relative z-10 text-center">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-gray-900">
            خدمات ما
            <span className="h-2.5 w-2.5 rounded-full bg-[#00bdb5]" />
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            مجموعه‌ای از تمام آنچه شما نیاز دارید
          </p>
        </div>

        <div
          className="
            relative mx-auto mt-16
            flex max-w-[650px] flex-wrap
            items-center justify-center gap-x-8 gap-y-14
            pb-6
            lg:mt-0 lg:h-[390px] lg:max-w-[900px]
            lg:gap-0 lg:pb-0
          "
        >
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 900 390"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M115 65
                 C125 175 195 310 340 335
                 C430 355 495 305 505 255
                 C515 205 555 205 620 225
                 C710 255 775 220 790 190"
              stroke="#dedede"
              strokeWidth="2"
              strokeDasharray="2 5"
              strokeLinecap="round"
            />

            <circle
              cx="115"
              cy="65"
              r="33"
              stroke="#dedede"
              strokeWidth="2"
              strokeDasharray="2 5"
            />

            <circle
              cx="505"
              cy="255"
              r="33"
              stroke="#dedede"
              strokeWidth="2"
              strokeDasharray="2 5"
            />
          </svg>

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
