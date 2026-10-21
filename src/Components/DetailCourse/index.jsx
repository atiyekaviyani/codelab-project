import React from 'react'
import FeaturedCourseCard from "../../Components/DetailCourse/FeaturedCourseCard";
import CourseDescription from "../../Components/DetailCourse/CourseDescription";
import CourseComments from "../../Components/DetailCourse/CourseComments";
const index = () => {
  return (
    <div>
      <FeaturedCourseCard/>
      <CourseDescription/>
      <CourseComments/>
    </div>
  )
}

export default index
