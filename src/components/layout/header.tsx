import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import ThemeToggle from "../theme-toggle/theme-toggle";
import MainNav from "./main-nav";
import WhoAmILogo from "./whoami-logo";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollDirection = useScrollDirection();
  const headerHeight =
    scrollDirection === "down" ? "h-0 border-none" : "h-headerHeight border-b";

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`flex w-full ${headerHeight} top-0 z-10 fixed content-center bg-slate-800 shadow-lg 
                  transition-all ease-in-out duration-300 overflow-hidden
                  dark:bg-slate-950 text-white`}
    >
      <WhoAmILogo />
      <ThemeToggle />
      {screenWidth > 640 && <MainNav />}
    </header>
  );
};

export default Header;
