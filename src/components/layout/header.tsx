import styles from "./header.module.css";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <WhoAmILogo />
      <MainNav />
    </header>
  );
};

export default Header;
