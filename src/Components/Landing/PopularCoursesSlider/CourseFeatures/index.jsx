import {
  Award,
  BookOpenCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "آموزش پروژه‌محور",
    description: "یادگیری با تمرین عملی",
    Icon: BookOpenCheck,
  },
  {
    id: 2,
    title: "مدرسین متخصص",
    description: "تجربه و دانش کاربردی",
    Icon: Award,
  },
  {
    id: 3,
    title: "پشتیبانی آموزشی",
    description: "همراه شما در مسیر یادگیری",
    Icon: Headphones,
  },
  {
    id: 4,
    title: "دسترسی مطمئن",
    description: "یادگیری در زمان دلخواه",
    Icon: ShieldCheck,
  },
];

export default function CourseFeatures() {
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {features.map(({ id, title, description, Icon }) => (
        <div
          key={id}
          className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-[0_8px_25px_-20px_rgba(15,118,110,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
            <Icon size={20} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-xs font-extrabold text-gray-800 sm:text-sm">
              {title}
            </h3>

            <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-xs">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}