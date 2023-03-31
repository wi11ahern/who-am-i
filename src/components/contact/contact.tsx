import Card from "../ui/card";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Contact = (props: Props) => {
  return (
    <Card className={styles.contact} id="contact">
      <h2>03. Contact</h2>
      <p>
        Have a question? Just want to say hi? No problem! My inbox is always
        open.
      </p>
      <a
        className={styles["email-link"]}
        href="mailto:williamahern.com@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} className={styles["email-icon"]} />
      </a>
    </Card>
  );
};

export default Contact;
