import useScrollDirection from "../../hooks/useScrollDirection";
import styles from "./header.module.css";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const headerScrollClass = scrollDirection === "down" ? styles["hide"] : "";
  console.log("Updating header");
  console.log(headerScrollClass);

  return (
    <header className={`${styles.header} ${headerScrollClass}`}>
      <WhoAmILogo />
      <MainNav />
    </header>
  );
};

export default Header;
