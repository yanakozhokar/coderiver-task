import css from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>Clothes</li>
      <li className={css.navItem}>Sneakers</li>
      <li className={css.navItem}>Bags</li>
      <li className={css.navItem}>Accessorize</li>
    </ul>
  );
}
