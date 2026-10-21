import { useState } from "react";

import AcademyCourse from "../../Components/Course/AcademyCourse";
import CourseSort from "../../Components/Course/CourseSort";
import CourseFilter from "../../Components/Course/CourseFilter";
import CourseList from "../../Components/Course/CourseList";
import Pagination from "../../Components/Course/Pagination";

const INITIAL_FILTERS = {
  category: "",
  level: "",
};

export default function CoursesPage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState("newest");

  const handleFilterChange = (name, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));
  };
  

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

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
          <CourseSort sortBy={sortBy} onSortChange={setSortBy} />

          <CourseList filters={filters} sortBy={sortBy} />

          <Pagination />
        </section>
      </div>
    </main>
  );
}
