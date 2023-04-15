import css from "./HeroImg.module.css";

export default function HeroImg() {
  return (
    <div className={css.heroImgContainer}>
      <div className={css.heroImg}></div>
    </div>
  );
}
