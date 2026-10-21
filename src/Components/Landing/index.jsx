import React from 'react'
import HeroSection from '../../Components/Landing/HeroSection'
import Category from '../../Components/Landing/Category'
import CoursesSlider from '../../Components/Landing/CoursesSlider'
import BestTeacher from '../../Components/Landing/BestTeacher'
import ServiceCard from '../../Components/Landing/ServiceCard'
import ArticleCard from '../../Components/Landing/ArticleCard'
import Podcast from '../../Components/Landing/Podcast'

const index = () => {
  return (
    <div>
      <HeroSection/>
      <Category/>
      <CoursesSlider/>
      <BestTeacher/>
      <ServiceCard/>
      <ArticleCard/>
      <Podcast/>


    </div>
  )
}

export default index



