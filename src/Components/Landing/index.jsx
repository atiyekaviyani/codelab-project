import React from 'react'
import HeroSection from '../../Components/Landing/HeroSection'
import Category from '../../Components/Landing/Category'
import PopularCoursesSlider from '../../Components/Landing/PopularCoursesSlider/index'
// import CoursesSlider from '../../Components/Landing/CoursesSlider'
import BestTeacher from '../../Components/Landing/BestTeacher'
import ServiceCard from '../../Components/Landing/ServiceCard'
import ArticleCard from '../../Components/Landing/ArticleCard'
import Podcast from '../../Components/Landing/Podcast'


const index = () => {
  return (
    <div>
      <HeroSection/>
      <Category/>
      {/* <CoursesSlider/> */}
      <PopularCoursesSlider/>
      <BestTeacher/>
      <ServiceCard/>
      <ArticleCard/>
      <Podcast/>


    </div>
  )
}

export default index



