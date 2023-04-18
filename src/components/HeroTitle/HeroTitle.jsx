import css from "./HeroTitle.module.css";

export default function HeroTitle() {
  function onHeroTitleMouseover() {
    const label = document.querySelector(`${css.heroLabel}`);
  }

  return (
    <h1 className={css.heroTitle} onMouseOver={onHeroTitleMouseover}>
      Choose your winter{" "}
      <span className={css.heroLabel}>
        look<sup className={css.heroLabelAsteric}>*</sup>
      </span>{" "}
      apparel
    </h1>
  );
}
