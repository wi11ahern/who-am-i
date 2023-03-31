import Card from "../ui/card";
import styles from "./experience.module.css";

interface Props {}

const Experience = (props: Props) => {
  return (
    <Card className={styles.experience} id="experience">
      <h2>02. Experience</h2>
      <p>Coming soon.</p>
    </Card>
  );
};

export default Experience;
