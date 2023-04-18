import css from "./BuyBtn.module.css";

export default function BuyBtn() {
  function onBtnMouseOver() {
    const btnRef = document.querySelector(`.${css.buyBtn}`);
    btnRef.className = `${css.buyBtn} ${css.buyBtnAnimation}`;

    setTimeout(() => {
      btnRef.className = `${css.buyBtn}`;
    }, 1000);
  }

  return (
    <button type="button" className={css.buyBtn} onMouseOver={onBtnMouseOver}>
      Buy
    </button>
  );
}
