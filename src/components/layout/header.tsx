import useScrollDirection from "../../hooks/useScrollDirection";
import ThemeToggle from "../theme-toggle/theme-toggle";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const headerHeight =
    scrollDirection === "down" ? "h-0 border-none" : "h-headerHeight border-b";

  return (
    <header
      className={`flex w-full ${headerHeight} top-0 z-10 fixed content-center bg-slate-800 shadow-lg 
                  transition-all ease-in-out duration-500 overflow-hidden
                  dark:bg-slate-950 border-gray-300 text-white`}
    >
      <WhoAmILogo />
      <ThemeToggle />
      <MainNav />
    </header>
  );
};

export default Header;
