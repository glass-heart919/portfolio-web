import { content } from "@/content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      id="testimonials"
    >
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={20}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="h-[60rem] md:h-[40rem] max-w-3xl cursor-grab"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide
              key={`${i}-${content.name}`}
              className={`${activeIndex === i && "z-10"}`}
            >
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 
              p-2 md:p-8 rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <a href={content.link} target="_blank">
                  <img
                    src={content.img}
                    alt="profile"
                    className="rounded-full w-[100px] md:w-auto hover:scale-110 duration-300"
                  />
                </a>
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                  <h6 className="text-xs">{content.position}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
