import NavMenu from "../NavMenu/NavMenu";
import css from "./App.module.css";
import Logo from "../Logo/Logo";
import Line from "../Line/Line";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroImg from "../HeroImg/HeroImg";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import BuyBtn from "../BuyBtn/BuyBtn";
import HeroPlatforms from "../HeroPlatforms/HeroPlatforms";

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Logo />
          <NavMenu />
          <BuyBtn />
        </div>
      </header>
      <main>
        <section className={css.hero}>
          <div className={css.container}>
            <div className={css.heroDescription}>
              <HeroPlatforms />
              <HeroTitle />
            </div>
            <HeroImg />
            <Line />
          </div>
        </section>
        <section className={css.about}>
          <div className={css.container}>
            <Title>Choose looks</Title>
            <Slider />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};
