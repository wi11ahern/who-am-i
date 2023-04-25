import { useSelector } from "react-redux";
import useScrollDirection from "../../hooks/useScrollDirection";
import { RootState } from "../../store/store";
import ThemeToggle from "../theme-toggle/theme-toggle";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  const isMobile = useSelector((state: RootState) => state.ui.isMobile);
  const scrollDirection = useScrollDirection();
  const headerHeight =
    scrollDirection === "down" ? "h-0 border-none" : "h-headerHeight border-b";

  return (
    <header
      className={`flex w-full ${headerHeight} top-0 z-10 fixed content-center bg-slate-800 shadow-lg 
                  transition-all ease-in-out duration-300 overflow-hidden
                  dark:bg-slate-950 text-white`}
    >
      <WhoAmILogo />
      <ThemeToggle />
      {!isMobile && <MainNav />}
    </header>
  );
};

export default Header;
