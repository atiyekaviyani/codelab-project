
export default function ArticlesLayout({ children }) {
  return (
    <div
      className="
        grid grid-cols-1 items-start gap-8
        lg:grid-cols-[minmax(0,4fr)_minmax(240px,1fr)]
        lg:gap-8
        xl:gap-10
      "
    >
      {children}
    </div>
  );
}
