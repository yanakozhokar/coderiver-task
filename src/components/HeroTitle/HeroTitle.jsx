import css from "./HeroTitle.module.css";

export default function HeroTitle() {
    return (
      <h1 className={css.heroTitle}>
        Choose your winter{" "}
        <span className={css.heroAccentText}>
          look<sup className={css.heroAccentTextAsteric}>*</sup>
        </span>{" "}
        apparel
      </h1>
    );
}
