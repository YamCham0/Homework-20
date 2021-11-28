import "./Work.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
export default function Work() {
  return (
    <div>
      <h1>Work Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide><img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53584529-137e-4e5b-b6f6-d5d9cd4a663e/dpwieu-55667d10-79b1-44d5-9f18-68aadfc889bc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzNTg0NTI5LTEzN2UtNGU1Yi1iNmY2LWQ1ZDljZDRhNjYzZVwvZHB3aWV1LTU1NjY3ZDEwLTc5YjEtNDRkNS05ZjE4LTY4YWFkZmM4ODliYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.p_QtstG3sFomkI0QL1D3QHg8Nn9eWVu-3xOTuYqr96k"}/>Slide 1</SwiperSlide>
      <SwiperSlide><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK7Q7BCScWCT4TomXySYAk7IYlC96VJVlmQ&usqp=CAU"}/>Slide 2</SwiperSlide>
      <SwiperSlide><img src={"https://www.singlegrain.com/wp-content/uploads/2019/07/image1.png"}/>Slide 3</SwiperSlide>
    </Swiper>
    </div>
  );
}
