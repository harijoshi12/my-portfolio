import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dp from '../../../../media/images/about.png'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Custom styles
import styles from "../../HomePage.module.css";
import './swiper.css'
import { Autoplay, Navigation, Pagination, } from 'swiper'

const data = [
  {
    id: 1,
    imglink: dp,
    name: "hari",
    profrssion: "software engg.",
    testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam? Nemo vitae sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam?"
  },
  {
    id: 2,
    imglink: dp,
    name: "ram",
    profrssion: "software engg.",
    testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo vitae sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam? Nemo vitae sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam?"
  },
  {
    id: 3,
    imglink: dp,
    name: "krish",
    profrssion: "software engg.",
    testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae Nemo vitae sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam? sint ratione non eius aspernatur. Tempore sequi ullam suscipit magnam?"
  }
]

const QuoteLeft = () => {
  return (
    <svg width="43" height="31" viewBox="0 0 43 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0006 20.5C21.0006 26.0228 16.5234 30.5 11.0006 30.5C5.47772 30.5 1.39412 26.0088 1.00057 20.5C0.0718485 7.5 11.9774 0 17.5002 0C10.5002 8.5 13.0445 8.5 18.0006 13.3586C19.8519 15.1735 21.0006 17.7026 21.0006 20.5Z" fill="black" />
      <path d="M42.0514 20.5C42.0514 26.0228 37.5742 30.5 32.0514 30.5C26.5285 30.5 22.4449 26.0088 22.0514 20.5C21.1226 7.5 33.0281 0 38.551 0C31.551 8.5 34.0952 8.5 39.0514 13.3586C40.9027 15.1735 42.0514 17.7026 42.0514 20.5Z" fill="black" />
    </svg>
  )
}
const QuoteRight = () => {
  return (
    <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0502 10C21.0502 4.47715 25.5274 0 31.0502 0C36.5731 0 40.6567 4.49119 41.0502 10C41.9789 23 30.0734 30.5 24.5506 30.5C31.5506 22 29.0063 22 24.0502 17.1414C22.1988 15.3265 21.0502 12.7974 21.0502 10Z" fill="black" />
      <path d="M-0.000572205 10C-0.000572205 4.47715 4.47658 0 9.99943 0C15.5223 0 19.6059 4.49119 19.9994 10C20.9282 23 9.02265 30.5 3.4998 30.5C10.4998 22 7.95554 22 2.99943 17.1414C1.14807 15.3265 -0.000572205 12.7974 -0.000572205 10Z" fill="black" />
    </svg>

  )
}

const Slide = ({ imglink, name, profrssion, testimony }) => {
  console.log(imglink, name, profrssion, testimony)
  return (
    <div className="slide">
      <div className="imgbox">
        <div className="img" style={{ backgroundImage: `url(${imglink})` }}>
        </div>
      </div>
      <div className="contentbox">
        <div className="para">
          <span><QuoteLeft/></span>
          <p>{testimony}</p>
          <span><QuoteRight/></span>
        </div>
        <div className="info">
          <span className="name">{name}</span> 
          <span className="profession">{profrssion}</span>
        </div>
      </div>
    </div>
  )
}

const Testimonial = (props, ref) => {
  return (
    <section id="testimonial" ref={ref} className={`testimonial ${styles.sec} ${styles.testimonial}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Testimonials</h1>
          <h4 className={styles.title}>See what people are saying</h4>
          <Swiper
            loop={true}
            pagination={{  clickable: true, }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper">
            <SwiperSlide><Slide key={data.id} {...data[0]} /></SwiperSlide>
            <SwiperSlide><Slide key={data.id} {...data[1]} /></SwiperSlide>
            <SwiperSlide><Slide key={data.id} {...data[2]} /></SwiperSlide>
            <SwiperSlide><Slide key={data.id} {...data[2]} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Testimonial);
