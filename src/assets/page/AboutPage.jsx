import React from 'react'
import AboutComponent from '../component/AboutComponent'

const AboutPage = () => {
  return (
    <section     
    data-aos="fade-right"
    data-aos-offset="5"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <div className="container">
      <AboutComponent />
    </div>
  </section>
  )
}

export default AboutPage;