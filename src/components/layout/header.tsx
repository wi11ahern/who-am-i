import { useSelector } from "react-redux";
import useScrollDirection from "../../hooks/useScrollDirection";
import { RootState } from "../../store/store";
import ThemeToggle from "../theme-toggle/theme-toggle";
import MainNav from "../main-nav/main-nav";
import WhoAmILogo from "./whoami-logo";
import DropDownMenu from "../nav-bar/drop-down-menu/drop-down-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../nav-bar/nav-bar";
import NavItem from "../nav-bar/nav-item";

const Header = () => {
  const isMobile = useSelector((state: RootState) => state.ui.isMobile);
  const dropDownOpen = useSelector((state: RootState) => state.ui.dropDownOpen);

  const scrollDirection = useScrollDirection();
  const headerHeight =
    scrollDirection === "down" && !dropDownOpen
      ? "h-0 border-none overflow-hidden"
      : "h-headerHeight border-b";

  const mobileNav = (
    <NavBar>
      <NavItem
        icon={
          <FontAwesomeIcon icon={faCircleChevronDown} className="w-10 h-10" />
        }
      >
        <DropDownMenu />
      </NavItem>
    </NavBar>
  );

  let nav = mobileNav;
  if (!isMobile) nav = <MainNav />;

  return (
    <header
      className={`flex w-full ${headerHeight} top-0 z-10 fixed content-center bg-slate-800 shadow-lg 
                  transition-all ease-in-out duration-300 
                  dark:bg-slate-950 text-white`}
    >
      <WhoAmILogo />
      <ThemeToggle />
      {nav}
    </header>
  );
};

export default Header;
