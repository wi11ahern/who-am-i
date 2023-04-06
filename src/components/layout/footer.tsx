import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./footer.module.css";

interface Props {}

const Footer = (props: Props) => {
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <div className={`${styles["footer-container"]} ${styles[theme]}`}>
      <p className={styles.text}>Designed & Built by William Ahern</p>
    </div>
  );
};

export default Footer;
