import appleLogo from "../../images/apple-logo.svg";
import androidLogo from "../../images/android-logo.svg";
import css from "./PlatformsList.module.css";

export default function PlatformsList() {
  return (
    <ul className={css.platformsList}>
      <li className={css.platformsItem}>
        <svg className={css.platformsIcon} width={27} height={27}>
          <use href={appleLogo}></use>
        </svg>
      </li>
      <li className={css.platformsItem} width={28} height={28}>
        <svg className={css.platformsIcon}>
          <use href={androidLogo}></use>
        </svg>
      </li>
    </ul>
  );
}
