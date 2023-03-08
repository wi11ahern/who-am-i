import styles from "./main-nav.module.css";

const MainNav = () => {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <a href="">01. About</a>
        </li>
        <li>
          <a href="">02. Experience</a>
        </li>
        <li>
          <a href="">03. Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
