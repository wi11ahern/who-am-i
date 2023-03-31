import About from "../about/about";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Greeting from "../greeting/greeting";
import styles from "./content.module.css";

interface Props {}

const Content = (props: Props) => {
  return (
    <div className={styles.content}>
      <Greeting />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Content;
