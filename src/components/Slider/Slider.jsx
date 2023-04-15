import Sweater from "../../images/sweater-desk-1x.jpg";
import Mountain from "../../images/mountain-desk-1x.jpg";
import Woman from "../../images/woman-desk-1x.jpg";
import Shoes from "../../images/shoes-desk-1x.jpg";
import Leg from "../../images/leg-desk-1x.jpg";
import css from "./Slider.module.css";

export default function Slider() {
  return (
    <ul className={css.SliderList}>
      <li className={css.SliderItem}>
        <img
          src={Sweater}
          alt="Sweater"
          width={239}
          height={304}
          className={css.SliderImg}
        />
      </li>
      <li className={css.SliderItem}>
        <img
          src={Mountain}
          alt="Mountain"
          width={239}
          height={304}
          className={css.SliderImg}
        />
      </li>
      <li className={css.SliderItem}>
        <img
          src={Woman}
          alt="Woman"
          width={239}
          height={304}
          className={css.SliderImg}
        />
      </li>
      <li className={css.SliderItem}>
        <img
          src={Shoes}
          alt="Shoes"
          width={239}
          height={304}
          className={css.SliderImg}
        />
      </li>
      <li className={css.SliderItem}>
        <img
          src={Leg}
          alt="Leg"
          width={239}
          height={304}
          className={css.SliderImg}
        />
      </li>
    </ul>
  );
}
