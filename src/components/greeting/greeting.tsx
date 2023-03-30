import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Card from "../ui/card";
import styles from "./greeting.module.css";

interface Props {}

const Greeting = (props: Props) => {
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <Card className={styles.greeting}>
      <p className={styles["greeting-top"]}>Welcome! My name is</p>
      <h1 className={`${styles.name} ${styles[theme]}`}>
        {/* <span className={`${styles.bracket} ${styles[theme]}`}>&gt;</span> */}
        William Ahern
      </h1>
      <p className={`${styles["greeting-bot"]} ${styles[theme]}`}>
        I am a software engineer with experience across the stack, but perhaps
        more importantly,
      </p>
      <p className={`${styles["greeting-bot"]} ${styles[theme]}`}>
        I am a <span>builder</span>, <span>problem solver</span>, and{" "}
        <span>lifelong learner</span>.
      </p>
    </Card>
  );
};

export default Greeting;
