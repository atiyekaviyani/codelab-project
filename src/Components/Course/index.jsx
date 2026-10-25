import { useMemo, useState } from "react";

import AcademyCourse from "../../Components/Course/AcademyCourse";
import CourseSort from "../../Components/Course/CourseSort";
import CourseFilter from "../../Components/Course/CourseFilter";
import CourseList from "../../Components/Course/CourseList";
import Pagination from "../../Components/Course/Pagination";
import { shopCoursesForCards } from "../../Components/Course/shopData";

const INITIAL_FILTERS = {
  category: "",
  level: "",
};

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);

  const handleFilterChange = (name, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));

    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setPage(1);
  };

  const filteredCourses = useMemo(() => {
    return shopCoursesForCards.filter((course) => {
      const matchesCategory =
        !filters.category || course.category === filters.category;

      const matchesLevel = !filters.level || course.level === filters.level;

      return matchesCategory && matchesLevel;
    });
  }, [filters]);

  const sortedCourses = useMemo(() => {
    const result = [...filteredCourses];

    switch (sortBy) {
      case "newest":
        return result.sort((a, b) => b.id - a.id);

      case "oldest":
        return result.sort((a, b) => a.id - b.id);

      case "cheapest":
        return result.sort((a, b) => a.price - b.price);

      case "most-expensive":
        return result.sort((a, b) => b.price - a.price);

      case "popular":
        return result.sort((a, b) => b.studentsCount - a.studentsCount);

      case "highest-rated":
        return result.sort((a, b) => b.rating - a.rating);
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);

      case "price-desc":
        return result.sort((a, b) => b.price - a.price);

      case "rating":
        return result.sort((a, b) => b.rating - a.rating);

      default:
        return result;
    }
  }, [filteredCourses, sortBy]);

  const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE);

  const currentPage = Math.min(page, Math.max(totalPages, 1));

  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main dir="rtl">
      <AcademyCourse />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <CourseFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        <section className="min-w-0">
          <CourseSort
            sortBy={sortBy}
            onSortChange={(value) => {
              setSortBy(value);
              setPage(1);
            }}
          />

          <CourseList courses={paginatedCourses} />

          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </section>
      </div>
    </main>
  );
}
