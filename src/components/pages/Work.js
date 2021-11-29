import React, { useRef, useState } from "react";
import dynamite from "./images/Dynamite.png"
import passGen from "./images/PassGen.png"
import quiz from "./images/Quiz.png"
import bookIt from "./images/BookIt.png"
import note from "./images/Note.png"
import planner from "./images/Planner.png"
import budget from "./images/Budget.png"
import fitness from "./images/Fitness.png"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import "./Work.css";
// Import Swiper React components

SwiperCore.use([Navigation]);

export default function Work() {
  return (
    <div>
      <h1>Work Page</h1>
      <p>
        The following are projects and homeworks that I have worked on during my time in Bootcamp.
        I'm always trying to work on them in order to improve performance and user experience whenever I find the time.
        Any feedback is welcome to me and I find myself learning new ways and tricks on how to be a better version of myself. 
      </p>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><img src={dynamite}/></SwiperSlide><SwiperSlide><img src={bookIt}/></SwiperSlide><SwiperSlide><img src={quiz}/></SwiperSlide><SwiperSlide><img src={passGen}/></SwiperSlide><SwiperSlide><img src={planner}/></SwiperSlide><SwiperSlide><img src={note}/></SwiperSlide><SwiperSlide><img src={budget}/></SwiperSlide><SwiperSlide><img src={fitness}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
// TODO
// anchor tags linking the imgs to their respective Pages
// add social links
// the contact me tab should have a form to input user email and a message and on submit it should connect to my email