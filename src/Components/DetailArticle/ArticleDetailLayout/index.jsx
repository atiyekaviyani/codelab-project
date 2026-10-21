
function ArticleDetailLayout({ content, sidebar }) {
  return (
    <div
      dir="rtl"
      className="w-full min-w-0 px-4 py-6 sm:px-6 lg:px-8"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1400px] min-w-0
          grid-cols-1 items-start gap-6
          lg:grid-cols-[minmax(0,2.3fr)_minmax(260px,1fr)]
        "
      >
        <main className="order-1 min-w-0 w-full">
          {content}
        </main>

        <aside className="order-2 min-w-0 w-full">
          {sidebar}
        </aside>
      </div>
    </div>
  );
}

export default ArticleDetailLayout;
