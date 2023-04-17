import React, { useEffect } from "react";
import Sweater from "../../images/sweater-desk-1x.jpg";
import Mountain from "../../images/mountain-desk-1x.jpg";
import Woman from "../../images/woman-desk-1x.jpg";
import Shoes from "../../images/shoes-desk-1x.jpg";
import Leg from "../../images/leg-desk-1x.jpg";
import Carousel from "nuka-carousel";
import "./Slider.css";

export default function Slider() {
  useEffect(() => {
    const prevBtn = document.querySelector(
      ".slider-control-centerleft > button"
    );
    const nextBtn = document.querySelector(
      ".slider-control-centerright > button"
    );
    const pagination = document.querySelector(".slider-control-bottomcenter");

    pagination.innerHTML = "";
    prevBtn.textContent = "";
    nextBtn.textContent = "";
  });

  function slidesAmount() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      return 2;
    } else {
      return 4;
    }
  }

  return (
    <Carousel
      slidesToShow={slidesAmount()}
      cellSpacing={50}
      disableDotControls={true}
    >
      <img src={Sweater} width={239} height={304} alt="Art" />
      <img src={Mountain} width={239} height={304} alt="Art" />
      <img src={Woman} width={239} height={304} alt="Art" />
      <img src={Shoes} width={239} height={304} alt="Art" />
      <img src={Leg} width={239} height={304} alt="Art" />
    </Carousel>
  );
}
