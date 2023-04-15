import { useSelector } from "react-redux";
import useScrollDirection from "../../hooks/useScrollDirection";
import { RootState } from "../../store/store";
import ThemeToggle from "../theme-toggle/theme-toggle";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  const scrollDirection = useScrollDirection();
  // const headerScrollClass = scrollDirection === "down" ? styles["hide"] : "";
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <header className="w-full h-headerHeight">
      <WhoAmILogo />
      <ThemeToggle />
      <MainNav />
    </header>
  );
};

export default Header;
