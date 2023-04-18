import { useEffect } from "react";
import css from "./Logo.module.css";

export default function Logo() {
  useEffect(() => {
    function playAnimation() {
      const element = document.querySelector(`.${css.logo}`);
      element.className = `${css.logo} ${css.logoAnimation}`;

      setTimeout(() => {
        element.className = `${css.logo}`;
        setTimeout(playAnimation, 10000);
      }, 2000);
    }
    playAnimation();
  }, []);

  return (
    <a href="/" className={css.logo}>
      Landing
    </a>
  );
}
