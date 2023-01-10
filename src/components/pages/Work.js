import React from "react";
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
        Any feedback is welcome to me and I find myself learning new ways and tricks on how to be a better version of myself.<br/>
        -tap images to go to the project website-
      </p>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><a class="links" href="https://damienluzzo33.github.io/dynamite-recipes/" target="_blank" rel="noopener noreferrer"><img src={dynamite} alt="Dynamite Recipes project" /></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://bookit-bookshelf.herokuapp.com/signup" target="_blank" rel="noopener noreferrer"><img src={bookIt} alt="BookIt project"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://yamcham0.github.io/Access-Denied/" target="_blank" rel="noopener noreferrer"><img src={quiz} alt="Quiz Game"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://yamcham0.github.io/Test-your-Might/" target="_blank" rel="noopener noreferrer"><img src={passGen} alt="password generator"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://yamcham0.github.io/Once_upon_aTime/" target="_blank" rel="noopener noreferrer"><img src={planner} alt="Daily planner project"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://no-ted.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={note} alt="Note Taker project"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://ex-wife.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={budget} alt="Budget Tracker project"/></a></SwiperSlide>
        <SwiperSlide><a class="links" href="https://warc-out.herokuapp.com/?id=619b22559d997c19a4f4a57a" target="_blank" rel="noopener noreferrer"><img src={fitness} alt="Fitness tracker project"/></a></SwiperSlide>
      </Swiper>
    </div>
  );
}
// TODO
// anchor tags linking the imgs to their respective Pages
// add social links
// the contact me tab should have a form to input user email and a message and on submit it should connect to my email
// Github button on slides
// email validation