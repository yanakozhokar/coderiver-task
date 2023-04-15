import AndroidLogo from "../AndroidLogo/AndroidLogo";
import AppleLogo from "../AppleLogo/AppleLogo";
import css from "./PlatformsList.module.css";

export default function PlatformsList() {
  return (
    <ul className={css.platformsList}>
      <li className={css.platformsItem}>
        <AppleLogo />
      </li>
      <li className={css.platformsItem}>
        <AndroidLogo />
      </li>
    </ul>
  );
}
