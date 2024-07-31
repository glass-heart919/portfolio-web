import { content } from "@/content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaLink } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, EffectCards, Autoplay } from "swiper/modules";

import Modal from "react-modal";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const openModal = (i: number) => {
    setSelectedProject(i);
    setModalOpened(true);
  };
  const closeModal = () => {
    setModalOpened(false);
    setSelectedProject(0);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "500px",
      border: "none",
      borderRadius: "12px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow:
        "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
    },
    overlay: {
      zIndex: 10,
      padding: "2rem",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalOpened}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col gap-4">
          <h5 className="font-bold font-Poppins text-[24px] text-center">
            {Projects.project_content[selectedProject].title}
          </h5>
          <p className="text-lg">
            {Projects.project_content[selectedProject].description}
          </p>
          <p className="text-lg">
            <span className="font-bold">Technologies:</span>{" "}
            {Projects.project_content[selectedProject].techstack}
          </p>
        </div>
      </Modal>
      <section className="bg-bg_light_primary min-h-screen" id="projects">
        <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
            <br />
          </div>
          {/* <div className="flex items-center lg:flex-row flex-col-reverse gap-5"> */}
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            autoplay
            pagination={{
              clickable: true,
            }}
            grabCursor
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination, EffectCards, Autoplay]}
            className="rounded-3xl pb-16 drop-shadow-primary self-start w-[320px] sm:w-[500px] lg:w-[1000px] overflow-visible"
            loop
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={`${i}-${content.title}`}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] w-full overflow-hidden"
                data-swiper-autoplay="5000"
              >
                <img
                  src={content.image}
                  alt="..."
                  className="lg:w-[960px] lg:h-[460px] rounded-[20px] object-cover"
                />
                <br />
                <hr />
                <div className="flex justify-between gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-[18px] md:text-[24px]">
                    {content.title}
                  </h5>
                  <div className="shrink-0">
                    <button
                      className="flex gap-2 items-center justify-end font-bold text-[#888888]"
                      onClick={() => openModal(i)}
                    >
                      Read More <MdOutlineOpenInNew />
                    </button>
                    <a
                      className="flex gap-2 items-center justify-end font-bold text-[#888888] text-end"
                      href={content.link}
                      target="_blank"
                    >
                      Visit <FaLink />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
