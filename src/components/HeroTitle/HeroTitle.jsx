import css from "./HeroTitle.module.css";

export default function HeroTitle() {
  return (
    <h1 className={css.heroTitle}>
      Choose your winter{" "}
      <span className={css.heroLabel}>
        look<sup className={css.heroLabelAsteric}>*</sup>
      </span>{" "}
      apparel
    </h1>
  );
}
