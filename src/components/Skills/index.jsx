import { Container } from "./styles";

import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMaterialui,
  SiPostgresql,
  SiStyledcomponents,
  SiExpress,
} from "react-icons/si";
import { FaReact, FaNode, FaNpm, FaGithubAlt } from "react-icons/fa";
import { SiJest, SiTestinglibrary } from "react-icons/si";

const Skills = () => {
  return (
    <Container>
      <div className="container-skills">
        <h2>Hard skills</h2>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <FaReact />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoJavascript />
          </SwiperSlide>
          <SwiperSlide>
            <SiTypescript />
          </SwiperSlide>
          <SwiperSlide>
            <SiStyledcomponents />
          </SwiperSlide>
          <SwiperSlide>
            <SiJest />
          </SwiperSlide>
          <SwiperSlide>
            <SiTestinglibrary />
          </SwiperSlide>
          <SwiperSlide>
            <SiMaterialui />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoSass />
          </SwiperSlide>
          <SwiperSlide>
            <AiFillHtml5 />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoCss3 />
          </SwiperSlide>
          <SwiperSlide>
            <FaNode />
          </SwiperSlide>
          <SwiperSlide>
            <SiExpress />
          </SwiperSlide>
          <SwiperSlide>
            <SiPostgresql />
          </SwiperSlide>
          <SwiperSlide>
            <FaNpm />
          </SwiperSlide>
          <SwiperSlide>
            <FaGithubAlt />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Skills;
