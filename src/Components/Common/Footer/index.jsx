import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpLeft,
  ArrowLeft,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const footerLinkColumns = [
  {
    id: "learning",
    title: "دسترسی سریع",
    links: [
      { label: "اساتید برتر", to: "/#teachers" },
      { label: "دسته‌بندی‌ها", to: "/#categories" },
      { label: "خدمات ما", to: "/#services" },
      { label: "ورود به حساب", to: "/login" },
    ],
  },
  {
    id: "content",
    title: "بخش‌های سایت",
    links: [
      { label: "دوره‌های آموزشی", to: "/#courses" },
      { label: "اخبار و مقالات", to: "/#articles" },
      { label: "پادکست‌ها", to: "/#podcasts" },
      { label: "تماس با ما", to: "/#contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "تلگرام",
    href: "https://telegram.org/",
    Icon: FaTelegramPlane,
  },
  {
    label: "اینستاگرام",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "یوتیوب",
    href: "https://www.youtube.com/",
    Icon: FaYoutube,
  },
  {
    label: "لینکدین",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedinIn,
  },
];

const contactInfo = {
  email: "info@pazhooheshgah.ir",
  phone: "+981100000000",
  phoneLabel: "۰۱۱ - ۰۰۰۰۰۰۰۰",
  address: "ساری، میدان خزر، جاده فرح‌آباد",
};

const linkClass =
  "group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2";

function FooterLogo() {
  return (
    <NavLink
      to="/"
      aria-label="صفحه اصلی"
      className="group inline-flex items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-lg shadow-teal-900/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <GraduationCap size={27} strokeWidth={1.8} />
      </span>

      <span className="flex flex-col">
        <span className="text-[27px] font-black leading-none tracking-tight text-slate-800">
          لوگو
        </span>
        <span className="mt-1.5 text-[10px] font-medium tracking-wide text-teal-700">
          آموزش، یادگیری، پیشرفت
        </span>
      </span>
    </NavLink>
  );
}

function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-x-12">
      {footerLinkColumns.map((column) => (
        <nav key={column.id} aria-label={column.title}>
          <h3 className="mb-5 text-sm font-extrabold text-slate-800">
            {column.title}
          </h3>

          <ul className="space-y-3.5">
            {column.links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass}>
                  <span className="h-1 w-1 shrink-0 rounded-full bg-teal-500 transition-all duration-300 group-hover:h-1.5 group-hover:w-1.5" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}

function FooterSocials() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-extrabold text-slate-800">
        ما را دنبال کنید
      </h3>

      <div className="flex items-center gap-2.5">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-900/10 bg-white/70 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-teal-600 hover:bg-teal-600 hover:text-white hover:shadow-lg hover:shadow-teal-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <Icon size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterContact() {
  return (
    <div
      id="contact"
      className="rounded-2xl border border-white/80 bg-white/65 p-5 shadow-sm shadow-teal-950/[0.03] backdrop-blur-sm sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
          <Mail size={18} />
        </span>
        <div>
          <h3 className="text-sm font-extrabold text-slate-800">
            ارتباط با ما
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            برای دریافت راهنمایی در کنار شما هستیم.
          </p>
        </div>
      </div>

      <a
        href={`mailto:${contactInfo.email}`}
        dir="ltr"
        className="flex items-center justify-between gap-2 rounded-xl border border-teal-900/10 bg-white px-3 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-700 sm:text-sm"
      >
        <span className="break-all">{contactInfo.email}</span>
        <ArrowUpLeft size={16} className="shrink-0 text-teal-600" />
      </a>

      <a
        href={`tel:${contactInfo.phone}`}
        className="mt-3 flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-teal-700"
      >
        <Phone size={15} className="text-teal-700" />
        <span dir="rtl">{contactInfo.phoneLabel}</span>
      </a>

      <div className="mt-5 border-t border-teal-900/10 pt-4">
        <FooterSocials />
      </div>
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="max-w-sm">
      <FooterLogo />

      <p className="mt-5 text-sm leading-8 text-slate-600">
        در مسیر یادگیری مهارت‌های جدید همراه شما هستیم. با دوره‌های کاربردی،
        محتوای آموزشی و راهنمایی اساتید، قدم‌به‌قدم به اهداف حرفه‌ای خود
        نزدیک‌تر شوید.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-teal-800">
        <Sparkles size={15} />
        <span>یادگیری امروز، موفقیت فردا</span>
      </div>

      <address className="mt-5 space-y-3 not-italic">
        <div className="flex items-start gap-2.5 text-sm leading-7 text-slate-600">
          <MapPin size={17} className="mt-1 shrink-0 text-teal-700" />
          <span>{contactInfo.address}</span>
        </div>
      </address>
    </div>
  );
}

function FooterEmblem() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-white bg-white/70 p-2 shadow-sm transition-transform duration-300 hover:-translate-y-1">
        <img
          src="/samandehi-ezgif 1.png"
          alt="نشان مجموعه"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>

      <span className="text-center text-[10px] leading-5 text-slate-500">
        نشان اعتماد مجموعه
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#f8faf9] pt-12 sm:pt-16"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full text-[#dff4ef] sm:h-20"
      >
        <path
          d="M0 30 C220 60 440 72 650 60 C690 57 700 18 720 18 C740 18 750 57 790 60 C1000 72 1220 60 1440 30 L1440 0 L0 0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-8 sm:px-8 lg:px-14 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-12">
          <FooterAbout />

          <div className="grid content-start gap-9 sm:grid-cols-[1fr_auto] sm:gap-8 lg:grid-cols-1 lg:gap-10">
            <FooterNavigation />

            <div className="flex items-center justify-start gap-4 sm:justify-end lg:justify-start">
              <FooterEmblem />
            </div>
          </div>

          <FooterContact />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-teal-900/10 pt-6 text-center sm:flex-row sm:text-right">
          <p className="text-xs leading-6 text-slate-500">
            کلیه حقوق این وب‌سایت متعلق به مجموعه آموزشی می‌باشد.
          </p>

          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-900"
          >
            بازگشت به صفحه اصلی
            <ArrowLeft size={14} />
          </NavLink>
        </div>
      </div>

      <div className="h-1.5 bg-gradient-to-l from-teal-400 via-teal-600 to-[#f0a66b]" />
    </footer>
  );
}
