
import CourseCard from "../../../Components/Course/CourseCard";

export default function CourseList({ courses = [] }) {
  if (courses.length === 0) {
    return (
      <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-gray-200 text-sm text-gray-500">
        دوره‌ای با این مشخصات پیدا نشد.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
