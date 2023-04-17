import CloseMenuBtn from "../CloseMenuBtn/CloseMenuBtn";
import Logo from "../Logo/Logo";
import css from "./MenuModal.module.css";

export default function MenuModal({ closeModal }) {
  function onMenuItemClick(event) {
    if (event.nodeName === "A") {
      closeModal();
    }
  }

  return (
    <div className={css.modal}>
      <div className={css.wrapper}>
        <Logo />
        <CloseMenuBtn closeModal={closeModal} />
      </div>
      <ul className={css.menuList} onClick={onMenuItemClick}>
        <li className={css.menuItem}>
          <a href="/">Clothes</a>
        </li>
        <li className={css.menuItem}>
          <a href="/">Sneakers</a>
        </li>
        <li className={css.menuItem}>
          <a href="/">Bags</a>
        </li>
        <li className={css.menuItem}>
          <a href="/">Accessorize</a>
        </li>
      </ul>
    </div>
  );
}
