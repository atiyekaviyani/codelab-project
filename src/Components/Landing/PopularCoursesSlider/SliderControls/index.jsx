import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SliderControls({ onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-3" dir="ltr">
      <button
        type="button"
        onClick={onPrev}
        aria-label="دوره قبلی"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      >
        <ArrowLeft size={19} />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="دوره بعدی"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white shadow-md shadow-teal-700/20 transition-all duration-300 hover:translate-x-1 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        <ArrowRight size={19} />
      </button>
    </div>
  );
}