
import { NavLink } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const footerLinkColumns = [
  {
    id: "learning",
    links: [
      { label: "اساتید برتر", to: "/#teachers" },
      { label: "دسته‌بندی‌ها", to: "/#categories" },
      { label: "خدمات ما", to: "/#services" },
      { label: "ورود به حساب", to: "/login" },
    ],
  },
  {
    id: "content",
    links: [
      { label: "دوره‌ها", to: "/#courses" },
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

const navLinkClassName = `
  inline-flex items-center
  text-[11px] text-[#568f8c]
  transition-colors duration-200
  hover:text-[#007f7b]
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-[#009b96]
  focus-visible:ring-offset-2
`;

function FooterLogo() {
  return (
    <NavLink
      to="/"
      aria-label="صفحه اصلی"
      className="
        inline-flex items-center justify-center gap-0.5
        text-[30px] font-black leading-none text-[#171717]
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#009b96]
        focus-visible:ring-offset-4
      "
    >
        <a href="#home" className="flex items-center">
            <span className="relative flex h-[38px] w-[38px] shrink-0 items-center rounded-[7px] bg-[#00c8c5]">
              <span className="absolute right-[5px] z-10 whitespace-nowrap text-[30px] font-black leading-none text-white">
                لــــ
              </span>
            </span>

            <span className="relative z-10 -mr-[1px] text-[28px] font-black leading-none text-[#171717]">
              وگو
            </span>
          </a>
    </NavLink>
  );
}

function FooterNavigation() {
  return (
    <nav
      aria-label="لینک‌های فوتر"
      className="grid grid-cols-2 gap-x-5"
    >
      {footerLinkColumns.map((column) => (
        <ul key={column.id} className="space-y-2">
          {column.links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClassName}>
                <span aria-hidden="true" className="ml-1">
                  •
                </span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}

function FooterSocials() {
  return (
    <nav
      aria-label="شبکه‌های اجتماعی"
      className="flex items-center justify-center gap-2"
    >
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            flex h-7 w-7 items-center justify-center
            rounded-full bg-[#009b96] text-white
            transition-colors duration-200
            hover:bg-[#007d79]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-[#007d79]
            focus-visible:ring-offset-2
          "
        >
          <Icon aria-hidden="true" size={14} />
        </a>
      ))}
    </nav>
  );
}

function FooterContact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-4">
      <a
        href={`mailto:${contactInfo.email}`}
        dir="ltr"
        className="
          rounded-full bg-[#009b96] px-5 py-2
          text-[10px] font-semibold text-white
          transition-colors duration-200
          hover:bg-[#007d79]
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#007d79]
          focus-visible:ring-offset-2
        "
      >
        {contactInfo.email}
      </a>

      <FooterSocials />
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="text-right text-[10px] leading-6 text-[#008783]">
      <p>
        مجموعه آموزش و یادگیری، فضایی برای رشد و توسعه مهارت‌های
        تخصصی شما فراهم می‌کند. با دوره‌های کاربردی، مسیر یادگیری
        خود را هدفمندتر دنبال کنید.
      </p>

      <address className="mt-3 space-y-2 not-italic font-medium">
        <p className="flex items-start gap-1.5">
          <MapPin
            aria-hidden="true"
            size={13}
            className="mt-1 shrink-0"
          />
          <span>{contactInfo.address}</span>
        </p>

        <a
          href={`tel:${contactInfo.phone}`}
          dir="rtl"
          className="
            inline-flex items-center gap-1.5
            transition-colors hover:text-[#005e5b]
          "
        >
          <Phone aria-hidden="true" size={12} />
          <span>{contactInfo.phoneLabel}</span>
        </a>
      </address>
    </div>
  );
}

function FooterEmblem() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1">
      <img
        src="samandehi-ezgif 1.png"
        alt="نشان مجموعه"
        loading="lazy"
        decoding="async"
        className="h-[60px] w-[60px] object-contain"
      />

      <span className="text-center text-[8px] leading-3 text-[#588b87]">
        مجموعه آموزش و یادگیری
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#fafafa] pt-[70px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[70px] w-full"
      >
        <path
          d="
  M0 38
  C220 44 430 50 650 56
  C680 56 695 24 720 24
  C745 24 760 56 790 56
  C1010 50 1220 44 1440 38
  L1440 70
  L0 70 Z
"
          fill="#d8f4f1"
        />
      </svg>

      <div className="relative z-10 flex min-h-[372px] flex-col bg-[#d8f4f1]">
        <div className="mx-auto w-full max-w-[1440px] flex-1 px-5 pb-7 pt-7 sm:px-8 lg:px-[60px]">
          <div className="flex justify-center">
            <FooterLogo />
          </div>

          <div
            className="
              mt-8 grid grid-cols-1 items-center gap-8
              sm:grid-cols-2
              lg:grid-cols-[1.3fr_1fr_1fr]
              lg:gap-10
            "
          >
            <FooterAbout />

            <FooterContact />

            <div className="flex items-center justify-center gap-5 sm:col-span-2 lg:col-span-1 lg:justify-start lg:gap-7">
              <FooterEmblem />
              <FooterNavigation />
            </div>
          </div>
        </div>

        <div className="flex min-h-[29px] items-center justify-center bg-[#008f8b] px-4 py-2 text-center text-[10px] leading-5 text-white">
          کلیه حقوق این وب‌سایت متعلق به مجموعه آموزشی می‌باشد.
        </div>
      </div>
    </footer>
  );
}
