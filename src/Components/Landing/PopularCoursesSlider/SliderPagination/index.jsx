export default function SliderPagination({
  total,
  activeIndex,
  onChange,
}) {
  return (
    <div
      className="flex items-center justify-center gap-2"
      dir="ltr"
      aria-label="انتخاب اسلاید"
    >
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(index)}
            aria-label={`رفتن به دوره ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            className={`
              h-2.5 rounded-full
              transition-all duration-300
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-teal-500
              focus-visible:ring-offset-2
              ${
                isActive
                  ? "w-8 bg-teal-700"
                  : "w-2.5 bg-teal-700/20 hover:bg-teal-700/45"
              }
            `}
          />
        );
      })}
    </div>
  );
}