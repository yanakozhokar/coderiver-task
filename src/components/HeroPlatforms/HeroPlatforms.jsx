import PlatformsList from "../PlatformsList/PlatformsList";
import css from "./HeroPlatforms.module.css";

export default function HeroPlatforms() {
  return (
    <div className={css.heroPlatforms}>
      <PlatformsList />
      <p className={css.heroPlatformsText}>App available</p>
    </div>
  );
}
