import styles from "./main-nav.module.css";

const MainNav = () => {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <a href="" className={styles.about}>
            <span>01</span>. About
          </a>
        </li>
        <li>
          <a href="" className={styles.experience}>
            <span>02</span>. Experience
          </a>
        </li>
        <li className={styles.contactli}>
          <a href="" className={styles.contact}>
            <span>03</span>. Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
