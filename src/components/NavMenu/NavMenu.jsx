import css from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <a href="/">Clothes</a>
      </li>
      <li className={css.navItem}>
        <a href="/">Sneakers</a>
      </li>
      <li className={css.navItem}>
        <a href="/">Bags</a>
      </li>
      <li className={css.navItem}>
        <a href="/">Accessorize</a>
      </li>
    </ul>
  );
}
