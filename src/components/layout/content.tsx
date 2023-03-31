import About from "../about/about";
import Contact from "../contact/contact";
import Greeting from "../greeting/greeting";
import styles from "./content.module.css";

interface Props {}

const Content = (props: Props) => {
  return (
    <div className={styles.content}>
      <Greeting />
      <About />
      <Contact />
    </div>
  );
};

export default Content;
