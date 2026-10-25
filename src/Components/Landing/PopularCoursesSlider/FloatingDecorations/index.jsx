import { BookOpen, Code2, GraduationCap, Sparkles } from "lucide-react";

export default function FloatingDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-20 top-12 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl sm:right-[5%] sm:h-72 sm:w-72" />

      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl sm:left-[8%] sm:h-72 sm:w-72" />

      <div className="absolute right-[8%] top-[18%] hidden h-12 w-12 rotate-12 items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-teal-700 shadow-lg shadow-teal-900/5 sm:flex">
        <Code2 size={22} />
      </div>

      <div className="absolute left-[8%] top-[23%] hidden h-14 w-14 -rotate-12 items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-orange-500 shadow-lg shadow-teal-900/5 sm:flex">
        <GraduationCap size={26} />
      </div>

      <div className="absolute right-[14%] bottom-[22%] hidden h-10 w-10 -rotate-6 items-center justify-center rounded-xl bg-white/80 text-cyan-700 shadow-md sm:flex">
        <BookOpen size={19} />
      </div>

      <div className="absolute bottom-[25%] left-[14%] hidden h-11 w-11 rotate-12 items-center justify-center rounded-xl bg-white/80 text-amber-500 shadow-md sm:flex">
        <Sparkles size={20} />
      </div>

      <span className="absolute right-[25%] top-[10%] h-2 w-2 animate-pulse rounded-full bg-teal-400/70" />
      <span className="absolute bottom-[18%] left-[30%] h-2.5 w-2.5 animate-pulse rounded-full bg-orange-300/80 [animation-delay:700ms]" />
      <span className="absolute left-[22%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan-500/50" />
      <span className="absolute bottom-[12%] right-[24%] h-1.5 w-1.5 rounded-full bg-teal-500/50" />
    </div>
  );
}