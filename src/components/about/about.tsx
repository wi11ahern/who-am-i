import Card from "../ui/card";
import styles from "./about.module.css";
import profilePicture from "../../assets/wa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {}

const About = (props: Props) => {
  return (
    <Card className={styles.about} id="about">
      <div className={styles.content}>
        <h2>01. About</h2>
        <p>
          Hi! My name is Will. I started my journey towards being a software
          engineer back in 2015 when I began community college for web
          development. From there, I ended up transferring to a 3-year
          university program where I received my bachelor's in computer science
          as well as my first full-time software engineering job upon
          graduation.
        </p>
        <p>
          So far, I have been privileged to work for two fortune 500 companies;
          one a major competitor in{" "}
          <a href="https://cigna.com" target="_blank">
            healthcare
          </a>{" "}
          and the other in{" "}
          <a href="https://aws.amazon.com" target="_blank">
            global technology and cloud services
          </a>
          .
        </p>
        <p>
          My diverse experiences within these roles have provided me with
          tremendous opportunities to work with passionate technologists and
          have allowed me to gain valuable knowledge with many programming
          languages and technologies such as, but not limited to:
        </p>
        <div className={styles["tech-container"]}>
          <ul>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Terragrunt</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
      <div className={styles["profile"]}>
        <img src={profilePicture}></img>
        <a href="https://www.linkedin.com/in/william-ahern/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles["linkedin-icon"]}
          />
        </a>
      </div>
    </Card>
  );
};

export default About;
