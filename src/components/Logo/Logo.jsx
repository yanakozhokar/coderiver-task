import { useEffect } from "react";
import css from "./Logo.module.css";

export default function Logo() {
  useEffect(() => {
    function playAnimation() {
      const logoRef = document.querySelector(`.${css.logo}`);
      logoRef.className = `${css.logo} ${css.logoAnimation}`;

      setTimeout(() => {
        logoRef.className = `${css.logo}`;
        setTimeout(playAnimation, 10000);
      }, 2000);
    }
    playAnimation();
  }, []);

  function onLogoMouseOver() {
    const logoRef = document.querySelector(`.${css.logo}`);
    logoRef.className = `${css.logo} ${css.logoAnimation}`;

    setTimeout(() => {
      logoRef.className = `${css.logo}`;
    }, 2000);
  }

  return (
    <a href="/" className={css.logo} onMouseOver={onLogoMouseOver}>
      Landing
    </a>
  );
}
