import NavMenu from "../NavMenu/NavMenu";
import PlatformsList from "../PlatformsList/PlatformsList";
import css from "./App.module.css";
import Logo from "../Logo/Logo";
import Line from "../Line/Line";
import HeroTitle from "../HeroTitle/HeroTitle";

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
              <HeroTitle />
            </div>
            <div className={css.heroImgContainer}>
              <div className={css.heroImg}></div>
            </div>
            <Line />
          </div>
        </section>
      </main>
    </>
  );
};
