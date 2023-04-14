import NavMenu from "../NavMenu/NavMenu";
import PlatformsList from "../PlatformsList/PlatformsList";
import heroImg1x from "../../images/hero-desk-1x.jpg";
// import heroImg2x from '../../images/hero-desk-2x.jpg';
import css from "./App.module.css";
import Logo from "../Logo/Logo";

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Logo />
          <NavMenu />
          <p className={css.headerBuy}>Buy</p>
        </div>
      </header>
      <main>
        <section className={css.hero}>
          <div className={css.container}>
            <div className={css.heroDescription}>
              <div className={css.heroPlatforms}>
                <PlatformsList />
                <p className={css.heroPlatformsText}>App available</p>
              </div>
              <h1 className={css.heroTitle}>
                Choose your winter{" "}
                <span className={css.heroAccentText}>
                  look<sup>*</sup>
                </span>{" "}
                apparel
              </h1>
            </div>
            <div className={css.heroImgContainer}>
              <img src={heroImg1x} alt="Woman" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
