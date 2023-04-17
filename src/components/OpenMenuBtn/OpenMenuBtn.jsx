import { GrMenu } from "react-icons/gr";
import css from "./OpenMenuBtn.module.css";

export default function OpenMenuBtn({ openModal }) {
  return <GrMenu className={css.openMenuIcon} onClick={openModal} />;
}
