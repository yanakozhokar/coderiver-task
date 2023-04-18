import { useState } from "react";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import BuyBtn from "./BuyBtn/BuyBtn";
import OpenMenuBtn from "./OpenMenuBtn/OpenMenuBtn";
import MenuModal from "./MenuModal/MenuModal";
import HeroPlatforms from "./HeroPlatforms/HeroPlatforms";
import HeroTitle from "./HeroTitle/HeroTitle";
import HeroImg from "./HeroImg/HeroImg";
import Line from "./Line/Line";
import Title from "./Title/Title";
import Slider from "./Slider/Slider";
import css from "./App.module.css";

export const App = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Logo />
          <NavMenu />
          <BuyBtn />
          <OpenMenuBtn openModal={toggleModal} />
          {modal && <MenuModal closeModal={toggleModal} />}
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
            <Title>More about us</Title>
            <div className={css.aboutDescription}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                enim sed libero commodo efficitur. Suspendisse et lorem ac neque
                dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus
                ut pretium. Vivamus ornare mauris non ligula egestas, accumsan
                faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam
                non rhoncus felis, porttitor consequat quam. Morbi gravida
                semper mattis. Nunc ultrices justo in pulvinar convallis.
                Curabitur dapibus ut tellus eu condimentum. Morbi vitae
                convallis purus, ac finibus ipsum.
              </p>
              <p>
                Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
                pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu
                eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam
                dapibus, urna mauris sagittis mi, et mattis metus magna vel
                tellus. Phasellus sit amet volutpat ante, ut condimentum lorem.
                Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et.
                Nullam eu quam sem. Donec a nibh molestie, aliquam libero
                maximus, feugiat velit. Curabitur ac accumsan velit. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
