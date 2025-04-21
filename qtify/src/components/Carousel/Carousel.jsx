import React, { useRef, useState, useEffect }from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import LeftNav from "../LeftNav/LeftNav";
// import RightNav from "../RightNav/RightNav"
import leftBtn from "../../assets/leftBtn.svg";
import rightBtn from "../../assets/rightBtn.svg";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

const Carousel = ({ data = [], renderComponent}) => {
    const cardWidth = 159;
    const cardSpacing = 16;
    const containerRef = useRef(null);

    const [slidesPerView, setSlidesPerView] = useState(1);
  
    useEffect(() => {
      const updateSlidesPerView = () => {
        //console.log("cont",containerRef)
        //console.log("offset:",containerRef.current.offsetWidth)
        if (containerRef.current) {
            //console.log("contain:",containerRef)
          const containerWidth = containerRef.current.offsetWidth;
          const totalCardWidth = cardWidth + cardSpacing;
          const visibleCards = Math.floor(containerWidth / totalCardWidth);
          setSlidesPerView(visibleCards > 0 ? visibleCards : 1);
        }
      };
  
      const timeoutId = setTimeout(updateSlidesPerView, 0);

      window.addEventListener("resize", updateSlidesPerView);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", updateSlidesPerView);
      };
    }, []);

  return (
    <div ref={containerRef}>
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      slidesPerView={slidesPerView}
      spaceBetween={cardSpacing}
      className={styles.carousel}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
        {/* <div className={`${styles.navButton} swiper-button-prev`}>{LeftNav}</div>
        <div className={`${styles.navButton} swiper-button-next`}>{RightNav}</div> */}
      <img src={leftBtn} className={`${styles.navButton} swiper-button-prev`} alt="Previous" />
      <img src={rightBtn} className={`${styles.navButton} swiper-button-next`} alt="Next" />
    </Swiper>
    </div>
  );
};

export default Carousel;
