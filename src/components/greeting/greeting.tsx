import Card from "../ui/card";
import styles from "./greeting.module.css";

interface Props {}

const Greeting = (props: Props) => {
  return (
    <Card className={styles.greeting}>
      <p className={styles["greeting-top"]}>Welcome! My name is</p>
      <h1 className={styles.name}>
        <span className={styles.bracket}>&gt;</span>William Ahern.
      </h1>
      <p>
        I am a software engineer with experience across the stack, but perhaps
        more importantly,
      </p>
      <p className={styles["greeting-bot"]}>
        I am a <span>builder</span>, <span>problem solver</span>, and{" "}
        <span>lifelong learner</span>.
      </p>
    </Card>
  );
};

export default Greeting;
