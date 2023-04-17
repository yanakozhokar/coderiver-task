import { GrClose } from "react-icons/gr";
import css from "./CloseMenuBtn.module.css";

export default function CloseMenuBtn({ closeModal }) {
  return <GrClose className={css.closeMenuIcon} onClick={closeModal} />;
}
