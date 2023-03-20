import { ReactNode } from "react";
import styles from "./card.module.css";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Card = (props: Props) => {
  return (
    <div id={props.id} className={`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
