import { Fragment } from "react";
import SwiperHome from "../component/SwiperContent";
import AboutComponent from "../component/AboutComponent";


const HomePage = () => {
  return (
    <Fragment>
      <section className="home">
        <SwiperHome />
      </section>
      <section     
        data-aos="fade-right"
        data-aos-offset="20"
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
    </Fragment>
  )
}

export default HomePage;