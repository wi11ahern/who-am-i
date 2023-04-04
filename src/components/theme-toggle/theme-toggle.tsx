import { useDispatch, useSelector } from "react-redux";
import { Theme, uiActions } from "../../store/ui";
import { RootState } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from "./theme-toggle.module.css";
import { useRef, useState } from "react";

interface Props {}

const ThemeToggle = () => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(true);
  const dispatcher = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const onToggleHandler = () => {
    setChecked((prevState) => !prevState);
    dispatcher(
      uiActions.setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    );
  };

  return (
    <label htmlFor="theme-toggle" className={styles.switch}>
      <input
        id="theme-toggle"
        type="checkbox"
        onChange={onToggleHandler}
        ref={toggleRef}
        checked={checked}
      />
      <span className={styles.slider}></span>
      <FontAwesomeIcon icon={faMoon} className={styles.moon} />
      <FontAwesomeIcon icon={faLightbulb} className={styles.lightbulb} />
    </label>
  );
};

export default ThemeToggle;
