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
            <AiFillHtml5 />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoCss3 />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoJavascript />
          </SwiperSlide>
          <SwiperSlide>
            <SiTypescript />
          </SwiperSlide>
          <SwiperSlide>
            <FaReact />
          </SwiperSlide>
          <SwiperSlide>
            <SiStyledcomponents />
          </SwiperSlide>
          <SwiperSlide>
            <IoLogoSass />
          </SwiperSlide>
          <SwiperSlide>
            <SiMaterialui />
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
